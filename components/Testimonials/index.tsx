"use client";

import { TestimonialSection } from "@/types/types";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Testimonials(props: {
  props: { data: TestimonialSection };
}) {
  const { data } = props.props;
  const [playing, setPlaying] = useState<Record<string, boolean>>({});

  const handlePlay = (id: string) => {
    setPlaying((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div id="testimonials" className="mb-10 pb-20 overflow-scroll">
      <h2 className="mb-4 text-xl font-semibold">{data.name}</h2>

      <div className="relative">
        <Swiper
          spaceBetween={16}
          slidesPerView={"auto"}
          navigation
          modules={[Navigation]}
          className="overflow-visible"
        >
          {data.values.map((item) => {
            const isPlaying = playing[item.id];
            const [expanded, setExpanded] = useState(false);
            return (
              <SwiperSlide
                key={item.id}
                style={{ width: "372px" }}
                className="!w-[260px] md:!w-[372px]"
              >
                <div className="relative mt-5 min-h-[250px] md:min-h-[297px] flex flex-col justify-between rounded-lg border p-6 bg-white">
                  {/* Quote icon */}
                  <div className="absolute -top-4 left-5 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#FCE0D6] p-2">
                    <div className="flex">
                      {[...Array(2)].map((_, idx) => (
                        <svg
                          key={idx}
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          fill="none"
                          viewBox="0 0 20 30"
                        >
                          <path
                            fill="#D33242"
                            d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Video Area */}
                  <div className="w-full mb-4 overflow-hidden rounded-md aspect-video relative">
                    {isPlaying && item.video_url ? (
                      <iframe
                        className="w-full h-full rounded-md"
                        src={`https://www.youtube.com/embed/${item.video_url}?rel=0&autoplay=1`}
                        title={item.name}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <>
                        {item.thumb !== "" ? (
                          <div className="relative">
                            <Image
                              height={297}
                              width={372}
                              src={item.thumb}
                              alt="Video thumbnail"
                              className="w-full h-full object-cover rounded-lg"
                            />
                            <button
                              onClick={() => handlePlay(item.id)}
                              className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
                            >
                              <Image
                                src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                                alt="Play"
                                width={70}
                                height={70}
                                className="max-w-[20vw]"
                              />
                            </button>
                          </div>
                        ) : (
                          <div className="relative p-4 w-full h-full scrollbar-hide overflow-y-scroll bg-gray-100 rounded-lg text-gray-800 text-sm leading-relaxed">
                            <p
                              className={`${
                                expanded ? "" : "line-clamp-4"
                              } transition-all duration-300`}
                            >
                              {item.testimonial}
                            </p>

                            <button
                              onClick={() => setExpanded(!expanded)}
                              className="absolute bottom-2 right-2 bg-white text-blue-600 text-xs px-3 py-1 rounded shadow cursor-pointer hover:underline"
                            >
                              {expanded ? "Show Less" : "See More"}
                            </button>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  {/* User Info */}
                  <div className="flex gap-4 items-center">
                    <div className="rounded-full overflow-hidden w-[50px] h-[50px]">
                      <Image
                        height={50}
                        width={50}
                        src={item.profile_image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
