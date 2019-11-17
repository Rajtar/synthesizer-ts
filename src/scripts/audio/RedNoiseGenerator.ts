import {WaveType} from "./WaveType";

export class RedNoiseGenerator {
    private readonly samplingRate: number;

    constructor(sampilngRate: number) {
        this.samplingRate = sampilngRate;
    }

    generateNoise(spanOfRandomSamples: number, seconds: number): Float32Array {
        const samples = new Float32Array(this.samplingRate * seconds);
        const anchorSampleIndices = [];

        for (let i = 0; i < samples.length; i++) {
            if(i % spanOfRandomSamples === 0) {
                samples[i] = Math.random() * 2 - 1;
                anchorSampleIndices.push(i);
            }
        }

        let currentAnchor = 0;
        for (let i = 0; i < samples.length; i++) {
            if(i % spanOfRandomSamples === 0) {
                currentAnchor++;
            } else {
                const x0 = anchorSampleIndices[currentAnchor - 1];
                const x1 = anchorSampleIndices[currentAnchor];
                const y0 = samples[x0];
                const y1 = samples[x1];
                samples[i] = y0 + ((y1 - y0) / (x1 - x0)) * (i - x0);
            }
        }

        return samples;
    }
}