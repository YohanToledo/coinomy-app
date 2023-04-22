import React from "react";
//import "./Options.scss";
import "./Preferences.scss";
import { ImCoinDollar } from "react-icons/im";
import { MdAccountBalance } from "react-icons/md"
import { BiCategory } from "react-icons/bi";
import { GrLogout } from "react-icons/gr";
import { MdOutlineManageAccounts } from "react-icons/md";
import { Link } from "react-router-dom";

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

        <div className="moeda">
          <ImCoinDollar className="icone-moeda">
          </ImCoinDollar>
          <a href="#" className="link-moeda">Moeda</a>

        </div>

        <div className="contas">
          <MdAccountBalance className="icone-conta">
          </MdAccountBalance>
          <a href="#" className="link-conta">Contas</a>
        </div>

        <div className="categorias">
          <BiCategory className="icone-categorias">
          </BiCategory>
          <a href="#" className="link-categoria">Categorias</a>
        </div>

        <div className="perfil">
          <GrLogout className="icone-perfil">
          </GrLogout>
          <Link to="/options/profile">
            Perfil
          </Link>
          {/*<a href="#" className="link-perfil">Perfil</a>*/}
        </div>

        <div className="voltar">
          <GrLogout className="icone-voltar">
          </GrLogout>
          <a href="#" className="link-voltar">Voltar</a>
        </div>


      </div>
    </>
  )
}
export default Preferences;