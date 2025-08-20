import React from 'react';
function RightSection( {imageURL,
  ProductsName,
  ProductsDescription,
  LearnMore,
}) {
    return ( 
        <div className="container ">
          <div className="row mt-5 ">
          <div className="col-6 mt-5 mb-5">
        <h3>{ProductsName}</h3>
        <p>{ProductsDescription}</p>
        <div className="mb-4 text-muted">
          <a href={LearnMore} style={{ textDecoration :"none" , marginRight: "50px" }}>Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
       
      </div>
      
      <div className="col-6 p-3"> 
        <img src={imageURL} />
      </div>
      
      </div>
    </div>
     );
}

export default RightSection;