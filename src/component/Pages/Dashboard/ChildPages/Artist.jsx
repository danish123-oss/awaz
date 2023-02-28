// import { useState } from "react";
// import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect } from "react";

function Artist() {
  //   let [userData, setUserData] = useState();
  let { handleSubmit, register, reset } = useForm();

  let artistData = null;
  if (localStorage.getItem("artistInfo") != "undefined") {
    artistData = JSON.parse(localStorage.getItem("artistInfo"));
  }
  useEffect(() => {
    if (artistData) {
      reset(artistData);
    }
  }, []);

  const artistUp = (data) => {
    let userLogin = JSON.parse(localStorage.getItem("userLogin"));

    if (artistData) {
      // Artist Update wali API

      var data = JSON.stringify({
        art_usr_id_fk: 0,
        art_lbl_id_fk: 0,
        art_stage_name: data.art_stage_name,
        art_cnic: data.art_cnic,
        art_ntn: data.art_ntn,
        art_address: data.art_address,
        art_office_number: data.art_office_number,
        art_personal_number: data.art_personal_number,
        art_whatsapp_number: data.art_whatsapp_number,
      });

      var config = {
        method: "put",
        maxBodyLength: Infinity,
        url: "https://api.devhelper.co.uk/Api/Artists/Update",
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("userLogin")).token,
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
          // window.location.href = "/dashboard/"
        });
    } else {
      // Artist Insert wali API

      var data2 = JSON.stringify({
        art_usr_id_fk: localStorage.getItem("usrid"),
        art_lbl_id_fk: 0,
        art_full_name: data.art_full_name,
        art_stage_name: data.art_stage_name,
        art_cnic: data.art_cnic,
        art_ntn: data.art_ntn,
        art_address: data.art_address,
        art_office_number: data.art_office_number,
        art_personal_number: data.art_personal_number,
        art_whatsapp_number: data.art_whatsapp_number,
        art_cty_id_fk: 0,
      });

      var config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://api.devhelper.co.uk/Api/Artists/Insert",
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("userLogin")).token,
          "Content-Type": "application/json",
        },
        data: data2,
      };

      axios(config)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    // Artist Get By Token wali API
  };
  useEffect(() => {
    var config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://api.devhelper.co.uk/Api/Artists/SelectForThisUser",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data, "==>getartist");
        localStorage.setItem("artistInfo", JSON.stringify(response.data));
        // window.location.href = "/dashboard/";
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
          onSubmit={handleSubmit(artistUp)}
        >
          <div className="flex-row">
            <div>
              <h4>Enter Your Information If you are an Atist</h4>
              <div className="form-message"></div>
              <p>
                <label>
                  Full Name <span className="required">*</span>
                </label>
                <input
                  {...register("art_full_name")}
                  type="text"
                  className="input"
                  required=""
                />
              </p>
              <p>
                <label>
                  Stage Name <span className="required">*</span>
                </label>
                <input
                  {...register("art_stage_name")}
                  type="text"
                  className="input"
                  required=""
                />
              </p>
              <p>
                <label>
                  Cnic <span className="required">*</span>
                </label>
                <input
                  {...register("art_cnic")}
                  type="text"
                  className="input"
                  required=""
                />
              </p>
              <p>
                <label> NTN</label>
                <input
                  type="number"
                  className="input"
                  {...register("art_ntn")}
                />
              </p>
              <p>
                <label> Address</label>
                <input
                  {...register("art_address")}
                  type="text"
                  className="input"
                />
              </p>
              <p>
                <label> Office Number</label>
                <input
                  {...register("art_office_number")}
                  type="text"
                  className="input"
                />
              </p>
              <p>
                <label> Personal Number</label>
                <input
                  type="text"
                  {...register("art_personal_number")}
                  className="input"
                />
              </p>
              <p>
                <label> Whatsapp Number</label>
                <input
                  type="text"
                  {...register("art_whatsapp_number")}
                  className="input"
                />
              </p>
              <p>
                {artistData ? (
                  <input
                    type="submit"
                    name="wp-submit"
                    className="button button-primary"
                    value={"Update"}
                  />
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
export default Artist;
