import { axios } from "axios";

const CartAction = (props) => {
  return async (dispatch, getState) => {
    const products = await axios({
      method: "post",
      url: "http://localhost:8000/products",
      data: {
        // id,
        // name,
        // price,
        // amount,
      },
    });
  };
};

export default CartAction;
