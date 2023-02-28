/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  let cu = useSelector((store) => store.userSection.cu);
  //   let dispatch = useDispatch();

  let [checkUser, setCheckUser] = useState();
  let tryChar = checkUser?.usr_firstname;
  // let firstChar=tryChar[0]

  useEffect(() => {
    let userLogin = JSON.parse(localStorage.getItem("userLogin"));
    setCheckUser(userLogin);
  }, [cu]);
  const Logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };
  return (
    <>
      <input type="checkbox" id="menu-state" />
      <input type="checkbox" id="search-state" />
      <header id="header" class="site-header">
        <div class="header-container">
          <div class="site-navbar">
            <div class="site-brand">
              <label for="menu-state" class="menu-toggle">
                <i class="icon-nav"></i>
              </label>
              <div class="site-logo">
                <a href="http://music.flatfull.com/musicon/">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="6"
                      stroke="currentColor"
                      stroke-width="6"
                    ></circle>
                    <g class="loading-spin">
                      <circle cx="16" cy="16" r="1" fill="#fff"></circle>
                    </g>
                  </svg>
                </a>
              </div>
              <p class="site-title">
                <a href="http://music.flatfull.com/musicon/" rel="home">
                  Musicon
                </a>
              </p>
            </div>
            <div class="flex"></div>
            <form
              class="search-form"
              method="get"
              action="http://music.flatfull.com/musicon"
            >
              <input
                type="search"
                placeholder="Search..."
                value=""
                name="s"
                data-toggle="dropdown"
              />
              <label for="search-state" id="icon-search">
                <i class="icon-search">
                  <i></i>
                </i>
              </label>
              <div class="dropdown-menu"></div>
            </form>
            <div class="flex"></div>

            {checkUser ? (
              <nav className="menu-after-login">
                <ul className="nav">
                  <li data-toggle="dropdown" id="dropdown-notification">
                    <a data-pjax-state="" href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                      </svg>
                      <span className="count" />
                    </a>
                  </li>
                  <div className="dropdown-menu dropdown-menu-notificaitons">
                    <div className="dropdown-notification-list">
                      <div className="user-placeholder">
                        <p>You do not have any notifications</p>
                      </div>
                    </div>
                    <div className="view-all-notifications">
                      <a
                        href="http://music.flatfull.com/musicon/user/sarmad-awan/notifications/"
                        data-pjax-state=""
                      >
                        View all notifications
                      </a>
                    </div>
                  </div>
                </ul>
                <div className="menu-after-login-container">
                  <ul id="menu-after-login" className="nav">
                    <li
                      id="menu-item-2145"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-avatar current-menu-item menu-item-2145"
                    >
                      <a
                        href="http://music.flatfull.com/musicon/user/sarmad-awan/"
                        data-pjax-state=""
                      >
                        <span className="user-display-name">
                          {checkUser?.usr_firstname + checkUser?.usr_lastname}
                        </span>
                        <span className="avatar avatar-s">
                          <span className="avatar-name">M</span>
                        </span>
                      </a>
                      <ul className="sub-menu">
                        {/* <li
                          id="menu-item-2137"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2137"
                        >
                          <a
                            href="http://music.flatfull.com/musicon/user/sarmad-awan/playlists/"
                            data-pjax-state=""
                          >
                            Playlists
                          </a>
                        </li>
                        <li
                          id="menu-item-2138"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2138"
                        >
                          <a
                            href="http://music.flatfull.com/musicon/user/sarmad-awan/likes/"
                            data-pjax-state=""
                          >
                            Likes
                          </a>
                        </li>
                        <li
                          id="menu-item-2139"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2139"
                        >
                          <a
                            href="http://music.flatfull.com/musicon/user/sarmad-awan/followers/"
                            data-pjax-state=""
                          >
                            Followers
                          </a>
                        </li>
                        <li
                          id="menu-item-2140"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2140"
                        >
                          <a
                            href="http://music.flatfull.com/musicon/user/sarmad-awan/following/"
                            data-pjax-state=""
                          >
                            Following
                          </a>
                        </li>
                        <li
                          id="menu-item-2141"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2141"
                        >
                          <a
                            href="http://music.flatfull.com/musicon/user/sarmad-awan/download/"
                            data-pjax-state=""
                          >
                            Downloads
                          </a>
                        </li> */}
                        <li
                          id="menu-item-2142"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2142"
                        >
                          <Link to={"/dashboard"}>Profile</Link>
                        </li>
                        <li
                          id="menu-item-2135"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2135"
                        >
                          <Link to={"/labeldashboard"} data-pjax-state="">
                            Label Dashboard
                          </Link>
                        </li>
                        <li
                          id="menu-item-2144"
                          className="menu-divider menu-item menu-item-type-custom menu-item-object-custom no-ajax menu-item-2144"
                        >
                          <Link
                            to={"/login"}
                            data-pjax-state=""
                            onClick={Logout}
                          >
                            Log out
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>{" "}
              </nav>
            ) : (
              <nav class="menu-before-login">
                <div class="menu-before-login-container">
                  <ul id="menu-before-login" class="nav">
                    <li
                      id="menu-item-2133"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2133"
                    >
                      <Link to={"/login"}>Login</Link>
                    </li>
                    <li
                      id="menu-item-2134"
                      class="btn-link menu-item menu-item-type-post_type menu-item-object-page menu-item-2134"
                    >
                      <Link to={"/signup"}>Sign up</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
