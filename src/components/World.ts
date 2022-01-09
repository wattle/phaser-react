import Phaser from "phaser";
import MainScene from "./MainScene";


const viewportWidth = window.innerWidth * window.devicePixelRatio;
const viewportHeight = (window.innerHeight * window.devicePixelRatio) - 150;

// const docElement = document.documentElement;
// const width =
//     docElement.wi > config.gameWidth ? config.gameWidth : docElement.clientWidth;
// const height =
//     docElement.clientHeight > config.gameHeight ? config.gameHeight : docElement.clientHeight;


export const config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.RESIZE,
        parent: 'hero',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: viewportWidth,
        height: viewportHeight
    },
    //... other settings
    scene: MainScene
};

class World extends Phaser.Game {
    constructor() {
        super(config);
    }
}

export default World;