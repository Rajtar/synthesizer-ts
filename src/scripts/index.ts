import {NoteTable} from "./NoteTable";

const audioContext = new AudioContext();
let source: AudioBufferSourceNode;

function sineWaveAt(sampleNumber: number, tone: number): number {
    const sampleFrequency = audioContext.sampleRate / tone;
    return Math.sin(sampleNumber / (sampleFrequency / (Math.PI*2)))
}

function play(event: InputEvent): void {
    const volume = 0.5;
    const seconds = 3;
    const tone = (<HTMLInputElement>event.target).dataset["noteFrequency"];
    const samples = new Float32Array(audioContext.sampleRate * seconds);

    for (let i = 0; i < samples.length; i++) {
        samples[i] = sineWaveAt(i, +tone) * volume
    }

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

