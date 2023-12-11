import TitleScreenMusic from '@/assets/audios/TitleScreenMusic.mp3'
import GameFieldMusic from '@/assets/audios/GameFieldMusic.mp3'

export const audioService = {
    audio1: new Audio(TitleScreenMusic),
    audio2: new Audio(GameFieldMusic),

    playAudio1() {
        this.audio1.loop = true;
        this.audio1.play().catch(error => {
            console.error('Failed to play audio1:', error);
        });
    },

    playAudio2() {
        this.audio2.loop = true;
        this.audio2.play();
    },

    stopAudio1() {
        this.audio1.pause();
        this.audio1.currentTime = 0;
    },

    stopAudio2() {
        this.audio2.pause();
        this.audio2.currentTime = 0;
    },
};

audioService.playAudio1();
