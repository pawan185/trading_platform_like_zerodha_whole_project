import React from 'react';


function Pricing() {
    return ( 
       <div className='container p-5'>
        <div className='row '>
            <div className='col-4'>
            <h1 className='mb-3'>Unbeatable pricing</h1>
            <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
<a href='' className='mx-5'style={{textDecoration:"none"}}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
            <div className='col'>
                
            </div>
            <div className='col-6'>
                <div className='row text-center'>
                    <div className='col  border'>
                        <img src='media/images/0pricing-eq.svg' style={{width: "90%"}} alt='description'/>
                        <p>Free account <br/> opening</p>
                    </div>
                    <div className='col border'>
                        <img src='media/images/0pricing-eq.svg' style={{width: "90%"}} alt='description'/> <p>Free equity delivery
<br/>  and direct mutual funds</p>
                    </div>
                     <div className='col  border mb-5'>
                       <img src='media/images/20other-trades.svg' style={{width: "90%"}} alt='description'/> <p>Intraday and
<br/>  F&O</p>
                    </div>
                </div>
                
            </div>
        </div>

       </div>
     );
}

export default Pricing;