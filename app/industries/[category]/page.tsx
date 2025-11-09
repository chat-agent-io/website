'use client';

import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Layout from '../../components/UI/Layout/Layout';
import { useIndustryCategoryBySlug } from '../../services/industries/useIndustries';
import { getAssetCloud } from '../../utils/assets';
import styles from './category.module.scss';

function LoadingIndicator() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <p className={styles.loadingText}>Loading category...</p>
    </div>
  );
}

function ErrorState({ error }: { error: Error }) {
  return (
    <div className={styles.errorContainer}>
      <p className={styles.errorMessage}>Failed to load this category. Please try again later.</p>
      {process.env.NODE_ENV === 'development' && (
        <p className={styles.errorDetails}>{error.message}</p>
      )}
    </div>
  );
}

export default function IndustryCategoryPage() {
  const params = useParams();
  const category = params.category as string;

  const { data, isLoading, error } = useIndustryCategoryBySlug(category)

  if (isLoading) {
    return (
      <Layout>
        <main className={styles.page}>
          <LoadingIndicator />
        </main>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <main className={styles.page}>
          <ErrorState error={error} />
        </main>
      </Layout>
    );
  }

  if (!data?.data || data.data.length === 0) {
    return (
      <Layout>
        <main className={styles.page}>
          <div className={styles.container}>
            <div className={styles.notFound}>
              <h1>Category not found</h1>
              <p>The industry category you&apos;re looking for doesn&apos;t exist.</p>
            </div>
          </div>
        </main>
      </Layout>
    );
  }

  const categories = data.data;

  return (
    <Layout>
      <main className={styles.page}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <h1 className={styles.title}>Industry Categories</h1>
            <p className={styles.subtitle}>
              See how ChatAgent supports real-world messaging across different business types
            </p>
          </div>

          <div className={styles.subcategoriesGrid}>
            <div className={styles.row}>
              {categories.slice(0, 3).map((subcategory) => {
                const caseSlug = subcategory.studies?.[0]?.slug;
                const caseStudyUrl = caseSlug
                  ? `/industries/${category}/case-study/${caseSlug}`
                  : '#';

                return (
                  <div key={subcategory.id} className={styles.card}>
                    <div className={styles.cardHeader}>
                      <div className={styles.iconWrapper}>
                        <Image
                          src={getAssetCloud(subcategory.icon)}
                          alt={subcategory.name}
                          width={50}
                          height={55}
                          unoptimized
                        />
                      </div>
                      <h2 className={styles.cardTitle}>{subcategory.name}</h2>
                    </div>
                    <p className={styles.cardDescription}>{subcategory.description}</p>
                    <a href={caseStudyUrl} className={styles.seeHowLink}>
                      See How It Works ↗
                    </a>
                  </div>
                );
              })}
            </div>
            <div className={styles.row}>
              {categories.slice(3).map((subcategory) => {
                const caseSlug = subcategory.studies?.[0]?.slug;
                const caseStudyUrl = caseSlug
                  ? `/industries/${category}/case-study/${caseSlug}`
                  : '#';

                return (
                  <div key={subcategory.id} className={styles.card}>
                    <div className={styles.cardHeader}>
                      <div className={styles.iconWrapper}>
                        <Image
                          src={getAssetCloud(subcategory.icon)}
                          alt={subcategory.name}
                          width={50}
                          height={55}
                          unoptimized
                        />
                      </div>
                      <h2 className={styles.cardTitle}>{subcategory.name}</h2>
                    </div>
                    <p className={styles.cardDescription}>{subcategory.description}</p>
                    <a href={caseStudyUrl} className={styles.seeHowLink}>
                      See How It Works ↗
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
