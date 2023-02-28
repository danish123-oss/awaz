import { useEffect } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import axios from "axios";
import Profile from "./ChildPages/Profile";
import Artist from "./ChildPages/Artist";
import Manager from "./ChildPages/Manager";
import Header from "./ChildPages/Header";
import Labels from "./ChildPages/Labels";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  // let [userData, setUserData] = useState(null);
  // let [firstname, setFT] = useState(localStorage.getItem("uname"));
  // let [userData, setUserData] = useState(null);
  let dispatch = useDispatch();
  // let cu = useSelector((store) => store.userSection);

  // let userLogin = localStorage.getItem("userLogin");
  useEffect(() => {
    var config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://api.devhelper.co.uk/Api/Labels/SelectForThisUser",
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userLogin")).token
        }`,
      },
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        localStorage.setItem("labelInfo", JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  return (
    <div id="content" class="site-content">
      <div id="primary" class="content-area">
        <main id="main" className={`site-main `}>
          <article className="entry user single" id="user-2421">
            <div className="entry-header-container header-user current-user">
              <figure className="post-thumbnail">
                <span className="avatar avatar-a">
                  <span className="avatar-name">
                    {localStorage.getItem("uname")}
                  </span>
                </span>
              </figure>
              <header className="entry-header">
                <h1 className="entry-title">
                  <a href="http://music.flatfull.com/musicon/user/ahtesham-haider/">
                    {localStorage.getItem("uname") +
                      " " +
                      localStorage.getItem("lastname")}
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
                <div className="entry-meta">
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
                </div>
              </header>
            </div>

            <Header />

            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="/artist" element={<Artist />} />
              <Route path="/manager" element={<Manager />} />
              <Route path="/label" element={<Labels />} />
            </Routes>
          </article>
        </main>
      </div>
    </div>
  );
};
export default Dashboard;
