/* eslint-disable react/prop-types */
import { Dialog, DialogBody } from '@material-tailwind/react'
import { useSelector } from 'react-redux'
import { colors } from './Products'

export default function ProductDetail({ open, handleOpen }) {

  const product = useSelector(state => state.product)

  return (
    <Dialog  open={open} handler={handleOpen} size='md' >
    <DialogBody className='flex items-center '>
        <div>
          <img className='w-[330px]' src={product.image} alt="" />
        </div>
        <div>
          <h1 className='text-black font-semibold text-xl w-[300px] text-center mt-3'>{product.name}</h1>
          <div className='flex justify-center mt-5'>
            {product?.variants?.map((variant,index) => (
              <div style={{ backgroundColor: colors[variant.color] }} key={index} title={variant.color} className='w-6 h-6 rounded-full border border-black mx-1' ></div>
            ))}
          </div>
          <div>
            <p className='mt-4 w-[250px] text-center text-sm m-auto '>{product.description}</p>
          </div>
          <div className='flex justify-between px-2 items-center mt-5'>
          <p className='text-black font-semibold text-lg'>${product.price}</p>
          <button className='bg-black p-2 text-white px-6 rounded '>Buy</button>

          </div>
        </div>
    </DialogBody>
      
    </Dialog>
  )
}
