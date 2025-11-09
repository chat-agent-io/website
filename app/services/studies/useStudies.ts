import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Config } from "@/app/config/api";
import { clientChatAgent } from "../httpClient";

const STUDIES_QUERY_KEY = ["studies"] as const;
const STUDY_BY_SLUG_QUERY_KEY = (slug: string) => ["study", slug] as const;

export interface StatisticItem {
  id: number;
  count: string;
  title: string;
  subtitle: string;
  icon: string | null;
  color: string;
}

export interface CardItem {
  id: number;
  title: string;
  type: "section" | "image" | "icon" | "number";
  image: string | null;
  value: string | null;
  text_align: "left" | "center" | "right";
  description: string;
  section_title: string | null;
  section_image: string | null;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface BannerItem {
  id: number;
  title: string;
  description: string;
  button_name: string;
  button_link: string | null;
}

export interface BlockItem {
  id: number;
  studies_sections_id: number;
  collection: "block_statistics" | "block_card" | "block_faqs" | "block_banner";
  item: StatisticItem | CardItem | FAQItem | BannerItem;
}

export interface Block {
  id: number;
  studies_sections_id: number;
  collection: string;
  item: Record<string, any>;
}

export interface Section {
  id: number;
  title: string;
  description: string | null;
  notice: string | null;
  study: number;
  type: "simple" | "grid";
  blocks: Block[];
}

export interface Study {
  id: number;
  title: string;
  description: string;
  slug: string;
  category: number;
  sections: Section[];
}

export interface StudiesResponse {
  data: Study[];
}

export interface StudyResponse {
  data: Study;
}

export const useStudies = (): UseQueryResult<StudiesResponse, Error> => {
  return useQuery({
    queryKey: STUDIES_QUERY_KEY,
    queryFn: async () => {
      const { data } = await clientChatAgent.get<StudiesResponse>(
        Config.chatAgent.resources.studies,
        {
          params: {
            fields: [
              "*",
              "sections.*",
              "sections.blocks.*",
              "sections.blocks.item.*",
            ],
          },
        }
      );

      return data;
    },
  });
};

export const useStudyBySlug = (
  slug: string
): UseQueryResult<StudyResponse, Error> => {
  return useQuery({
    queryKey: STUDY_BY_SLUG_QUERY_KEY(slug),
    queryFn: async () => {
      const { data } = await clientChatAgent.get<{ data: Study[] } | Study[]>(
        Config.chatAgent.resources.studies,
        {
          params: {
            fields: [
              "*",
              "sections.*",
              "sections.blocks.*",
              "sections.blocks.item.*",
            ],
            filter: {
              slug: {
                _eq: slug,
              },
            },
          },
        }
      );

      // Handle the case where API returns { data: [...] }
      let studiesArray: Study[] = [];

      if (data && 'data' in data) {
        studiesArray = (data as { data: Study[] }).data;
      } else if (Array.isArray(data)) {
        studiesArray = data;
      }

      const firstStudy = studiesArray[0] || null;
      return { data: firstStudy } as StudyResponse;
    },
    enabled: !!slug,
  });
};
