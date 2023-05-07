import { GrLogout } from "react-icons/gr";
import { MdOutlineManageAccounts, MdAlternateEmail, MdOutlinePassword } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import "../Preferences/Preferences.scss";
import "./ProfilePreferences.scss";
import { Link } from "react-router-dom";

const ProfilePreferences = () => {
  return (
    <>
      <h1 id="titulo">Perfil</h1>
      <div className="options-container options-container-profile">

          <div className="option-card profile">
            <MdOutlineManageAccounts className="icone-minha-profile">
            </MdOutlineManageAccounts>
            <input type="file" name="" className="profile-input" />
          </div>

        <Link to="profile">
          <div className="option-card nome-completo">
            <ImProfile className="icone-minha-conta icone-nome-completo">
            </ImProfile>
            Nome Completo
          </div>
                    
        </Link>

        <Link to="app/options/profile">
          <div className="option-card moeda">
            <MdAlternateEmail className="icone-moeda">
            </MdAlternateEmail>
            E-mail
          </div>
        </Link>

        <Link to="app/options/profile">
          <div className="option-card contas">
            <MdOutlinePassword className="icone-conta">
            </MdOutlinePassword>
            Senha
          </div>
        </Link>

        <Link to="app/options/profile">
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
export default ProfilePreferences;