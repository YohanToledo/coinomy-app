import React from "react";
import "./ProfilePreferences.scss";
import { ImCoinDollar } from "react-icons/im";
import { MdAccountBalance } from "react-icons/md"
import { BiCategory } from "react-icons/bi";
import { GrLogout } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { MdAlternateEmail } from "react-icons/md";


const ProfilePreferences = () =>{
    return(
        <>
        
        <div className="profile-preferences-container">
        <h1>Preferências</h1>

        <div className="nome-completo">
          <CgProfile className="icone-email">
          </CgProfile>
          <a href="#" className="link-email">Nome completo</a>
        </div>      

        <div className="email">
          <MdAlternateEmail className="icone-email">
          </MdAlternateEmail>
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