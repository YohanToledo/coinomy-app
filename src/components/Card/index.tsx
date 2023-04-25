import "./Card.scss";
import { BiUpsideDown } from "react-icons/bi";
import { CardInfo } from "./types/CardInfo";
import { Icons } from "./Icons"

type Props = {
  cardInfo: CardInfo,
  hideValue: boolean
}

const Card = ({cardInfo, hideValue}: Props) => {

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
          <div className="card-icon-desc">
            <div className="ci">
            {
              cardInfo.icon ?
              Icons[cardInfo.icon] :
              <BiUpsideDown />
            }
            </div>
            <div className="card-description">{cardInfo.description}</div>
          </div>
          
          <div className="card-value">
            <div>
            {cardInfo.type === "EXPENSE" ? "- R$" : "+ R$"}
            </div>
            <div>
            {hideValue ? "******" : cardInfo.value.toFixed(2) }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
