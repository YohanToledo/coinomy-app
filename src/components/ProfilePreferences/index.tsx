import { GrLogout } from "react-icons/gr";
import { MdAlternateEmail, MdOutlinePassword } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { RiPencilFill } from "react-icons/ri";
import "../Preferences/Preferences.scss";
import "./ProfilePreferences.scss";
import { Link } from "react-router-dom";

const ProfilePreferences = () => {
  return (
    <>
      <h1 id="titulo">Perfil</h1>
      <div className="options-container options-container-profile">
        <div className="div-circle">
          <div className="profile"></div>
          <div className="icone-circle">
            <input
              className="input-file icone-circle-label"
              id="file-input"
              type="file"
            />
            <label htmlFor="file-input" className="icone-circle-label">
              <RiPencilFill />
            </label>
          </div>
        </div>

        <div className="nome-email-profile">
          <label htmlFor="nome-Sobrenome" id="nome-Sobrenome">
            <h1>Nome e Sobrenome</h1>
          </label>

          <label htmlFor="email-Profile" id="email-Profile">
            <h2>nome@gmail.com</h2>
          </label>
        </div>

        {/* A div chamada: "divs-componentes" criada para agrupar os elementos nome, email, senha, voltar, para 
        manipulá-los nas media screens. */}

        <div className="options-container divs-componentes">
          <Link to="profile">
            <div className="option-card nome-completo">
              <ImProfile className="icone-minha-conta icone-nome-completo" />
              Nome Completo
            </div>
          </Link>

          <Link to="">
            <div className="option-card moeda">
              <MdAlternateEmail className="icone-moeda" />
              E-mail
            </div>
          </Link>

          <Link to="">
            <div className="option-card contas">
              <MdOutlinePassword className="icone-conta" />
              Senha
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
      </div>
    </>
  );
};
export default ProfilePreferences;
