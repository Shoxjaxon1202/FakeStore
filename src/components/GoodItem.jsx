import React from "react";
import { addGood } from "../redux/actions/action";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const GoodItem = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="good">
      <div className="good__image">
        <img src={image} alt={title} />
      </div>
      <div className="good__details">
        <h3 className="good__title">{title.slice(0, 50)}</h3>
        <p className="good__category">{category}</p>
        <b className="good__price">${price}</b>
        <div className="good__rating">
          <span className="good__rating-count">{rating?.count} reviews</span>
          <span className="good__rating-rate">Rating: {rating?.rate}/5</span>
        </div>
        <button
          className="good_btn"
          onClick={() => {
            const good = {
              id,
              title,
              price,
              category,
              image,
              rating,
            };
            dispatch(addGood(good));
            toast.success(title.slice(0, 20) + " sotib olindi");
          }}>
          Buy
        </button>
      </div>
    </div>
  );
};

export default GoodItem;
