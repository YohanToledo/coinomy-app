import Card, { CardInfo } from "../Card";
import "./List.scss";

const List = () => {
  const arr: CardInfo[] = [
    {
      icon: "shopCart",
      description: "testing description",
      value: 525.9,
      transactionDate: new Date(),
      color: "#FF0000",
    },
    {
      icon: "shopCart",
      description: "testing description",
      value: 525.9,
      transactionDate: new Date(),
      color: "#008000",
    },
    {
      icon: "shopCart",
      description: "testing description",
      value: 525.9,
      transactionDate: new Date(),
      color: "#FF0000",
    },
    {
      icon: "shopCart",
      description: "testing description",
      value: 525.9,
      transactionDate: new Date(),
      color: "#0080F0",
    },
    {
      icon: "shopCart",
      description: "testing description",
      value: 525.9,
      transactionDate: new Date(),
      color: "#FF0000",
    },
    {
      icon: "shopCart",
      description: "testing description",
      value: 525.9,
      transactionDate: new Date(),
      color: "#FF0000",
    },
    {
      icon: "shopCart",
      description: "testing description",
      value: 525.9,
      transactionDate: new Date(),
      color: "#008000",
    },
  ];
  return (
    <>
      <div className="list-container">
        {arr.map((item) => {
          return (
            <div className="card">
              <Card {...item} key={new Date().getMilliseconds()} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default List;
