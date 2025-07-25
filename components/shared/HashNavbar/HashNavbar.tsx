"use client";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const tabItems = [
  { title: "কোর্স ইন্সট্রাক্টর", id: "instructor" },
  { title: "কোর্সটি যেভাবে সাজানো হয়েছে", id: "structure" },
  { title: "কোর্সটি করে যা শিখবেন", id: "learning" },
  { title: "কোর্স সম্পর্কে বিস্তারিত", id: "details" },
  { title: "কোর্স এক্সক্লুসিভ ফিচার", id: "features" },
  { title: "এই কোর্সের সাথে ফ্রি পাচ্ছেন–", id: "freebies" },
  { title: "শিক্ষার্থীরা যা বলছে", id: "reviews" },
  { title: "সচরাচর জিজ্ঞাসা", id: "faq" },
];

export default function HashNavbar() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<string>("");

  useEffect(() => {
    const handleHashChange = () => {
      const currentId = window.location.hash.replace("#", "");
      setActiveTab(currentId);
    };

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
      element.scrollIntoView({ behavior: "smooth" });
      setActiveTab(id);
      history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <div className="relative container w-full order-2 flex-1 mx-auto lg:order-1 lg:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_388px)]">
      {/* Arrows */}
      <div className="absolute inset-0 flex items-center justify-between w-full">
        <button
          className="-ml-10 z-10 p-2 bg-gray-300 rounded-full shadow-2xl cursor-pointer"
          onClick={() => scrollTabs("left")}
        >
          <ChevronLeft />
        </button>
        <button
          className="-mr-10 z-50 p-2 bg-gray-300 rounded-full shadow-2xl cursor-pointer"
          onClick={() => scrollTabs("right")}
        >
          <ChevronRight />
        </button>
      </div>

      {/* Scrollable Tab List */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide space-x-4 py-3 scroll-smooth"
      >
        {tabItems.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={cn(
              "whitespace-nowrap px-2 py-2 text-xs font-medium rounded-md ",
              activeTab === tab.id
                ? "bg-green-500 text-white"
                : "bg-gray-50 text-gray-800 hover:bg-gray-300 cursor-pointer"
            )}
          >
            {tab.title}
          </button>
        ))}
      </div>
    </div>
  );
}
