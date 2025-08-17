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
      <div className="col-6 mt-5">
        <h1>{ProductsName}</h1>
        <p>{ProductsDescription}</p>
        <div>
          <a href={TypeDemo}>Try Demo</a>
          <a href={LearnMore} style={{ marginLeft: "50px" }}>Learn More</a>
        </div>
        <div>
          <a className="mt-3" href={googlePlay}>
            <img src="media/images/googlePlayBadge.svg" />
          </a>
          <a href={AppStore}>
            <img src="media/images/appstoreBadge.svg" style={{ marginLeft: "50px" }} />
          </a>
        </div>
      </div>
      </div>
    </div>
  );
}

export default LeftSection;
