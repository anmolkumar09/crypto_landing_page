import React from "react";

const Section2 = ({
  img,
  title,
  subName,
  price,
  price1,
  price2,
  price3,
  price5,
  line,
  line2,
  price4,
  purchase,
}) => {
  return (
    <div>
      <div className="section2_container">
        <div className="wrapper">
          <div className="img">
            <img src={img} />
          </div>
          <div className="main_text">
            <h2>{title}</h2>
            <p>{subName}</p>
            <h3>
              {price}
              <span>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdV3w4R5eJCubPeZ-BZa_Qdk4Md3BCBhhQrg&usqp=CAU" />
              </span>
            </h3>

            <p>{price5}</p>
          </div>

          <div className="bottom_text">
            <div className="text1">
              Market cap:
              <span className="active">{price1}</span>
            </div>
            <div className="text2">
              24h Price Change:
              <span>{price2}</span>
            </div>
            <div className="text2">
              {line}
              <span>{price3}</span>
            </div>
            <div className="text2">
              {line2}
              <span>{price4}</span>
            </div>
          </div>

          <div className="button">
            <a href="#">{purchase}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
