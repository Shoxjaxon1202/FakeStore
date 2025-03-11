import React from "react";
import GoodList from "../GoodList";

import "./home.scss";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <div className="home_card">
        <h1 style={{ textAlign: "center" }}>Fake Store</h1>
        <NavLink to={"goods"}>
          <button className="good_btn">Goods</button>
        </NavLink>
      </div>
      <GoodList />
    </div>
  );
};

export default Home;
