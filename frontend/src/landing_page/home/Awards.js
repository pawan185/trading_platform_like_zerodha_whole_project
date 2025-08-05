import React from 'react';
function Awards() {
    return ( 
        <div className='container '>
            <div className='row '> 
                <div className='col-6'>
                    <img src='media/images/largestBroker.svg' alt="Award 1" className="img-fluid" />
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1 className='mt-5'>Largest  Stock Broker in India</h1>
                    <p>2+ millons zerodha clients  contribute  to over 15%  of all  retail order  volume in India daily  by trading and investing in.</p>
                   <div className='row'>
                        <div className='col-6'> 
                             <ul>
                        <li> Future and option </li>
                        <li> commodity derivatives </li>
                        <li> currency derivatives </li>

                   </ul>
                        </div>
                        <div className='col-6'> 
                           <ul>
                        <li>stocks & ipo </li>
                        <li> Direct mutual funds</li>
                        <li> Bonds and Govt. Securities </li>

                   </ul>
                        </div>
                   </div>
                   
                   <img src='media/images/pressLogos.png'  Style ={{width :"90%"}} />
                </div>

            </div>


        </div>
     );
}

export default Awards;