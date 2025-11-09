'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Layout from '../../../../components/UI/Layout/Layout';
import { useStudyBySlug } from '../../../../services/studies/useStudies';
import { getAssetCloud } from '../../../../utils/assets';
import styles from './case.module.scss';

export default function CaseStudyPage() {
  const params = useParams();
  const caseSlug = params.case as string;

  const { data: studyResponse, isLoading, error } = useStudyBySlug(caseSlug);

  if (isLoading) {
    return (
      <Layout>
        <main className={styles.page}>
          <div className={styles.mainContainer}>
            <div className={styles.loadingContainer}>
              <p className={styles.loadingText}>Loading case study...</p>
            </div>
          </div>
        </main>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <main className={styles.page}>
          <div className={styles.mainContainer}>
            <div className={styles.errorContainer}>
              <p className={styles.errorMessage}>Failed to load case study. Please try again later.</p>
            </div>
          </div>
        </main>
      </Layout>
    );
  }

  const study = studyResponse?.data;

  if (!study) {
    return (
      <Layout>
        <main className={styles.page}>
          <div className={styles.mainContainer}>
            <div className={styles.errorContainer}>
              <p className={styles.errorMessage}>Case study not found.</p>
            </div>
          </div>
        </main>
      </Layout>
    );
  }

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

          {/* Render sections */}
          {study.sections?.map((section) => (
            <SectionRenderer key={section.id} section={section} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

interface SectionProps {
  section: any;
}

function SectionRenderer({ section }: SectionProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Separate blocks by collection type
  const statsBlocks = section.blocks?.filter((b) => b.collection === 'block_statistics') || [];
  const cardBlocks = section.blocks?.filter((b) => b.collection === 'block_card') || [];
  const faqBlocks = section.blocks?.filter((b) => b.collection === 'block_faqs') || [];
  const bannerBlocks = section.blocks?.filter((b) => b.collection === 'block_banner') || [];

  return (
    <section className={styles.sectionWrapper}>
      {/* Statistics Section */}
      {statsBlocks.length > 0 && (
        <div className={styles.hero}>
          <div className={styles.heroContentWrapper}>
            <div className={styles.containerText}>
              <h1 className={styles.heroTitle}>{section.title}</h1>
              {section.description && (
                <p className={styles.heroSubtitle}>{section.description}</p>
              )}
            </div>
          </div>
          <div className={styles.statsContainer}>
            {statsBlocks.map((block) => (
              <div key={block.id} className={styles.card}>
                {block.item.icon && (
                  <div className={styles.statIconContainer}>
                    <Image
                      src={getAssetCloud(block.item.icon)}
                      alt={block.item.title}
                      width={37}
                      height={37}
                      unoptimized
                      className={styles.statIconImg}
                    />
                  </div>
                )}
                <div className={styles.titleSection}>
                  <h3 className={styles.statNumber} style={{ color: block.item.color }}>
                    {block.item.count}
                  </h3>
                </div>
                <div className={styles.titleSection}>
                  <h3 className={styles.statLabel}>{block.item.title}</h3>
                </div>
                <div className={styles.captionSection}>
                  <p className={styles.statCaption}>{block.item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Card Blocks Section */}
      {cardBlocks.length > 0 && (
        <div className={styles.problem}>
          {section.title && (
            <div className={styles.problemHeading}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
            </div>
          )}

          {section.type === 'grid' ? (
            <div className={styles.featuresCards}>
              {cardBlocks.map((block) => (
                <div key={block.id} className={styles.featureCard}>
                  {block.item.image && (
                    <div className={styles.benefitImage}>
                      <Image
                        src={getAssetCloud(block.item.image)}
                        alt={block.item.title}
                        width={250}
                        height={200}
                        unoptimized
                      />
                    </div>
                  )}
                  {block.item.type === 'number' && block.item.value && (
                    <div className={styles.setupIcon}>
                      <span className={styles.setupNumber}>{block.item.value}</span>
                    </div>
                  )}
                  <div className={styles.featureContent}>
                    <div className={styles.featureTitle}>
                      <h3>{block.item.title}</h3>
                    </div>
                    <div className={styles.featureCaption}>
                      <p>{block.item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.problemCards}>
              {cardBlocks.map((block) => (
                <div
                  key={block.id}
                  className={
                    block.item.section_title === 'What Guests Ask'
                      ? styles.guestProblem
                      : styles.staffProblem
                  }
                >
                  {block.item.section_image && (
                    <Image
                      src={getAssetCloud(block.item.section_image)}
                      alt={block.item.title}
                      width={250}
                      height={150}
                      unoptimized
                    />
                  )}
                  {block.item.section_title && (
                    <div className={styles.textSection}>
                      <h4>{block.item.section_title}</h4>
                    </div>
                  )}
                  <div className={styles.containerTextProblem}>
                    <div className={styles.problemCardTitle}>
                      <h3>{block.item.title}</h3>
                    </div>
                    <div className={styles.item}>
                      <p>{block.item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {section.notice && (
            <div className={styles.problemText}>
              <p>{section.notice}</p>
            </div>
          )}
        </div>
      )}

      {/* FAQs Section */}
      {faqBlocks.length > 0 && (
        <div className={styles.faqs}>
          <div className={styles.faqsHeading}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
          </div>
          <div className={styles.qAndA}>
            {faqBlocks.map((block) => (
              <div key={block.id} className={styles.qAndAFrame}>
                <div className={styles.qAndAContent}>
                  <div className={styles.question}>
                    <h3>{block.item.question}</h3>
                  </div>
                  {expandedFaq === block.id && (
                    <div className={styles.answer}>
                      <p>{block.item.answer}</p>
                    </div>
                  )}
                </div>
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === block.id ? null : block.id)
                  }
                  className={styles.expandButton}
                  aria-expanded={expandedFaq === block.id}
                >
                  {expandedFaq === block.id ? '−' : '+'}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Banner Section */}
      {bannerBlocks.length > 0 && (
        <div className={styles.finalCta}>
          <div className={styles.bannerFrame}>
            <div className={styles.logoAndText}>
              <div className={styles.bannerTextContent}>
                <h2>{bannerBlocks[0].item.title}</h2>
                <p>{bannerBlocks[0].item.description}</p>
              </div>
            </div>
            <div className={styles.containerButton}>
              <button
                className={styles.buttonPrimary}
                onClick={() =>
                  (window.location.href =
                    bannerBlocks[0].item.button_link ||
                    'https://portal.chatagent.io/auth/signup')
                }
              >
                {bannerBlocks[0].item.button_name}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
