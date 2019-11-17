import {Oscillator} from "./audio/Oscillator";
import {EnvelopeGenerator} from "./audio/EnvelopeGenerator";
import {WaveType} from "./audio/WaveType";
import {KeyboardManager} from "./ui/KeyboardManager";
import {WaveChartManager} from "./ui/WaveChartManager";
import {LowPassFilter} from "./audio/LowPassFilter";
import {EnvelopeStage} from "./audio/EnvelopeStage";

import {RocketEffect} from "./audio/RocketEffect";
import {BufferPlayer} from "./audio/BufferPlayer";

let bufferPlayer: BufferPlayer;
let oscillator: Oscillator;
let envelopeGenerator: EnvelopeGenerator;
let lowPassFilter: LowPassFilter;
let rocketEffect: RocketEffect;
let filterEnabled = false;
let filterCutoff = 500;
let filterResonance = 1;

function createAudioScene(): void {
    const waveChartManager = new WaveChartManager((<HTMLCanvasElement>document.getElementById('waveChart')));
    bufferPlayer = new BufferPlayer(waveChartManager);
    oscillator = new Oscillator(WaveType.Sine, 0.3, bufferPlayer.getSamplingRate());
    lowPassFilter = new LowPassFilter(bufferPlayer.getSamplingRate());
    rocketEffect = new RocketEffect(bufferPlayer.getSamplingRate());
    envelopeGenerator = new EnvelopeGenerator(bufferPlayer.getSamplingRate());
}

function playTone(event: InputEvent): void {
    const tone = (<HTMLInputElement>event.target).dataset["noteFrequency"];
    let samples = oscillator.generateAudioBuffer(+tone, 3);
    // if (envelopeGenerator.CurrentStage == EnvelopeStage.Off) {
    //     envelopeGenerator.enterStage(EnvelopeStage.Attack);
    // } else if (envelopeGenerator.CurrentStage == EnvelopeStage.Sustain) {
    //     envelopeGenerator.enterStage(EnvelopeStage.Release);
    // }

    // this.envelopeGenerator.enterStage(EnvelopeStage.Attack);
    // for (const i in samples) {
    //     samples[i] *= envelopeGenerator.nextSample();
    // }

    if (filterEnabled) {
        samples = lowPassFilter.filter(samples, filterCutoff, filterResonance);
    }
    bufferPlayer.playBuffer(samples);
}

function stopPlayingTone(): void {
    // if (envelopeGenerator.CurrentStage != EnvelopeStage.Off && envelopeGenerator.CurrentStage != EnvelopeStage.Release) {
    //     envelopeGenerator.enterStage(EnvelopeStage.Release);
    // }
    bufferPlayer.stopPlaying();
}

function playEffect(): void {
    const samples = rocketEffect.play(5);
    bufferPlayer.playBuffer(samples);
}

function initialize(): void {
    createAudioScene();
    const keyboardDiv = KeyboardManager.createKeyboard();
    const keys = keyboardDiv.getElementsByTagName("*");
    for (const key of keys) {
        key.addEventListener("mousedown", playTone, false);
        key.addEventListener("mouseup", stopPlayingTone, false);
        key.addEventListener("mouseleave", stopPlayingTone, false);
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
    document.getElementById("rocketImg").addEventListener("click", function () {
        playEffect();
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

