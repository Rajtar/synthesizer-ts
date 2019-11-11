import Chart = require("chart.js");

export class WaveChartManager {
    private readonly waveChart: Chart;

    constructor(canvas: HTMLCanvasElement) {
        const ctx = canvas.getContext('2d');
        this.waveChart = this.createChart(ctx);
    }

    updateChart(data: Float32Array): void {
        this.waveChart.data.datasets[0].data = Array.from(data.slice(0, 999));
        this.waveChart.update();
    }

    private createChart(ctx: CanvasRenderingContext2D): Chart {
        return new Chart(ctx, {
            type: 'line',
            data: {
                datasets: [{
                    label: 'Wave',
                    data: [],
                }],
                labels: Array.from(Array(1000).keys()).map(String)
            },
            options: {
                animation: {
                    duration: 0
                },
                hover: {
                    animationDuration: 0
                },
                responsiveAnimationDuration: 0,
            }
        });
    }
}