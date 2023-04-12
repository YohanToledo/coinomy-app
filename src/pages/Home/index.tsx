import Balance from "../../components/Balance";
import List from "../../components/List";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <div className="balance-component">
        <Balance />
      </div>
      <div>
        <List />
      </div>
    </>
  );
};

export default Home;
