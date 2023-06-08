import Card from "../Card";
import { FcBinoculars } from "react-icons/fc";
import "./List.scss";
import StaticData from "../../shared/static/static-data";
import { useEffect, useState } from "react";

type Props = {
  date: string;
  hideValues: boolean;
};

const List = ({ date, hideValues }: Props) => {
  const [transactions, setTransactions] = useState(
    StaticData.findAllTransactions()
  );

  const onDelete = (id: number) => {
    StaticData.deleteTransaction(id);
    setTransactions(StaticData.findAllTransactions());
  };

  let aux = 0;
  return (
    <>
      <div className="list-container">
        {transactions.map((item) => {
          if (
            item.transactionDate.toJSON().split("T")[0].slice(0, 7) === date
          ) {
            aux = 1;
            return (
              <div className="card">
                <Card
                  cardInfo={item}
                  key={item.id}
                  hideValue={hideValues}
                  onDelete={onDelete}
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
