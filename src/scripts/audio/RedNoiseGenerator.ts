export class RedNoiseGenerator {
    private readonly samplingRate: number;

    constructor(sampilngRate: number) {
        this.samplingRate = sampilngRate;
    }

    generateNoise(spanOfRandomSamples: number, seconds: number): Float32Array
    generateNoise(modulatingSignal: Float32Array, seconds: number): Float32Array
    generateNoise(spanFrequency: any, seconds: number): Float32Array {
        const samples = new Float32Array(this.samplingRate * seconds);
        const spans = [];

        if (spanFrequency instanceof Float32Array) {
            for (let i = 0; i < samples.length; i++) {
                spans[i] = Math.abs(Math.floor(spanFrequency[i] * 1000));
            }
        } else {
            for (let i = 0; i < samples.length; i++) {
                spans[i] = spanFrequency;
            }
        }

        const anchorSampleIndices = this.setupAnchors(samples, spans);
        this.interpolateBeetweenAnchors(samples, spans, anchorSampleIndices);
        return samples;
    }

    private setupAnchors(samples: Float32Array, spans: number[]): number[] {
        const anchorSampleIndices = [];
        for (let i = 0; i < samples.length; i++) {
            if(i % spans[i] === 0) {
                samples[i] = Math.random() * 2 - 1;
                anchorSampleIndices.push(i);
            }
        }
        return anchorSampleIndices;
    }

    private interpolateBeetweenAnchors(samples: Float32Array,  spans: number[], anchorSampleIndices: number[]): void {
        let currentAnchor = 0;
        for (let i = 0; i < samples.length; i++) {
            if(i % spans[i] === 0) {
                currentAnchor++;
            } else {
                const x0 = anchorSampleIndices[currentAnchor - 1];
                const x1 = anchorSampleIndices[currentAnchor];
                const y0 = samples[x0];
                const y1 = samples[x1];
                samples[i] = y0 + ((y1 - y0) / (x1 - x0)) * (i - x0);
            }
        }
    }
}