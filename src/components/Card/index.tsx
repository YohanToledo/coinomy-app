import "./Card.scss";
import { useState } from "react";
import { BiPencil, BiTrash } from "react-icons/bi";
import { Transaction } from "../../ts/types/transaction.types";
import { CategoryIconsMapper } from "../../ts/mappers/category-icons.mapper";
import Modal from "../Modal";
import Transactions from "../Transactions";
import StaticData from "../../shared/static/static-data";
import { formatCurrency } from "../../utils/format-currency";

type Props = {
  cardInfo: Transaction;
  hideValue: boolean;
  onDelete: (id: number) => void;
};

const Card = ({ cardInfo, hideValue, onDelete }: Props) => {
  const [showTranasctionForm, setShowTranasctionForm] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

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
            <div
              className="ci desc-on-hover"
              title={cardInfo.category.description}
            >
              {CategoryIconsMapper[cardInfo.category.icon]}
            </div>
            <div className="card-description">{cardInfo.description}</div>
          </div>

          <div className="card-value">
            <div>{cardInfo.type === "EXPENSE" ? "-" : "+"}</div>
            <div>
              {hideValue ? "******" : formatCurrency(cardInfo.value.toFixed(2))}
            </div>
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
              onClick={() => setShowConfirmDialog(true)}
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
            transactionCategory={cardInfo.category}
            transactionDate={
              cardInfo.transactionDate.toISOString().split("T")[0]
            }
            onSave={updateTransaction}
          />
        </div>
      </Modal>

      <Modal
        show={showConfirmDialog}
        onClose={() => setShowConfirmDialog(false)}
      >
        <div
          onClick={(e: any) => {
            e.stopPropagation();
          }}
        >
          <div className="delete-transaction-confirmation">
            <div>
              <h2 className="delete-transaction-title">Excluir transação?</h2>
            </div>
            <div>
              <h3 className="delete-transaction-warn">
                Essa transação será excluida permanentemente e não será possível
                desfazer essa ação.
              </h3>
            </div>
            <div className="delete-transaction-buttons">
              <div>
                <button
                  type="button"
                  className="delete-transaction-confirm"
                  onClick={() => onDelete(cardInfo.id)}
                >
                  SIM
                </button>
                <button
                  type="button"
                  className="delete-transaction-cancel"
                  onClick={() => setShowConfirmDialog(false)}
                >
                  NÃO
                </button>
              </div>
            </div>
          </div>
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
