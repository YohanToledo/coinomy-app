import { BiCategory } from "react-icons/bi";
import { GrLogout } from "react-icons/gr";
import { ImCoinDollar } from "react-icons/im";
import { MdLockReset, MdDelete } from "react-icons/md";
import "../Privacy/privacy.scss";

import "../Preferences/Preferences.scss";
import { Link } from "react-router-dom";

const Privacy = () => {
    return (
        <>
            <div className="options-container container-privacy">
                <h1 id="titulo" className="titulo-privacy">Privacidade</h1>
<<<<<<< HEAD
                <Link to="app/options/privacy">
                    <div className="option-card minha-conta reset-password">
                        <MdLockReset className="icone-reset-password"/>                    
                        <h3>Resetar senha
                            <h6> Isso apagará todas as informações da conta. Voltará ao estado inicial.</h6>
                        </h3>
                    </div>
                </Link>
        
                <Link to="app/options/privacy">
                    <div className="option-card minha-conta reset-password">
                        <MdDelete className="icone-reset-password">
                        </MdDelete>
                        Apagar Conta
                    </div>
                </Link>

                <Link to="/app/options">
                    <div className="option-card minha-conta reset-password">
                        <GrLogout className="icone-reset-password">
                        </GrLogout>
                        Voltar
                    </div>
                </Link>
=======
                <div className="div-componentes-privacy">
                    <Link to="/app/options/privacy">
                        <div className="option-card minha-conta reset-password">
                            <MdLockReset className="icone-reset-password" />
                            <h3>Resetar senha
                                <h6>
                                    Isso apagará todas as informações da conta. Voltará ao estado inicial.
                                </h6>
                            </h3>
                        </div>
                    </Link>

                    <Link to="/app/options/privacy">
                        <div className="option-card minha-conta reset-account">
                            <MdDelete className="icone-reset-password" />
                            <h3>Resetar senha
                                <h6>
                                    Isso apagará sua conta de forma permanente.
                                </h6>
                            </h3>
                        </div>
                    </Link>

                    <Link to="app/options/privacy">
                        <div className="option-card minha-conta buttom-back">
                            <GrLogout className="icone-reset-password" />
                            Voltar
                        </div>
                    </Link>

                </div>
>>>>>>> 6b7b175716ed086155f35d15ddb31bbaee8cf167

            </div>

        </>
    )
}
export default Privacy;