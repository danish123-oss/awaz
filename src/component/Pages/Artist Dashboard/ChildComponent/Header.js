import { NavLink } from "react-router-dom";
function Header() {
  return (
    <nav className="navigation user-navigation" id="sub-ajax-menu">
      <ul className="nav">
        <li className="">
          <NavLink className="sub-ajax" to={"./"}>
            Artist's Detail
          </NavLink>
        </li>
        <li className="">
          <NavLink className="sub-ajax" to={"./addartist"}>
            Add Artist
          </NavLink>
        </li>
        <li className="">
          <NavLink className="sub-ajax" to={"./artist"}>
            Add Tracks
            <span />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Header;
