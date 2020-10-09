import { DELETE_PRODUCT } from "../actions/product";

const { default: PRODUCTS } = require("../../data/dummy-data");

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')
}

const productsReducer = (state = initialState , action) => {
  switch(action.type) {
    case DELETE_PRODUCT:
      return {
        ...state,
        userProducts: state.userProducts.filter(product => product.id !== action.pid),
        availableProducts: state.availableProducts.filter(product => product.id !== action.pid)
      }
  }
  return state
}

export default productsReducer;