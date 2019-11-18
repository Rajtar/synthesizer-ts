import {RedNoiseGenerator} from "./RedNoiseGenerator";
import {EnvelopeGenerator} from "./EnvelopeGenerator";
import {EnvelopeStage} from "./EnvelopeStage";
import {LowPassFilter} from "./LowPassFilter";

export class RocketEffect {
    private readonly samplingRate: number;
    private readonly noiseGenerator: RedNoiseGenerator;
    private readonly envelopeGenerator: EnvelopeGenerator;
    private readonly filter: LowPassFilter;

    constructor(samplingRate: number) {
        this.samplingRate = samplingRate;
        this.noiseGenerator = new RedNoiseGenerator(samplingRate);
        this.envelopeGenerator = new EnvelopeGenerator(samplingRate);
        this.filter = new LowPassFilter(samplingRate);
    }

    play(seconds: number): Float32Array {
        const modulatingSignal = this.noiseGenerator.generateNoise(50, seconds);
        const samples = this.noiseGenerator.generateNoise(modulatingSignal, seconds);
        this.envelopeGenerator.enterStage(EnvelopeStage.Attack);
        for (const i in samples) {
            samples[i] *= this.envelopeGenerator.nextSample();
        }
        return this.filter.filterWithIteration(samples, 1, 1.5, 0.0015);
    }
}