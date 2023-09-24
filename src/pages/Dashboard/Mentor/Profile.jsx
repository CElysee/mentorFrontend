import React, { useEffect, useState } from "react";
import MentorProfile from "../../../components/MentorProfile_/MentorProfile";
import { useNavigate } from "react-router-dom";
import { isTokenExpired } from "../../../../utils/tokenUtils";
import SideMenu from "../Mentor/SideMenu";
import "../Mentor/Mentor.css"

function Profile() {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");
  const isExpired = isTokenExpired(token);
  if (isExpired || isExpired == null) {
    navigate("/signIn");
  }
  return (
    <>
      <div className="Layout__Wrapper-sc-2tn75p-0 fBYEGj">
        <div width="1440" className="sc-bddgXz ejKczW container">
          <SideMenu />
          <MentorProfile />
        </div>
      </div>
    </>
  );
}

export default Profile;
