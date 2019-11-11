import {Oscillator} from "./audio/Oscillator";
import {WaveType} from "./audio/WaveType";
import {KeyboardManager} from "./ui/KeyboardManager";
import {WaveChartManager} from "./ui/WaveChartManager";
import {LowPassFilter} from "./audio/LowPassFilter";

const audioContext = new AudioContext();
const oscillator = new Oscillator(WaveType.Sine, 0.3, audioContext.sampleRate);
const lowPassFilter = new LowPassFilter(audioContext.sampleRate);
let filterEnabled = true;
let filterCutoff = 500;
let filterResonance = 1;
let source: AudioBufferSourceNode;
let waveChartManager: WaveChartManager;

function play(event: InputEvent): void {
    const tone = (<HTMLInputElement>event.target).dataset["noteFrequency"];
    let samples = oscillator.generateAudioBuffer(+tone, 3);
    if (filterEnabled) {
        samples = lowPassFilter.filter(samples, filterCutoff, filterResonance);
    }
    const audioBuffer = audioContext.createBuffer(1, samples.length, audioContext.sampleRate);
    audioBuffer.copyToChannel(samples, 0);
    source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination);
    source.start();
    waveChartManager.updateChart(samples);
}

function stopPlaying(): void {
    source.stop();
}

function initialize(): void {
    waveChartManager = new WaveChartManager((<HTMLCanvasElement>document.getElementById('waveChart')));
    const keyboardDiv = KeyboardManager.createKeyboard();
    const keys = keyboardDiv.getElementsByTagName("*");
    for (const key of keys) {
        key.addEventListener("mousedown", play, false);
        key.addEventListener("mouseup", stopPlaying, false);
        key.addEventListener("mouseleave", stopPlaying, false);
    }
    document.getElementById("sineRadio").addEventListener("change", function () {
        oscillator.waveType = WaveType.Sine;
    });
    document.getElementById("squareRadio").addEventListener("change", function () {
        oscillator.waveType = WaveType.Square;
    });
    document.getElementById("triangleRadio").addEventListener("change", function () {
        oscillator.waveType = WaveType.Triangle;
    });
    document.getElementById("sawtoothRadio").addEventListener("change", function () {
        oscillator.waveType = WaveType.Sawtooth;
    });
    document.getElementById("filterEnabledCheckbox").addEventListener("click", function () {
        filterEnabled = !filterEnabled;
    });
    document.getElementById("cutoffSlider").oninput = function () {
        // @ts-ignore
        filterCutoff = this.value;
        // @ts-ignore
        (<HTMLInputElement>document.getElementById("cutoffSliderLabel")).innerHTML = this.value + " Hz";
    }
    document.getElementById("resonanceSlider").oninput = function () {
        // @ts-ignore
        filterResonance = this.value;
        // @ts-ignore
        (<HTMLInputElement>document.getElementById("resonanceSliderLabel")).innerHTML = this.value;
    }
}

document.addEventListener("DOMContentLoaded", initialize);

