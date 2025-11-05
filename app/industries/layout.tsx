import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Industries We Serve - ChatAgent',
  description: 'See how ChatAgent supports real-world messaging across different business types. Explore industries including Hospitality, Medical, Retail, and more.',
  keywords: 'industries, business solutions, customer service automation, ChatAgent',
  openGraph: {
    title: 'Industries We Serve - ChatAgent',
    description: 'See how ChatAgent supports real-world messaging across different business types.',
    url: 'https://chatagent.io/industries',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industries We Serve - ChatAgent',
    description: 'Explore how ChatAgent serves different industries with AI customer service.',
  },
};

export default function IndustriesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
