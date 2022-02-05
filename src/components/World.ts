import Phaser, { GameObjects } from "phaser";
import MainScene from "./MainScene";


export const viewportWidth = window.innerWidth * window.devicePixelRatio;
export const viewportHeight = (window.innerHeight * window.devicePixelRatio) - 150;
export const worldWidth = Math.max(window.innerWidth, 2000);
export const worldHeight = Math.max(window.innerHeight, 1500);


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
    // default: 'impact', // <----- Added
    // impact: {
    //     gravity: 0,
    //     setBounds: {
    //         width: worldWidth,
    //         height: worldHeight,
            
    //     }
    // },
    //... other settings
    scene: MainScene
};



class World extends Phaser.Game {
    constructor() {
        super(config);
    }
    
}

export default World;