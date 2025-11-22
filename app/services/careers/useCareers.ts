import { useQuery } from '@tanstack/react-query';

import { Config } from '@/app/config/api';
import { clientChatAgent } from '../httpClient';

const CAREERS_QUERY_KEY = ['careers'] as const;

export interface Job {
  id: number;
  title: string;
  description: string;
  tags: string[];
  action_text: string;
  action_link: string;
}

interface JobsApiResponse {
  data: Job[];
}

const fetchCareers = async (): Promise<Job[]> => {
  const { data } = await clientChatAgent.get<JobsApiResponse>(
    Config.chatAgent.resources.jobs
  );

  return data.data;
};

export const useCareers = () => {
  return useQuery({
    queryKey: CAREERS_QUERY_KEY,
    queryFn: fetchCareers,
  });
};
