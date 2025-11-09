'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Layout from '../../../../components/UI/Layout/Layout';
import { useStudyBySlug } from '../../../../services/studies/useStudies';
import { getAssetCloud } from '../../../../utils/assets';
import styles from './case.module.scss';

export default function CaseStudyPage() {
  const params = useParams();
  const caseSlug = params.case as string;
  
  const { data, isLoading, error } = useStudyBySlug(caseSlug);
  const study = data?.data;

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

  if (error || !study) {
    return (
      <Layout>
        <main className={styles.page}>
          <div className={styles.mainContainer}>
            <div className={styles.errorContainer}>
              <h1>Case Study Not Found</h1>
              <p className={styles.errorMessage}>The case study you&apos;re looking for doesn&apos;t exist.</p>
            </div>
          </div>
        </main>
      </Layout>
    );
  }

  // Extract sections by type/title for rendering
  const heroSection = study.sections.find(s => s.title.toLowerCase().includes('hero') || s.title.toLowerCase().includes('introduction'));
  const problemSection = study.sections.find(s => s.title.toLowerCase().includes('problem') || s.title.toLowerCase().includes('reality'));
  const channelsSection = study.sections.find(s => s.title.toLowerCase().includes('channel') || s.title.toLowerCase().includes('platform'));
  const timelineSection = study.sections.find(s => s.title.toLowerCase().includes('timeline') || s.title.toLowerCase().includes('day'));
  const benefitsSection = study.sections.find(s => s.title.toLowerCase().includes('benefit') || s.title.toLowerCase().includes('revenue'));
  const featuresSection = study.sections.find(s => s.title.toLowerCase().includes('why') || s.title.toLowerCase().includes('love'));
  const setupSection = study.sections.find(s => s.title.toLowerCase().includes('setup') || s.title.toLowerCase().includes('go live'));
  const faqSection = study.sections.find(s => s.title.toLowerCase().includes('faq') || s.title.toLowerCase().includes('what if'));
  const ctaSection = study.sections.find(s => s.title.toLowerCase().includes('cta') || s.title.toLowerCase().includes('missed message'));

  // Helper function to extract blocks by collection
  const getBlocksByCollection = (section: any, collection: string) => {
    if (!section?.blocks) return [];
    return section.blocks.filter((b: any) => b.collection === collection).map((b: any) => b.item);
  };

  // Extract breadcrumb from study or category
  const category = params.category as string;
  const breadcrumbParts = ['Industries', 'Hospitality & Leisure', category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')];

  return (
    <Layout>
      <main className={styles.page}>
        <div className={styles.mainContainer}>
          {/* Breadcrumb */}
          <div className={styles.headerBar}>
            <div className={styles.heroSection}>
              <div className={styles.breadcrumb}>
                {breadcrumbParts.map((part, index) => (
                  <React.Fragment key={index}>
                    <span className={index === breadcrumbParts.length - 1 ? styles.active : styles.inactive}>
                      {part}
                    </span>
                    {index < breadcrumbParts.length - 1 && <span>\\</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Section */}
          {heroSection && (
            <section className={styles.hero}>
              <div className={styles.containerText}>
                <div className={styles.heading}>
                  <h1 className={styles.heroTitle}>{study.title}</h1>
                </div>
                <div className={styles.subheading}>
                  <p className={styles.heroSubtitle}>{study.description}</p>
                </div>
              </div>

              {/* Stats Cards */}
              {getBlocksByCollection(heroSection, 'block_statistics').length > 0 && (
                <div className={styles.cards}>
                  {getBlocksByCollection(heroSection, 'block_statistics').map((stat: any) => (
                    <div key={stat.id} className={styles.card}>
                      <div className={styles.statIconContainer}>
                        {stat.icon && <img src={getAssetCloud(stat.icon)} alt="" className={styles.statIcon} />}
                        <span className={styles.statNumber}>{stat.count}</span>
                      </div>
                      <div className={styles.titleSection}>
                        <h3 className={styles.statLabel}>{stat.title}</h3>
                      </div>
                      <div className={styles.captionSection}>
                        <p className={styles.statCaption}>{stat.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* CTA Buttons */}
              <div className={styles.containerCta}>
                <button className={styles.buttonPrimary}>
                  Start 14-Day Free Trial
                </button>
                <button className={styles.buttonSecondary}>
                  See It In Action
                </button>
              </div>
            </section>
          )}

          {/* Problem Section */}
          {problemSection && (
            <section className={styles.problem}>
              <div className={styles.sectionHeading}>
                <h2 className={styles.sectionTitle}>{problemSection.title}</h2>
              </div>
              
              <div className={styles.problemCards}>
                {getBlocksByCollection(problemSection, 'block_card').map((card: any, index: number) => (
                  <div key={card.id} className={index === 0 ? styles.guestProblem : styles.staffProblem}>
                    <div className={styles.containerTextProblem}>
                      <div className={styles.problemCardTitle}>
                        <h3>{card.section_title}</h3>
                      </div>
                      <div className={styles.item}>
                        <p>{card.description}</p>
                      </div>
                    </div>
                    <div className={styles.textSection}>
                      <h4 className={index === 0 ? styles.purpleText : ''}>{card.title}</h4>
                    </div>
                    <div className={styles.containerQuestions}>
                      {card.section_image && (
                        <img
                          src={getAssetCloud(card.section_image)}
                          alt={card.title}
                          className={styles.questionsCards}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {problemSection.notice && (
                <div className={styles.problemText}>
                  <p>{problemSection.notice}</p>
                </div>
              )}
            </section>
          )}

          {/* Channels Section */}
          {channelsSection && (
            <section className={styles.channels}>
              <div className={styles.channelsHeader}>
                <div className={styles.sectionHeading}>
                  <h2 className={styles.sectionTitle}>{channelsSection.title}</h2>
                </div>
                {channelsSection.description && (
                  <div className={styles.channelsText}>
                    <p>{channelsSection.description}</p>
                  </div>
                )}
              </div>

              <div className={styles.seeItInAction}>
                {/* Channel Pills */}
                <div className={styles.buttonsContainer}>
                  <button className={`${styles.buttonPillChannels} ${styles.active}`}>
                    WhatsApp
                  </button>
                  <button className={styles.buttonPillChannels}>
                    Instagram
                  </button>
                  <button className={styles.buttonPillChannels}>
                    Website
                  </button>
                  <div className={styles.moreText}>& More</div>
                </div>

                {/* Conversation Samples & Screenshot */}
                <div className={styles.channelContainer}>
                  <div className={styles.conversationSamples}>
                    {getBlocksByCollection(channelsSection, 'block_card').slice(0, 2).map((card: any, index: number) => (
                      <div key={card.id} className={styles.minichatCards}>
                        <div className={styles.minichatHeading}>
                          <h3 className={index === 0 ? styles.gradientInstagram : styles.gradientBlue}>
                            {card.title}
                          </h3>
                        </div>
                        {card.image && (
                          <img
                            src={getAssetCloud(card.image)}
                            alt={card.title}
                            className={styles.conversationCard}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Phone Screenshot */}
                  {getBlocksByCollection(channelsSection, 'block_card')[2]?.image && (
                    <img
                      src={getAssetCloud(getBlocksByCollection(channelsSection, 'block_card')[2].image)}
                      alt="Mobile app"
                      className={styles.screenshots}
                    />
                  )}
                </div>
              </div>
            </section>
          )}

          {/* Timeline Section */}
          {timelineSection && (
            <section className={styles.timeline}>
              <div className={styles.sectionHeading}>
                <h2 className={styles.sectionTitle}>{timelineSection.title}</h2>
              </div>
              
              <div className={styles.timelineCards}>
                {getBlocksByCollection(timelineSection, 'block_card').map((card: any) => (
                  <div key={card.id} className={styles.timelineCard}>
                    <div className={styles.timelinePhotos}>
                      {card.image && (
                        <img src={getAssetCloud(card.image)} alt={card.title} className={styles.timelineImage} />
                      )}
                    </div>
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineTitle}>
                        <h3>{card.title}</h3>
                      </div>
                      <div className={styles.timelineCaption}>
                        <p>{card.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Benefits Section */}
          {benefitsSection && (
            <section className={styles.benefits}>
              <div className={styles.sectionHeading}>
                <h2 className={styles.sectionTitle}>{benefitsSection.title}</h2>
              </div>
              
              <div className={styles.benefitsCards}>
                {/* First Row - 3 cards */}
                <div className={styles.benefitsRow}>
                  {getBlocksByCollection(benefitsSection, 'block_card').slice(0, 3).map((card: any) => (
                    <div key={card.id} className={styles.benefitCard}>
                      <div className={styles.benefitImage}>
                        {card.image && <img src={getAssetCloud(card.image)} alt={card.title} />}
                      </div>
                      <div className={styles.benefitContent}>
                        <div className={styles.benefitTitle}>
                          <h3>{card.title}</h3>
                        </div>
                        <div className={styles.benefitCaption}>
                          <p>{card.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Second Row - 3 cards */}
                <div className={styles.benefitsRow}>
                  {getBlocksByCollection(benefitsSection, 'block_card').slice(3, 6).map((card: any) => (
                    <div key={card.id} className={styles.benefitCard}>
                      <div className={styles.benefitImage}>
                        {card.image && <img src={getAssetCloud(card.image)} alt={card.title} />}
                      </div>
                      <div className={styles.benefitContent}>
                        <div className={styles.benefitTitle}>
                          <h3>{card.title}</h3>
                        </div>
                        <div className={styles.benefitCaption}>
                          <p>{card.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Features Section */}
          {featuresSection && (
            <section className={styles.features}>
              <div className={styles.featuresHeader}>
                <div className={styles.sectionHeading}>
                  <h2 className={styles.sectionTitle}>{featuresSection.title}</h2>
                </div>
                {featuresSection.description && (
                  <div className={styles.featuresSubheading}>
                    <p>{featuresSection.description}</p>
                  </div>
                )}
              </div>

              <div className={styles.featuresCards}>
                {getBlocksByCollection(featuresSection, 'block_card').map((card: any) => (
                  <div key={card.id} className={styles.featureCard}>
                    {card.icon && (
                      <div className={styles.featureIcon}>
                        <img src={getAssetCloud(card.icon)} alt="" />
                      </div>
                    )}
                    <div className={styles.featureContent}>
                      <div className={styles.featureTitle}>
                        <h3>{card.title}</h3>
                      </div>
                      <div className={styles.featureCaption}>
                        <p>{card.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Setup Section */}
          {setupSection && (
            <section className={styles.setup}>
              <div className={styles.sectionHeading}>
                <h2 className={styles.sectionTitle}>{setupSection.title}</h2>
              </div>

              <div className={styles.setupCards}>
                {getBlocksByCollection(setupSection, 'block_card').map((card: any, index: number) => (
                  <div key={card.id} className={styles.setupCard}>
                    <div className={styles.setupIconWrapper}>
                      {card.icon ? (
                        <img src={getAssetCloud(card.icon)} alt="" className={styles.setupNumberImage} />
                      ) : (
                        <div className={styles.setupIconCircle}>
                          <span className={styles.setupNumber}>{index + 1}</span>
                        </div>
                      )}
                    </div>
                    <div className={styles.setupTitle}>
                      <h3>{card.title}</h3>
                    </div>
                    <div className={styles.setupCaption}>
                      <p>{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {setupSection.notice && (
                <div className={styles.setupText}>
                  <p>{setupSection.notice}</p>
                </div>
              )}
            </section>
          )}

          {/* FAQs Section */}
          {faqSection && (
            <section className={styles.faqs}>
              <div className={styles.sectionHeading}>
                <h2 className={styles.sectionTitle}>{faqSection.title}</h2>
              </div>
              
              <div className={styles.qAndA}>
                {getBlocksByCollection(faqSection, 'block_faqs').map((faq: any) => (
                  <div key={faq.id} className={styles.qAndAFrame}>
                    <div className={styles.qAndAContent}>
                      <div className={styles.question}>
                        <h3>{faq.question}</h3>
                      </div>
                      <div className={styles.answer}>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Final CTA Banner */}
          {ctaSection && getBlocksByCollection(ctaSection, 'block_banner').length > 0 && (
            <section className={styles.finalCta}>
              {getBlocksByCollection(ctaSection, 'block_banner').map((banner: any) => (
                <div key={banner.id} className={styles.bannerFrame}>
                  <div className={styles.bannerBackground} />
                  <div className={styles.logoAndText}>
                    <div className={styles.logoButton}>
                      <svg width="150" height="24" viewBox="0 0 150 24" fill="none">
                        <text x="0" y="18" fill="#03010C" fontFamily="Onest" fontSize="20" fontWeight="600">ChatAgent</text>
                      </svg>
                    </div>
                    <div className={styles.bannerTextContent}>
                      <h2>{banner.title}</h2>
                      <p>{banner.description}</p>
                    </div>
                  </div>
                  <div className={styles.containerButton}>
                    <button className={styles.buttonPrimary}>
                      {banner.button_name}
                    </button>
                  </div>
                </div>
              ))}
            </section>
          )}
        </div>
      </main>
    </Layout>
  );
}
