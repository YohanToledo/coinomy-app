import { useContext, useState } from "react";
import "./Categoria.scss";
import { ImWarning } from "react-icons/im";
import { MdCancel } from "react-icons/md";
import { AuthContext } from "../../context/AuthContext";
import Modal from "../Modal";
import { TiTickOutline } from "react-icons/ti";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { TfiBackLeft } from "react-icons/tfi";


const Categoria = () => {
    const { logout } = useContext(AuthContext);
    const [show, setShow] = useState(false);

    return (
        <>
            <div className="options-container container-categoria">
                <h1 id="titulo-categoria">Categoria</h1>

                <div className="option-card categoria-receitas">
                    <FaArrowCircleUp className="icone-receita" />

                    {/*
                        " &nbsp; " este comando significa "Espaço"
                        Alerta: Areranjo técnico profissional.
                        Utilizei esse comando para setar um espaço entre 
                        os ícones Categoria e receita. Caso for colocado
                        mais espaços, vai respeitas os espaços fornecidos.                        
                    */}
                    &nbsp;Categoria de receitas
                </div>

                <div className="option-card categoria-despesas">
                    <FaArrowCircleDown className="icone-despesa" />
                    &nbsp;Categoria de despesas
                </div>

                <div className="option-card voltar-categoria">
                    <TfiBackLeft className="icone-voltar" />
                    Voltar
                </div>






                <Modal
                    show={show}
                    onClose={() => {
                        setShow(false);
                    }}
                >
                    <div className="reset-account-modal bg-1">
                        <div className="titulo-privacy-modal">
                            <h1 id="titulo-modal">Reset da Conta</h1>
                        </div>
                        <div className="icone-warning-privacy">
                            <ImWarning />
                        </div>

                        <p id="alerta-reset">
                            Esta ação irá apagar todas as transações realizadas em sua conta e a
                            mesma voltará aos padrões iniciais. <br /> <br />
                            Confirma a exlusão dos dados?
                        </p>

                        <div className="icones-apagar-conta-privacy">
                            <div className="icone-verificado-privacy">
                                <TiTickOutline />
                            </div>
                            <div className="icone-cancel-privacy">
                                <MdCancel />
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    );
};
export default Categoria;

