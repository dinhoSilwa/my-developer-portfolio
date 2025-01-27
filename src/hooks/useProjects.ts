import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface ProjectsProps {
  name: string;
  image: string;
  description: string;
  skills?: [{ name: string }];
  github: string;
  deploy: string;
  isActive: boolean;
  stack?: string;
}

export const useFetchProjects = () => {
  const url: string = import.meta.env.VITE_URL_PROJECTS;
  const { data, isLoading, isError } = useQuery<ProjectsProps[]>({
    queryKey: ["projects-query"],
    queryFn: async (): Promise<ProjectsProps[]> => {
      const response = await axios.get<ProjectsProps[]>(url, {
        method: "get",
      });
      return response.data;
    },
  });

  return {
    data,
    isLoading,
    isError,
  };
};
