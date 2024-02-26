import { useState } from "react";
import "./App.css";
import logo from "./Assests/logo.png";
import leftImg from "./Assests/leftImg.png";
import rightImg from "./Assests/rightImg.png";
import lastImg from "./Assests/lastImg.png";

function App() {
  return (
    <>
      <div className="main">
        <nav className="navBar">
          <img className="navImg" src={logo} alt="" />
        </nav>
        <div className="content">
          <div className="left">
            <img className="leftImg" src={leftImg} alt="" />
          </div>
          <div className="right">
            <h4>
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </h4>
            <ul>
              <li>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>
            <img className="rightImg" src={rightImg} alt="" />
            <p>
              Government of India has awarded the <b>"National Energy Conservation
              Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I.
              Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
              Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
            </p>
          </div>
        </div>
        <div className="insatlledLine">
          <span>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
          </span>
        </div>
        <div className="lastImage">
          <img className="lastImg" src={lastImg} alt="" />
        </div>
        <div className="pTag" style={{textAlign: "center", padding: "10px"}}>
        <p style={{fontWeight: "500"}}>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors</p>
        </div>
        <span className="line"><hr /></span>
        <div className="lastContent">
          <h4>
           C.R.I FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
          </h4>
          <p>
          CHEMICALS & PROCESS <span>|</span> POWER <span>|</span> WATER & WASTE WATER <span>|</span>  OILS & GAS <span>|</span> PHARMA <span>|</span> SUGARS & DISTILLERIES <span>|</span> PAPER & PULP <span>|</span> MARINE & DEFENCE <span>|</span> METAL & MINING <span>|</span> FOOD & BEVERAGE <span>|</span> PETROCHEMICAL & REFINERIES <span>|</span> SOLAR <span>|</span> BUILDING <span>|</span> HVAC <span>|</span> FIRE FIGHTING <span>|</span> AGRICULTURE & RESIDENTIAL
          </p>
        </div>
        <footer>
          <i class="ri-phone-fill">
            <span>Toll Free 1800 200 101</span>
          </i>
          <i class="ri-facebook-circle-line">
            <span>www.facebook.com</span>
          </i>
          <i class="ri-global-line">
            <span>www.crigroups.com</span>
          </i>
        </footer>
      </div>
    </>
  );
}

export default App;
