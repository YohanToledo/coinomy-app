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

        <Link to="/options/profile">
          <div className="option-card minha-conta">
            <MdOutlineManageAccounts className="icone-minha-conta">
            </MdOutlineManageAccounts>
            Minha Conta
          </div>
        </Link>

        <Link to="/options/profile">
          <div className="option-card privacy">
            <FcPrivacy className="icone-privacy">
            </FcPrivacy>

            Privacidade

          </div>
        </Link>

        <Link to="/options/profile">
          <div className="option-card moeda">
            <ImCoinDollar className="icone-moeda">
            </ImCoinDollar>
            Moeda
          </div>
        </Link>

        <Link to="/options/profile">
          <div className="option-card contas">
            <MdAccountBalance className="icone-conta">
            </MdAccountBalance>

            Contas

          </div>
        </Link>

        <Link to="/options/profile">
          <div className="option-card categorias">
            <BiCategory className="icone-categorias">
            </BiCategory>

            Categorias

          </div>
        </Link>


        <Link to="/options/profile">
          <div className="option-card voltar">
            <GrLogout className="icone-voltar">
            </GrLogout>

            Voltar

          </div>
        </Link>


      </div>
    </>
  )
}
export default Preferences;