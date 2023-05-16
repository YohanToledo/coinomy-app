import "./NotificationPopUp.scss";

import { FaWindowClose } from "react-icons/fa";

type Props = {
  show: boolean,
  onClose: () => void,
  msgAndType: {
    type: string,
    msg: string
  }
}

const NotificationPopUp = ({ show, onClose, msgAndType }: Props) => {
  if (!show) {
    return null;
  }

  setTimeout(function () {
    onClose();
  }, 5500);

  return (
    <div className={`custom-modal ${show ? "show" : ""}`} onClick={onClose}>
      <div
        className={`custom-modal-content ${msgAndType.type}`}
        onClick={(e) => e.stopPropagation}
      >
        <div className="custom-modal-container">
          <div className="custom-modal-body">
            <div className="custom-modal-close" onClick={onClose}>
              <FaWindowClose />
            </div>
            {msgAndType.msg}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPopUp;
