import React, { useContext, useState } from "react";
import "./Preferences.scss";
import { ImCoinDollar } from "react-icons/im";
import { TfiBackLeft } from "react-icons/tfi";
import { MdAccountBalance } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import { MdOutlineManageAccounts } from "react-icons/md";
import { Link } from "react-router-dom";
import { FcPrivacy } from "react-icons/fc";
import { AuthContext } from "../../context/AuthContext";
import MoneyType from "../MoneyType";
import Modal from "../Modal";

const Preferences = () => {
  const { logout } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="options-container">
        <h1>Preferências</h1>

        <Link to="profile">
          <div className="option-card minha-conta">
            <MdOutlineManageAccounts className="icone-minha-conta" />
            Minha Conta
          </div>
        </Link>

        <Link to="privacy">
          <div className="option-card privacy">
            <FcPrivacy className="icone-privacy" />
            Privacidade
          </div>
        </Link>

        <div className="option-card moeda" onClick={() => setShow(true)}>
          <ImCoinDollar className="icone-moeda" />
          Moeda
        </div>

        <Modal
          show={show}
          onClose={() => {
            setShow(false);
          }}
        >
          <MoneyType />

        </Modal>

        <Link to="">
          <div className="option-card contas">
            <MdAccountBalance className="icone-conta" />
            Contas
          </div>
        </Link>

        <Link to="/app/options/categoria">
          <div className="option-card categorias">
            <BiCategory className="icone-categorias" />
            Categorias
          </div>
        </Link>

        <div className="option-card logout-option" onClick={logout}>
          <BiLogOut className="icone-logout" />
          Sair
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
    </>
  );
};
export default Preferences;
