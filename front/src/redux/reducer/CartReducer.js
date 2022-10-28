let init = {
  products: [],
};

const CartReducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD ITEM":
      alert("");
      return { ...state, products: payload.products };

    default:
      return state;
  }
};

export default CartReducer;
