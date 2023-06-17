import Voltar from "../Voltar";
import { BsGift, BsFillCreditCard2BackFill } from "react-icons/bs";
import { TbCurrencyGuarani, TbCurrencyPeso, TbCurrencyReal } from "react-icons/tb";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { IoIosAddCircleOutline } from "react-icons/io";
import Modal from "../Modal";
import { useState } from "react";
import "./Moneytype.scss";
import { AiOutlineEuroCircle } from "react-icons/ai";
const MoneyType = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    return (
        <>
            <div className="options-container container-money-type">
                <div className="money-types"
                    onClick={(e: any) => {
                        e.stopPropagation();
                    }}>

                    <h1>Escolher a moeda</h1>

                    <div className="option-card modal-real-money-type">
                        <TbCurrencyReal className="icone-logout icone-real" />
                        Real
                    </div>

                    <div className="option-card modal-dolar-money-type" >
                        <HiOutlineCurrencyDollar className="icone-logout icone-dolar" />
                        Dolar
                    </div>

                    <div className="option-card modal-euro-money-type" >
                        <AiOutlineEuroCircle className="icone-logout icone-moneytype" />
                        Euro
                    </div>
                    <div className="option-card modal-peso-moneyType" >
                        <TbCurrencyPeso className="icone-logout icone-pesos" />
                        Pesos
                    </div>

                    <div className="option-card modal-real-money-type" >
                        <TbCurrencyGuarani className="icone-logout icone-real" />
                        Guaraní PY
                    </div>                    
                </div>

                <Modal
                    show={show}
                    onClose={() => {
                        setShow(false);
                    }}
                >

                    <div className="categoria-receita-modal"
                        onClick={(e: any) => {
                            e.stopPropagation();
                        }}>

                    </div>

                </Modal>
            </div>
        </>
    )
}
export default MoneyType;