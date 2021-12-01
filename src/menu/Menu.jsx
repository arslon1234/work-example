import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")} id="intro">
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#men">Men</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#women">Women</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#object">Objects</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#analog">Analog</a>
        </li>
      </ul>
    </div>
  );
}
