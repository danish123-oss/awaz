import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
function Profile() {
  let [userData, setUserData] = useState();
  let cu = useSelector((store) => store.userSection);
  console.log(localStorage.getItem("email"));
  console.log(localStorage.getItem("role"));
  return (
    <div className="entry-content sub-content" id="sub-ajax-content">
      <form
        className="form"
        name="your-profile"
        id="your-profile"
        action=""
        method="post"
        encType="multipart/form-data"
      >
        <div className="flex-row">
          <div>
            <div className="form-message"></div>
            <div className="flex-row">
              <p>
                <label>
                  First Name <span className="required">*</span>
                </label>
                <input
                  defaultValue={localStorage.getItem("uname")}
                  type="text"
                  name="first_name"
                  className="input"
                  required=""
                />
              </p>
              <div className="sep" />
              <p>
                <label>
                  Last Name <span className="required">*</span>
                </label>
                <input
                  defaultValue={localStorage.getItem("lastname")}
                  type="text"
                  name="last_name"
                  className="input"
                  required=""
                />
              </p>
            </div>
            <p>
              <label>
                Display Name <span className="required">*</span>
              </label>
              <input
                defaultValue={
                  localStorage.getItem("uname") +
                  " " +
                  localStorage.getItem("lastname")
                }
                type="text"
                name="display_name"
                className="input"
                required=""
              />
            </p>
            <p>
              <label>
                Email <span className="required">*</span>
              </label>
              <input
                type="text"
                name="email"
                className="input"
                defaultValue={localStorage.getItem("email")}
                required=""
              />
            </p>
            <p>
              <label>Role</label>
              <input
                type="text"
                name="url"
                className="input"
                defaultValue={localStorage.getItem("role")}
              />
            </p>
            <p>
              <label>Gender</label>
              <input
                type="text"
                name="url"
                className="input"
                defaultValue={localStorage.getItem("gender")}
              />
            </p>
            <p>
              <label>Primary Number</label>
              <input
                type="text"
                name="url"
                className="input"
                defaultValue={localStorage.getItem("usrno")}
              />
            </p>
            <p className="separator">
              <span>Password change</span>
            </p>
            <p className="form-pwd">
              <label>Current password</label>
              <input type="password" name="pass" className="input" />
            </p>
            <p className="form-pwd">
              <label>New password</label>
              <input type="password" name="pass1" className="input" />
            </p>
            <p className="form-pwd">
              <label>Comfirm new password</label>
              <input type="password" name="pass2" className="input" />
            </p>
            <p>
              <input
                type="submit"
                name="wp-submit"
                className="button button-primary"
                defaultValue="Update"
              />
            </p>
            <a href="/" className="btn-delete-account">
              <small>Delete account</small>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Profile;
