import "./Card.scss";
import { BsFillCartFill } from "react-icons/bs";

export type CardInfo = {
  icon: string;
  description: string;
  value: number;
  transactionDate: Date;
  color: string;
};
const Card = (cardInfo: CardInfo) => {
  return (
    <>
      <div className="card-external-container">
        <div className="card-date">
          {cardInfo.transactionDate.toLocaleString()}
        </div>
        <div
          className="card-container"
          style={{ backgroundColor: cardInfo.color }}
        >
          <div className="card-icon">
            <BsFillCartFill />
          </div>
          <div className="card-description">{cardInfo.description}</div>
          <div className="card-value">R${cardInfo.value.toFixed(2)}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
