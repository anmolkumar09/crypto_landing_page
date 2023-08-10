import React from "react";

const Section = () => {
  return (
    <div>
      <div className="Section_container">
        <div className="wrapper" id="wrapper1">
          <h1>The Exor Protocol</h1>
          <p className="active">
            An novel seigniorage project on Arbitrum One blockchain. Exor's
            stablecoin mechanisms use bond premiums and elasticity Staked
            accumulated EXS in the Boardroom to mint EXOR.
          </p>
          <h2>Exor is experimental. Invest at your own risk.</h2>

          <div className="boxText">
            <p>
              Total Value Locked
              <br></br>
              $19
            </p>
          </div>
        </div>

        <div className="wrapper" id="wrapper2">
          <h2>My Balances</h2>
          <div className="box">
            <img src="https://exor.finance/static/media/EXOR.85350c72.png" />

            <p>0.0000</p>

            <p>EXOR available $0.00 </p>
            <div className="wrapper2_btn">
              <a href="#">TRADE</a>
              <a href="#">CHART</a>
              <a href="#">CONTRACT</a>
            </div>
          </div>

          <div className="box">
            <img src="https://exor.finance/static/media/EXS.6a991696.png" />

            <p>0.0000</p>

            <p>EXOR available $0.00 </p>

            <div className="wrapper2_btn">
              <a href="#">TRADE</a>
              <a href="#">CHART</a>
              <a href="#">CONTRACT</a>
            </div>
          </div>

          <div className="box">
            <img src="https://exor.finance/static/media/EXOR.85350c72.png" />
            <p>0.0000</p>
            <p>EXB available $0.00</p>
            <div className="wrapper2_btn">
              <a href="#">BOND</a>
              <a href="#">CONTRACT</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
