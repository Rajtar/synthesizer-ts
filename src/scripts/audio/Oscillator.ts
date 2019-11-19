import {WaveType} from "./WaveType";
import {NoteTable} from "./NoteTable";

export class Oscillator {
    waveType: WaveType;
    octave: number;
    private readonly volume: number;
    private readonly samplingRate: number;

    constructor(waveType: WaveType, octave: number, volume: number, samplingRate: number) {
        this.octave = octave;
        this.waveType = waveType;
        this.volume = volume;
        this.samplingRate = samplingRate;
    }

    generateAudioBuffer(key: string, seconds: number): Float32Array {
        const tone = this.getToneForKey(key);
        const samples = new Float32Array(this.samplingRate * seconds);
        let envelopMultiplier = 0;
        for (let i = 0; i < samples.length; i++) {
            if (i < 0.5 * samples.length) {
                envelopMultiplier += 0.00005;
            } else {
                envelopMultiplier -= 0.00005;
            }
            switch (this.waveType) {
                case WaveType.Sine:
                    samples[i] = this.sineWaveAt(i, +tone) * this.volume * envelopMultiplier;
                    break;
                case WaveType.Square:
                    samples[i] = this.squareWaveAt(i, +tone) * this.volume * envelopMultiplier;
                    break;
                case WaveType.Triangle:
                    samples[i] = this.triangleWaveAt(i, +tone) * this.volume * envelopMultiplier;
                    break;
                case WaveType.Sawtooth:
                    samples[i] = this.sawToothWaveAt(i, +tone) * this.volume * envelopMultiplier;
                    break;
            }
        }
        return samples;
    }

    private getToneForKey(key: string): number {
        return +NoteTable.notes.get(key) * Math.pow(2, this.octave);
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
        const cot = 1 / Math.tan(Math.PI * tone * sampleNumber * (1 / this.samplingRate));
        return -Math.atan(cot);
    }
}