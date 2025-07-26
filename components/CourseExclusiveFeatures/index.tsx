import { FeatureExplanationsSection } from "@/types/types";
import React from "react";

export default function CourseExclusiveFeatures(props: {
  props: { data: FeatureExplanationsSection };
}) {
  const { data } = props.props;

  return (
    <div id="feature_explanations" className="mb-10">
      <div>
        <div className="flex flex-col gap-3 mb-10">
          <h2 className="text-xl font-semibold leading-[30px] text-black">
            {data.name}
          </h2>

          <div className="grid grid-cols-1 px-5 border divide-y rounded-md">
            {data.values.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-start justify-between gap-3 py-5 md:flex-row"
              >
                {/* Left content: Title + Checklist */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-[14px] font-semibold leading-[30px] text-[#111827] md:text-[16px]">
                    {item.title}
                  </h3>

                  {item.checklist.map((point, index) => (
                    <div
                      key={index}
                      className="flex flex-row items-center gap-5"
                    >
                      {/* Checkmark Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="15"
                        fill="none"
                        viewBox="0 0 19 15"
                      >
                        <path
                          fill="#6294F8"
                          stroke="#6294F8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="0.893"
                          d="M18.168 1.508a.792.792 0 01-.006 1.111L6.645 14.143a.77.77 0 01-1.087.005L.77 9.433a.792.792 0 01-.015-1.11.77.77 0 011.098-.016l4.242 4.177L17.07 1.502a.77.77 0 011.098.006z"
                        ></path>
                      </svg>
                      <p className="text-[14px] font-normal leading-[24px] text-[#4B5563] md:text-[16px]">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Right content: Image or Video */}
                <div>
                  {item.file_type === "image" ? (
                    <div className="mb-4 mx-auto max-w-[350px] transition-opacity duration-300 ease-in-out">
                      <img
                        src={item.file_url}
                        alt={item.title}
                        width={250}
                        height={200}
                        className="mx-auto"
                      />
                    </div>
                  ) : item.file_type === "video" ? (
                    <div className="mb-4 mx-auto max-w-[350px] transition-opacity duration-300 ease-in-out">
                      <video
                        controls
                        poster={item.video_thumbnail}
                        width={250}
                        height={200}
                        className="mx-auto rounded"
                      >
                        <source src={item.file_url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
