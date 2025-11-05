import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Config } from "@/app/config/api";
import { clientChatAgent } from "../httpClient";

const INDUSTRIES_QUERY_KEY = ["industries"] as const;
const INDUSTRY_CATEGORY_QUERY_KEY = (slug: string) => ["industry-category", slug] as const;

export interface IndustryItem {
  id: number;
  name: string;
  description: string;
  icon: string;
  slug: string;
}

export interface IndustriesResponse {
  data: IndustryItem[];
}

export interface IndustryCategoryItem {
  id: number;
  name: string;
  description: string;
  icon: string;
}

export interface IndustryCategoriesResponse {
  data: IndustryCategoryItem[];
}

export const useIndustries = (): UseQueryResult<IndustriesResponse, Error> => {
  return useQuery({
    queryKey: INDUSTRIES_QUERY_KEY,
    queryFn: async () => {
      const { data } = await clientChatAgent.get<IndustriesResponse>(
        Config.chatAgent.resources.industries
      );

      return data;
    },
  });
};

export const useIndustryCategoryBySlug = (slug: string): UseQueryResult<IndustryCategoriesResponse, Error> => {
  return useQuery({
    queryKey: INDUSTRY_CATEGORY_QUERY_KEY(slug),
    queryFn: async () => {
      const { data } = await clientChatAgent.get<IndustryCategoriesResponse>(
        Config.chatAgent.resources.industryCategories,
        {
          params: {
            "deep[industry][_filter][slug][_eq]": slug,
          },
        }
      );

      return data;
    },
    enabled: !!slug,
  });
};
