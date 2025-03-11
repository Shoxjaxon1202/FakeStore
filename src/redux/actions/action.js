const fetchingGoods = () => {
  return {
    type: "fetchingGoods",
  };
};

const fetchedGoods = (data) => {
  return {
    type: "fetchedGoods",
    payload: data,
  };
};

const fetchedGoodsError = (data) => {
  return {
    type: "fetchedGoodsError",
  };
};

const addGood = (good) => {
  return {
    type: "addGood",
    payload: good,
  };
};

export { fetchingGoods, fetchedGoods, fetchedGoodsError, addGood };
