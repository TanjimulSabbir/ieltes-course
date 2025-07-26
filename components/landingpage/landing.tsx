"use client";
import { useCourseData } from "@/hooks/useCourseData";
import React from "react";
import HeroSection from "../shared/header/header";
import HashNavbar from "../shared/HashNavbar/HashNavbar";
import CourseInstructor from "../CourseInstructor";
import { mapSectionsByType } from "@/data/data";
import HowToCourseOrganized from "../HowToCourseOrganized";

export default function landing() {
  const { data, error, isLoading } = useCourseData("bn");
  console.log("Course Data:", data);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  if (data === undefined) return <p>No data available</p>;
  const { title, description, media, sections } = data?.data;

  const sectionsMap = mapSectionsByType(sections);

  return (
    <div>
      <HeroSection props={{ title, description, media }} />
      <div className="container max-w-screen-xl relative h-screen mx-auto">
        <div className="md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
          <HashNavbar />
          <CourseInstructor props={{ data: sectionsMap.instructors! }} />
          <HowToCourseOrganized props={{ data: sectionsMap.features! }} />
        </div>
        <div className="w-full md:max-w-[330px] lg:max-w-[448px]"></div>
      </div>
    </div>
  );
}
