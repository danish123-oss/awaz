import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect } from "react";

function AddArtist() {
  let { handleSubmit, register, reset } = useForm();

  let artistData = null;
  if (localStorage.getItem("artistInfo") !== "undefined") {
    artistData = JSON.parse(localStorage.getItem("artistInfo"));
  }
  useEffect(() => {
    if (artistData) {
      reset(artistData);
    }
  });

  const artistUp = (data) => {
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
      art_cty_id_fk: 32,
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
  };
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
export default AddArtist;
