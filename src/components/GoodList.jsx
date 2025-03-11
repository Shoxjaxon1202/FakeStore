import React from "react";
import { useSelector } from "react-redux";
import GoodItem from "./GoodItem";
import "./good.scss";

const GoodList = () => {
  const store = useSelector((state) => state.goods);
  const loader = useSelector((state) => state.loader);

  return (
    <div className="good_parent">
      {loader !== "loading" ? (
        store?.flatMap((good) =>
          good.map((item) => <GoodItem key={item.id} {...item} />)
        )
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
};

export default GoodList;
