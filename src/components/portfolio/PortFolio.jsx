import "./portfolio.scss";
// import item from "../../assets/images/item.jpg";
import PortfolioList from "../portfolioList/PortfolioList";
import { useState, useEffect } from "react";
import {
  featuredPortfolio,
  WebPortfolio,
  mobileApp,
  Content,
} from "../../data";
export default function PortFolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "New Arrivals",
    },
    {
      id: "web",
      title: "Analog",
    },
    {
      id: "mobile",
      title: "Final Stock",
    },
    {
      id: "content",
      title: "Best Sellers",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(WebPortfolio);
        break;
      case "mobile":
        setData(mobileApp);
        break;
      case "content":
        setData(Content);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
  return (
    <div className="portfolio">
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((item) => (
          <div className="item">
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
