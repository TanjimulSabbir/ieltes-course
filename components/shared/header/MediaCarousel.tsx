"use client";

import { Media } from "@/types/types";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Thumbs, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";

export default function MediaCarousel({ media }: { media: Media[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const renderMediaSlide = (item: Media, idx: number) => {
    const isVideo = item.resource_type === "video";
    const imageUrl = isVideo ? item.thumbnail_url : item.resource_value;
    return (
      <div className="relative w-full h-full group">
        <Image
          alt={`media-${idx}`}
          width={700}
          height={400}
          src={imageUrl || ""}
          className="w-full h-[250px] object-cover rounded-md"
        />
        {isVideo && (
          <a
            href={item.resource_value}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center z-10"
          >
            <PlayCircle className="w-16 h-16 text-white group-hover:text-red-500 transition-colors drop-shadow-lg" />
          </a>
        )}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity rounded-md z-0" />
      </div>
    );
  };

  return (
    <div className="w-full">
      {/* Main Swiper */}
      <Swiper
        spaceBetween={10}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        navigation={true}
        modules={[Thumbs, Navigation]}
        className="mb-4 w-full"
      >
        {media.map((item, idx) => (
          <SwiperSlide key={idx}>{renderMediaSlide(item, idx)}</SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView="auto"
        watchSlidesProgress
        modules={[Thumbs]}
        className="w-full px-1"
      >
        {media.map((item, idx) => {
          const isVideo = item.resource_type === "video";
          const imageUrl = isVideo ? item.thumbnail_url : item.resource_value;
          const isActive = idx === activeIndex;
          return (
            <SwiperSlide
              key={`thumb-${idx}`}
              className={`!w-[60px] !h-[40px] rounded-md overflow-hidden border-2 transition-all ${
                isActive ? "border-green-500" : "border-transparent"
              } cursor-pointer`}
            >
              <div className="relative w-full h-full">
                <Image
                  alt={`thumb-${idx}`}
                  width={60}
                  height={40}
                  src={imageUrl || ""}
                  className="w-full h-full object-cover"
                />
                {isVideo && (
                  <PlayCircle className="absolute bottom-1 right-1 text-white w-4 h-4 drop-shadow-md" />
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
