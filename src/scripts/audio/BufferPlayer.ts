import {WaveChartManager} from "../ui/WaveChartManager";

export class BufferPlayer {
    private readonly audioContext: AudioContext;
    private source: AudioBufferSourceNode;
    private readonly waveChartManager: WaveChartManager;

    constructor(waveChartManager: WaveChartManager) {
        this.waveChartManager = waveChartManager;
        this.audioContext = new AudioContext();
    }

    playBuffer(samples: Float32Array): void {
        const audioBuffer = this.audioContext.createBuffer(1, samples.length, this.audioContext.sampleRate);
        audioBuffer.copyToChannel(samples, 0);
        this.source = this.audioContext.createBufferSource();
        this.source.buffer = audioBuffer;
        this.source.connect(this.audioContext.destination);
        this.source.start();
        this.waveChartManager.updateChart(samples);
    }

    stopPlaying(): void {
        // this.source.stop();
    }

    getSamplingRate(): number {
        return this.audioContext.sampleRate;
    }
}