const defaultNocoUrl = 'https://app.nocodb.com/api/v2';

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
} as const;
