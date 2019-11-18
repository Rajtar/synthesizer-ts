import {RedNoiseGenerator} from "./RedNoiseGenerator";
import {EnvelopeGenerator} from "./EnvelopeGenerator";
import {EnvelopeStage} from "./EnvelopeStage";

export class RocketEffect {
    private readonly samplingRate: number;
    private readonly noiseGenerator: RedNoiseGenerator;
    private readonly envelopeGenerator: EnvelopeGenerator;

    constructor(samplingRate: number, envelopeGenerator: EnvelopeGenerator) {
        this.samplingRate = samplingRate;
        this.noiseGenerator = new RedNoiseGenerator(samplingRate);
        this.envelopeGenerator = envelopeGenerator;
    }

    play(seconds: number): Float32Array {
        const modulatingSignal = this.noiseGenerator.generateNoise(50, seconds);
        const samples = this.noiseGenerator.generateNoise(modulatingSignal, seconds);
        this.envelopeGenerator.enterStage(EnvelopeStage.Attack);
        for (const i in samples) {
            samples[i] *= this.envelopeGenerator.nextSample();
        }

        return samples;
    }
}