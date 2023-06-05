import { GrLogout } from "react-icons/gr";



import { Link } from "react-router-dom";

const Money = () => {
    return (
        <>
            <h1 id="titulo">Moedas</h1>
            <div className="options-container">
              
                    <div className="option-card voltar" onClick={() => { window.history.back() }}>
                        <GrLogout className="icone-voltar">
                        </GrLogout>
                        Voltar
                    </div>
       
            </div>
        </>
    )
}
export default Money;