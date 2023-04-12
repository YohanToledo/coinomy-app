import Card, { CardInfo } from "../Card";
import "./List.scss";

const List = () => {
  const arr: CardInfo[] = [
    {
      icon: "shopCart",
      description: "testing description",
      value: 525.9,
      transactionDate: new Date(),
      type: "EXPENSE",
    },
    {
      icon: "shopCart",
      description: "testing description",
      value: 525.9,
      transactionDate: new Date(),
      type: "INCOME",
    },
    {
      icon: "shopCart",
      description: "testing description",
      value: 525.9,
      transactionDate: new Date(),
      type: "EXPENSE",
    },
    {
      icon: "shopCart",
      description: "testing description",
      value: 525.9,
      transactionDate: new Date(),
      type: "INCOME",
    },
    {
      icon: "shopCart",
      description: "testing description",
      value: 525.9,
      transactionDate: new Date(),
      type: "EXPENSE",
    },
    {
      icon: "shopCart",
      description: "testing description",
      value: 525.9,
      transactionDate: new Date(),
      type: "EXPENSE",
    },
    {
      icon: "shopCart",
      description: "testing description",
      value: 525.9,
      transactionDate: new Date(),
      type: "INCOME",
    },
  ];
  return (
    <>
      <div className="list-container">
        {arr.map((item) => {
          return (
            <div className="card"  >
              <Card {...item} key={new Date().getMilliseconds()} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default List;
