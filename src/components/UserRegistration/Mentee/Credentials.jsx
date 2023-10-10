import React, {useState} from "react";
import PropTypes from "prop-types";

function Credentials(props) {
  const { userDetails, setUserDetails } = props;

  Credentials.propTypes = {
    userDetails: PropTypes.object,
    setUserDetails: PropTypes.func.isRequired,
  };
  const {email, phone_number, password} = userDetails

  const [showpassword, setShowPassword] = useState(false)
  function handleShowPassword(e){
    setShowPassword(!showpassword)
  }

  const handleChange = (e)=> {
    const {name, value} = e.target
    setUserDetails({
      ...userDetails,
      [name]:value,
    })
  }

  return (
    <>
      <h2 className="sc-fqkvVR jcuFgw mb-32">Accelerate your career growth</h2>
      <div className="form-group">
        <label className="form-label" htmlFor="employer">
          Email address
        </label>
        <input
          name="email"
          placeholder="Email"
          type="email"
          id="email"
          className="form-control"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="employer">
          Phone Number
        </label>
        <input
          name="phone_number"
          placeholder="0782384772"
          type="number"
          id="phone_number"
          className="form-control"
          value={phone_number}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="password">
          Create a password
        </label>
        <div className="position-relative d-flex align-items-center input-container">
          <input
            name="password"
            className="form-control password"
            placeholder="••••••••"
            title="••••••••"
            type={showpassword ? "text" : "password"}
            aria-required="true"
            value={password}
            onChange={handleChange}
            autoComplete=""
          />
          <div className="cursor-pointer grey-2-text" onClick={handleShowPassword}>
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
    </>
  );
}

export default Credentials;
