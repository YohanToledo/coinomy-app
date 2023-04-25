import Card from "../Card";
import { CardInfo } from "../Card/types/CardInfo";
import {BiSearchAlt} from "react-icons/bi";
import {FcBinoculars} from "react-icons/fc";
import "./List.scss";

type Props = {
  date: string
  hideValues: boolean
}

const List = ({date, hideValues}: Props) => {
  let aux = 0;
  return (
    <>
      <div className="list-container">
        {arr.map((item) => {
          if(item.transactionDate.toJSON().split("T")[0].slice(0,7) === date){
            aux = 1
            return (
              <div className="card" >
                <Card cardInfo={item} key={new Date().getMilliseconds()} hideValue={hideValues} />
              </div>
            );
          }
        })}

        {         
        aux === 0 ?
        <div className="list-not-found">
          <div className="list-not-found-icon"><FcBinoculars /></div>
          <span >Parece que não há nada aqui!</span>
        </div>
        : ""
        }
      </div>
    </>
  );
};

export default List;

const arr: CardInfo[] = [
  {
    icon: "BsFillCartFill",
    description: "Mercado",
    value: 89.50,
    transactionDate: new Date('2023-04-17T12:00:00'),
    type: "EXPENSE",
  },
  {
    icon: "MdOutlineAttachMoney",
    description: "Freela dev",
    value: 750,
    transactionDate: new Date('2023-04-05T12:00:00'),
    type: "INCOME",
  },
  {
    icon: "RiGasStationFill",
    description: "Gasolina",
    value: 200,
    transactionDate: new Date('2023-03-24T12:00:00'),
    type: "EXPENSE",
  },
  {
    icon: "MdOutlineAttachMoney",
    description: "Salario",
    value: 10000.0,
    transactionDate: new Date(),
    type: "INCOME",
  },
  {
    icon: "BsFillCartFill",
    description: "Mercado",
    value: 250,
    transactionDate: new Date(),
    type: "EXPENSE",
  },
  {
    icon: "BsFillCartFill",
    description: "Mercado",
    value: 27.85,
    transactionDate: new Date(),
    type: "EXPENSE",
  },
  {
    icon: "MdOutlineAttachMoney",
    description: "freela",
    value: 200,
    transactionDate: new Date(),
    type: "INCOME",
  },
];