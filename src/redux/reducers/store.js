const initialState = {
  goods: [],
  buyGoods: [],
  loader: "none",
  dataStatus: "",
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetchingGoods": {
      return {
        ...state,
        loader: "loading",
      };
    }
    case "fetchedGoods": {
      return {
        ...state,
        goods: [action.payload],
        loader: "loaded",
      };
    }
    case "fetchedGoodsError": {
      return {
        ...state,
        loader: "loaded",
        dataStatus: "Error fetching",
      };
    }
    case "addGood": {
      return {
        ...state,
        buyGoods: [...state.buyGoods, action.payload],
        loader: "loaded",
      };
    }
    default:
      return state;
  }
};

export default storeReducer;
