import React from "react";
import Balance from "../../components/Balance";
import List from "../../components/List";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <div>
        <Balance />
      </div>
      <div>
        <List />
      </div>
    </>
  );
};

export default Home;
