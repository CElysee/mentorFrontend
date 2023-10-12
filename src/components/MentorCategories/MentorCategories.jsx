import React, { useState, useEffect } from "react";
import categorieImage from "../../assets/images/marketing.svg";
import categorieImage2 from "../../assets/images/categiries.svg";
import "./MentorCategories.css";
import { Link } from "react-router-dom";
import axiosInstance from "../../axiosInstance";

function MentorCategories() {
  const [mentorCategories, setMentorCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryApi = await axiosInstance.get("/interests/list");
        setMentorCategories(categoryApi.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="LearnAndGrow__Wrapper-sc-9rypwa-0 eWqOrw d-flex flex-column align-items-center">
        <div className="text-center mb-32">
          <h2 className="sc-fqkvVR jcuFgw mb-3">
          Embrace learning, map out your path to success and grow across expertise for free.
          </h2>
          <p
            className="sc-gsFSXq fJiOdH"
            style={{ color: "rgba(0, 0, 0, 0.7)" }}
          >
            Connect with mentors spanning diverse product fields worldwide.
          </p>
        </div>
        <div className="topics d-none d-md-flex flex-wrap justify-content-center mb-32">
          {mentorCategories.map((item, index) => (
            <Link key={index} to={`/findMentorByInterest/${item.id}`}>
            <div  className="LearnAndGrow__Card-sc-9rypwa-1 hPEWPj">
              <div className="description">
                <h3 className="sc-dcJsrY eXeELN title">{item.category_name}</h3>
                <p className="sc-jXbUNg kFsvSZ mentor-count">100+ mentors</p>
              </div>
            </div>
            </Link>
          ))}
        </div>
        <button
          bg="var(--black)"
          color="var(--white)"
          type="button"
          className="sc-jlZhew bVwUif text-truncate undefined btn btn-default"
        >
          <Link
            className="sc-kAyceB cCBfKf font-weight-700 px-28"
            style={{ color: "#fff" }}
            to={"/findMentor"}
          >
            Discover Multi-Interest Mentors
          </Link>
        </button>
      </div>
    </>
  );
}

export default MentorCategories;
