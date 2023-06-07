import Card from "../Card";
import { Transaction } from "../Card/types/Transaction";
import { BiSearchAlt } from "react-icons/bi";
import { FcBinoculars } from "react-icons/fc";
import "./List.scss";

import StaticData from "../../shared/static/static-data";

type Props = {
  date: string;
  hideValues: boolean;
};

const List = ({ date, hideValues }: Props) => {
  let aux = 0;
  return (
    <>
      <div className="list-container">
        {arr.map((item) => {
          if (
            item.transactionDate.toJSON().split("T")[0].slice(0, 7) === date
          ) {
            aux = 1;
            return (
              <div className="card">
                <Card
                  cardInfo={item}
                  key={new Date().getMilliseconds()}
                  hideValue={hideValues}
                />
              </div>
            );
          }
        })}

        {aux === 0 ? (
          <div className="list-not-found">
            <div className="list-not-found-icon">
              <FcBinoculars />
            </div>
            <span>Parece que não há nada aqui!</span>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default List;

const arr: Transaction[] = StaticData.transactions;
