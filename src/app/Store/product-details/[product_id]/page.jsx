import Container from '@/Component/Container'
import { getProducts } from '@/library'
import Image from 'next/image'

const ProductDetails = async({params}) => {
  const product = await getProducts(params.product_id)
  return (
    <Container className='col-span-4 mt-4'>
      <div className='px-4'>
        <div className='flex flex-col md:flex-row bg-white'>
          <div className='md:w-1/2 relative md:h-[50vh] h-[40vh]'>
          <Image src={product.image} alt={product.id} fill className='object-contain' />
          </div>
          <div className='md:w-1/2 mt-4 md:mt-0'>
          <h1 className='text-xl font-semibold text-gray-800 cursor-pointer'>{product.title.slice(0 , 40) + ' ...'}</h1>
          <p className='text-sm text-gray-400 mt-4'>{product.description.slice(0,200) + ' ...'}</p>
          <p className='text-lg font-semibold text-gray-900 mt-4'>${product.price}</p>
          {product.discount && (
                  <p className='text-md text-red-500 mt-4'>Discount : ${product.discount}</p>
          )}
          <ul className='text-gray-700 space-y-2'>
            <li><strong>Brand :</strong> {product.brand}</li>
            <li><strong>Model :</strong> {product.model}</li>
            <li><strong>Color :</strong> {product.color}</li>
            <li><strong>Category :</strong> {product.category}</li>
          </ul>
          <button className='mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700'>
            Add to Cart
          </button>
          </div>
        </div>

      </div>
    </Container>
  )
}

export default ProductDetails