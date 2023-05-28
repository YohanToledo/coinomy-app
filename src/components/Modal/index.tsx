import './Modal.scss';

type Props = {
    children: React.ReactNode;
    show: boolean;
    onClose: () => void;
};

const Modal = ({ children, show, onClose }: Props) => {
    return (
        <>
            {
                show ?
                    <div className="modal-container" onClick={onClose}>
                        {children}
                    </div >
                    :
                    <></>
            }
        </>

    );
}

export default Modal;