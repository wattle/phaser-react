import { FC } from "react";
import Modal from 'react-modal';
import { atom, useRecoilState } from "recoil";

export const infoModalState = atom({
    key: 'infoModalState', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export const InfoModal: FC = () => {

    const [infoModal, setInfoModal] = useRecoilState(infoModalState);

    // load mdx content
    const closeModal =() => {
        setInfoModal(false);
    }

return (
<Modal
        isOpen={infoModal}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="Example Modal"
>   
    <h2>Hello</h2>
    <button onClick={closeModal}>close</button>
    <div>I am a modal</div>
    
</Modal>
);
}