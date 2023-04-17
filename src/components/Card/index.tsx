import "./Card.scss";
import { BsFillCartFill } from "react-icons/bs";

export type CardInfo = {
  icon: string;
  description: string;
  value: number;
  transactionDate: Date;
  type: "EXPENSE" | "INCOME";
};
const Card = (cardInfo: CardInfo) => {

  const COLOR = {
    expense: "#763C40",
    income: "#3C7672"
  }

  return (
    <>
      <div className="card-external-container">
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
          <div className="card-icon">
            <BsFillCartFill />
          </div>
          <div className="card-description">{cardInfo.description}</div>
          <div className="card-value">
            {cardInfo.type === "EXPENSE" ? "- R$" : "+ R$"}
            {cardInfo.value.toFixed(2)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
