import { Config } from '@/app/config/api';

/**
 * Get full asset URL from Directus file ID
 * @param fileId - The Directus file ID
 * @returns Full URL to the asset
 */
export const getAssetCloud = (fileId: string | null | undefined): string => {
  if (!fileId) {
    return '';
  }

  return `${Config.chatAgent.config.url}/assets/${fileId}`;
};
