import "./NavBar.scss";
import {
  AiOutlineHome,
  AiFillHome,
  AiOutlinePlusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { TbDotsCircleHorizontal } from "react-icons/tb";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CiCalculator2 } from 'react-icons/ci';
import Modal from "../Modal";

import { AiOutlineMinusCircle } from "react-icons/ai"
import Transactions from "../Transactions";

const NavBar = () => {

  const [showTranasctionForm, setShowTranasctionForm] = useState(false)
  const [transactionType, setTransactionType] = useState<"RECEITA" | "DESPESA">("RECEITA")

  const [showTransactionOptions, setShowTransactionOptions] = useState(false)
  const [selected, setSelected] = useState({
    home: true,
    new: false,
    options: false,
  });

  const select = (page: "home" | "new" | "options") => {
    const allDisabled = { home: false, new: false, options: false };

    setSelected({ ...allDisabled, [page]: true });
  };


  const basePath = "/app";

  return (
    <>
      <div className="icon-calc">
        <CiCalculator2 className="calc" />
      </div>
      <div className="nav-container">

        <Link to={`${basePath}/home`}>
          <div
            className="home"
            onClick={() => {
              select("home");
            }}
          >
            {selected.home ? <AiFillHome /> : <AiOutlineHome />}
          </div>
        </Link>

        <div
          className="new"
          onClick={() => {
            select("new");
            setShowTransactionOptions(true);
          }}
        >
          {selected.new ? <AiFillPlusCircle /> : <AiOutlinePlusCircle />}
        </div>

        <Link to={`${basePath}/options`}>
          <div
            className="options"
            onClick={() => {
              select("options");
            }}
          >
            {selected.options ? (
              <HiDotsCircleHorizontal />
            ) : (
              <TbDotsCircleHorizontal />
            )}
          </div>
        </Link>
      </div>


      <Modal show={showTransactionOptions} onClose={() => setShowTransactionOptions(false)}>
        <div className="new-baseContainer">
          <div className="new-RDchoose" onClick={() => {
            setShowTranasctionForm(true);
            setShowTransactionOptions(false);
            setTransactionType("RECEITA");
          }}>
            <button className="new-buttonRD">
              <AiOutlinePlusCircle />
            </button>
            <p>Receita</p>
          </div>

          <div className="new-RDchoose" onClick={() => {
            setShowTranasctionForm(true);
            setShowTransactionOptions(false);
            setTransactionType("DESPESA");
          }}>
            <button className="new-buttonRD">
              <AiOutlineMinusCircle />
            </button>
            <p>Despesa</p>
          </div>
        </div>
      </Modal>


      <Modal show={showTranasctionForm} onClose={() => setShowTranasctionForm(false)}>
        <div onClick={(e: any) => { e.stopPropagation() }}>
          <Transactions title={transactionType} />
        </div>
      </Modal>

    </>
  );
};

export default NavBar;
