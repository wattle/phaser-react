
import { infoModalState } from "../ui/InfoModal";
import { getRecoil, setRecoil } from "recoil-nexus";
import { Textures } from "phaser";

class CrabShack extends Phaser.GameObjects.Sprite {

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'crabshack');

        this.width = 100;
        this.height = 100;
        this.setInteractive({ useHandCursor: true });
        this.on('pointerdown', () => this.setModal());
        
    }

    drawBox() {
      // TODO some setup
    }

    setModal() {
        console.log("clicked on ");
        const modalState = getRecoil(infoModalState);
        if(modalState) return;
        setRecoil(infoModalState, true);
        
        // https://stackoverflow.com/questions/66107118/how-to-manipulate-a-global-state-outside-of-a-react-component-using-recoil
        // const [modalState, setModalState ] = useRecoilState<boolean>(infoModalState);
        //if(!modalState) setModalState(true);
        // https://codesandbox.io/s/stackoverflow-62860300-set-recoil-atom-in-class-component-473v0?file=/src/App.js
        
    }
}

export default CrabShack;