import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { isTokenExpired } from "../../../../utils/tokenUtils";
import axiosInstance from "../../../axiosInstance";
import Logo from "../../../assets/images/mentorlogo.svg";


function SideMenu() {
  const location = useLocation();
  const [userId, setUserId] = useState("");
  const [userProfile, setUserProfile] = useState("");
  const [profileImage, setProfileImage] = useState("")
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_role');
    localStorage.removeItem('userId');
    navigate("/signIn")
  };
  const token = localStorage.getItem("access_token");
  const isExpired = isTokenExpired(token);
  const imageBaseUrl = import.meta.env.VITE_REACT_APP_API;

  useEffect(() => {
    const fetchData = async () => {
      
      if (isExpired || isExpired == null) {
        navigate("/signIn");
      } else {
        try {
          const response = await axiosInstance.get("/auth/users/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          // console.log(response.data);
          setUserId(response.data.id);
          if (response.status == 200 && response.data.id) {
            const requestUrl = `auth/users/mentor_profile/${response.data.id}`
            const responseProfile = await axiosInstance.post(requestUrl);
            setUserProfile(responseProfile.data);
            setProfileImage(responseProfile.data.profile.profile_picture)
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };
    fetchData();
  }, []);
  const side_menu_links = [
    {
      path: "/mentor/dashboard",
      display: "Dashboard",
      icon: (
        <>
          <span className="item__icon">
            <svg
              fill="none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.15722 20.7714V17.7047C9.1572 16.9246 9.79312 16.2908 10.581 16.2856H13.4671C14.2587 16.2856 14.9005 16.9209 14.9005 17.7047V20.7809C14.9003 21.4432 15.4343 21.9845 16.103 22H18.0271C19.9451 22 21.5 20.4607 21.5 18.5618V9.83784C21.4898 9.09083 21.1355 8.38935 20.538 7.93303L13.9577 2.6853C12.8049 1.77157 11.1662 1.77157 10.0134 2.6853L3.46203 7.94256C2.86226 8.39702 2.50739 9.09967 2.5 9.84736V18.5618C2.5 20.4607 4.05488 22 5.97291 22H7.89696C8.58235 22 9.13797 21.4499 9.13797 20.7714"
                stroke="var(--teal)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>
        </>
      ),
    },
    {
      path: '/admin/users',
      display: "Users",
      icon: (
        <>
          <svg
            fill="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.3347 2.75021H7.66567C4.64467 2.75021 2.75067 4.88921 2.75067 7.91621V16.0842C2.75067 19.1112 4.63467 21.2502 7.66567 21.2502H16.3337C19.3647 21.2502 21.2507 19.1112 21.2507 16.0842V7.91621C21.2507 4.88921 19.3647 2.75021 16.3347 2.75021Z"
              stroke="var(--grey-1)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M7.52075 13.1974C6.85975 13.1974 6.32275 12.6604 6.32275 12.0004C6.32275 11.3404 6.85975 10.8024 7.52075 10.8024C8.18175 10.8024 8.71875 11.3404 8.71875 12.0004C8.71875 12.6604 8.18175 13.1974 7.52075 13.1974Z"
              fill="var(--grey-1)"
            ></path>
            <path
              d="M12.0002 13.1974C11.3392 13.1974 10.8022 12.6604 10.8022 12.0004C10.8022 11.3404 11.3392 10.8024 12.0002 10.8024C12.6612 10.8024 13.1982 11.3404 13.1982 12.0004C13.1982 12.6604 12.6612 13.1974 12.0002 13.1974Z"
              fill="var(--grey-1)"
            ></path>
            <path
              d="M16.4792 13.1974C15.8182 13.1974 15.2812 12.6604 15.2812 12.0004C15.2812 11.3404 15.8182 10.8024 16.4792 10.8024C17.1402 10.8024 17.6772 11.3404 17.6772 12.0004C17.6772 12.6604 17.1402 13.1974 16.4792 13.1974Z"
              fill="var(--grey-1)"
            ></path>
          </svg>
        </>
      ),
    },
    {
      path: `/mentor/profile/${userId}`,
      display: "Profile",
      icon: (
        <>
          <svg
            fill="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.3347 2.75021H7.66567C4.64467 2.75021 2.75067 4.88921 2.75067 7.91621V16.0842C2.75067 19.1112 4.63467 21.2502 7.66567 21.2502H16.3337C19.3647 21.2502 21.2507 19.1112 21.2507 16.0842V7.91621C21.2507 4.88921 19.3647 2.75021 16.3347 2.75021Z"
              stroke="var(--grey-1)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M7.52075 13.1974C6.85975 13.1974 6.32275 12.6604 6.32275 12.0004C6.32275 11.3404 6.85975 10.8024 7.52075 10.8024C8.18175 10.8024 8.71875 11.3404 8.71875 12.0004C8.71875 12.6604 8.18175 13.1974 7.52075 13.1974Z"
              fill="var(--grey-1)"
            ></path>
            <path
              d="M12.0002 13.1974C11.3392 13.1974 10.8022 12.6604 10.8022 12.0004C10.8022 11.3404 11.3392 10.8024 12.0002 10.8024C12.6612 10.8024 13.1982 11.3404 13.1982 12.0004C13.1982 12.6604 12.6612 13.1974 12.0002 13.1974Z"
              fill="var(--grey-1)"
            ></path>
            <path
              d="M16.4792 13.1974C15.8182 13.1974 15.2812 12.6604 15.2812 12.0004C15.2812 11.3404 15.8182 10.8024 16.4792 10.8024C17.1402 10.8024 17.6772 11.3404 17.6772 12.0004C17.6772 12.6604 17.1402 13.1974 16.4792 13.1974Z"
              fill="var(--grey-1)"
            ></path>
          </svg>
        </>
      ),
    },
    {
      path:`/mentor/bookings/${userId}`,
      display: "Bookings",
      icon: (
        <>
          <svg
            fill="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.3347 2.75021H7.6657C4.6447 2.75021 2.7507 4.88921 2.7507 7.91621V16.0842C2.7507 19.1112 4.6347 21.2502 7.6657 21.2502H16.3337C19.3647 21.2502 21.2507 19.1112 21.2507 16.0842V7.91621C21.2507 4.88921 19.3647 2.75021 16.3347 2.75021Z"
              stroke="var(--grey-1)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M15.3913 14.0177L12.0003 11.9947V7.63373"
              stroke="var(--grey-1)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </>
      ),
    },
    {
      path: `/mentor/calendar/${userId}`,
      display: "Calendar",
      icon: (
        <>
          <svg
            fill="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.09264 9.40427H20.9166"
              stroke="var(--grey-1)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M16.4421 13.3097H16.4513"
              stroke="var(--grey-1)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M12.0046 13.3097H12.0139"
              stroke="var(--grey-1)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M7.55789 13.3097H7.56715"
              stroke="var(--grey-1)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M16.4421 17.1962H16.4513"
              stroke="var(--grey-1)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M12.0046 17.1962H12.0139"
              stroke="var(--grey-1)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M7.55789 17.1962H7.56715"
              stroke="var(--grey-1)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M16.0437 2V5.29078"
              stroke="var(--grey-1)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M7.9655 2V5.29078"
              stroke="var(--grey-1)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.2383 3.57919H7.77096C4.83427 3.57919 3 5.21513 3 8.22222V17.2719C3 20.3262 4.83427 22 7.77096 22H16.229C19.175 22 21 20.3546 21 17.3475V8.22222C21.0092 5.21513 19.1842 3.57919 16.2383 3.57919Z"
              stroke="var(--grey-1)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </>
      ),
    },
    {
      path: "/mentor/support",
      display: "Support",
      icon: (
        <>
          <svg
            fill="var(--grey-2)"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.25 3C10.4205 3 8.63213 3.5425 7.11098 4.55891C5.58982 5.57531 4.40423 7.01996 3.70412 8.71018C3.00401 10.4004 2.82083 12.2603 3.17774 14.0546C3.53465 15.8489 4.41563 17.4971 5.70927 18.7907C7.0029 20.0844 8.65109 20.9653 10.4454 21.3223C12.2397 21.6792 14.0996 21.4960 15.7898 20.7959C17.48 20.0958 18.9247 18.9102 19.9411 17.389C20.9575 15.8679 21.5 14.0795 21.5 12.25C21.5 9.79675 20.5254 7.44397 18.7907 5.70926C17.056 3.97455 14.7033 3 12.25 3ZM20.1786 12.25C20.1774 13.802 19.7177 15.3191 18.8571 16.6107L16.9411 14.6814C17.3317 13.9258 17.5341 13.0872 17.5313 12.2366C17.5284 11.386 17.3204 10.5487 16.9248 9.79575C16.5292 9.04279 15.9577 8.39642 15.2589 7.91153C14.56 7.42665 13.7545 7.11756 12.9107 7.01053V4.36768C14.889 4.53311 16.7333 5.43465 18.079 6.89413C19.4247 8.35361 20.1739 10.2648 20.1786 12.25ZM8.28572 12.25C8.28572 11.4659 8.51822 10.6995 8.95382 10.0476C9.38942 9.39564 10.0086 8.88752 10.7329 8.58748C11.4573 8.28743 12.2544 8.20892 13.0234 8.36189C13.7924 8.51485 14.4988 8.89241 15.0532 9.44683C15.6076 10.0012 15.9852 10.7076 16.1381 11.4766C16.2911 12.2456 16.2126 13.0427 15.9125 13.7671C15.6125 14.4914 15.1044 15.1106 14.4524 15.5462C13.8005 15.9818 13.0341 16.2143 12.25 16.2143C11.1986 16.2143 10.1903 15.7966 9.44683 15.0532C8.70338 14.3097 8.28572 13.3014 8.28572 12.25ZM11.5893 4.35446V6.99732C10.7436 7.10353 9.93621 7.41266 9.23584 7.89835C8.53548 8.38404 7.96295 9.03189 7.56706 9.78667C7.17118 10.5414 6.96369 11.3808 6.96227 12.233C6.96085 13.0853 7.16556 13.9253 7.55893 14.6814L5.64286 16.6107C4.88823 15.4633 4.44457 14.1396 4.35534 12.7692C4.26611 11.3988 4.53437 10.0287 5.13383 8.79309C5.7333 7.55752 6.64342 6.49885 7.77505 5.72077C8.90668 4.94268 10.221 4.47188 11.5893 4.35446ZM12.25 20.1786C11.1633 20.1759 10.0888 19.9499 9.09318 19.5146C8.09752 19.0793 7.20198 18.4439 6.46215 17.648L8.33197 15.7782C8.82753 16.3265 9.43255 16.7648 10.108 17.0647C10.7834 17.3647 11.5143 17.5197 12.2533 17.5197C12.9924 17.5197 13.7232 17.3647 14.3986 17.0647C15.0741 16.7648 15.6791 16.3265 16.1746 15.7782L18.0445 17.648C17.3039 18.4448 16.4073 19.0806 15.4104 19.5159C14.4135 19.9513 13.3378 20.1768 12.25 20.1786Z" />
          </svg>
        </>
      ),
    },
  ];
  return (
    <>
      <div className="v2__sidenav">
        <div className="v2__sidenav__content">
          <div className="v2__sidenav__content">
            <div className="profile mb-3">
            {profileImage ? (
                <>
                  <img
                    src={`${imageBaseUrl}/UserProfiles/${profileImage}`}
                    className="img-fit rounded-circle"
                    alt={userProfile.name}
                    title={userProfile.name}
                    width="100%"
                    height="100%"
                  />
                </>
              ) : (
                <>
                  <img src={Logo} className="img-fit rounded-circle" />
                </>
              )}
              
              <div className="">
                <p className="sc-gsFSXq fJiOdH mb-1 font-weight-700">
                  {userProfile.name}
                </p>
                <Link className="grey-2-text text-decoration-none" to={""}>
                  <small>View profile </small>
                </Link>
              </div>
            </div>
          </div>

          {side_menu_links.map((item, index) => (
            <Link
              key={index}
              className={`item ${
                location.pathname == item.path ? "active" : "null"
              }`}
              to={item.path}
            >
              <span className="item__icon">{item.icon}</span>
              <p className="sc-gsFSXq fJiOdH font-weight-500 text-truncate">
                {item.display}
              </p>
            </Link>
          ))}
          <a
            onClick={handleLogout}
            aria-label="Logout"
            className="item"
            role="button"
          >
            <span className="item_icon">
              <svg
                fill="none"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.4361 11.8778L3.39511 11.8778"
                  stroke="var(--grey-2)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12.5084 8.96179L15.4364 11.8778L12.5084 14.7938"
                  stroke="var(--grey-2)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M8.12802 7.245L8.12802 6.312C8.12802 4.277 9.77702 2.628 11.813 2.628L16.697 2.628C18.727 2.628 20.372 4.273 20.372 6.303L20.372 17.443C20.372 19.478 18.722 21.128 16.687 21.128L11.802 21.128C9.77302 21.128 8.12802 19.482 8.12802 17.453L8.12802 16.511"
                  stroke="var(--grey-2)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
            <p className="sc-gsFSXq fJiOdH font-weight-500 text-truncate">
              Logout
            </p>
          </a>
        </div>
      </div>
    </>
  );
}

export default SideMenu;
