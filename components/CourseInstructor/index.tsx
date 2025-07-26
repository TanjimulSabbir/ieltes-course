import { InstructorsSection, InstructorValue } from "@/types/types";
import InstructorCard from "./InstructorCard";

export default function CourseInstructor({
  props,
}: {
  props: { data: InstructorsSection };
}) {
  return (
    <div id="instructors">
      <div className="mb-7 xs:pt-2">
        <div className="pt-4 pb-2 bg-white">
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">
            কোর্স ইন্সট্রাক্টর
          </h2>
          <div className="flex items-center md:rounded-md md:border md:p-5">
            {props.data.values.map((instructor: InstructorValue) => (
              <InstructorCard key={instructor.image} instructor={instructor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
