import type { Metadata, ReactNode } from 'next';
import { Config } from '@/app/config/api';
import { clientChatAgent } from '@/app/services/httpClient';
import { IndustryCategoriesResponse } from '@/app/services/industries/useIndustries';

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const { category } = await params;

  try {
    const { data } = await clientChatAgent.get<IndustryCategoriesResponse>(
      Config.chatAgent.resources.industryCategories,
      {
        params: {
          'deep[industry][_filter][slug][_eq]': category,
        },
      }
    );

    const categoryData = data?.data?.[0];

    if (categoryData) {
      return {
        title: `${categoryData.name} - ChatAgent=`,
        description: categoryData.description,
        keywords: `${categoryData.name}, customer service automation, ChatAgent`,
        openGraph: {
          title: `${categoryData.name} - ChatAgent`,
          description: categoryData.description,
          url: `https://chatagent.io/industries/${category}`,
          type: 'website',
        },
        twitter: {
          card: 'summary_large_image',
          title: `${categoryData.name} - ChatAgent`,
          description: categoryData.description,
        },
      };
    }
  } catch (error) {
    console.error('Failed to fetch category metadata:', error);
  }

  // Fallback metadata
  return {
    title: 'Industry Category - ChatAgent',
    description: 'Explore ChatAgent solutions for your industry.',
  };
}

export default function CategoryLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
