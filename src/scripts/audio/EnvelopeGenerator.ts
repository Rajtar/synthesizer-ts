export enum EnvelopeStage {
    Off,
    Attack,
    Decay,
    Sustain,
    Release,
    StagesAmount
}

export class EnvelopeGenerator {
    readonly MinimumLevel: number;
    private readonly samplingRate: number;
    private currentStage: EnvelopeStage;
    private stageValue: Array<number>;
    private currentLevel: number;
    private multiplier: number;
    private currentSampleIndex: number;
    private nextStageSampleIndex: number;

    constructor(samplingRate: number) {
        this.samplingRate = samplingRate;
        this.currentStage = EnvelopeStage.Off;
        this.MinimumLevel = 0.0001;
        this.currentLevel = this.MinimumLevel;
        this.multiplier = 1.0;
        this.currentSampleIndex = 0;
        this.nextStageSampleIndex = 0;
        this.stageValue = [0.0, 0.01, 0.5, 0.1, 1.0];
    }

    enterStage(newStage: EnvelopeStage): void {
        this.currentStage = newStage;
        this.currentSampleIndex = 0;
        if (this.currentStage == EnvelopeStage.Off || this.currentStage == EnvelopeStage.Sustain) {
            this.nextStageSampleIndex = 0;
        } else {
            this.nextStageSampleIndex = this.stageValue[this.currentStage] * this.samplingRate;
        }

        switch (newStage) {
            case EnvelopeStage.Off:
                this.currentLevel = 0.0;
                this.multiplier = 1.0;
                break;
            case EnvelopeStage.Attack:
                this.currentLevel = this.MinimumLevel;
                this.calculateMultiplier(this.currentLevel, 1.0, this.nextStageSampleIndex);
                break;
            case EnvelopeStage.Decay:
                this.currentLevel = 1.0;
                this.calculateMultiplier(this.currentLevel, Math.max(this.stageValue[EnvelopeStage.Sustain],
                    this.MinimumLevel), this.nextStageSampleIndex);
                break;
            case EnvelopeStage.Sustain:
                this.currentLevel = this.stageValue[EnvelopeStage.Sustain];
                this.multiplier = 1.0;
                break;
            case EnvelopeStage.Release:
                this.calculateMultiplier(this.currentLevel, this.MinimumLevel, this.nextStageSampleIndex);
                break;
            default:
                break;
        }
    }

    nextSample(): number {
        if (this.currentStage != EnvelopeStage.Off &&
            this.currentStage != EnvelopeStage.Sustain) {
            if (this.currentSampleIndex == this.nextStageSampleIndex) {
                const newStage = this.currentStage + 1 % EnvelopeStage.StagesAmount;
                this.enterStage(newStage);
            }
            this.currentLevel *= this.multiplier;
            this.currentSampleIndex++;
        }
        return this.currentLevel;
    }

    private calculateMultiplier(startLevel: number, endLevel: number, lengthInSamples: number): void {
        this.multiplier = 1.0 + (Math.log(endLevel) - Math.log(startLevel)) / (lengthInSamples);
    }
}