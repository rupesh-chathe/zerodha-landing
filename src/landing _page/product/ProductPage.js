import React from 'react';
import Hero from "./Hero.js";
import LeftSection from './LeftSection.js';
import RightSection from './RightSection.js';
import Universe from './Universe.js';
import Navbar from '../Navbar.js';
import Footer from '../Footer.js';

 



function ProductPage(){
    return(
        <>
          <Hero />
          <LeftSection 
          imageURL=" media/image/kite.png" 
          productName ="kite"
           productDescription=" our ultra-fat flaship trading with streaming market data advanced charts an elegant ul and more enjoy the kite experince seamlessly on your Android and ios devices. "

            tryDemo=""
            learnMore="" 
            googlePlay=""
            appStore=""/>
          <RightSection imageURL=" media/image/console.png" 
          productName ="Console"
           productDescription=" The central dashboard for your Zerodha account gain insights into your trades and investment with in-depth reports and visualisation. "

            
            learnMore="" />
          <LeftSection 
          imageURL=" media/image/coin.png" 
          productName ="coin"
           productDescription=" Buy direct mutual funds online ,comission-free, delivered directly to your demant account .Enjoy the investment exprerence on your Android and ios devices "

            tryDemo=""
            learnMore="" 
            googlePlay=""
            appStore=""/>
          <RightSection imageURL=" media/image/kiteconnect.png" 
          productName ="Kite Connect API"
           productDescription=" build powerful trading platform and experiences with our super simple http/JSON apis .if you are a startup,build your investment app and showcase it to our clientbase. "

            
            learnMore="" />  
          <LeftSection 
          imageURL=" media/image/varsity.png" 
          productName ="Varsity mobile"
           productDescription=" An easy to grasp collction stocks market lessions with in-depth coverage and illustraction Content is broken down into bite-size cards to help you learn on the go. "

            tryDemo=""
            learnMore="" 
            googlePlay=""
            appStore=""/>
          
          <RightSection imageURL=" media/image/console.png" 
          productName ="Console"
           productDescription=" The central dashboard for your Zerodha account gain insights into your trades and investment with in-depth reports and visualisation. "

            
            learnMore="" 
         />
         <p className="text-center mt-5 mb-5"> Want to know about our technology stack? chechk out the Zerodha.tech blog.</p>
            

          <Universe/>
        </>
    );

}
export default ProductPage;