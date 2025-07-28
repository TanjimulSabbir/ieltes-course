
import { Checklist } from '@/types/types'
import Image from 'next/image';
import React from 'react'

export default function CheckList(props:{props:{data:Checklist[]}}) {
  return (
    <div className="">
      <div className="grid py-2 md:p-4">
        <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>
        <div>
          {props.props.data.map((item) => (
            <div
              key={item.id}
              className="flex items-center mb-3 leading-5 transition-opacity duration-300 ease-in-out"
            >
              <div className="inline-block h-[20px] w-[20px]">
                <Image
                  src={item.icon}
                  alt="icon"
                  width={20}
                  height={20}
                  loading="lazy"
                  decoding="async"
                  className="object-contain"
                />
              </div>
              <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                {item.text}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
