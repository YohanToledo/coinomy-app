import { TfiBackLeft } from "react-icons/tfi";
import { ImWarning } from "react-icons/im";
import { MdCancel } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";
import { MdLockReset, MdDelete } from "react-icons/md";

import { useState } from "react";
import "../Privacy/privacy.scss";
import "../Preferences/Preferences.scss";
import Modal from "../Modal";

const Privacy = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="options-container">
        <h1 id="titulo" className="titulo-privacy">
          Privacidade
        </h1>

        <div
          className="option-card  delete-account-privacy"
          onClick={() => setShow(true)}
        >
          <MdDelete className="icone-reset-account" />
          <h3>
            Redefinir Conta
            <h6 className="reset-account-warn">
              Isso apagará todo o histórico de transações da conta.
            </h6>
          </h3>
        </div>

        <div className="option-card  reset-password">
          <MdLockReset className="icone-reset-password" />
          Alteração de Senha
        </div>

        <div
          className="option-card voltar"
          onClick={() => {
            window.history.back();
          }}
        >
          <TfiBackLeft className="icone-voltar" />
          Voltar
        </div>
      </div>

      <Modal
        show={show}
        onClose={() => {
          setShow(false);
        }}
      >
        <div className="reset-account-modal bg-1">
          <div className="titulo-privacy-modal">
            <h1 id="titulo-modal">Reset da Conta</h1>
          </div>
          <div className="icone-warning-privacy">
            <ImWarning />
          </div>

          <p id="alerta-reset">
            Esta ação irá apagar todas as transações realizadas em sua conta e a
            mesma voltará aos padrões iniciais. <br /> <br />
            Confirma a exlusão dos dados?
          </p>

          <div className="icones-apagar-conta-privacy">
            <div className="icone-verificado-privacy">
              <TiTickOutline />
            </div>
            <div className="icone-cancel-privacy">
              <MdCancel />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default Privacy;
