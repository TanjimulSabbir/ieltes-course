"use client";

export default function HeroSection({
  props,
}: {
  props: { title: string; description: string };
}) {
  return (
    <div
      id="skills-landing"
      style={{
        backgroundImage:
          'url("https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      data-label="div#skills-landing"
      className="flex flex-col justify-center min-h-[300px] md:min-h-[300px] p-6"
    >
      <div className="container mx-auto">
        <h1
          className="text-white mb-2 text-[21px] font-semibold md:text-4xl"
          data-label="h1.text-white"
        >
          {props.title}
        </h1>

        <div className="mb-2">
          <button className="flex flex-row flex-wrap gap-2 text-white">
            <span className="inline-block">
              <img
                className="md:w-[130px] w-[100px]"
                src="https://cdn.10minuteschool.com/images/Dev_Handoff_Q1_24_Frame_2_1725444418666.png"
                alt="Course Rating"
              />
            </span>
            <span className="inline-block text-sm md:text-base">
              (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
            </span>
          </button>
        </div>

        <div
          className="text-gray-400 overflow-hidden"
          style={{ whiteSpace: "pre-wrap" }}
          dangerouslySetInnerHTML={{ __html: props.description }}
        />
      </div>
    </div>
  );
}
