import React, { useState } from "react";
import { apiPost } from "../Utils/apiFetch";
import apiPath from "../Utils/apiPath";
import { pick } from "lodash";
import { jwtDecode } from "jwt-decode";
import { useContextSelector } from "use-context-selector";
import AuthContext from "../context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const setUserCoins = useContextSelector(
    AuthContext,
    (ctx) => ctx.setUserCoins,
  );
  const setUser = useContextSelector(AuthContext, (ctx) => ctx.setUser);

  const {
    register: register,
    handleSubmit: handleSubmit,
    formState: { errors: errors },
    unregister,
    reset: reset,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      uniqueId: Math.random() * 10000,
    },
  });

  const onSubmit = async (body) => {
    setLoading(true);
    let hostname = window.location.hostname;
    hostname = hostname.replace(/^www\./, "");
    hostname = hostname.replace(/^ag\./, "");
    body.website = hostname || "SABAEXCH";
    const { status, data } = await apiPost(
      apiPath.loginUser,
      pick(body, ["username", "password", "uniqueId", "website"]),
    );
    if (status === 200) {
      if (data.success) {
        localStorage.setItem("token", data.results.token);
        localStorage.setItem("refresh_token", data.results.refresh_token);
        setUserCoins({
          exposure: data.results.exposure,
          totalCoins: data.results.totalCoins,
        });
        setUser(jwtDecode(data.results.token));
        navigate("/");
      } else {
        toast.error(data?.message);
      }
    } else {
      toast.error(data?.message);
    }
    setLoading(false);
  };
  return (
    <>
      {loading && (
        <div apptheme className="over-wrap loading-overlay ng-star-inserted">
          <div
            id="loading"
            className="loading-wrap"
            style={{ display: "block" }}
          >
            <ul className="loading">
              <li className="ng-star-inserted">
                <img
                  src="/assets/images/loading40.gif"
                  className="loaderclass"
                />
              </li>

              <li style={{ padding: "10px" }}>Loading... </li>
              <br />
              <li>
                <span id="progress" />
              </li>
            </ul>
          </div>
        </div>
      )}
      <div className="dynamicBack ng-star-inserted">
        <div className="scene" />
        <div apptheme className="login-wrap">
          <div className="kv">
            <img src="assets/images/transparent.gif" alt="Logo" />
          </div>
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="login-panel ng-invalid ng-dirty ng-touched"
          >
            <div className="header black-text">Agent Login</div>
            <Form.Control
              type="text"
              placeholder="Username"
              className="ng-dirty ng-valid ng-touched"
              {...register("username", {
                required: "Please enter Username",
              })}
            />{" "}
            {errors.username && errors?.username?.message && (
              <label className="invalid-feedback text-left">
                {errors.username.message}
              </label>
            )}
            <div className="password-group">
              <Form.Control
                placeholder="Password"
                type="password"
                className="ng-dirty ng-valid ng-touched"
                {...register("password", {
                  required: "Please enter password",
                })}
              />
              {errors.password && errors.password.message && (
                <label className="invalid-feedback text-left">
                  {errors.password.message}
                </label>
              )}
            </div>
            <button type="submit" className="btn-send">
              {" "}
              Login
              <img src="assets/images/transparent.gif" className="icon-login" />
            </button>
            <div className="apk-container ng-star-inserted">
              {/* <a
                id="apk"
                href="https://ag.static112233.com/assets/apk/betx365.apk?v=0651651"
                download="betx365.apk"
              > */}
              <img src="assets/images/android.png" width="auto" />
              {/* </a> */}
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
