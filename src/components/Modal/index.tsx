import { useCallback } from "react";
import "./Modal.scss";
import { IoMdClose, IoMdCloseCircle } from "react-icons/io";

type Props = {
  children: React.ReactNode;
  show: boolean;
  onClose: () => void;
};

const Modal = ({ children, show, onClose }: Props) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-container" onClick={onClose}>
      {children}
      <div className="close-modal-btn" onClick={onClose}>
        <IoMdCloseCircle />
      </div>
    </div>
  );
};

export default Modal;
