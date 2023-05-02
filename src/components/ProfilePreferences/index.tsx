import { BiCategory } from "react-icons/bi";
import { GrLogout } from "react-icons/gr";
import { ImCoinDollar } from "react-icons/im";
import { MdAccountBalance, MdOutlineManageAccounts } from "react-icons/md";
import "../Preferences/Preferences.scss";
import "./ProfilePreferences.scss";
import { Link } from "react-router-dom";


const ProfilePreferences = () => {
  return (
    <>

<div className="options-container">
        <h1>Perfil</h1>

        <Link to="profile">
          <div className="option-card minha-conta">
            <MdOutlineManageAccounts className="icone-minha-conta">
            </MdOutlineManageAccounts>
            Minha Conta
          </div>
        </Link>

        

        <Link to="app/options/profile">
          <div className="option-card moeda">
            <ImCoinDollar className="icone-moeda">
            </ImCoinDollar>
            Moeda
          </div>
        </Link>

        <Link to="app/options/profile">
          <div className="option-card contas">
            <MdAccountBalance className="icone-conta">
            </MdAccountBalance>

            Contas

          </div>
        </Link>

        <Link to="app/options/profile">
          <div className="option-card categorias">
            <BiCategory className="icone-categorias">
            </BiCategory>

            Categorias

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