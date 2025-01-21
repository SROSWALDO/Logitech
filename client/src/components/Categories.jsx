import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByCategory, getProducts } from "../store/actions";
import { useParams } from "react-router-dom";
import { colors } from "./Products";
import cart from "../assets/cart_add.svg";
import Navbar from "./Navbar";

export default function Categories() {
  const dispatch = useDispatch();

  const { category } = useParams();
  const products = useSelector((state) => state.products);
  const products_copy = useSelector((state) => state.products_copy);

  useEffect(() => {
    if (products_copy.length === 0) {
      dispatch(getProducts());
    }
  }, [dispatch, products_copy]);

  useEffect(() => {
    if (products_copy.length > 0 && category) {
      dispatch(filterByCategory(category));
    }
  }, [category, dispatch, products_copy]);

  console.log(products);
  return (
    <div>
    <Navbar/>
      <div className="flex justify-between flex-wrap mt-5 w-full px-32  ">
        {products.map((product) => (
          <div
            className="flex flex-col justify-between shadow p-1 bg-white "
            key={product.id}
          >
            <div className="w-[380px] flex items-center h-[350px] bg-slate-100 m-1 mt-5 ">
              <img className=" " src={product.image} alt="" />
            </div>

            <div className="flex">
              {product.variants.map((variant, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: colors[variant.color] }}
                  className="w-5 h-5 rounded-full border border-black flex mx-1 "
                  title={variant.color}
                >
                  {" "}
                </div>
              ))}
            </div>

            <div>
              <h1 className="font-semibold uppercase mt-5 text-lg flex-1 ">
                {product.name}
              </h1>
              <p className="w-[370px] font-light text-gray-500 text-sm mt-5 ">
                {product.description}
              </p>
              <div className="flex justify-between items-center">
                <p className="mt-5 font-semibold text-xl">
                  $
                  {product.price.toString().length > 3
                    ? product.price.toString().slice(0, -3) +
                      "," +
                      product.price.toString().slice(-3)
                    : product.price}
                </p>

                <img
                  className="bg-black rounded-full h-8 w-8 p-1 cursor-pointer hover:bg-black/80 mr-5"
                  src={cart}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
