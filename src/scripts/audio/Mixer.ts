export class Mixer {

    static mixTracks(masterVolume: number, ...tracks: Float32Array[]): Float32Array {
        const samples = new Float32Array(tracks[0].length);
        for (let i = 0; i < samples.length; i++) {
            let samplesSum = 0;
            for (const track of tracks) {
                samplesSum+= track[i];
            }
            samples[i] = samplesSum * masterVolume;
        }
        return samples;
    }
}