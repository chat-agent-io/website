'use client';

import React from 'react';
import Image from 'next/image';
import Layout from '../components/UI/Layout/Layout';
import { useIndustries } from '../services/industries/useIndustries';
import { getAssetCloud } from '../utils/assets';
import styles from './industries.module.scss';

function LoadingSkeletons() {
  return (
    <div className={styles.industriesGrid}>
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className={styles.industryCard + ' ' + styles.skeletonCard}>
          <div className={styles.cardHeader}>
            <div className={styles.iconSkeleton}></div>
            <div className={styles.titleSkeleton}></div>
          </div>
          <div className={styles.descriptionSkeleton}></div>
          <div className={styles.linkSkeleton}></div>
        </div>
      ))}
    </div>
  );
}

function ErrorState({ error }: { error: Error }) {
  return (
    <div className={styles.errorContainer}>
      <p className={styles.errorMessage}>Failed to load industries. Please try again later.</p>
      {process.env.NODE_ENV === 'development' && (
        <p className={styles.errorDetails}>{error.message}</p>
      )}
    </div>
  );
}

export default function IndustriesPage() {
  const { data, isLoading, error } = useIndustries();

  return (
    <Layout>
      <main className={styles.page}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <h1 className={styles.title}>Industries We Serve</h1>
            <p className={styles.subtitle}>
              See how ChatAgent supports real-world messaging across different business types
            </p>
          </div>

          {isLoading ? (
            <LoadingSkeletons />
          ) : error ? (
            <ErrorState error={error} />
          ) : data?.data ? (
            <div className={styles.industriesGrid}>
              {data.data.map((industry) => (
                <div key={industry.id} className={styles.industryCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.iconWrapper}>
                      <Image
                        src={getAssetCloud(industry.icon)}
                        alt={industry.name}
                        width={50}
                        height={50}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                    <h2 className={styles.industryTitle}>{industry.name}</h2>
                  </div>
                  <p className={styles.industryDescription}>{industry.description}</p>
                  <a href="#" className={styles.useCasesLink}>
                    Use Cases ↗
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <p>No industries found.</p>
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}
