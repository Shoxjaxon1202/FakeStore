import React from "react";
import { useDispatch } from "react-redux";
import { addGood } from "../../redux/actions/action";

const AddGood = ({ id, title, price, category, image, rating }) => {
  const dispatch = useDispatch();
  return (
    <div className="good">
      <div className="good__image">
        <img src={image} alt={title} />
      </div>
      <div className="good__details">
        <h3 className="good__title">{title}</h3>
        <p className="good__category">{category}</p>
        <b className="good__price">${price}</b>
        <div className="good__rating">
          <span className="good__rating-count">{rating?.count} reviews</span>
          <span className="good__rating-rate">Rating: {rating?.rate}/5</span>
        </div>
        <div className="good_btns">
          <button className="good_btn1">+</button>
          <button className="good_btn2">-</button>
        </div>
      </div>
    </div>
  );
};

export default AddGood;
