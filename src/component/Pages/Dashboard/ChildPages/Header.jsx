import { NavLink } from "react-router-dom";
function Header() {
  return (
    <nav className="navigation user-navigation" id="sub-ajax-menu">
      <ul className="nav">
        <li className="">
          <NavLink className="sub-ajax" to={"./"}>
            Account
          </NavLink>
        </li>
        <li className="">
          <NavLink className="sub-ajax" to={"./artist"}>
            Artist
            <span />
          </NavLink>
        </li>
        <li className="">
          <NavLink className="sub-ajax" to={"./manager"}>
            Manager
            <span />
          </NavLink>
        </li>
        <li className="">
          <NavLink className="sub-ajax" to={"./label"}>
            Label
            <span />
          </NavLink>
        </li>
        <li className="">
          <a className="sub-ajax" href="/">
            Following
            <span />
          </a>
        </li>
        <li className="">
          <a className="sub-ajax" href="/">
            Downloads
            <span />
          </a>
        </li>

        <li className="">
          <a className="sub-ajax" href="/">
            Notifications
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Header;
