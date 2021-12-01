import "./topbar.scss";
import logoImg from "../../assets/images/Vector (1).png";
export default function TopBar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className={menuOpen ? "active" : "logo"}>
            Ugmonk
          </a>
          <span className="logoImg">
            <img src={logoImg} alt="" />
          </span>
        </div>
        <div className="center">
          <ul>
            <li>
              <a href="men" id="person">Men</a>
            </li>
            <li>
              <a href="women" id="person">Women</a>
            </li>
            <li>
              <a href="#object">Objects</a>
            </li>
            <li>
              <a href="#analog">Analog</a>
            </li>
          </ul>
        </div>
        <div className="rightOne">
          <div className="upLogin">
            <span>Journal</span>
            <span>Search</span>
            <span>Login</span>
            <span>
              <i class="fa-solid fa-cart-shopping"></i>
            </span>
          </div>
          <div className="downLogin">
            <input type="text" />
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
