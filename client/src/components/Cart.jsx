import { useSelector } from "react-redux";

export default function Cart() {

  const cart = useSelector(state => state.cart)

  return (
    <div className=" w-[320px] max-h-[500px] ">
      <div className="border-b-gray-500 border-b pb-1">
        <h1 className=" text-xl text-black ">Cart</h1>
      </div>

      <div>

      </div>

    </div>
  );
}
