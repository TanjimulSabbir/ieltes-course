"use client";

import { Media } from "@/types/types";
import { LucidePlayCircle, PlayCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "@/lib/utils"; // Optional helper for conditional classNames

export default function MediaCarousel({ media }: { media: Media[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const renderMediaSlide = (item: Media, idx: number) => {
    const isVideo = item.resource_type === "video";
    const imageUrl = isVideo ? item.thumbnail_url : item.resource_value;

    return (
      <div className="relative w-full h-full group">
        {/* Blur overlay */}
        <div className="absolute inset-0 bg-black/20 z-10"></div>

        {/* Image/Video */}
        <Image
          alt={`media-${idx}`}
          fetchPriority="high"
          width={700}
          height={400}
          decoding="async"
          className="w-full h-[250px] object-cover"
          src={imageUrl || ""}
          style={{ color: "transparent" }}
        />

        {/* Play Icon for video */}
        {isVideo && (
          <a
            href={item.resource_value}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-20 flex items-center justify-center"
          >
            <LucidePlayCircle className="w-14 h-14 text-green-500 bg-white rounded-full p-3 drop-shadow-md hover:scale-110 transition-transform" />
          </a>
        )}
      </div>
    );
  };

  return (
    <div className="relative w-full">
      {/* Main Swiper with Navigation */}
      <Swiper
        spaceBetween={10}
        navigation
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs, Navigation]}
        className="mb-4"
      >
        {media.map((item, idx) => (
          <SwiperSlide key={idx}>{renderMediaSlide(item, idx)}</SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails as scrollable row */}
      <div className="overflow-x-auto scrollbar-hide w-full px-1">
        <div className="flex gap-2 w-max">
          {media.map((item, idx) => {
            const isVideo = item.resource_type === "video";
            const imageUrl = isVideo ? item.thumbnail_url : item.resource_value;

            return (
              <div
                key={`thumb-${idx}`}
                onClick={() => thumbsSwiper?.slideTo(idx)}
                className={cn(
                  "relative cursor-pointer min-w-[60px] h-[35px] overflow-hidden rounded border-2 transition-all",
                  activeIndex === idx
                    ? "border-green-500"
                    : "border-transparent hover:border-gray-300"
                )}
              >
                <Image
                  alt={`thumb-${idx}`}
                  fetchPriority="low"
                  width={80}
                  height={80}
                  decoding="async"
                  className="w-full h-full object-cover"
                  src={imageUrl || ""}
                  style={{ color: "transparent" }}
                />
                {isVideo && (
                  <PlayCircle className="absolute inset-0 top-2 left-4 w-4 h-4 text-white bg-black/50 rounded-full p-[1px]" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Hidden Swiper to sync thumbs (required) */}
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={media.length}
        modules={[Thumbs]}
        className="hidden"
      >
        {media.map((_, idx) => (
          <SwiperSlide key={`hidden-${idx}`} />
        ))}
      </Swiper>
    </div>
  );
}
