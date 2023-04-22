import React from "react";
import "./Preferences.scss";
import { ImCoinDollar } from "react-icons/im";
import { MdAccountBalance } from "react-icons/md"
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

        <div className="minha-conta">
          <MdOutlineManageAccounts className="icone-minha-conta">
          </MdOutlineManageAccounts>
          <Link to="/options/profile" className="link-minha-conta">
            Minha Conta
          </Link>
        </div>

        <div className="privacy">
          <FcPrivacy className="icone-privacy">
          </FcPrivacy>
          <Link to="/options/profile" className="link-privacy">
            Privacidade
          </Link>
        </div>

        <div className="moeda">
          <ImCoinDollar className="icone-moeda">
          </ImCoinDollar>
          <Link to="/options/profile" className="link-moeda">
            Moeda
          </Link>

        </div>

        <div className="contas">
          <MdAccountBalance className="icone-conta">
          </MdAccountBalance>          
          <Link to="/options/profile" className="link-conta">
            Contas
          </Link>
        </div>

        <div className="categorias">
          <BiCategory className="icone-categorias">
          </BiCategory>          
          <Link to="/options/profile" className="link-categoria">
            Categorias
          </Link>
        </div>        

        <div className="voltar">
          <GrLogout className="icone-voltar">
          </GrLogout>          
          <Link to="/options/profile" className="link-voltar">
            Voltar
          </Link>
        </div>


      </div>
    </>
  )
}
export default Preferences;