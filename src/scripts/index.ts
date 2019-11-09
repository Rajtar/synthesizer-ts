import {NoteTable} from "./audio/NoteTable";
import {Oscillator} from "./audio/Oscillator";
import {WaveType} from "./audio/WaveType";

const audioContext = new AudioContext();
const sineOscillator = new Oscillator(WaveType.Sine, 0.5, audioContext.sampleRate);
let source: AudioBufferSourceNode;


function play(event: InputEvent): void {
    const tone = (<HTMLInputElement>event.target).dataset["noteFrequency"];
    const samples = sineOscillator.generateAudioBuffer(+tone, 3);
    const audioBuffer = audioContext.createBuffer(1, samples.length, audioContext.sampleRate);
    audioBuffer.copyToChannel(samples, 0);
    source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination);
    source.start();
}

function stopPlaying(): void {
    source.stop();
}

function createKey(noteFrequency: number): HTMLElement {
    console.log("Create key for: " + noteFrequency);
    const keyElement = document.createElement("div");
    keyElement.className = "key";
    keyElement.dataset["noteFrequency"] = String(noteFrequency);
    keyElement.addEventListener("mousedown", play, false);
    keyElement.addEventListener("mouseup", stopPlaying, false);
    // keyElement.addEventListener("mouseover", play, false);
    keyElement.addEventListener("mouseleave", stopPlaying, false);
    return keyElement;
}

function createKeyboard(): void {
    const keyboardDiv = document.getElementById("keyboard");
    for (const noteFrequency of NoteTable.frequencies) {
        keyboardDiv.appendChild(createKey(noteFrequency));
    }
}

function initialize(): void {
    createKeyboard();
}

document.addEventListener("DOMContentLoaded", initialize);

