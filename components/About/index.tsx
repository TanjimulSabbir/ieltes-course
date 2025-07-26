"use client";

import React, { useState } from "react";
import { AboutSection } from "@/types/types";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";

export default function About(props: { props: { data: AboutSection } }) {
  const { data } = props.props;

  return (
    <div id="about">
      <div className="mb-6 md:mb-10 mt-4 max-w-[900px] md:mt-[42px]">
        <div className="mt-10 md:mt-0">
          <h2 className="text-xl font-semibold md:mb-4 md:text-2xl">
            {data.name}
          </h2>

          <div className="rounded-lg py-2 md:border md:px-5">
            {data.values.map((item) => {
              const [open, setOpen] = useState(true);
              return (
                <Collapsible
                  key={item.id}
                  open={open}
                  onOpenChange={setOpen}
                  defaultOpen
                  className="mb-0 border-b border-dashed last:border-none"
                >
                  <CollapsibleTrigger asChild>
                    <button className="w-full flex items-center justify-between text-left py-4 cursor-pointer">
                      <div className="max-w-[90%] font-medium md:text-base mx-lg:text-sm">
                        <div dangerouslySetInnerHTML={{ __html: item.title }} />
                      </div>
                      <ChevronDown
                        className={`ml-2 transition-transform duration-300 ${
                          open ? "rotate-180" : "rotate-0"
                        }`}
                        size={20}
                      />
                    </button>
                  </CollapsibleTrigger>

                  <CollapsibleContent className="px-0 pb-2 text-gray-500">
                    <div className="prose prose-ul:pl-4 prose-p:my-1 prose-li:my-1">
                      <div
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
