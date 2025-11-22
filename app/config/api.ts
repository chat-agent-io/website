const defaultNocoUrl = 'https://app.nocodb.com/api/v2';
const defaultChatAgentUrl = 'https://cms.chatagent.io';

export const Config = {
  noco: {
    config: {
      url: process.env.NEXT_PUBLIC_API_NOCO_URL ?? defaultNocoUrl,
      key: process.env.NEXT_PUBLIC_API_NOCO_KEY ?? '',
    },
    resources: {
      careers: '/tables/m52917yyvdgr163/records',
    },
  },
  chatAgent: {
    config: {
      url: process.env.NEXT_PUBLIC_API_CHATAGENT_URL ?? defaultChatAgentUrl,
    },
    resources: {
      industries: '/items/industries',
      industryCategories: '/items/industry_categories',
      studies: '/items/studies',
      jobs: '/items/jobs',
    },
  },
} as const;
