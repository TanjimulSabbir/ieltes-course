"use client";

import { PlayCircle, Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../../../styles/custom_swiper.css"; // Custom styles for Swiper

type Media = {
  name: string;
  resource_type: "image" | "video";
  resource_value: string;
  thumbnail_url?: string;
};

export default function MediaCarousel({ media }: { media: Media[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [mainSwiper, setMainSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  // Auto-scroll thumbnails to active index
  useEffect(() => {
    if (thumbsSwiper && thumbsSwiper.slideTo) {
      thumbsSwiper.slideTo(activeIndex);
    }
  }, [activeIndex, thumbsSwiper]);

  const renderMainContent = (item: Media, idx: number) => {
    const isVideo = item.resource_type === "video";

    if (isVideo) {
      if (idx === activeIndex) {
        return (
          <div
            className="relative w-full h-[250px] bg-black overflow-hidden flex items-center justify-center cursor-pointer"
            onClick={() => setPlayingIndex(idx)}
          >
            {playingIndex === idx ? (
              <iframe
                key={idx}
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${item.resource_value}?autoplay=1`}
                title={`video-${idx}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                <Image
                  src={item.thumbnail_url || "/placeholder.png"} // safer fallback
                  alt={`video-thumb-${idx}`}
                  width={700}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <Play className="absolute w-14 h-14 border-4 border-black/10 text-green-500 bg-white rounded-full p-3 shadow-xl" />
              </>
            )}
          </div>
        );
      } else {
        return (
          <div className="relative w-full h-[250px] bg-black overflow-hidden">
            <Image
              src={item.thumbnail_url || "/placeholder.png"} // fallback to prevent empty src error
              alt={`video-thumb-${idx}`}
              width={700}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        );
      }
    } else {
      // ✅ This was missing before
      return (
        <div className="relative w-full h-[250px] overflow-hidden bg-black">
          <Image
            src={item.resource_value || "/placeholder.png"} // for images, use resource_value
            alt={`media-${idx}`}
            width={700}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      );
    }
  };

  return (
    <div className="w-full">
      {/* Main Swiper */}
      <Swiper
        onSwiper={setMainSwiper}
        spaceBetween={10}
        navigation
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
          setPlayingIndex(null); // stop all playing videos on swipe
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Thumbs, Navigation]}
        className="mb-4"
      >
        {media.map((item, idx) => (
          <SwiperSlide key={`main-${idx}`}>
            {renderMainContent(item, idx)}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView="auto"
        watchSlidesProgress
        modules={[Thumbs]}
        className="px-1"
      >
        {media.map((item, idx) => {
          const isVideo = item.resource_type === "video";
          const imageUrl = isVideo ? item.thumbnail_url : item.resource_value;
          const isActive = idx === activeIndex;

          return (
            <SwiperSlide
              key={`thumb-${idx}`}
              className={`!w-[60px] !h-[40px] rounded overflow-hidden border-2 transition-all ${
                isActive ? "border-green-500" : "border-transparent"
              } cursor-pointer`}
              onClick={() => {
                mainSwiper?.slideTo(idx);

                if (!thumbsSwiper) return;

                const visibleSlides = thumbsSwiper.slidesPerViewDynamic();
                const firstVisibleIndex = thumbsSwiper.activeIndex;
                const lastVisibleIndex = firstVisibleIndex + visibleSlides - 1;

                if (idx === lastVisibleIndex) {
                  if (idx < thumbsSwiper.slides.length - 1) {
                    thumbsSwiper.slideTo(idx + 1);
                  }
                } else if (idx === firstVisibleIndex) {
                  if (idx > 0) {
                    thumbsSwiper.slideTo(idx - 1);
                  }
                } else {
                  thumbsSwiper.slideTo(idx);
                }
              }}
            >
              <div className="relative w-full h-full ">
                <Image
                  src={imageUrl || ""}
                  alt={`thumb-${idx}`}
                  width={60}
                  height={40}
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
