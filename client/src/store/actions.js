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
    const response = await axios.get(`${URL}/products/${id}`);
    dispatch({ type: "GET_PRODUCT", payload: response.data });
  } catch (error) {
    console.error(error.data.message);
  }
};

export const addToCart = (productData) => async (dispatch) => {
  try {
    const response = await axios.post(`${URL}/cart`, productData);
    dispatch({ type: "ADD_TO_CART", payload: response.data });
    return { success: true };
  } catch (error) {
    console.error(error.data.message);
    return { success: false };
  }
};

export const getCart = () => async (dispatch) => {
  try {
    const response = await axios.get(`${URL}/cart`);
    dispatch({ type: "GET_CART", payload: response.data });
  } catch (error) {
    console.error(error.data.message);
  }
};

export const deleteProduct = (id, productData) => async (dispatch) => {
  try {
    await axios.delete(`${URL}/cart/${id}`, {
      data: productData,
    });
    dispatch({
      type: "DELETE_PRODUCT",
      payload: { productId: id, ...productData },
    });
  } catch (error) {
    console.error(error.data.message);
  }
};

export const updatedProduct = (id, productData) => async (dispatch) => {
  try {
    const response = await axios.put(`${URL}/cart/${id}`, productData);
    dispatch({ type: "EDIT_PRODUCT", payload: response.data });

    const responseCart = await axios.get(`${URL}/cart`);
    dispatch({ type: "GET_CART", payload: responseCart.data });
  } catch (error) {
    console.error(error.data.message);
  }
};

export const filterByCategory = (category) => (dispatch, getState) => {
  try {
    const { products_copy } = getState();
    let productsToFilter = [...products_copy]
    const filteredProducts = category ? productsToFilter.filter(product => product.category === category) : productsToFilter
    dispatch({ type: "FILTER_BY_CATEGORY", payload: filteredProducts })
  } catch (error) {
    console.error(error.data.message);
  }
}

export const orderByPrice = (order) => (dispatch, getState) => {
  try {
    const { products_copy } = getState();

    let productsToOrder = [...products_copy]

    if(order === 'desc') {
      productsToOrder.sort((a,b) => a.price - b.price )
    } else if (order === 'asc') {
      productsToOrder.sort((a,b) => b.price - a.price)
    }
    dispatch({ type: "ORDER_PRICE", payload: productsToOrder })

  } catch (error) {
    console.error(error.data.message);
  }
}
