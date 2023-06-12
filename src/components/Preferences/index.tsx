import React from "react";
import "./Preferences.scss";
import { ImCoinDollar } from "react-icons/im";
import { MdAccountBalance } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { GrLogout } from "react-icons/gr";
import { MdOutlineManageAccounts } from "react-icons/md";
import { Link } from "react-router-dom";
import { FcPrivacy } from "react-icons/fc";

const Preferences = () => {
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

        <Link to="money">
          <div className="option-card moeda">
            <ImCoinDollar className="icone-moeda" />
            Moeda
          </div>
        </Link>

        <Link to="">
          <div className="option-card contas">
            <MdAccountBalance className="icone-conta" />
            Contas
          </div>
        </Link>

        <Link to="">
          <div className="option-card categorias">
            <BiCategory className="icone-categorias" />
            Categorias
          </div>
        </Link>

        <div
          className="option-card voltar"
          onClick={() => {
            window.history.back();
          }}
        >
          <GrLogout className="icone-voltar" />
          Voltar
        </div>
      </div>
    </>
  );
};
export default Preferences;
