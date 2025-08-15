import React from 'react';


function NotFound() {
    return (  
         <div className='container p-5 mb-5'>
           <div className='row text-center'>
                <h1 className='mt-5'>Page Not Found</h1>
                <p> The page you are looking for does not exist.</p>
                <button className='p-3 btn btn-primary fs-5 mb-5' style={{width:"20%",margin: "0 auto"}}> Go to Home </button>

           </div>

        </div>
    );
}

export default NotFound;