"use client";
import { useCourseData } from "@/hooks/useCourseData";
import React from "react";
import HeroSection from "../shared/header/header";

export default function landing() {
  const { data, error, isLoading } = useCourseData("bn");
  console.log("Course Data:", data);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  if (data === undefined) return <p>No data available</p>;
  const { title, description, media } = data?.data;
  return (
    <div>
          <HeroSection props={{title,description}} />
    </div>
  );
}
