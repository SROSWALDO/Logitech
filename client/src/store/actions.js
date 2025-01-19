import axios from "axios";

const URL = "http://localhost:5000";

export const getProducts = () => async (dispatch) => {
  try {
    const response = await axios.get(`${URL}/products`);
    dispatch({ type: "GET_PRODUCTS", payload: response.data });
  } catch (error) {
    console.error(error.data.message);
  }
};

export const getProductById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${URL}/products/${id}`)
    dispatch({ type: "GET_PRODUCT", payload: response.data })
  } catch (error) {
    console.error(error.data.message);
  }
}

export const addToCart = (productData) => async (dispatch) => {
  try {
    const response = await axios.post(`${URL}/cart`, productData)
    dispatch({ type: "ADD_TO_CART", payload: response.data })
    return { success: true }
  } catch (error) {
    console.error(error.data.message);
    return { success: false }
  }
}

export const getCart = () => async (dispatch) => {
  try {
    const response = await axios.get(`${URL}/cart`)
    dispatch({ type: "GET_CART", payload: response.data })
  } catch (error) {
    console.error(error.data.message);
  }
}
