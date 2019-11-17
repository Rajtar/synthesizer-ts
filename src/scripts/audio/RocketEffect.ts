import {RedNoiseGenerator} from "./RedNoiseGenerator";

export class RocketEffect {
    private readonly samplingRate: number;
    private readonly noiseGenerator: RedNoiseGenerator;

    constructor(samplingRate: number) {
        this.samplingRate = samplingRate;
        this.noiseGenerator = new RedNoiseGenerator(samplingRate);
    }

    play(seconds: number): Float32Array {
        const modulatingSignal = this.noiseGenerator.generateNoise(50, seconds);
        return this.noiseGenerator.generateNoise(modulatingSignal, seconds);
    }
}