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
            switch (this.waveType) {
                case WaveType.Sine:
                    samples[i] = this.sineWaveAt(i, +tone) * this.volume;
                    break;
                case WaveType.Square:
                    samples[i] = this.squareWaveAt(i, +tone) * this.volume;
                    break;
                case WaveType.Triangle:
                    samples[i] = this.triangleWaveAt(i, +tone) * this.volume;
                    break;
                case WaveType.Sawtooth:
                    samples[i] = this.sawToothWaveAt(i, +tone) * this.volume;
                    break;
            }
        }
        return samples;
    }

    private sineWaveAt(sampleNumber: number, tone: number): number {
        return Math.sin(2 * Math.PI * tone * sampleNumber * (1 / this.samplingRate));
    }

    private squareWaveAt(sampleNumber: number, tone: number): number {
        return Math.sign(this.sineWaveAt(sampleNumber, tone));
    }

    private triangleWaveAt(sampleNumber: number, tone: number): number {
        return Math.asin(this.sineWaveAt(sampleNumber, tone));
    }

    private sawToothWaveAt(sampleNumber: number, tone: number): number {
        return Math.random() * 2 - 1;
    }
}