import React from "react";
import MentorCategories from "../components/MentorCategories_/MentorCategories";
import FeauturesSection from "../components/FeauturesSection_/FeauturesSection";
import DiscoverMentors from "../components/DiscoverMentors_/DiscoverMentors";
import Testimonials from "../components/Testimonials_/Testimonials";
import HeroSection from "../components/HeroSection_/HeroSection";
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
