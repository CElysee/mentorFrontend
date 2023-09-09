import React, { useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../axiosInstance";
import RiseLoader from "react-spinners/RiseLoader";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { isTokenExpired } from "../../../utils/tokenUtils";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#e55812",
  paddingRight: "10px",
};

function SignIn() {
  const [formInputs, setFormInputs] = useState({
    emailInput: "",
    passwordInput: "",
  });
  const [requestPassword, setRequestPassword] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [redirectToSignUp, setRedirectToSignUp] = useState(false);
  const [loading, setLoading] = useState("");
  const [color, setColor] = useState("#fff");
  const [userRole, setUserRole] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);


  const navigate = useNavigate();
  const handleChange = (e) => {
    // const newEmailInput = e.target.value;
    const { name, value } = e.target;
    setFormInputs({
      ...formInputs,
      [name]: value,
    });
  };

  // const access_token = localStorage.getItem("access_token");
  // const isExpired = isTokenExpired(access_token);


  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (!requestPassword) {
      try {
        const check_username = await axiosInstance.post(
          "/auth/check_username",
          {
            email: formInputs.emailInput, // Use the email state value
            headers: {
              // "Content-Type": "application/json",
            },
          }
        );
        const responseMsg = check_username.data.message;
        // console.log(JSON.stringify(check_username.data.message));
        notify(responseMsg, "error");
        setRedirectToSignUp(true);
      } catch (error) {
        // Handle error
        // console.error("Error:", error.response.data.detail);
        setRequestPassword(true);
      } finally {
        setLoading(false);
      }
    } else {
      const formData = new FormData();
      formData.append("username", formInputs.emailInput);
      formData.append("password", formInputs.passwordInput);

      try {
        const check_username = await axiosInstance.post(
          "/auth/login",
          formData,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        // console.log(JSON.stringify(check_username.data));
        const userToken = check_username.data.access_token;
        const role = check_username.data.role;
        setUserRole(role);
        setToken(userToken);
        setIsLoggedIn(true);
        localStorage.setItem("access_token", userToken);
        if (role === "admin") {
          navigate("/admin");
        } else if (role === "mentee") {
          navigate("/mentee/dashboard");
        } else if (role === "mentor") {
          navigate("/mentor/dashboard");
        }else{
          navigate("/signIn");
        }
      } catch (error) {
        // Handle error
        const responseMsg = error.response.data.detail;
        // console.error("Error:", error.response.data.detail);
        // console.log(error.response.status);
      } finally {
        setLoading(false);
      }
    }
  };

  const notify = (message, type) => {
    if (type === "success") {
      toast.success(message, {
        icon: "👏",
      });
    } else if (type === "error") {
      toast.error(message, {
        icon: "😬",
      });
    }
  };
  const [showpassword, setShowPassword] = useState(false);
  function handleShowPassword(e) {
    setShowPassword(!showpassword);
  }
  return (
    <div className="Layout__Wrapper-sc-2tn75p-0 fBYEGj">
      <div width="1440" className="sc-kpKSZj mDskb">
        <div className="sc-bWJUgm Bivzm d-md-flex p-0" width="1440">
          <div className="sc-fatcLD fTzblS mx-4 mx-md-auto">
            <div className="mb-4 text-md-center text-lg-left">
              <ToastContainer autoClose={5000} />
              <h2 className="sc-fqkvVR jcuFgw mb-3 font-weight-600">
                Welcome to Mentor.rw!
              </h2>
              <p className="mb-0">
                Connect with our community of mentors and users from 100+
                countries around the world.
              </p>
            </div>
            <div className="mt-4">
              <form className="" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="emailInput">
                    Email address
                  </label>
                  <div className="position-relative d-flex align-items-center">
                    <input
                      name="emailInput"
                      className="form-control"
                      placeholder="Your email address"
                      title="Your email address"
                      type="email"
                      aria-required="true"
                      value={formInputs.emailInput}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                {requestPassword ? (
                  <>
                    <div className="form-group">
                      <label className="form-label" htmlFor="passwordInput">
                        Create a password
                      </label>
                      <div className="position-relative d-flex align-items-center input-container">
                        <input
                          name="passwordInput"
                          className="form-control password"
                          placeholder="••••••••"
                          title="••••••••"
                          type={showpassword ? "text" : "password"}
                          aria-required="true"
                          value={formInputs.passwordInput}
                          onChange={handleChange}
                          autoComplete=""
                        />
                        <div
                          className="cursor-pointer grey-2-text"
                          onClick={handleShowPassword}
                        >
                          <svg
                            fill="none"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M15.1615 12.0531C15.1615 13.7991 13.7455 15.2141 11.9995 15.2141C10.2535 15.2141 8.8385 13.7991 8.8385 12.0531C8.8385 10.3061 10.2535 8.89105 11.9995 8.89105C13.7455 8.89105 15.1615 10.3061 15.1615 12.0531Z"
                              stroke="var(--black)"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.998 19.3549C15.806 19.3549 19.289 16.6169 21.25 12.0529C19.289 7.48891 15.806 4.75092 11.998 4.75092H12.002C8.194 4.75092 4.711 7.48891 2.75 12.0529C4.711 16.6169 8.194 19.3549 12.002 19.3549H11.998Z"
                              stroke="var(--black)"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between form-group">
                      <div className="d-none custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          id="remember-me"
                          className="custom-control-input"
                        />
                        <label
                          title=""
                          htmlFor="remember-me"
                          className="custom-control-label"
                        >
                          <span>Remember me</span>
                        </label>
                      </div>
                      <a
                        className="font-size-14 black-text ml-auto"
                        style={{ textDecoration: "underline" }}
                        href="/forgotten"
                      >
                        Forgot password
                      </a>
                    </div>
                  </>
                ) : null}

                {redirectToSignUp && (
                  <>
                    <div className="sc-cgjDci foxhct black-text p-3 mb-4">
                      <div className="d-flex align-items-center">
                        <div>
                          <svg
                            fill="none"
                            width="24"
                            height="24"
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_1511_9373)">
                              <path
                                d="M30.0388 17.3086C30.6301 16.7185 30.9561 15.9335 30.9565 15.0981C30.9569 14.2626 30.6318 13.4773 30.0411 12.8865C29.7402 12.5856 29.3922 12.3593 29.0203 12.2072L30.3035 10.9288C30.8962 10.339 31.2232 9.55366 31.2241 8.71746C31.2251 7.88125 30.9001 7.09511 30.3088 6.50384L30.2756 6.47061C29.8193 6.01436 29.2553 5.72903 28.6643 5.61469C28.7001 5.42469 28.7192 5.23014 28.7193 5.03251C28.7203 4.19644 28.3952 3.41036 27.804 2.81922L27.7632 2.77844C27.1729 2.18813 26.3881 1.86304 25.5533 1.86304C24.9897 1.86304 24.4492 2.01176 23.9756 2.28972C23.8214 1.8722 23.578 1.48931 23.2543 1.16563L23.2274 1.13862C22.0089 -0.0796484 20.0262 -0.0798403 18.8076 1.13868L10.4561 9.49028L11.4935 5.20639C11.9033 3.51375 10.9785 1.78776 9.34217 1.19149C8.42133 0.855911 7.39948 0.932349 6.53869 1.4009C5.6779 1.86945 5.0591 2.68619 4.84093 3.64172L4.69868 4.265C4.0183 7.24536 2.89363 10.2403 1.35592 13.1665C0.203655 15.3591 -0.235188 17.9233 0.12024 20.3869C0.48796 22.9358 1.64739 25.2483 3.47325 27.0741C5.71452 29.3154 8.69341 30.5493 11.8628 30.5492H11.8708C15.043 30.5472 18.0238 29.309 20.2639 27.0629L22.6549 24.6656L30.0388 17.3086ZM18.9041 25.7066C17.0266 27.5891 14.5283 28.6269 11.8696 28.6287H11.8628C9.20664 28.6287 6.70968 27.5945 4.83127 25.716C3.30085 24.1857 2.32912 22.248 2.02106 20.1127C1.723 18.0466 2.09059 15.897 3.05604 14.0598C4.67109 10.9866 5.85376 7.8349 6.57108 4.69239L6.71333 4.06917C6.81026 3.64454 7.07433 3.29602 7.4569 3.08777C7.83947 2.87952 8.27563 2.847 8.68477 2.99604C9.40139 3.25716 9.80649 4.01309 9.62699 4.75442L7.78519 12.36C7.56669 13.1439 8.57671 14.0172 9.39748 13.265L20.1657 2.49676C20.6354 2.02693 21.3997 2.02706 21.8686 2.49586L21.8955 2.52281C22.1231 2.7504 22.2483 3.05282 22.2483 3.37464C22.2483 3.69646 22.123 3.99894 21.8955 4.22653C20.1428 5.97921 16.999 9.12301 15.2785 10.8435C14.9035 11.2185 14.9035 11.8265 15.2785 12.2015C15.6535 12.5765 16.2616 12.5765 16.6365 12.2015C17.6995 11.1385 23.8067 5.03136 24.7016 4.13652C24.9292 3.90893 25.2316 3.78365 25.5535 3.78365C25.8753 3.78365 26.1778 3.90893 26.4054 4.13652L26.4461 4.1773C26.674 4.4052 26.7993 4.7082 26.799 5.03047C26.7986 5.35273 26.6726 5.65547 26.4441 5.88299C24.0363 8.28117 20.7433 11.5599 18.3598 13.9354C17.984 14.3097 17.9829 14.9177 18.3571 15.2935C18.5448 15.4818 18.791 15.576 19.0374 15.576C19.2826 15.576 19.5278 15.4828 19.7151 15.2961C21.3173 13.7001 25.6827 9.35162 27.2159 7.82665C27.6856 7.35925 28.449 7.36015 28.9176 7.82863L28.9508 7.86186C29.1787 8.08982 29.304 8.39282 29.3036 8.71515C29.3033 9.03748 29.1772 9.34022 28.9485 9.56787C26.6129 11.8942 22.914 15.5781 20.599 17.886C20.2233 18.2604 20.2221 18.8684 20.5964 19.2441C20.7841 19.4324 21.0303 19.5266 21.2767 19.5266C21.5218 19.5266 21.767 19.4332 21.9544 19.2466L26.3577 14.8599L26.9838 14.2402C27.4535 13.7753 28.2158 13.7774 28.6831 14.2445C28.9108 14.4722 29.0361 14.775 29.0359 15.097C29.0358 15.419 28.9101 15.7217 28.6827 15.9486L21.2972 23.3072L18.9041 25.7066Z"
                                fill="var(--black)"
                              ></path>
                              <path
                                d="M28.8801 23.9746C29.0888 23.4871 28.8627 22.9226 28.3752 22.7139C27.8877 22.5051 27.3232 22.7312 27.1145 23.2188C26.7924 23.9712 26.3326 24.6493 25.748 25.2339C25.0337 25.9481 24.1898 26.4709 23.2395 26.7878C22.7364 26.9556 22.4646 27.4995 22.6324 28.0027C22.7665 28.4049 23.1412 28.6594 23.5432 28.6594C23.6439 28.6594 23.7463 28.6434 23.8472 28.6098C25.0827 28.1977 26.1792 27.5188 27.1061 26.5919C27.8644 25.8335 28.4613 24.9529 28.8801 23.9746Z"
                                fill="var(--black)"
                              ></path>
                              <path
                                d="M31.4178 24.5042C30.9303 24.2952 30.3658 24.5209 30.1569 25.0084C29.7082 26.055 29.0684 26.998 28.2553 27.8111C27.3096 28.7568 26.1972 29.4632 24.9491 29.9106C24.4499 30.0896 24.1903 30.6394 24.3693 31.1387C24.5098 31.5309 24.8793 31.7751 25.2733 31.7751C25.3808 31.7751 25.4902 31.7569 25.5973 31.7185C27.1144 31.1746 28.4656 30.3168 29.6133 29.1691C30.5999 28.1825 31.3767 27.0372 31.922 25.7651C32.131 25.2776 31.9053 24.7131 31.4178 24.5042Z"
                                fill="var(--black)"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_1511_9373">
                                <rect
                                  width="32"
                                  height="32"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <p className="sc-jXbUNg kFsvSZ ml-3">
                          We don’t recognize{" "}
                          <span className="font-weight-600">
                            {formInputs.emailInput}
                          </span>
                          .Would you like to create an account with this email?
                        </p>
                      </div>
                      <p
                        className="sc-jXbUNg kFsvSZ ml-3 text-center"
                        style={{ paddingTop: "15px" }}
                      >
                        <Link style={{ color: "#0d4749" }} to={"/sign-up"}>
                          Register Now
                        </Link>
                      </p>
                    </div>
                  </>
                )}

                <div className="mb-3">
                  <button className="sc-jlZhew cKRinY text-truncate w-100 btn--default btn btn-default">
                    <RiseLoader
                      color={color}
                      loading={loading}
                      cssOverride={override}
                      size={10}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                      className="loader"
                    />
                    {loading ? null : "Continue with email"}
                  </button>
                </div>
              </form>
            </div>
            <p className="sc-jXbUNg kFsvSZ form text-center grey-2-text d-block px-md-3 mb-2">
              By continuing, you agree to the{" "}
              <a
                target="terms"
                className="default-text"
                href="https://www.adplist.org/terms-and-conditions"
              >
                Terms of use
              </a>
              ,
              <a
                target="privacy"
                className="default-text"
                href="https://www.adplist.org/privacy-policy"
              >
                Privacy Policy
              </a>
              , and
              <a
                target="standards"
                className="default-text"
                href="https://adplist.notion.site/ADPList-Knowledge-hub-e3afba73ec4c4284bc02313c422eecee"
              >
                Community Standards
              </a>{" "}
              of Mentor.rw.
            </p>
          </div>
        </div>
        <div className="sc-fscmHZ khmGyL">
          <div className="side__content">
            <div>
              <div className="side__content__desc">
                <button
                  type="button"
                  className="sc-jlZhew cKRinY text-truncate sc-iowXnY hMuhjd btn btn-default"
                >
                  <svg
                    fill="none"
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="16"
                      cy="16"
                      r="14.5"
                      fill="#F1F2F4"
                      stroke="#E3E6EA"
                      strokeWidth="3"
                    ></circle>
                    <path
                      d="M21.4043 15.8747C21.7376 16.0671 21.7376 16.5483 21.4043 16.7407L14.1351 20.9376C13.8017 21.1301 13.3851 20.8895 13.3851 20.5046L13.3851 12.1108C13.3851 11.7259 13.8017 11.4853 14.1351 11.6778L21.4043 15.8747Z"
                      fill="#384853"
                    ></path>
                  </svg>
                  <span className="ml-2">Learn how Mentor.rw works</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
