import React from 'react';
function Hero() {
    return ( 
      <div className="container">
        <div className='row text-center'>
       <h1 className='mb-4'>Charges</h1>
       <h3 className='text-muted'>List of all charges and taxes</h3>
       </div>
       <div className='row p-5 mt-5'>
        <div className='col-4 p-4 text-center'>
          <img src='media/images/pricingEquity.svg'></img>
          <h3>Free equity delivery</h3>
          <p className='text-muted mt-4 '>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className='col-4 p-4'>
          <img src='media/images/intradayTrades.svg'></img>
          <h3>Intraday and F&O trades</h3>
          <p className='text-muted mt-4 '>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className='col-4 p-4 text-center'>
          <img src='media/images/pricingEquity.svg'></img>
          <h3>Free direct MF</h3>
          <p className='text-muted mt-4'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
       </div>
       <div className='row text-center'>
                
                <h1 className='mt-5'>Open a Zerodha account</h1>
                <p> Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className='p-3 btn btn-primary fs-5 mb-5' style={{width:"20%",margin: "0 auto"}}> Sign up Now </button>

           </div>
       </div>
     );
}

export default Hero;