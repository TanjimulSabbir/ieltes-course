import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.10minuteschool.com/discovery-service/api/v1",
  headers: {
    "X-TENMS-SOURCE-PLATFORM": "web",
    Accept: "application/json",
  },
});

export const fetcher = async <T>(url: string): Promise<T> => {
  const response = await api.get<T>(url);
  return response.data;
};
