import { GrLogout, GrSelect } from "react-icons/gr";

import { Link } from "react-router-dom";
import Voltar from "../Voltar";
import { BsGift, BsFillCreditCard2BackFill } from "react-icons/bs";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { IoIosAddCircleOutline } from "react-icons/io";
import Modal from "../Modal";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { AiOutlineSelect } from "react-icons/ai";
import { TbCurrencyReal } from "react-icons/tb";

const Money = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="options-container container-categoria">
        <h1 id="titulo">Moedas</h1>

        <div
          className="option-card categoria-receitas"
          onClick={() => setShow(true)}
        >
          <AiOutlineSelect className="icone-receita" />
          &nbsp;Selecione a moeda já existente
        </div>

        <div className="option-card categoria-despesas">
          <IoIosAddCircleOutline className="icone-despesa" />
          &nbsp; Adicione a moeda
        </div>

        <Voltar />
      </div>
    </>
  );
};
export default Money;
