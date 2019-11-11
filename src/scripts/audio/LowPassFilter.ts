export class LowPassFilter {
    private readonly samplingRate: number;

    constructor(samplingRate: number) {
        this.samplingRate = samplingRate;
    }

    filter(input: Float32Array, cutoff: number, resonance: number): Float32Array {
        const output = new Float32Array(input.length);
        const s = Math.sin(2 * Math.PI * cutoff / this.samplingRate);
        const c = Math.cos(2 * Math.PI * cutoff / this.samplingRate);
        const alpha = s / (2 * resonance);
        const r = 1 / (1 + alpha);

        const a0 = 0.5 * (1 - c) * r;
        const a1 = (1 - c) * r;
        const a2 = a0;
        const b1 = -2 * c * r;
        const b2 = (1 - alpha) * r;

        for (let i = 0; i < output.length; i++) {
            if (i === 0) {
                output[i] = a0 * input[i];
            } else if (i === 1) {
                output[i] = (a0 * input[i]) + (a1 * input[i-1]) - (b1 * output[i-1]);
            } else {
                output[i] = (a0 * input[i]) + (a1 *  input[i-1]) + (a2 * input[i-2]) - (b1 *  output[i-1]) - (b2 * output[i-2]);
            }
        }
        return output;
    }
}