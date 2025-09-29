import { useQuery } from '@tanstack/react-query';

import { Config } from '@/app/config/api';
import { httpClient } from '../httpClient';

const CAREERS_QUERY_KEY = ['careers'] as const;

export interface CareerRecord {
  Id: number;
  Title: string;
  Time: string;
  Location: string;
  Status: string;
  Apply: string | null;
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
  const { data } = await httpClient.get<CareersResponse>(
    Config.noco.resources.careers,
    {
      params: defaultParams,
      headers: Config.noco.config.key
        ? { 'xc-token': Config.noco.config.key }
        : undefined,
    }
  );

  return data;
};

export const useCareers = () => {
  return useQuery({
    queryKey: CAREERS_QUERY_KEY,
    queryFn: fetchCareers,
  });
};
