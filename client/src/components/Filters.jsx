import { useDispatch, useSelector } from "react-redux"
import { filterByCategory } from "../store/actions"

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


  return (
    <div className="shadow-2xl">
      <select onChange={handleFilterCategory} className="focus:outline-none" >
        <option value="">Filter By Category</option>
        {categories.map((category, index) => (
            <option key={index} value={category}>{category.charAt(0).toUpperCase() + category.slice(1) }</option>
        ))}
      </select>
    </div>
  )
}
