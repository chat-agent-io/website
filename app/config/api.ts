const defaultChatAgentUrl = 'https://cms.chatagent.io';

export const Config = {
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
