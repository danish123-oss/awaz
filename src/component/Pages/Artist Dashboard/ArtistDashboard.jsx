import React from "react";
// import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AddArtist from "./ChildComponent/AddArtist";
import Header from "./ChildComponent/Header";
import ArtistDetails from "./ChildComponent/ArtistDetails";
// import axios from "axios";
const ArtistDashboard = () => {
  return (
    <div id="content" class="site-content">
      <div id="primary" class="content-area">
        <main id="main" className={`site-main `}>
          <article className="entry user single" id="user-2421">
            <div className="entry-header-container header-user current-user">
              {/* <figure className="post-thumbnail">
                <span className="avatar avatar-a">
                  <span className="avatar-name">
                    {localStorage.getItem("uname")}
                  </span>
                </span>
              </figure> */}
              <header className="entry-header">
                <h1 className="entry-title">
                  <a href="http://music.flatfull.com/musicon/user/ahtesham-haider/">
                    {/* {localStorage.getItem("uname") +
                      " " +
                      localStorage.getItem("lastname")} */}
                    Label Dashboard
                  </a>{" "}
                </h1>
                <div
                  className="entry-description"
                  data-plugin="moreless"
                  more="Show more"
                  less="Show less"
                  type="modal"
                  title="ahtesham haider"
                >
                  <p />
                </div>
                {/* <div className="entry-meta">
                  <button
                    className="btn-more"
                    data-type="user"
                    data-playable="false"
                    data-id={2421}
                    data-url="http://music.flatfull.com/musicon/user/ahtesham-haider/"
                    data-embed-url="http://music.flatfull.com/musicon/embed/2421?u"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth={0}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx={12} cy={12} r={2} />
                      <circle cx={12} cy={6} r={2} />
                      <circle cx={12} cy={18} r={2} />
                    </svg>
                  </button>
                </div> */}
              </header>
            </div>

            <Header />

            <Routes>
              <Route path="/" element={<ArtistDetails />} />
              <Route path="/addartist" element={<AddArtist />} />
              {/* <Route path="/artist" element={<Artist />} />
              <Route path="/manager" element={<Manager />} />
              <Route path="/label" element={<Labels />} /> */}
            </Routes>
          </article>
        </main>
      </div>
    </div>
  );
};
export default ArtistDashboard;
