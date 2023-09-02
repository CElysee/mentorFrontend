import React from "react";
import MentorCategories from "../components/mentorCategories/mentorCategories";
import FeauturesSection from "../components/feauturesSection/feauturesSection";
import DiscoverMentors from "../components/discoverMentors/discoverMentors";
import Testimonials from "../components/testimonials/Testimonials";
import HeroSection from "../components/heroSection/heroSection";

function Home() {
  return (
    <>
      <div className="Layout__Wrapper-sc-2tn75p-0 fBYEGj">
        <HeroSection />
        <MentorCategories />
        <FeauturesSection />
        <DiscoverMentors />
        <Testimonials />
      </div>
    </>
  );
}

export default Home;
