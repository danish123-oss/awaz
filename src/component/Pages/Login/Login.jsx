import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "./login.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

function Login() {
  let { handleSubmit, register, formState } = useForm();
  let [invalid, setInvalid] = useState(false);

  let dispatch = useDispatch();

  let move = useNavigate();
  const login = (data1) => {
    var data = JSON.stringify({
      usr_email: data1.usr_email,
      usr_password: data1.usr_password,
    });

    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api.devhelper.co.uk/Api/Account/LoginWithEmail",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data, "===>Login");
        let userData = response.data;
        localStorage.setItem("userLogin", JSON.stringify(userData));
        localStorage.setItem("uname", response.data.usr_firstname);
        localStorage.setItem("lastname", response.data.usr_lastname);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("usrid", response.data.usr_id);
        localStorage.setItem("userLogin", JSON.stringify(response.data));
        window.location.href = "/";

        dispatch({
          type: "LoginUser",
          payload: userData,
        });
      })
      .catch(function (error) {
        console.log(error);
        invalid = true;
        setInvalid(invalid);
      });

    // Get user wali API

    setTimeout(() => {
      var config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://api.devhelper.co.uk/Api/Users/SelectForThisUser",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
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
          localStorage.setItem("userData", JSON.stringify(response.data.User));
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
            JSON.stringify(response.data.Label)
          );
          move("/");
        })
        .catch(function (error) {
          console.log(error);
          localStorage.clear("userData");
          localStorage.clear("artistInfo");
          localStorage.clear("managerInfo");
          localStorage.clear("labelInfo");
        });

      // Artist Get By Token wali API

      // var data = '';

      // var config = {
      //   method: 'get',
      //   maxBodyLength: Infinity,
      //   url: 'https://api.devhelper.co.uk/Api/Artists/SelectForThisUser',
      //   headers: {
      //     'Authorization': `Bearer ${JSON.parse(localStorage.getItem("userLogin")).token}`,
      //   },
      //   data: data
      // };

      // axios(config)
      //   .then(function (response) {
      //     console.log(JSON.stringify(response.data));
      //     localStorage.setItem("artistInfo", JSON.stringify(response.data))
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });

      // Get Manager by Token wali API

      // var data = '';

      // var config = {
      //   method: 'get',
      //   maxBodyLength: Infinity,
      //   url: 'https://api.devhelper.co.uk/Api/Managers/SelectForThisUser',
      //   headers: {
      //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ByaW1hcnlzaWQiOiI0NiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiTXVoYW1tYWQgU2FybWFkIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoic2FybWFkYXdhbjM1QGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2dpdmVubmFtZSI6Ik11aGFtbWFkIFNhcm1hZCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3N1cm5hbWUiOiJUYXJpcSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVzZXIiLCJleHAiOjE2NzcxNjIzNTksImlzcyI6Imh0dHBzOi8vYXBpLmRldmhlbHBlci5jby51ayIsImF1ZCI6Imh0dHBzOi8vYXBpLmRldmhlbHBlci5jby51ayJ9.dWDWPTE_Dcbd4zqYU-l0CFGsj6NcDtObVeEMP2Ra1aw'
      //   },
      //   data: data
      // };

      // axios(config)
      //   .then(function (response) {
      //     console.log(JSON.stringify(response.data));
      //     localStorage.setItem("managerInfo", JSON.stringify(response.data))
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    }, 1000);
  };

  return (
    <main id="main" className="site-main">
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
              name="loginform"
              id="loginform"
              onSubmit={handleSubmit(login)}
            >
              <h2>Sign in</h2>
              <p>
                Do not have an account?{" "}
                <Link
                  to={"/signup"}
                  className="btn-register text-primary no-ajax"
                >
                  Sign up
                </Link>
              </p>
              <div className="form-message"></div>

              <p>
                <label>Username or Email Address</label>
                <input
                  {...register("usr_email", { required: true })}
                  type="text"
                  className="input"
                  defaultValue=""
                  required=""
                  onChange={() => {
                    invalid = false;
                    setInvalid(invalid);
                  }}
                />
                {formState.errors.usr_email && (
                  <div className={`${styled.error}`}>
                    Please enter your Email
                  </div>
                )}
              </p>
              <p className="form-pwd">
                <label>
                  <span>Password</span>
                  <a
                    href="indexc2b6.html?action=lostpassword"
                    tabIndex={-1}
                    className="btn-lostpassword no-ajax"
                  >
                    Lost your password?
                  </a>
                </label>
                <input
                  {...register("usr_password", { required: true })}
                  type="password"
                  className="input is-toggled"
                  defaultValue=""
                  required=""
                  autoComplete="off"
                  onChange={() => {
                    invalid = false;
                    setInvalid(invalid);
                  }}
                />
                {formState.errors.usr_password && (
                  <div className={`${styled.error}`}>
                    Please enter your Password
                  </div>
                )}
                {invalid && (
                  <div className={`${styled.error}`}>
                    Incorret UserName or Paswword
                  </div>
                )}
                <button type="button" className="button btn-toggle-pwd">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={22}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-eye"
                  >
                    <path
                      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                      className="eye-on"
                    ></path>
                    <circle cx={12} cy={12} r={3} className="eye-on" />
                    <path
                      d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
                      className="eye-off"
                    />
                    <line x1={1} y1={1} x2={23} y2={23} className="eye-off" />
                  </svg>
                </button>
              </p>
              <p>
                <input type="checkbox" name="rememberme" id="rememberme" />
                <label htmlFor="rememberme">Remember Me</label>
              </p>
              <p>
                <button
                  type="submit"
                  name="wp-submit"
                  className="button button-primary"
                >
                  Sign in
                </button>
                <input type="hidden" name="form-action" defaultValue="login" />
              </p>
            </form>
          </div>
        </div>
      </article>
    </main>
  );
}
export default Login;
