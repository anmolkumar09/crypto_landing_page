import React from "react";
import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Section2 from "./components/Section2";
import Footer from "./components/Footer";
import FooterLinks from "./components/FooterLinks";
// import "./components/responsive.css";
import styles from "./index.css";
function App() {
  return (
    <>
      <Header />
      <Section />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          placeItems: "center",
          ...styles,
        }}
      >
        <Section2
          img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdV3w4R5eJCubPeZ-BZa_Qdk4Md3BCBhhQrg&usqp=CAU"
          }
          title={"ETH"}
          subName={"Ethereum"}
          price={"$1850.16"}
          price1={"$222.30B"}
          price2={"-0.34%"}
          purchase={"PURCHASE"}
        />
        <Section2
          img={"https://exor.finance/static/media/EXOR.85350c72.png"}
          title={"EXOR"}
          subName={"Exor"}
          price={"0.0013"}
          price1={"134.40"}
          price2={"56"}
          line={"Circulating Supply: "}
          price3={"56"}
          line2={"Total Supply: "}
          price4={"56"}
          price5={"$2.40"}
          purchase={"PURCHASE"}
        />
        <Section2
          img={"https://exor.finance/static/media/EXS.6a991696.png"}
          title={"EXOR"}
          subName={"Exor"}
          price={"0.0013"}
          price1={"0.0000"}
          price2={"56"}
          line={"Circulating Supply: "}
          price3={"13927"}
          line2={"Total Supply: "}
          price4={"75009"}
          price5={"$0.00"}
          purchase={"PURCHASE"}
        />
        <Section2
          img={"https://exor.finance/static/media/EXOR.85350c72.png"}
          title={"EXB"}
          subName={"Exor Bond"}
          price={"0.0000"}
          price1={"$2.40"}
          price2={"56"}
          line={"Circulating Supply: "}
          price3={"0"}
          line2={"Total Supply: "}
          price4={"0"}
          price5={"$2.40"}
          purchase={"BOND"}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Footer
          mainheading={"EXOR-WETH SLP"}
          img={"https://exor.finance/static/media/EXOR-ETH-01.3a3d0009.png"}
          heading1={"27.62 EXOR / 0.04 WETH"}
          p1={"$132.60"}
          p2={"Liquidity: $21.06"}
          p3={"Total supply: 0.16"}
        />
        <Footer
          mainheading={"EXS-WETH SLP"}
          img={"https://exor.finance/static/media/EXOR-ETH-01.3a3d0009.png"}
          heading1={"27.62 EXOR / 0.04 WETH"}
          p1={"$132.60"}
          p2={"Liquidity: $21.06"}
          p3={"Total supply: 0.16"}
        />
      </div>
      <FooterLinks />
    </>
  );
}

export default App;
