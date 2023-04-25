import {useState} from "react";
import Balance from "../../components/Balance";
import List from "../../components/List";
import "./Home.scss";

const Home = () => {

  const [date, setDate] = useState("");
  const [hideValues, setHideValues] = useState(true);

  return (
    <>
      <div className="balance-component">
        <Balance setDate={setDate} hideValues={hideValues} setHideValues={setHideValues}/>
      </div>
      <div>
        <List date={date} hideValues={hideValues}/>
      </div>
    </>
  );
};

export default Home;
