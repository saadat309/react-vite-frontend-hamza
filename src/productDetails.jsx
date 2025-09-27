import React from 'react'
import CarouselWithThumbs from './components/productdetails_components/carousel-09'
import Product_cta from './components/productdetails_components/product_cta'
import PruductsTabs from './components/productdetails_components/PruductsTabs'


const ProductDetails = () => {
  return (
    <>
      <div className='bg-amber-200 flex gap-5'>
        <CarouselWithThumbs/>
           <Product_cta/> 
      </div>
      <div>
           <PruductsTabs/>
      </div>
     
        
    
    </>

  )
}

export default ProductDetails