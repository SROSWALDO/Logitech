/* eslint-disable react/prop-types */
import { Carousel, Dialog, DialogBody } from '@material-tailwind/react'
import { useDispatch, useSelector } from 'react-redux'
import { colors } from './Products'
import { addToCart } from '../store/actions'
import { useState } from 'react'

export default function ProductDetail({ open, handleOpen, setOpen }) {

  const dispatch = useDispatch()

  const product = useSelector(state => state.product)

  const selectedColor = (color) => {
    setProductData(prevData => ({
      ...prevData,
      color
    }))
  }

  const [productData, setProductData] = useState({
    color: "",
    quantity: 1
  })

  const handleSubmit = async () => {
    const data = {
      productId: product.id,
      color: productData.color,
      quantity: productData.quantity
    }
    const response = await dispatch(addToCart(data))

    if(response.success) {
      setOpen(false)
      setProductData({
        color: "",
        quantity: 1
      })
    } else {
      console.error("Error al agregar el carrito");
      
    }
  }

  return (
    <Dialog  open={open} handler={handleOpen} size='md' >
    <DialogBody className='flex items-center '>
        <div className=' bg-blue-gray-50 ' >
          <Carousel autoplay={true} autoplayDelay={1000} loop >
            {product?.images?.map((image,index) => (
              <img className='w-[300px] h-[300px] object-cover pl-5 '  key={index} src={image.url} alt="" />
            ))}
          </Carousel>
        </div>
        <div>
          <h1 className='text-black font-semibold text-xl w-[300px] text-center mt-3'>{product.name}</h1>
          <div className='flex justify-center mt-5'>
            {product?.variants?.map((variant,index) => (
              <div onClick={() => selectedColor(variant.color) } style={{ backgroundColor: colors[variant.color] }} key={index} title={variant.color} className={`w-6 h-6 rounded-full border border-black mx-1 cursor-pointer ${productData.color === variant.color ? "border-blue-500 border-[3px] " : "" } `} ></div>
            ))}
          </div>
          <div>
            <p className='mt-4 w-[250px] text-center text-sm m-auto '>{product.description}</p>
          </div>
          <div className='flex justify-between px-2 items-center mt-5'>
          <p className='text-black font-semibold text-lg'>${product.price}</p>
          <button onClick={handleSubmit} className='bg-black p-2 text-white px-6 rounded '>Buy</button>

          </div>
        </div>
    </DialogBody>
      
    </Dialog>
  )
}
