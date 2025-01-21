import { useDispatch, useSelector } from "react-redux"
import { filterByCategory, orderByPrice } from "../store/actions"

export default function Filters() {

    const products = useSelector(state => state.products_copy)
    const dispatch = useDispatch()

    const categories = Array.from(
        new Set(products.map(product => product.category))
    )

    const handleFilterCategory = (e) => {
        const category = e.target.value;
        dispatch(filterByCategory(category))
    }

    const handleOrderByPrice = (e) => {
        const order = e.target.value;
        dispatch(orderByPrice(order))
    }


  return (
    <div className="shadow-2xl flex flex-col justify-center items-center">
      <select onChange={handleFilterCategory} className="focus:outline-none  mb-3" >
        <option value="">Filter By Category</option>
        {categories.map((category, index) => (
            <option key={index} value={category}>{category.charAt(0).toUpperCase() + category.slice(1) }</option>
        ))}
      </select>

      <select className="focus:outline-none" onChange={handleOrderByPrice} >
        <option value="">Filter By Price</option>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>
    </div>
  )
}
