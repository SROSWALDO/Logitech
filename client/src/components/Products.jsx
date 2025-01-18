import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById, getProducts } from "../store/actions";
import prev from "../assets/prev.svg";
import next from "../assets/next.svg";
import cart from "../assets/cart_add.svg";
import ProductDetail from "./ProductDetail";

export const colors = {
  blanco: "#ffffff",
  negro: "#000000",
  rosa: "#FFC0CB",
  fuchsia: "#FF00FF",
  plateado: "#C0C0C0",
};

export default function Products() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);

  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);

  const handleDetail = (product) => {
    handleOpen()
    dispatch(getProductById(product))
  }

  //? Pagination
  const productsForPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * productsForPage;
  const endIndex = startIndex + productsForPage;
  const productsPaginates = products.slice(startIndex, endIndex);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="w-full">
      <div className="w-[90%] m-auto mt-5 ">
        <div>
          <div className="w-[110px] border-b-4 border-black ">
            <h1 className="uppercase font-semibold text-lg ">Novedades</h1>
          </div>
        </div>
      </div>

      <div className="flex justify-between flex-wrap mt-5 w-full px-32  ">
        {productsPaginates.map((product) => (
          <div className="flex flex-col justify-between shadow p-1 " key={product.id}>
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

                <img onClick={() => handleDetail(product.id)} className="bg-black rounded-full h-8 w-8 p-1 cursor-pointer hover:bg-black/80 mr-5" src={cart} alt="" />

              </div>
            </div>
          </div>
        ))}
      </div>

      <ProductDetail open={open} handleOpen={handleOpen} />

      <div className="flex justify-center items-center mt-5 mb-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="bg-black p-1 rounded-full"
        >
          <img className="w-7" src={prev} alt="" />
        </button>
        <p className="mx-3 text-xl">{currentPage}</p>
        <button
          disabled={currentPage > products.length / productsForPage}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="bg-black p-1 rounded-full"
        >
          <img className="w-7" src={next} alt="" />
        </button>
      </div>
    </div>
  );
}
