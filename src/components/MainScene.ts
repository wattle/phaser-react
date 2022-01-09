


class MainScene extends Phaser.Scene {

    constructor() {
        super({
            key: 'MainScene'
        });
    }

    preload() {
        this.cameras.main.setBackgroundColor(0x98d687);
        this.load.pack('preload', './assets/pack.json', 'preload');
    }

    create() {
        const position = window.innerWidth / 2;
        const logo = this.add.image(position, 0, "logo");
        console.log("Bouncing logo?" );
        console.log(logo);
        this.tweens.add({
            targets: logo,
            y: 350,
            x: window.innerWidth / 2,
            duration: 2000,
            ease: "Power2",
            yoyo: false,
            loop: 1
        });
    }

    update() {
        this.scene.start('MainScene');
    }
}

export default MainScene;
