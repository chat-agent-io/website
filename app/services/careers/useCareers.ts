import { useQuery } from '@tanstack/react-query';

import { CAREERS_ENDPOINT, API_TOKEN } from '@/app/config/api';
import { httpClient } from '../httpClient';

const CAREERS_QUERY_KEY = ['careers'] as const;

export interface CareerRecord {
  Id: number;
  Title: string;
  Time: string;
  Location: string;
  Status: string;
}

interface PageInfo {
  totalRows: number;
  page: number;
  pageSize: number;
  isFirstPage: boolean;
  isLastPage: boolean;
}

interface CareersResponse {
  list: CareerRecord[];
  pageInfo: PageInfo;
  stats: {
    dbQueryTime: string;
  };
}

const defaultParams = {
  offset: 0,
  limit: 25,
  where: '(Status,eq,open)',
  viewId: 'vw9c8ps2xl8lus0b',
};

const fetchCareers = async (): Promise<CareersResponse> => {
  const { data } = await httpClient.get<CareersResponse>(CAREERS_ENDPOINT, {
    params: defaultParams,
    headers: API_TOKEN ? { 'xc-token': API_TOKEN } : undefined,
  });

  return data;
};

export const useCareers = () => {
  return useQuery({
    queryKey: CAREERS_QUERY_KEY,
    queryFn: fetchCareers,
  });
};
