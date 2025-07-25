import useSWR from "swr";
import { fetcher } from "@/lib/api";
import type { CourseData } from "@/types/course";

export const useCourseData = (lang: "en" | "bn" = "bn") => {
  const endpoint = `/products/ielts-course?lang=${lang}`;

  const { data, error, isLoading } = useSWR<CourseData>(endpoint, fetcher);

  return {
    data,
    error,
    isLoading,
  };
};
