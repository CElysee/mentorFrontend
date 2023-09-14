import React from "react";
import NotFoundImage from "../../assets/images/no-results.png";
import "../LostPage/LostPage.css";
import { useNavigate } from "react-router-dom";

function LostPage() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <>
      <div className="Layout__Wrapper-sc-2tn75p-0 fBYEGj">
        <div className="sc-kbdlSk lfupzh">
          <img src={NotFoundImage} alt="..." className="icon" />
          <h1>Looks like you are lost.</h1>
          <p>
            We can’t seem to find the page you are looking for. We will help you
            back to the homepage now.
          </p>
          <button
            type="button"
            className="sc-jlZhew cKRinY text-truncate px-5 mx-auto btn--default btn btn-default"
            onClick={handleClick}
          >
            Back to homepage
          </button>
        </div>
      </div>
    </>
  );
}

export default LostPage;
