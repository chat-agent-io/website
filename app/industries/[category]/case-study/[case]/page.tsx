'use client';

import React, { useMemo } from 'react';
import { useParams } from 'next/navigation';
import Layout from '../../../../components/UI/Layout/Layout';
import { Section } from '../../../../components/CaseStudy/Section/Section';
import { useStudyBySlug } from '../../../../services/studies/useStudies';
import { useIndustryCategoryBySlug } from '../../../../services/industries/useIndustries';
import styles from './case.module.scss';

export default function CaseStudyPage() {
  const params = useParams();
  const categorySlug = params.category as string;

  const { data: categoryResponse, isLoading: categoryLoading } =
    useIndustryCategoryBySlug(categorySlug);

  const caseStudySlug = useMemo(() => {
    if (!categoryResponse?.data?.[0]) return null;
    return categoryResponse.data[0].studies?.[0]?.slug || null;
  }, [categoryResponse]);

  const { data: studyResponse, isLoading, error } = useStudyBySlug(
    caseStudySlug || '',
    !!caseStudySlug
  );

  if (categoryLoading || isLoading) {
    return (
      <Layout>
        <main className={styles.page}>
          <div className={styles.mainContainer}>
            <div className={styles.loadingContainer}>
              <p>Loading case study...</p>
            </div>
          </div>
        </main>
      </Layout>
    );
  }

  if (!caseStudySlug) {
    return (
      <Layout>
        <main className={styles.page}>
          <div className={styles.mainContainer}>
            <div className={styles.errorContainer}>
              <p>Case study not found for this category.</p>
            </div>
          </div>
        </main>
      </Layout>
    );
  }

  if (error) {
    console.error('Case study fetch error:', error);
    return (
      <Layout>
        <main className={styles.page}>
          <div className={styles.mainContainer}>
            <div className={styles.errorContainer}>
              <p>Failed to load case study. Please try again later.</p>
            </div>
          </div>
        </main>
      </Layout>
    );
  }

  const study = studyResponse?.data;

  if (!study) {
    console.warn('No study data available', { studyResponse, caseStudySlug });
    return (
      <Layout>
        <main className={styles.page}>
          <div className={styles.mainContainer}>
            <div className={styles.errorContainer}>
              <p>Case study not found.</p>
            </div>
          </div>
        </main>
      </Layout>
    );
  }
  const firstSection = study.sections?.[0];
  const otherSections = study.sections?.slice(1) || [];

  return (
    <Layout>
      <main className={styles.page}>
        <div className={styles.mainContainer}>
          {/* Breadcrumb */}
          <div className={styles.headerBar}>
            <div className={styles.heroSection}>
              <div className={styles.breadcrumb}>
                <span className={styles.inactive}>Industries</span>
                <span className={styles.inactive}>\</span>
                <span className={styles.inactive}>Hospitality & Leisure</span>
                <span className={styles.inactive}>\</span>
                <span className={styles.active}>{study.title}</span>
              </div>
            </div>
          </div>

          {/* Hero Section with first section's content */}
          {firstSection && (
            <section className={styles.hero}>
              <div className={styles.heroContentWrapper}>
                <div className={styles.containerText}>
                  <h1 className={styles.heroTitle}>{firstSection.title}</h1>
                  {firstSection.description && (
                    <p className={styles.heroSubtitle}>
                      {firstSection.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Statistics if available in first section */}
              {firstSection.blocks?.some((b) => b.collection === 'block_statistics') && (
                <div className={styles.statsContainer}>
                  {firstSection.blocks
                    ?.filter((b) => b.collection === 'block_statistics')
                    .map((block) => (
                      <div
                        key={block.id}
                        className={styles.statCard}
                      >
                        <div className={styles.statValue} style={{ color: block.item.color }}>
                          {block.item.count}
                        </div>
                        <div className={styles.statTitle}>{block.item.title}</div>
                        <div className={styles.statSubtitle}>
                          {block.item.subtitle}
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </section>
          )}

          {/* Render remaining sections */}
          {otherSections.map((section) => (
            <Section
              key={section.id}
              title={section.title}
              description={section.description}
              notice={section.notice}
              type={section.type as 'simple' | 'grid'}
              blocks={section.blocks || []}
            />
          ))}
        </div>
      </main>
    </Layout>
  );
}
