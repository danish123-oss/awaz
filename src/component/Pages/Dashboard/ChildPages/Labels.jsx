import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect } from "react";

function Labels() {
  //   let [userData, setUserData] = useState();
  let { handleSubmit, register, reset } = useForm();
  let labelData = null;
  if (localStorage.getItem("labelInfo") != "undefined") {
    labelData = JSON.parse(localStorage.getItem("labelInfo"));
  }
  const Reload = () => {
    window.location.reload();
  };
  useEffect(() => {
    if (labelData) {
      reset(labelData);
    }
  }, []);

  const labelUp = (data) => {
    if (labelData) {
      var data = JSON.stringify({
        lbl_usr_id_fk: 0,
        lbl_business_name: data.lbl_business_name,
        lbl_business_email: data.lbl_business_email,
        lbl_business_phone: data.lbl_business_phone,
        lbl_owner_name: data.lbl_owner_name,
        lbl_owner_email: data.lbl_owner_email,
        lbl_owner_phone: data.lbl_owner_phone,
        lbl_logo_url: "myLogo",
        lbl_address: data.lbl_address,
        lbl_cty_id_fk: 0,
      });

      var config = {
        method: "put",
        maxBodyLength: Infinity,
        url: "https://api.devhelper.co.uk/Api/Labels/Update",
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("userLogin")).token
          }`,
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      // Label ko insert krny wali API
      console.log(data);
      var data = JSON.stringify({
        lbl_usr_id_fk: 4,
        lbl_business_name: data.lbl_business_name,
        lbl_business_email: data.lbl_business_email,
        lbl_business_phone: data.lbl_business_phone,
        lbl_owner_name: data.lbl_owner_name,
        lbl_owner_email: data.lbl_owner_email,
        lbl_owner_phone: data.lbl_owner_phone,
        lbl_logo_url: "mylogo",
        lbl_address: data.lbl_address,
        lbl_cty_id_fk: 0,
      });

      var config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://api.devhelper.co.uk/Api/Labels/Insert",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    // Label Get By Token wali API
  };
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
    <div className="entry-content sub-content" id="sub-ajax-content">
      {
        <form
          className="form"
          id="your-profile"
          onSubmit={handleSubmit(labelUp)}
        >
          <div className="flex-row">
            <div>
              <h4>
                Enter Your Information If you are a Label{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span onClick={Reload}>
                  <img
                    style={{ cursor: "pointer" }}
                    height={40}
                    width={40}
                    alt=""
                    src="https://img.icons8.com/external-febrian-hidayat-gradient-febrian-hidayat/64/null/external-refresh-user-interface-febrian-hidayat-gradient-febrian-hidayat.png"
                  />
                </span>
              </h4>

              <div className="form-message"></div>

              <p>
                <label>
                  Business Name <span className="required">*</span>
                </label>
                <input
                  {...register("lbl_business_name")}
                  type="text"
                  className="input"
                  required=""
                />
              </p>

              <p>
                <label>Business email</label>
                <input
                  {...register("lbl_business_email")}
                  type="email"
                  className="input"
                />
              </p>
              <p>
                <label> Business Number</label>
                <input
                  {...register("lbl_business_phone")}
                  type="text"
                  className="input"
                />
              </p>
              <p>
                <label> Owner Name</label>
                <input
                  type="text"
                  {...register("lbl_owner_name")}
                  className="input"
                />
              </p>
              <p>
                <label> Owner Email</label>
                <input
                  type="email"
                  {...register("lbl_owner_email")}
                  className="input"
                />
              </p>

              <p>
                <label> Owner Phone</label>
                <input
                  type="text"
                  {...register("lbl_owner_phone")}
                  className="input"
                />
              </p>
              <p>
                <label>Address</label>
                <input
                  type="text"
                  {...register("lbl_address")}
                  className="input"
                />
              </p>

              {/* <p>
              <label>Logo</label>
              <input
                type="file"
                {...register("lbl_logo_url")}

                className="input"
                accept="image/*"

              />
            </p> */}

              <p>
                {labelData ? (
                  <div>
                    <input
                      type="submit"
                      name="wp-submit"
                      className="button button-primary"
                      value={"Update"}
                    />
                  </div>
                ) : (
                  <input
                    type="submit"
                    name="wp-submit"
                    className="button button-primary"
                    value={"Save"}
                  />
                )}
              </p>
              <a href="/" className="btn-delete-account">
                <small>Delete account</small>
              </a>
            </div>
          </div>
        </form>
      }
    </div>
  );
}
export default Labels;
