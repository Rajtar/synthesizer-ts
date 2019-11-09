import {WaveType} from "./WaveType";

export class Oscillator {
    private readonly waveType: WaveType;
    private readonly volume: number;
    private readonly samplingRate: number;


    constructor(waveType: WaveType, volume: number, samplingRate: number) {
        this.waveType = waveType;
        this.volume = volume;
        this.samplingRate = samplingRate;
    }

    generateAudioBuffer(tone: number, seconds: number): Float32Array {
        const samples = new Float32Array(this.samplingRate * seconds);
        for (let i = 0; i < samples.length; i++) {
            samples[i] = this.sineWaveAt(i, +tone) * this.volume;
        }
        return samples;
    }

    private sineWaveAt(sampleNumber: number, tone: number): number {
        const sampleFrequency = this.samplingRate / tone;
        return Math.sin(sampleNumber / (sampleFrequency / (Math.PI*2)))
    }
}