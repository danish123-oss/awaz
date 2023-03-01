// import styled from "./sideBar.module.css";
import { Link } from "react-router-dom";
function SideBar() {
  return (
    <aside id="aside" class="site-sidebar">
      <div class="site-brand">
        <label for="menu-state" class="menu-toggle" style={{ display: "flex" }}>
          <i class="icon-nav"></i>
        </label>
        <div class="site-logo">
          <Link to={"/"}>
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
          </Link>
        </div>
        <p class="site-title">
          <Link to={"/"} rel="home">
            Musicon
          </Link>
        </p>
      </div>

      <header id="side-header" class="site-sidebar-header">
        <div class="wp-block-block-permission">
          <div
            class="wp-block-cover is-light rounded dark-white"
            style={{ minHeight: 50 }}
          >
            <span
              aria-hidden="true"
              class="wp-block-cover__background has-white-background-color has-background-dim-100 has-background-dim"
            ></span>
            <div class="wp-block-cover__inner-container">
              <p class="no-margin has-small-font-size">
                <strong>Subscribe Now</strong>
              </p>

              <div
                style={{ height: 10 }}
                aria-hidden="true"
                class="wp-block-spacer"
              ></div>

              <p
                class="has-text-color has-small-font-size"
                style={{ color: "#888888" }}
              >
                Follow your favorite artists and create unlimited playlists.
              </p>

              <div class="wp-block-buttons">
                <div class="wp-block-button has-custom-width wp-block-button__width-100 button-sm btn-primary">
                  <a
                    class="wp-block-button__link"
                    href="/"
                    style={{
                      borderRadius: "0",
                      textDecoration: "none",
                      backgroundColor: "#06C478",
                    }}
                  >
                    Subscribe Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav id="primary-menu" class="primary-menu">
        <div class="menu-primary-container">
          <ul id="menu-primary" class="nav">
            <li
              id="menu-item-2106"
              class="icon-grid hide-icon menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-15 current_page_item menu-has-icon menu-item-2106"
            >
              <a href="http://music.flatfull.com/musicon/" aria-current="page">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  class="svg-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
                <span>Discover</span>
              </a>
            </li>
            <li
              id="menu-item-2107"
              class="icon-disc hide-icon menu-item menu-item-type-post_type menu-item-object-page menu-has-icon menu-item-2107"
            >
              <a href="http://music.flatfull.com/musicon/browse/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  class="svg-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <span>Browse</span>
              </a>
            </li>
            <li
              id="menu-item-2108"
              class="menu-header menu-item menu-item-type-custom menu-item-object-custom menu-item-2108"
            >
              <a href="#">My Collection</a>
            </li>
            <li
              id="menu-item-2109"
              class="icon-favorite menu-item menu-item-type-custom menu-item-object-custom menu-has-icon menu-item-2109"
            >
              <a href="http://music.flatfull.com/musicon/login/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  class="svg-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                <span>Likes</span>
              </a>
            </li>
            <li
              id="menu-item-2113"
              class="icon-disc menu-item menu-item-type-custom menu-item-object-custom menu-has-icon menu-item-2113"
            >
              <a href="http://music.flatfull.com/musicon/login/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  class="svg-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <span>Tracks</span>
              </a>
            </li>
            <li
              id="menu-item-2114"
              class="icon-list menu-item menu-item-type-custom menu-item-object-custom menu-has-icon menu-item-2114"
            >
              <a href="http://music.flatfull.com/musicon/login/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  class="svg-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <line x1="8" y1="6" x2="21" y2="6"></line>
                  <line x1="8" y1="12" x2="21" y2="12"></line>
                  <line x1="8" y1="18" x2="21" y2="18"></line>
                  <line x1="3" y1="6" x2="3" y2="6"></line>
                  <line x1="3" y1="12" x2="3" y2="12"></line>
                  <line x1="3" y1="18" x2="3" y2="18"></line>
                </svg>
                <span>Playlists</span>
              </a>
            </li>
            <li
              id="menu-item-2115"
              class="menu-header menu-item menu-item-type-custom menu-item-object-custom menu-item-2115"
            >
              <a href="#">Settings</a>
            </li>
            <li
              id="menu-item-3212"
              class="fullscreen icon-minimize menu-item menu-item-type-custom menu-item-object-custom menu-has-icon menu-item-3212"
            >
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  class="svg-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
                </svg>
                <span>Fullscreen</span>
              </a>
            </li>
            {/* <li
              id="menu-item-2116"
              class="menu-item menu-item-type-custom menu-item-object-custom menu-has-icon menu-item-2116"
            >
              <a href="#color">
                <div class="theme-color">
                  <i></i>
                  <span>Primary color</span>
                </div>
              </a>
            </li> */}
            <li
              id="menu-item-2117"
              class="menu-item menu-item-type-custom menu-item-object-custom menu-has-icon menu-item-2117"
            >
              <a href="">
                <div class="theme-switch">
                  <i></i>
                  <span>Dark theme</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <span class="flex"></span>

      <footer id="side-footer" class="site-sidebar-footer">
        <p class="has-small-font-size">
          <a href="/" data-type="category" data-id="1">
            Blog
          </a>{" "}
          <a href="/" data-type="page" data-id="3079">
            Pricing Plans
          </a>{" "}
          <a href="/" data-type="page" data-id="9">
            Privacy
          </a>{" "}
          <a href="/" data-type="page" data-id="1168">
            Terms
          </a>
        </p>

        <p class="has-text-color" style={{ color: "#888888", fontSize: 12 }}>
          @2023 Awaz
        </p>

        <div
          style={{ height: 40 }}
          aria-hidden="true"
          class="wp-block-spacer"
        ></div>

        <p></p>
      </footer>
    </aside>
  );
}
export default SideBar;
