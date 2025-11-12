'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useIndustries } from '@/app/services/industries/useIndustries';
import { getAssetCloud } from '@/app/utils/assets';
import { Button } from '@/app/components/UI/Button/Button';
import styles from './IndustriesSection.module.scss';

export const IndustriesSection: React.FC = () => {
  const { data, isLoading } = useIndustries();

  // Get first 3 industries
  const industries = data?.data?.slice(0, 3) || [];

  if (isLoading || industries.length === 0) {
    return null; // Don't show section while loading or if no data
  }

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.industriesGrid}>
          {industries.map((industry) => (
            <Link
              key={industry.id}
              href={`/industries/${industry.slug}`}
              className={styles.industryCard}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <Image
                    src={getAssetCloud(industry.icon)}
                    alt={industry.name}
                    width={50}
                    height={50}
                    unoptimized
                  />
                </div>
                <h3 className={styles.industryTitle}>{industry.name}</h3>
              </div>
              <p className={styles.industryDescription}>{industry.description}</p>
              <span className={styles.useCasesLink}>Use Cases ↗</span>
            </Link>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Designed for Every Kind of Business</h2>
          <Link href="/industries">
            <Button variant="gradient" className={styles.ctaButton}>
              Show All Industries
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
