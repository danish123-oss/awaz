import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import styled from "./signup.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
function Signup() {
  let move = useNavigate();
  let { handleSubmit, register, formState } = useForm();
  let [password, setPassword] = useState();
  let [cpassword, setcPassword] = useState();
  let [email, setEmail] = useState();
  let dispatch = useDispatch();

  const signup = async (data1) => {
    if (data1.usr_password == data1.usr_Cpssword) {
      // Signup wali API

      let data2 = data1;
      var data = JSON.stringify({
        usr_firstname: data2.usr_firstname,
        usr_lastname: data2.usr_lastname,
        usr_gender: "m",
        usr_email: data2.usr_email,
        usr_password: data2.usr_password,
        usr_primary_number: data2.usr_primary_number,
        usr_rol_id: 6,
        usr_lng_id_fk: 6,
        usr_profile_image_url: "img",
        usr_uid_google: "fdsaklf",
        usr_uid_facebook: "dfsf",
        usr_signin_with_number: true,
        usr_status: true,
        usr_createdon: "2023-02-21T10:19:43.390Z",
      });

      var config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://api.devhelper.co.uk/api/users/insert",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));

          var data = JSON.stringify({
            usr_email: data1.usr_email,
            usr_password: data1.usr_password,
          });

          var config = {
            method: "post",
            maxBodyLength: Infinity,
            url: "https://api.devhelper.co.uk/api/account/loginwithemail",
            headers: {
              "Content-Type": "application/json",
            },
            data: data,
          };

          axios(config)
            .then(function (response) {
              console.log(response.data);
              let userData = response.data;
              localStorage.setItem("userLogin", JSON.stringify(userData));
              dispatch({
                type: "LoginUser",
                payload: userData,
              });
            })
            .catch(function (error) {
              console.log(error);
            });

          // Get user wali API

          setTimeout(() => {
            var config = {
              method: "get",
              maxBodyLength: Infinity,
              url: "https://api.devhelper.co.uk/Api/Users/SelectForThisUser",
              headers: {
                Authorization: `Bearer ${
                  JSON.parse(localStorage.getItem("userLogin")).token
                }`,
                "Content-Type": "application/json",
              },
            };

            axios(config)
              .then(function (response) {
                console.log(response.data);
                // localStorage.setItem("stagename", response.data.art_stage_name);
                // localStorage.setItem("cnic", response.data.art_cnic);
                // localStorage.setItem("artid", response.data.art_id);
                // localStorage.setItem("ntn", response.data.art_ntn);
                // localStorage.setItem("artoffice", response.data.art_office_number);
                // localStorage.setItem("artpno", response.data.art_personal_number);
                // localStorage.setItem("artwhats", response.data.art_whatsapp_number);
                // localStorage.setItem("artaddress", response.data.art_address);
                localStorage.setItem(
                  "userData",
                  JSON.stringify(response.data.User)
                );
                localStorage.setItem(
                  "artistInfo",
                  JSON.stringify(response.data.Artist)
                );
                localStorage.setItem(
                  "managerInfo",
                  JSON.stringify(response.data.Manager)
                );
                localStorage.setItem(
                  "labelInfo",
                  JSON.stringify(response.data.Manager)
                );
                window.location.href = "/";
              })
              .catch(function (error) {
                console.log(error);

                // localStorage.clear("artistInfo")
                localStorage.clear("userData");
                localStorage.clear("artistInfo");
                localStorage.clear("managerInfo");
                localStorage.clear("labelInfo");
              });
          }, 1000);
        })
        .catch(function (error) {
          console.log(error);
          email = true;
          setEmail(email);
        });
    }
  };
  return (
    <article
      id="post-48"
      className="post-48 page type-page status-publish hentry entry "
    >
      <header className="entry-header hide-title">
        <h1 className="entry-title">Login</h1>
      </header>
      <div className="entry-content">
        <div id="login-form">
          <form
            name="registerform"
            id="registerform"
            onSubmit={handleSubmit(signup)}
          >
            <h2>Create an account</h2>
            <p>
              Already have an account?{" "}
              <Link to={"/login"} className="btn-login text-primary no-ajax">
                Sign in
              </Link>
            </p>
            <div className="form-message" />
            <p>
              <label>FirstName</label>
              <input
                {...register("usr_firstname", { required: true })}
                type="text"
                className="input"
                defaultValue=""
                required=""
              />
              {formState.errors.usr_firstname && (
                <div className={`${styled.error}`}>
                  Please enter your first name
                </div>
              )}
            </p>
            <p>
              <label>LastName</label>
              <input
                {...register("usr_lastname", { required: true })}
                type="text"
                className="input"
                defaultValue=""
                required=""
              />
              {formState.errors.usr_lastname && (
                <div className={`${styled.error}`}>
                  Please enter your last name
                </div>
              )}
            </p>
            <p>
              <label>Email Address</label>
              <input
                {...register("usr_email", { required: true })}
                type="email"
                className="input"
                defaultValue=""
                required=""
                onChange={() => {
                  setEmail(false);
                }}
              />
              {formState.errors.usr_email && (
                <div className={`${styled.error}`}>Please enter your Email</div>
              )}
              {email && (
                <div className={`${styled.error}`}>Email Already exsist</div>
              )}
            </p>

            <p>
              <label>Password</label>
              <input
                {...register("usr_password", { required: true })}
                type="password"
                className="input"
                defaultValue=""
                required=""
                onChange={(e) => {
                  password = e.target.value;
                  setPassword(password);
                }}
              />
              {formState.errors.usr_password && (
                <div className={`${styled.error}`}>
                  Please enter your Password
                </div>
              )}
            </p>
            <p>
              <label>Conform Password</label>
              <input
                {...register("usr_Cpssword", { required: true })}
                type="password"
                className="input"
                defaultValue=""
                required=""
                onChange={(e) => {
                  cpassword = e.target.value;
                  setcPassword(cpassword);
                }}
              />

              {password != cpassword ? (
                <div className={`${styled.error}`}>Password dosn't matched</div>
              ) : null}
            </p>
            <p>
              <label>Phone No</label>
              <input
                {...register("usr_primary_number", { required: true })}
                type="number"
                className="input"
                required=""
              />
              {formState.errors.usr_primary_number && (
                <div className={`${styled.error}`}>
                  Please enter your valid Phone number
                </div>
              )}
            </p>
            {/* <p>
                        <label>Gender</label>
                        <select class="form-select form-select-sm mt-2 mb-4" aria-label=".form-select-sm example">

                            <option value="Male">Male</option>
                            <option value="Female">Female</option>

                        </select>
                    </p> */}
            {/* <p>
                        <label>Role</label>
                        <select class="form-select form-select-sm mt-2" aria-label=".form-select-sm example">

                            <option value="Male">Male</option>
                            <option value="Female">Female</option>

                        </select>
                    </p> */}
            <p>
              <button
                type="submit"
                name="wp-submit"
                className="button button-primary"
              >
                Create account
              </button>
            </p>

            <ToastContainer theme="colored" />
          </form>
        </div>
      </div>
    </article>
  );
}
export default Signup;
