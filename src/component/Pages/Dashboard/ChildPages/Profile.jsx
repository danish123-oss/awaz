import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useForm } from "react-hook-form";
function Profile() {
  // let [userData, setUserData] = useState();
  let { handleSubmit, register, reset } = useForm();

  // let cu = useSelector((store) => store.userSection);
  const UpdateUser = (data) => {
    var data = JSON.stringify({
      usr_id: localStorage.getItem("usrid"),
      usr_firstname: data.usr_full_name,
      usr_lastname: data.usr_last_name,
      usr_gender: data.usr_gender,
      usr_primary_number: data.usr_pno,
      usr_rol_id: 6,
      usr_lng_id_fk: 0,
      usr_profile_image_url: "string",
      usr_uid_google: "string",
      usr_uid_facebook: "string",
      usr_signin_with_number: true,
      usr_status: true,
    });

    var config = {
      method: "put",
      maxBodyLength: Infinity,
      url: "https://api.devhelper.co.uk/Api/Users/Update",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setTimeout(() => {
          localStorage.clear();
          window.location.href = "/login";
        }, 2000);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="entry-content sub-content" id="sub-ajax-content">
      <form
        className="form"
        name="your-profile"
        id="your-profile"
        action=""
        method="post"
        encType="multipart/form-data"
        onSubmit={handleSubmit(UpdateUser)}
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
                  {...register("usr_full_name")}
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
                  {...register("usr_last_name")}
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
                {...register("usr_email")}
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
                {...register("usr_gender")}
              />
            </p>
            <p>
              <label>Primary Number</label>
              <input
                type="text"
                name="url"
                className="input"
                defaultValue={localStorage.getItem("usrno")}
                {...register("usr_pno")}
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
                // onClick={UpdateUser}
                name="wp-submit"
                className="button button-primary"
                value={"Update"}
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
