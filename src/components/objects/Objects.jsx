import "./objects.scss";
import man from "../../assets/images/Rectangle (38).png";
import male from "../../assets/images/Rectangle (39).png";
export default function Objects() {
  return (
    <div className="object" id="object">
      <div className="objectTitle">
        <span>Our mission is to create simple, beautiful</span>
        <span>objects that combine form and function.</span>
      </div>
      <div className="objectImage">
        <div className="imgleft">
          <img src={man} alt="" />
        </div>
        <div className="imgright">
          <img src={male} alt="" />
        </div>
      </div>
    </div>
  );
}
