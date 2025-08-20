import React from "react";
function LeftSection({
  imageURL,
  ProductsName,
  ProductsDescription,
  TypeDemo,
  LearnMore,
  googlePlay,
  AppStore,
}) {
  return (
    <div className="container">
      <div className="row mt-5 ">
      <div className="col-6 p-3">
        <img src={imageURL} />
      </div>
      <div className="col-6 mt-5 mb-5">
        <h3>{ProductsName}</h3>
        <p>{ProductsDescription}</p>
        <div className="mb-4 text-muted">
          <a href={TypeDemo} style={{ textDecoration :"none" , marginRight: "50px" }}>Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          <a href={LearnMore} style={{ marginLeft: "110px", textDecoration :"none" }}>Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
        <div >
          <a className="mt-3" href={googlePlay}>
            <img src="media/images/googlePlayBadge.svg" style={{ marginRight: "50px" }}/>
          </a>
          <a className="mb-5" href={AppStore}>
            <img src="media/images/appstoreBadge.svg" style={{ marginLeft: "50px" }} />
          </a>
        </div>
      </div>
      </div>
    </div>
  );
}

export default LeftSection;
