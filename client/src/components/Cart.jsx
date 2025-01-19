import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../store/actions";
import trash from "../assets/trash.svg";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  return (
    <div className="w-[370px] max-h-[400px] overflow-y-auto bg-white shadow-lg rounded-lg p-1">
      <div className="border-b border-gray-300 pb-3 mb-3">
        <h1 className="text-xl font-semibold text-gray-800">Shopping Cart</h1>
      </div>

      <div className="space-y-4">
        {cart.map((product) => (
          <div
            className="flex items-center gap-4 p-3 bg-gray-50 shadow-sm rounded-lg hover:shadow-md transition-shadow duration-200"
            key={product.id}
          >
            <img
              className="w-20 h-20 object-cover rounded-md"
              src={product.image}
              alt={product.name}
            />
            <div className="flex-1">
              <h2 className="text-gray-800 text-lg font-medium truncate">
                {product.name}
              </h2>
              <p className="text-sm text-gray-600">
                Color: <span className="font-medium">{product.color}</span>
              </p>
              <div className="flex justify-between items-center w-[230px] ">
                <div className="flex items-center mt-2 space-x-2">
                  <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100">
                    -
                  </button>
                  <span className="text-gray-800 font-medium">
                    {product.quantity}
                  </span>
                  <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100">
                    +
                  </button>
                </div>
                <div>
                  <img src={trash} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
