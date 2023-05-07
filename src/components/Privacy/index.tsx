import { BiCategory } from "react-icons/bi";
import { GrLogout } from "react-icons/gr";
import { ImCoinDollar } from "react-icons/im";
import { MdLockReset, MdDelete} from "react-icons/md";
import "../Privacy/privacy.scss";

import "../Preferences/Preferences.scss";
import { Link } from "react-router-dom";


const Privacy = () => {
    return (
        <>
            <h1 id="titulo">Privacidade</h1>
            <Link to="app/options/privacy">
                <div className="option-card minha-conta reset-password">
                    <MdLockReset className="icone-reset-password">
                    </MdLockReset>
                    Resetar senha
                </div>
            </Link>

            <Link to="app/options/privacy">
                <div className="option-card minha-conta reset-password">
                    <MdDelete className="icone-reset-password">
                    </MdDelete>
                    Apagar Conta
                </div>
            </Link>

            <Link to="app/options/privacy">
                <div className="option-card minha-conta reset-password">
                    <GrLogout className="icone-reset-password">
                    </GrLogout>
                    Voltar
                </div>
            </Link>

        </>
    )
}
export default Privacy;