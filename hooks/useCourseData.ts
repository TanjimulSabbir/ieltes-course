import useSWR from "swr";
import { fetcher } from "@/lib/api";
import { RootResponse } from "@/types/types";

export const useCourseData = (lang: "en" | "bn" = "en") => {
  const endpoint = `/products/ielts-course?lang=${lang}`;

  const { data, error, isLoading } = useSWR<RootResponse>(endpoint, fetcher);

  return {
    data,
    error,
    isLoading,
  };
};
