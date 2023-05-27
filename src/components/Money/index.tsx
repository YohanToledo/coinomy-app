import { GrLogout } from "react-icons/gr";



import { Link } from "react-router-dom";

const Money = () => {
    return (
        <>
            <h1 id="titulo">Moedas</h1>
            <div className="options-container">
                <Link to="/app/options">
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
export default Money;