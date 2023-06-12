import "./Card.scss";
import { useState } from "react";
import { BiUpsideDown, BiPencil, BiTrash } from "react-icons/bi";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { Transaction } from "./types/Transaction";
import { Icons } from "./Icons";
import Modal from "../Modal";
import Transactions from "../Transactions";
import StaticData from "../../shared/static/static-data";

type Props = {
  cardInfo: Transaction;
  hideValue: boolean;
  onDelete: (id: number) => void;
};

const Card = ({ cardInfo, hideValue, onDelete }: Props) => {
  const [showTranasctionForm, setShowTranasctionForm] = useState(false);

  const updateTransaction = (transaction: Transaction) => {
    StaticData.updateTransaction(transaction);
  };

  const COLOR = {
    expense: "#763C40",
    income: "#3C7672",
  };

  return (
    <>
      <div className="card-external-container scale-animation">
        <div className="card-date">
          {cardInfo.transactionDate.toLocaleDateString()}
        </div>
        <div
          className="card-container"
          style={{
            backgroundColor:
              cardInfo.type === "EXPENSE" ? COLOR.expense : COLOR.income,
          }}
        >
          <div className="card-icon-desc">
            <div className="ci">
              {cardInfo.icon ? Icons[cardInfo.icon] : <BiUpsideDown />}
            </div>
            <div className="card-description">{cardInfo.description}</div>
          </div>

          <div className="card-value">
            <div>{cardInfo.type === "EXPENSE" ? "- R$" : "+ R$"}</div>
            <div>{hideValue ? "******" : cardInfo.value.toFixed(2)}</div>
            <button
              type="button"
              className="appear-on-hover delete-edit-transaction"
              onClick={() => setShowTranasctionForm(true)}
            >
              <BiPencil />
            </button>
            <button
              type="button"
              className="appear-on-hover delete-edit-transaction"
              onClick={() => onDelete(cardInfo.id)}
            >
              <BiTrash />
            </button>
          </div>
        </div>
      </div>

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
            title={MAPPER_TRANSACTION_TYPE[cardInfo.type]}
            transactionId={cardInfo.id}
            transactionValue={cardInfo.value.toString()}
            transactionDescription={cardInfo.description}
            transactionDate={
              cardInfo.transactionDate.toISOString().split("T")[0]
            }
            onSave={updateTransaction}
          />
        </div>
      </Modal>
    </>
  );
};

export default Card;

const MAPPER_TRANSACTION_TYPE: { INCOME: "RECEITA"; EXPENSE: "DESPESA" } = {
  INCOME: "RECEITA",
  EXPENSE: "DESPESA",
};
