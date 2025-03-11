import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  fetchedGoods,
  fetchedGoodsError,
  fetchingGoods,
} from "./redux/actions/action";
import GoodList from "./components/GoodList";
import Home from "./components/Home/Home";
import AddGoods from "./components/AddGoods/AddGoods";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchGoods = async () => {
      try {
        dispatch(fetchingGoods());
        const response = await axios.get("https://fakestoreapi.com/products");

        if (response.status === 200) {
          dispatch(fetchedGoods(response.data));
        } else {
          throw new Error("Server returned a non-200 status code");
        }
      } catch (error) {
        console.error("API fetch error:", error.message);
        dispatch(fetchedGoodsError());
      }
    };

    fetchGoods();
  }, [dispatch]);

  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} key="home" />
        <Route path="/goods" element={<AddGoods />} key="addGoods" />
        <Route path="/good-list" element={<GoodList />} key="goodList" />
      </Routes>
    </Router>
  );
}

export default App;
