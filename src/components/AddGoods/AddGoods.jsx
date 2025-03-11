import React from "react";
import { useSelector } from "react-redux";
import AddGood from "./AddGood";

const AddGoods = () => {
  const store = useSelector((state) => state.buyGoods);
  return (
    <div className="good_container">
      <h1 style={{textAlign: "center"}}>Goods</h1>
      <div className="good_parent">
        {store.length > 0 ? (
          store?.map((item) => <AddGood key={item?.id} {...item} />)
        ) : (
          <h1>Hozircha hech qanday buyurtmalar yo'q</h1>
        )}
      </div>
    </div>
  );
};

export default AddGoods;
