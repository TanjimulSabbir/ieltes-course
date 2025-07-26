"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const tabItems = [
  { title: "কোর্স ইন্সট্রাক্টর", id: "instructors" },
  { title: "কোর্সটি যেভাবে সাজানো হয়েছে", id: "features" },
  { title: "কোর্সটি করে যা শিখবেন", id: "pointers" },
  { title: "কোর্স সম্পর্কে বিস্তারিত", id: "about" },
  { title: "কোর্স এক্সক্লুসিভ ফিচার", id: "feature_explanations" },
  { title: "এই কোর্সের সাথে ফ্রি পাচ্ছেন–", id: "freebies" },
  { title: "শিক্ষার্থীরা যা বলছে", id: "testimonials" },
  { title: "সচরাচর জিজ্ঞাসা", id: "faq" },
];

export default function HashNavbar() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<string>("instructors");

  useEffect(() => {
    const handleHashChange = () => {
      const currentId = window.location.hash.replace("#", "");
      setActiveTab(currentId);
    };

    // Initial hash check
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const scrollTabs = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 200;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleTabClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveTab(id);
      history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md w-full">
      {/* Scroll Arrows */}
      <div className="absolute left-0 right-0 flex justify-between items-center h-full px-1 z-30 pointer-events-none">
        <button
          className="lg:-ml-6 pointer-events-auto cursor-pointer bg-white text-black rounded-full p-2 shadow"
          onClick={() => scrollTabs("left")}
        >
          <ChevronLeft />
        </button>
        <button
          className="lg:-mr-6 pointer-events-auto cursor-pointer bg-white text-black rounded-full p-2 shadow"
          onClick={() => scrollTabs("right")}
        >
          <ChevronRight />
        </button>
      </div>

      {/* Scrollable Tabs */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide space-x-2 px-8 py-3 scroll-smooth"
      >
        {tabItems.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={cn(
              "whitespace-nowrap text-sm px-4 py-2 rounded-md cursor-pointer transition duration-200 border border-gray-300",
              activeTab === tab.id
                ? "bg-green-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            )}
          >
            {tab.title}
          </button>
        ))}
      </div>
    </div>
  );
}
