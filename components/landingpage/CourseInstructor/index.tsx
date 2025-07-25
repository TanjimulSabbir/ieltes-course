import { InstructorValue } from "@/types/types";

export default function CourseInstructor({ props }: { props: { data: InstructorValue } }) {
  console.log("====================================");
  console.log("CourseInstructor Data:", props.data);
  console.log("====================================");
  return (
    <div>
      <h1></h1>
    </div>
  );
}
