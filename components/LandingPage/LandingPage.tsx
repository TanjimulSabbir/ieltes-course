"use client";
import NotFound from "@/app/not-found";
import { mapSectionsByType } from "@/data/data";
import { CourseData } from "@/types/types";
import { useEffect, useState } from "react";
import About from "../About";
import CourseExclusiveFeatures from "../CourseExclusiveFeatures";
import CourseInstructor from "../CourseInstructor";
import GroupJoinEngagement from "../GroupJoinEngagement";
import HowToCourseOrganized from "../HowToCourseOrganized";
import HashNavbar from "../shared/HashNavbar/HashNavbar";
import CheckList from "../shared/header/Checklist";
import HeroSection from "../shared/header/header";
import CoursePricing from "../shared/header/Pricing";
import Testimonials from "../Testimonials";
import WhatYouWillLearn from "../WhatYouWillLearn";

export default function LandingPage({ data }: { data: CourseData }) {
  const [isStickyTop, setIsStickyTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsStickyTop(scrollTop > 300); // adjust this based on your top-10
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (data === undefined) return <p>No data available</p>;
  const { title, description, checklist, media, sections } = data;

  const sectionsMap = mapSectionsByType(sections);

  return (
    <>
      <HeroSection props={{ title, description, media, checklist }} />
      <div className="container md:flex justify-between max-w-screen-xl horizantal-padding relative h-full mx-auto">
        <div className="md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
          <HashNavbar />
          <div
            className={`md:hidden md:max-w-[330px] lg:max-w-[400px] md:border`}
          >
            <CoursePricing />
            <CheckList props={{ data: checklist }} />
          </div>
          <CourseInstructor props={{ data: sectionsMap.instructors! }} />
          <HowToCourseOrganized props={{ data: sectionsMap.features! }} />
          <GroupJoinEngagement
            props={{ data: sectionsMap.group_join_engagement! }}
          />
          <WhatYouWillLearn props={{ data: sectionsMap.pointers! }} />
          <About props={{ data: sectionsMap.about! }} />
          <CourseExclusiveFeatures
            props={{ data: sectionsMap.feature_explanations! }}
          />
          <Testimonials props={{ data: sectionsMap.testimonials! }} />
        </div>
        <div className="w-full md:max-w-[330px] lg:max-w-[448px] pt-6">
          <div
            className={`hidden md:block sticky top-10 w-full md:max-w-[330px] lg:max-w-[400px] ml-auto border ${
              isStickyTop ? "border-t" : "border-t-0"
            }`}
          >
            <CoursePricing />
            <CheckList props={{ data: checklist }} />
          </div>
        </div>
      </div>
    </>
  );
}
