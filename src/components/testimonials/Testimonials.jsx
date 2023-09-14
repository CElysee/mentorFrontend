import React from "react";
import "./Testimonials.css";

function Testimonials() {
  return (
    <>
      <div className="Testimonials__Wrapper-sc-4gri53-0 RYtbZ">
        <h2 className="sc-fqkvVR jcuFgw text-center">
          See what our members are saying.
        </h2>
        <div className="outerdiv">
          <div className="innerdiv">
            <div className="div1 eachdiv">
              <div className="userdetails">
                <div className="imgbox">
                  <img
                    src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg"
                    alt=""
                  />
                </div>
                <div className="detbox">
                  <p className="name">Daniel Clifford</p>
                  <p className="designation">Verified Graduate</p>
                </div>
              </div>
              <div className="review">
                <h4>
                  I received a job offer mid-course, and the subjects I learned
                  were current, if not more so, in the company I joined. I
                  honestly feel I got every penny’s worth.
                </h4>
              </div>
            </div>

            <div className="div2 eachdiv">
              <div className="userdetails">
                <div className="imgbox">
                  <img
                    src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jonathan.jpg"
                    alt=""
                  />
                </div>
                <div className="detbox">
                  <p className="name">Jonathan Walters</p>
                  <p className="designation">Verified Graduate</p>
                </div>
              </div>
              <div className="review">
                <h4>“ I started as a total newbie with virtually no coding skills.
                  I now work as a mobile engineer for a big company. This was
                  one of the best investments I’ve made in myself. ”</h4>
                
              </div>
            </div>
            <div className="div4 eachdiv">
              <div className="userdetails">
                <div className="imgbox">
                  <img
                    src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg"
                    alt=""
                  />
                </div>
                <div className="detbox">
                  <p className="name dark">Jeanette Harmon</p>
                  <p className="designation dark">Verified Graduate</p>
                </div>
              </div>
              <div className="review dark">
                <h4> “ Thank you for the wonderful experience! I now have a job I
                  really enjoy, and make a good living while doing something I
                  love. ”</h4>
               
              </div>
            </div>

            <div className="div5 eachdiv">
              <div className="userdetails">
                <div className="imgbox">
                  <img
                    src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-patrick.jpg"
                    alt=""
                  />
                </div>
                <div className="detbox">
                  <p className="name">Patrick Abrams</p>
                  <p className="designation">Verified Graduate</p>
                </div>
              </div>
              <div className="review">
                <h4>
                “ The staff seem genuinely concerned about my progress which I
                  find really refreshing. The program gave me the confidence
                  necessary to be able to go out in the world and present myself
                  as a capable junior developer. The standard is above the rest.
                  You will get the personal attention you need from an
                  incredible community of smart and amazing people. ”
                </h4>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
