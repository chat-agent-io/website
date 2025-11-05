import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { Config } from '@/app/config/api';
import { clientChatAgent } from '../httpClient';

const INDUSTRIES_QUERY_KEY = ['industries'] as const;

export interface IndustryItem {
  id: number;
  name: string;
  description: string;
  icon: string;
}

export interface IndustriesResponse {
  data: IndustryItem[];
}

const fetchIndustries = async (): Promise<IndustriesResponse> => {
  const { data } = await clientChatAgent.get<IndustriesResponse>(
    Config.chatAgent.resources.industries
  );

  return data;
};

export const useIndustries = () => {
  return useQuery({
    queryKey: INDUSTRIES_QUERY_KEY,
    queryFn: fetchIndustries,
  });
};
