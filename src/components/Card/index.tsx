import "./Card.scss";
import { BiUpsideDown } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { Transaction } from "./types/Transaction";
import { Icons } from "./Icons";

type Props = {
  cardInfo: Transaction;
  hideValue: boolean;
  onDelete: (id: number) => void;
};

const Card = ({ cardInfo, hideValue, onDelete }: Props) => {
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
            <div className="appear-on-hover delete-edit-transaction">
              <BsPencilSquare />
            </div>
            <div
              className="appear-on-hover delete-edit-transaction"
              onClick={() => onDelete(cardInfo.id)}
            >
              <FaTrashAlt />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
