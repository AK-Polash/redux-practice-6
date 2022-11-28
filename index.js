let { createStore, applyMiddleware } = require("redux");
let { default: logger } = require("redux-logger");
let GET_PRODUCTS = "GET_PRODUCTS";
let ADD_PRODUCT = "ADD_PRODUCT";

// States:
let productState = {
  count: 1,
  products: ["Pen"],
};

// Actions:
let getProductAction = () => {
  return {
    type: GET_PRODUCTS,
  };
};

let addProductAction = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

// Reducer:
let productReducer = (state = productState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };

    case ADD_PRODUCT:
      return {
        count: state.count + 1,
        products: [...state.products, action.payload],
      };

    default:
      return state;
  }
};

// Store:
let store = createStore(productReducer, applyMiddleware(logger));
store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch actions:
store.dispatch(getProductAction());
store.dispatch(addProductAction("Paper"));
store.dispatch(addProductAction("Book"));
