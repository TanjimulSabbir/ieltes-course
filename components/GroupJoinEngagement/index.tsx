"use client";

import { GroupJoinEngagementSection } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import MyButton from "../UI/MyButton";

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
              width={150}
              height={150}
              className="mb-4"
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

            <div className="mt-5">
              <Link href={item.cta.clicked_url} target="_blank">
                <MyButton>{item.cta.text}</MyButton>
              </Link>
            </div>
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
