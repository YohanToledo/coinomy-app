import React from "react";
//import "./Options.scss";
import "./stylepreferences.scss";
import { ImCoinDollar } from "react-icons/im";
import { MdAccountBalance } from "react-icons/md"
import { BiCategory } from "react-icons/bi";
import { GrLogout } from "react-icons/gr";

const OptionsWeb = () =>{
    return(
        <>
        
        <div className="options-container">
        <h1>Preferências</h1>
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

        <div className="voltar">
          <GrLogout className="icone-voltar">
          </GrLogout>
          <a href="#" className="link-voltar">Voltar</a>
        </div>
      </div>
        </>
    )
}
export default OptionsWeb;