import React from "react";
import { Header } from "../../Component/Header";
import { HeroSection } from "../../Component/HeroSection";
import { TopLawyers } from "../../Component/TopLawyers";
import { OurPracticeArea } from "../../Component/OurPracticeArea";
import { WhyChooseUse } from "../../Component/WhyChooseUse";
import { WhatClientSays } from "../../Component/WhatClientSays";
import { RecentNews } from "../../Component/RecentNews";
const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <TopLawyers />
      <OurPracticeArea />
      <WhyChooseUse />
      <WhatClientSays />
      <RecentNews />
    </>
  );
};

export default Home;
