import React from "react";

const Header = () => {
  return (
    <div className="container">
      <header>
        <a>
          <div className="img_container">
            <img src="https://exor.finance/static/media/EXOR.85350c72.png" />
            <p>Exor Protocol</p>
          </div>
        </a>

        {/*  links */}
        <div className="left_links">
          <a href="#">Dashboard</a>
          <a href="#">Farms</a>
          <a href="#">Boardroom</a>
          <a href="#">Bonds</a>
          <a href="#">Rebates</a>
          <a href="#">Documentation</a>
        </div>

        <div className="right_links">
          <img src="https://exor.finance/static/media/EXOR.85350c72.png" />
          <span>$ 2.20</span>

          <img src="https://exor.finance/static/media/EXS.6a991696.png" />
          <span>$ 2.20</span>

          <div className="discordImg">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStqhkUSd7FIbrw2QrZDw6e3-UMshrJlifpFg&usqp=CAU" />
          </div>
        </div>

        <div className="connectBtn">
          <button>CONNECT</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
