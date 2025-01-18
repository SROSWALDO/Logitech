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
