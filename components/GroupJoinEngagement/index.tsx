"use client";

import { GroupJoinEngagementSection } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

export default function GroupJoinEngagement(props: {
  props: { data: GroupJoinEngagementSection };
}) {
  return (
    <div id="group_join_engagement">
      {props.props.data.values.map((item) => (
        <div
          key={item.id}
          style={{
            backgroundImage: `url(${item.background.image})`,
            backgroundSize: "cover",
          }}
          className="flex gap-4 p-4 mb-8 overflow-hidden md:p-8 rounded-xl md:mb-12"
        >
          {/* Left Column */}
          <div className="w-full md:w-1/2">
            <Image
              src={item.top_left_icon_img}
              alt="icon"
              width={40}
              height={40}
              className="mb-4"
              style={{
                height: "40px",
                width: "auto",
              }}
            />

            <h2
              className="text-xl font-semibold"
              style={{ color: item.title_color || "#fff" }}
            >
              {item.title}
            </h2>

            <p
              className="mt-2 text-base"
              style={{ color: item.description_color || "#ededed" }}
            >
              {item.description}
            </p>

            <Link href={item.cta.clicked_url} target="_blank">
              <button
                className="mt-6 button primary"
                style={{
                  backgroundColor: item.cta.color || "#fff",
                  color: "#000",
                }}
              >
                {item.cta.text}
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="items-center hidden w-1/2 md:flex">
            <Image
              src={item.thumbnail}
              alt="thumbnail"
              width={400}
              height={300}
              className="rounded-md object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
