"use client";
import { useCourseData } from "@/hooks/useCourseData";
import React from "react";
import HeroSection from "../shared/header/header";
import HashNavbar from "../shared/HashNavbar/HashNavbar";
import CourseInstructor from "./CourseInstructor";

export default function landing() {
  const { data, error, isLoading } = useCourseData("bn");
  console.log("Course Data:", data);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  if (data === undefined) return <p>No data available</p>;
  const { title, description, media,sections } = data?.data;
  return (
    <div className="">
      <HeroSection props={{ title, description, media }} />
      <div className="order-2 md:flex-1 md:order-1 w-[1200px] md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
              <HashNavbar />
              <CourseInstructor props={{data:sections[2]}} />
      </div>
    </div>
  );
}
