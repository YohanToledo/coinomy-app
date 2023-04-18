import React from "react";
import "./ProfilePreferences.scss";
import { ImCoinDollar } from "react-icons/im";
import { MdAccountBalance } from "react-icons/md"
import { BiCategory } from "react-icons/bi";
import { GrLogout } from "react-icons/gr";

const ProfilePreferences = () =>{
    return(
        <>
        
        <div className="options-container">
        <h1>Preferências</h1>
        <div className="email">
          <ImCoinDollar className="icone-email">
          </ImCoinDollar>
          <a href="#" className="link-email">Email</a>

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
export default ProfilePreferences;