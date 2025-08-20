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
  <RightSection imageURL="media/images/console.png"
  ProductsName="Console"
  ProductsDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
  LearnMore="" />
  <LeftSection  imageURL="media/images/coin.png"
  ProductsName="coin"
  ProductsDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
  TypeDemo=""
  LearnMore=""
  googlePlay=""
  AppStore="" />
  <RightSection imageURL="media/images/kiteconnect.png"
  ProductsName="Kite Connect API"
  ProductsDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
  LearnMore="Kite Connect"
   />
  <LeftSection  imageURL="media/images/varsity.png"
  ProductsName="Varsity mobile"
  ProductsDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
  TypeDemo=""
  LearnMore=""
  googlePlay=""
  AppStore="" />

  <p className='text-center fs-4'>Want to know more about our technology stack? Check out the <a href='' style={{ textDecoration: "none" }}>Zerodha.tech</a>  blog.</p>

       <Universe />

       </>
     );
}

export default ProductsPage;