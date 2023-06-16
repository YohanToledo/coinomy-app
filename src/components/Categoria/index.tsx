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
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import Voltar from "../Voltar";
import { BsFillCreditCard2BackFill, BsGift } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";


const Categoria = () => {
    const { logout } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);


    return (
        <>
            <div className="options-container container-categoria">
                <h1 id="titulo-categoria">Categoria</h1>

                <div className="option-card categoria-receitas"
                    onClick={() => setShow(true)}
                >
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

                <Voltar/>

                <Modal
                    show={show}
                    onClose={() => {
                        setShow(false);
                    }}
                >

                    <div className="categoria-receita-modal">
                        <h1>Categoria receitas</h1>
                        <div className="option-card modal-salario" >
                            <HiOutlineCurrencyDollar className="icone-logout icone-salario" />
                            Salário
                        </div>

                        <div className="option-card modal-presente" >
                            <BsGift className="icone-logout icone-presente" />
                            Presente

                        </div>
                        <div className="option-card modal-beneficio" >
                            <BsFillCreditCard2BackFill className="icone-logout icone-beneficio" />
                            Benefício
                        </div>

                        <div className="option-card modal-adicionar" >
                            <IoIosAddCircleOutline className="icone-logout icone-adicionar" />
                            Adicionar
                        </div>

                        <Voltar />
                    </div>







                </Modal>
            </div>
        </>
    );
};
export default Categoria;

