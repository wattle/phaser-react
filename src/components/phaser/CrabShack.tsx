import { useRecoilState } from "recoil";
import { infoModalState } from "../ui/InfoModal";

class CrabShack extends Phaser.GameObjects.Sprite {

    constructor(scene: Phaser.Scene, width: number, height: number) {
        super(scene, width, height, 'crabshack');

        
        this.setInteractive({ useHandCursor: true });
        this.on('pointerdown', () => this.setModal());
    }

    drawBox() {
      // TODO some setup
    }

    setModal() {
        console.log("clicked on ");
        // https://stackoverflow.com/questions/66107118/how-to-manipulate-a-global-state-outside-of-a-react-component-using-recoil
        // const [modalState, setModalState ] = useRecoilState<boolean>(infoModalState);
        //if(!modalState) setModalState(true);
        
    }
}

export default CrabShack;