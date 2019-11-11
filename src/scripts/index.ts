import {Oscillator} from "./audio/Oscillator";
import {WaveType} from "./audio/WaveType";
import {KeyboardManager} from "./ui/KeyboardManager";
import {WaveChartManager} from "./ui/WaveChartManager";

const audioContext = new AudioContext();
const oscillator = new Oscillator(WaveType.Triangle, 0.5, audioContext.sampleRate);
let source: AudioBufferSourceNode;
let waveChartManager: WaveChartManager;

function play(event: InputEvent): void {
    const tone = (<HTMLInputElement>event.target).dataset["noteFrequency"];
    const samples = oscillator.generateAudioBuffer(+tone, 3);
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
}

document.addEventListener("DOMContentLoaded", initialize);

