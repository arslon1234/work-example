import "./objectproduct.scss";
import productImg from "../../assets/images/Rectangle (40).png";
export default function ObjectProduct() {
  return (
    <div className="objectProduct">
      <div className="ProductImage">
        <img src={productImg} alt="logo" />
      </div>
      <div className="productLink">
        <span>Shop Objects →</span>
      </div>
    </div>
  );
}
