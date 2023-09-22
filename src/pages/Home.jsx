import React from "react";
import MentorCategories from "../components/MentorCategories/MentorCategories";
import FeauturesSection from "../components/feauturesSection/feauturesSection";
import DiscoverMentors from "../components/DiscoverMentors/DiscoverMentors";
import Testimonials from "../components/testimonials/Testimonials";
import HeroSection from "../components/HeroSection/HeroSection";
import Partners from "../components/Partners/Partners";

function Home() {
  return (
    <>
      <div className="Layout__Wrapper-sc-2tn75p-0 fBYEGj">
        <HeroSection />
        <MentorCategories />
        {/* <FeauturesSection /> */}
        <DiscoverMentors />
        <Partners />
        {/* <Testimonials /> */}
      </div>
    </>
  );
}

export default Home;
