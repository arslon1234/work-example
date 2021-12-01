import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  // const textRef = useRef();
  // useEffect(() => {
  //   init(textRef.current, {
  //     showCursor: true,
  //     backDelay: 1500,
  //     backSpeed: 60,
  //     strings: ["Front-End", "JavaScript", "Reactjs"],
  //   });
  // }, []);
  return (
    <div className="intro" id="home">
      <div className="introDesc">
        <span>Analog: The Simplest Productivity System</span>
        <span>Shop now →</span>
        <span></span>
      </div>
    </div>
  );
}
