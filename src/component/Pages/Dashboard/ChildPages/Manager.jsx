import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect } from "react";

function Manager() {
  //   let [userData, setUserData] = useState();
  let { handleSubmit, register, reset } = useForm();
  let managerData = null;
  if (localStorage.getItem("managerInfo") != "undefined") {
    managerData = JSON.parse(localStorage.getItem("managerInfo"));
  }
  useEffect(() => {
    if (managerData) {
      reset(managerData);
    }
  }, []);

  const managerUp = (data) => {
    // Manager ko Update krny wali API

    if (managerData) {
      var data = JSON.stringify({
        mgr_id: 0,
        mgr_usr_id_fk: 0,
        mgr_cnic: data.mgr_cnic,
        mgr_address: data.mgr_address,
        mgr_office_number: data.mgr_office_number,
        mgr_personal_number: data.mgr_personal_number,
        mgr_whatsapp_number: data.mgr_whatsapp_number,
      });

      var config = {
        method: "put",
        maxBodyLength: Infinity,
        url: "https://api.devhelper.co.uk/Api/Managers/Update",
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
      // Manager ko insert krny wali API

      var data = JSON.stringify({
        mgr_id: 0,
        mgr_usr_id_fk: 0,
        mgr_cnic: data.mgr_cnic,
        mgr_address: data.mgr_address,
        mgr_office_number: data.mgr_office_number,
        mgr_personal_number: data.mgr_personal_number,
        mgr_whatsapp_number: data.mgr_whatsapp_number,
      });

      var config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://api.devhelper.co.uk/Api/Managers/Insert",
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
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    // Manager Get By Token wali API
  };
  useEffect(() => {
    setTimeout(() => {
      var data = "";

      var config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://api.devhelper.co.uk/Api/Managers/SelectForThisUser",
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("userLogin")).token
          }`,
        },
        data: data,
      };
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          localStorage.setItem("managerInfo", JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    }, 1000);
  });
  return (
    <div className="entry-content sub-content" id="sub-ajax-content">
      {
        <form
          className="form"
          id="your-profile"
          onSubmit={handleSubmit(managerUp)}
        >
          <div className="flex-row">
            <div>
              <h4>Enter Your Information If you are a Manager</h4>
              <div className="form-message"></div>

              <p>
                <label>
                  Cnic <span className="required">*</span>
                </label>
                <input
                  {...register("mgr_cnic")}
                  type="text"
                  className="input"
                  required=""
                />
              </p>

              <p>
                <label> Address</label>
                <input
                  {...register("mgr_address")}
                  type="text"
                  className="input"
                />
              </p>
              <p>
                <label> Office Number</label>
                <input
                  {...register("mgr_office_number")}
                  type="text"
                  className="input"
                />
              </p>
              <p>
                <label> Personal Number</label>
                <input
                  type="text"
                  {...register("mgr_personal_number")}
                  className="input"
                />
              </p>
              <p>
                <label> Whatsapp Number</label>
                <input
                  type="text"
                  {...register("mgr_whatsapp_number")}
                  className="input"
                />
              </p>
              <p>
                {managerData ? (
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
export default Manager;
