"use client";

import { Checklist, Media } from "@/types/types";
import MediaCarousel from "./MediaCarousel";
import Image from "next/image";

export default function HeroSection({
  props,
}: {
  props: {
    title: string;
    description: string;
    media: Media[];
    checklist: Checklist[];
  };
}) {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        id="skills-landing"
        data-label="div#skills-landing"
        className="container w-full max-w-screen-xl horizantal-padding mx-auto relative flex flex-col gap-4 md:flex-row md:gap-12 pb-6 md:py-10 md:min-h-[300px]"
      >
        <div className="relative flex flex-col gap-4 md:flex-row md:gap-12 pb-6 md:py-10 md:min-h-[300px]">
          <div className="w-full md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
            <div className="block mt-5 mb-10 md:hidden">
              <MediaCarousel media={props.media} />
            </div>
            <h1
              className="text-white mb-2 text-[21px] font-semibold md:text-4xl"
              data-label="h1.text-white"
            >
              {props.title}
            </h1>

            <div className="mb-2">
              <button className="flex flex-row flex-wrap gap-2 text-white">
                <span className="inline-block">
                  <Image
                    className="md:w-[130px] w-[100px]"
                    src="https://cdn.10minuteschool.com/images/Dev_Handoff_Q1_24_Frame_2_1725444418666.png"
                    alt="Course Rating"
                  />
                </span>
                <span className="inline-block text-sm md:text-base">
                  (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
                </span>
              </button>
            </div>

            <div
              className="text-gray-400 overflow-hidden"
              style={{ whiteSpace: "pre-wrap" }}
              dangerouslySetInnerHTML={{ __html: props.description }}
            />
          </div>
          <div className="w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white absolute h-full z-50 right-0 md:top-[50px]">
            <div className="md:sticky md:top-[112px]">
              <div className="md:border md:border-b-0">
                <div className="hidden p-1 md:block">
                  <MediaCarousel media={[...props.media].reverse()} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
