


import { textChangeRangeIsUnchanged } from 'typescript';
import JsonPack from '../assets/asset-pack.json';
import { worldHeight, worldWidth } from './World';

// TODO move to recoilState
let player: Phaser.GameObjects.Sprite;
let cursors: Phaser.Types.Input.Keyboard.CursorKeys;

class MainScene extends Phaser.Scene {

    constructor() {
        super({
            key: 'MainScene'
        });
    }

    preload() {
        this.cameras.main.setBackgroundColor(0x98d687);
        this.load.addPack(JsonPack, 'preload');
    }

    create() {
        const position = window.innerWidth / 2;
        const logo = this.add.image(position, -200, "logo");
        logo.width = 200;
        logo.height = 200;
        
        //this.physics.systems.start(Phaser.Physics.Arcade);

        console.log("Bouncing logo?" );
        console.log(logo);
        this.tweens.add({
            targets: logo,

            y: 350,
            duration: 2000,
            ease: "Power2",
            yoyo: false,
            loop: 1
        });
        
        player = this.add.sprite(position, (window.innerHeight / 2), 'player');
        //player.setVisible(true);
        player.setAlpha(0,0);
        
        // game.physics.p2.enable(player);

        cursors = this.input.keyboard.createCursorKeys();
        this.cameras.main.setBounds(0, 0, worldWidth, worldHeight) ;

        //this.physics.world.setBounds(0, 0, worldWidth, worldHeight, true, true, true, true);
        this.cameras.main.startFollow(player, true, 0.5, 0.5);
        player.setActive(true);
    
    }

    checkWorldLimits = (x : number, y: number) : boolean => {

        console.log(`trying to move to ${x} x ${y} `);
        this.cameras.main.getBounds().contains(x, y);

        return true;
        // return this.physics.world.bounds.contains(x, y);
    };

    update() {
        if(!this.scene.isActive() ) {
            this.scene.start('MainScene');
        }


        if (cursors.up.isDown) {
            const playerY = player.y + 50;
            
            if(this.checkWorldLimits(player.x, playerY)) {
                // .tween.updateTo("x", this.x);
                player.setPosition(player.x, playerY);     
            }
            // player.body.position.y += 300;
        }
        else if (cursors.down.isDown) {
            const playerY = player.y - 50;

            if (this.checkWorldLimits(player.x, playerY)) {
                player.setPosition(player.x, playerY);
            }
            // player.body.position.y -= 300;
        }

        if (cursors.left.isDown) {
            const playerX = player.x - 50;

            if (this.checkWorldLimits(playerX, player.y)) {
                player.setPosition(playerX, player.y);
            }

            // player.body.velocity.x = -300;
        }
        else if (cursors.right.isDown) {
            const playerX = player.x + 50;

            if (this.checkWorldLimits(playerX, player.y)) {
                player.setPosition(playerX, player.y);
            }
          
        }

    }

    render() {
        // this.game.debug.cameraInfo(game.camera, 32, 32);
        // this.game.debug.spriteCoords(player, 32, 500);

    }
}

export default MainScene;
