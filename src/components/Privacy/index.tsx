import { BiCategory } from "react-icons/bi";
import { GrLogout } from "react-icons/gr";
import { ImWarning } from "react-icons/im";
import { MdLockReset, MdDelete } from "react-icons/md";
import "../Privacy/privacy.scss";
import { useState } from "react";

import "../Preferences/Preferences.scss";
import { Link } from "react-router-dom";
import Modal from "../Modal";

const Privacy = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="options-container container-privacy">
                <h1 id="titulo" className="titulo-privacy">Privacidade</h1>

                <div className="option-card  " onClick={() => setShow(true)} >
                    <MdDelete className="icone-reset-password" />
                    <h3>Apagar conta
                        <h6> Isso apagará todas as informações da conta. Voltará ao estado inicial.</h6>
                    </h3>
                </div>

                <div className="option-card  reset-password">
                    <MdLockReset className="icone-reset-password" />
                    Resetar Senha
                </div>

                <div className="option-card voltar" onClick={() => { window.history.back() }}>
                    <GrLogout className="icone-reset-password">
                    </GrLogout>
                    Voltar
                </div>
            </div>

            <Modal show={show} onClose={() => { setShow(false) }} >
                <div className="reset-account-modal">
                    <h1 id="titulo-modal">Apagar Conta</h1>
                    <div>
                        <ImWarning className="icone-warning-privacy"></ImWarning>
                    </div>
                </div>

            </Modal>

        </>
    )
}
export default Privacy;