import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
function ProductsPage() {
    return ( 
       <>
       <Hero />
       <LeftSection  imageURL="media/images/kite.png"
  ProductsName="Kite"
  ProductsDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
  TypeDemo=""
  LearnMore=""
  googlePlay=""
  AppStore="" />
       <RightSection />
       <Universe />

       </>
     );
}

export default ProductsPage;