import "./NavBar.scss";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { CiCalculator2 } from "react-icons/ci";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { Transaction } from "../../ts/types/transaction.types";
import Transactions from "../Transactions";
import Modal from "../Modal";

import StaticData from "../../shared/static/static-data";

const NavBar = () => {
  const [showTranasctionForm, setShowTranasctionForm] = useState(false);
  const [transactionType, setTransactionType] = useState<"RECEITA" | "DESPESA">(
    "RECEITA"
  );
  const createTransaction = (transaction: Transaction) => {
    StaticData.addTransaction(transaction);
  };

  const [showTransactionOptions, setShowTransactionOptions] = useState(false);
  const [selected, setSelected] = useState({
    home: true,
    options: false,
  });

  const select = (page: "home" | "options") => {
    const allDisabled = { home: false, options: false };

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
            {selected.home ? (
              <div className="nav-active-icon">
                <AiOutlineHome />
              </div>
            ) : (
              <div className="nav-disable-icon">
                <AiOutlineHome />
              </div>
            )}
          </div>
        </Link>

        <div
          className="new"
          onClick={() => {
            setShowTransactionOptions(true);
          }}
        >
          <div className="elevated-button color1 bg-5">
            <BiPlus />
          </div>
        </div>

        <Link to={`${basePath}/options`}>
          <div
            className="options"
            onClick={() => {
              select("options");
            }}
          >
            {selected.options ? (
              <div className="nav-active-icon">
                <AiOutlineSetting />
              </div>
            ) : (
              <div className="nav-disable-icon">
                <AiOutlineSetting />
              </div>
            )}
          </div>
        </Link>
      </div>

      <Modal
        show={showTransactionOptions}
        onClose={() => setShowTransactionOptions(false)}
      >
        <div className="new-baseContainer">
          <div
            className="new-RDchoose add-new-income"
            onClick={() => {
              setShowTranasctionForm(true);
              setShowTransactionOptions(false);
              setTransactionType("RECEITA");
            }}
          >
            <button className="new-buttonRD">
              <BsFillArrowUpCircleFill />
            </button>
            <p>Receita</p>
          </div>

          <div
            className="new-RDchoose add-new-expense"
            onClick={() => {
              setShowTranasctionForm(true);
              setShowTransactionOptions(false);
              setTransactionType("DESPESA");
            }}
          >
            <button className="new-buttonRD">
              <BsFillArrowDownCircleFill />
            </button>
            <p>Despesa</p>
          </div>
        </div>
      </Modal>

      <Modal
        show={showTranasctionForm}
        onClose={() => setShowTranasctionForm(false)}
      >
        <div
          onClick={(e: any) => {
            e.stopPropagation();
          }}
        >
          <Transactions
            title={transactionType}
            transactionId={new Date().getTime()}
            transactionDate={new Date().toISOString().split("T")[0]}
            onSave={createTransaction}
          />
        </div>
      </Modal>
    </>
  );
};

export default NavBar;
