import React , { useState }from "react";
import { useNavigate } from 'react-router-dom';
import "./SignUp.css"



function SignUp() {

    const [isMemberActive, setMemberActive] = useState(false);
    const [isMentorActive, setMentorActive] = useState(false);
    const navigate = useNavigate();

    const handleMember = () => {
      setMemberActive(!isMemberActive);
      setMentorActive(false);
      navigateToMentee(); // Call the function to trigger navigation
    };
    const handleMentor = () => {
      // Toggle the class name when the div is clicked
      setMentorActive(!isMentorActive);
      setMemberActive(false);
      navigateToMentor(); // Call the function to trigger navigation
  };
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    const navigateToMentor = async () => {
      await delay(1000);
      navigate('/setUpMentor', {
        state: {
          userRole: 'mentor'
        }
      });
    };
    const navigateToMentee = async () => {
      await delay(1000);
      navigate('/setUpMentee', {
        state: {
          userRole: 'mentee'
        }
      });
    };

    
      const divMember = isMemberActive ? 'checkbox' : '';
      const divMentor = isMentorActive ? 'checkbox' : '';
  return (
    <>
      <div className="">
        <div width="1440" className="sc-fscmHZ jxWFyJ">
          <div
            className="sc-iowXnY jgrfps mx-auto d-flex"
            width="1440"
            style={{ maxWidth: "628px" }}
          >
            <div className="sc-dBFDNq hCtyGq w-100 mx-2">
              <h2
                className="sc-fqkvVR sc-ggqIjW jcuFgw gKfFgF font-weight-600 mb-3 mx-0"
                style={{ maxWidth: "527px" }}
              >
                Hello! What brings you to ADPList?
              </h2>
              <p className="sc-kAyceB cCBfKf mb-32" style={{maxWidth: "412px"}}>
                Connect with our community of mentors and users from 141+
                countries around the world.
              </p>
              <div
                className="sc-eldPxv ejBrmT justify-content-center"
                width="1440"
              >
                <div className="sc-djVXDX nTGop" onClick={handleMember}>
                  <div className={divMember + " " + "mt-n3 ml-auto"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      height="16"
                      width="16"
                      fill="#fff"
                      className="m-auto"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none"></path>
                      <path d="M9 16.2l-3.5-3.5c-.39-.39-1.01-.39-1.4 0-.39.39-.39 1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0L9 16.2z"></path>
                    </svg>
                  </div>
                  <img
                    src="https://app.adplist.org/illustrations/auth/community-user.svg"
                    width="70"
                    className=""
                  />
                  <p className="tab__header mb-3">Mentee</p>
                  <div width="1440" className="sc-eldPxv bJvagg">
                    <p className="tab__caption">
                      ✓︎ &nbsp;Book sessions with ease
                    </p>
                    <p className="tab__caption">
                      ✓︎ &nbsp;Engage in interactive sessions
                    </p>
                    <p className="tab__caption">
                      ✓︎ &nbsp;Discover new career opportunities
                    </p>
                  </div>
                </div>
                <div className="sc-djVXDX nTGop" onClick={handleMentor}>
                <div className={divMentor + " " + "mt-n3 ml-auto"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      height="16"
                      width="16"
                      fill="#fff"
                      className="m-auto"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none"></path>
                      <path d="M9 16.2l-3.5-3.5c-.39-.39-1.01-.39-1.4 0-.39.39-.39 1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0L9 16.2z"></path>
                    </svg>
                  </div>
                  <img
                    src="https://app.adplist.org/illustrations/auth/be-a-mentor.svg"
                    width="70"
                    className=""
                  />
                  <p className="tab__header mb-3">Mentor</p>
                  <div width="1440" className="sc-eldPxv bJvagg">
                    <p className="tab__caption">
                      ✓︎ &nbsp;Get booked easily by members
                    </p>
                    <p className="tab__caption">✓︎ &nbsp;Receive reviews</p>
                    <p className="tab__caption">
                      ✓︎ &nbsp;Unlock rewards and achievements
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        
        </div>
      </div>
    </>
  );
}

export default SignUp;
