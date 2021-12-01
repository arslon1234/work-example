import React, { useState } from "react";
import TopBar from "./components/topBar/TopBar";
import Intro from "./components/intro/Intro";
import PortFolio from "./components/portfolio/PortFolio";
import "./app.scss";
import Menu from "./menu/Menu";
import Analog from "./components/analog/Analog";
import Journal from "./components/journal/Journal";
import Objects from "./components/objects/Objects";
import ObjectProduct from "./components/objectProduct/ObjectProduct";
import Story from './components/story/Story'
import Loop from "./components/loop/Loop";
import Footer from "./components/footer/Footer";
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <PortFolio />
        {/* <button className="shopArrival">Shop New Arrivals</button> */}
        <Analog />
        <Journal />
        <Objects />
        <ObjectProduct />
        <Story/>
        <Loop/>
        <div className="appFooter">
        <Footer/>
        </div>
      </div>
    </div>
  );
}
