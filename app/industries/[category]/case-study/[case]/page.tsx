'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Layout from '../../../../components/UI/Layout/Layout';
import { useStudyBySlug } from '../../../../services/studies/useStudies';
import { getAssetCloud } from '../../../../utils/assets';
import { HeaderSection } from '../../../../components/CaseStudy/HeaderSection';
import styles from './case.module.scss';

interface Section {
  id: number;
  title: string;
  description: string | null;
  notice: string | null;
  study: number;
  type: string;
  blocks: Block[];
}

interface Block {
  id: number;
  studies_sections_id: number;
  collection: string;
  item: Record<string, any>;
}

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

  const getBlocksByCollection = (section: Section, collection: string) => {
    if (!section?.blocks) return [];
    return section.blocks.filter((b) => b.collection === collection).map((b) => b.item);
  };

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

          {/* Render sections dynamically based on type */}
          {study.sections.map((section) => (
            <React.Fragment key={section.id}>
              {/* Hero Section - identified by having block_statistics */}
              {section.blocks.some(b => b.collection === 'block_statistics') && (
                <section className={styles.hero}>
                  <div className={styles.containerText}>
                    <div className={styles.sectionHeading}>
                    <h2 className={styles.sectionTitle}>{section.title}</h2>
                  </div>
                    <div className={styles.subheading}>
                      <p className={styles.heroSubtitle}>{study.description}</p>
                    </div>
                  </div>

                  {/* Stats Cards */}
                  {getBlocksByCollection(section, 'block_statistics').length > 0 && (
                    <div className={styles.cards}>
                      {getBlocksByCollection(section, 'block_statistics').map((stat) => (
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

              {/* Problem Section - identified by title and card blocks with section_image */}
              {section.title.toLowerCase().includes('problem') && section.blocks.some(b => b.collection === 'block_card') && (
                <section className={styles.problem}>
                  <HeaderSection title={section.title} />

                  <div className={styles.problemCards}>
                    {getBlocksByCollection(section, 'block_card').map((card, index) => (
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

                  {section.notice && (
                    <div className={styles.sectionText}>
                      <p>{section.notice}</p>
                    </div>
                  )}
                </section>
              )}

              {/* Channels Section - identified by title and multiple card blocks */}
              {section.title.toLowerCase().includes('channel') && section.blocks.some(b => b.collection === 'block_card') && (
                <section className={styles.channels}>
                  <HeaderSection title={section.title} description={section.description} />

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
                        {getBlocksByCollection(section, 'block_card').slice(0, 2).map((card, index) => (
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
                      {getBlocksByCollection(section, 'block_card')[2]?.image && (
                        <img
                          src={getAssetCloud(getBlocksByCollection(section, 'block_card')[2].image)}
                          alt="Mobile app"
                          className={styles.screenshots}
                        />
                      )}
                    </div>
                  </div>
                </section>
              )}

              {/* Timeline Section - identified by title and card blocks */}
              {section.title.toLowerCase().includes('timeline') && section.blocks.some(b => b.collection === 'block_card') && (
                <section className={styles.timeline}>
                  <HeaderSection title={section.title} />

                  <div className={styles.timelineCards}>
                    {getBlocksByCollection(section, 'block_card').map((card) => (
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

              {/* Benefits Section - identified by title and card blocks */}
              {section.title.toLowerCase().includes('benefit') && section.blocks.some(b => b.collection === 'block_card') && (
                <section className={styles.benefits}>
                  <HeaderSection title={section.title} />

                  <div className={styles.benefitsCards}>
                    {/* First Row - 3 cards */}
                    <div className={styles.benefitsRow}>
                      {getBlocksByCollection(section, 'block_card').slice(0, 3).map((card) => (
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
                      {getBlocksByCollection(section, 'block_card').slice(3, 6).map((card) => (
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

              {/* Features Section - identified by title and card blocks with icons */}
              {section.title.toLowerCase().match(/feature|why|love/) && section.blocks.some(b => b.collection === 'block_card') && (
                <section className={styles.features}>
                  <HeaderSection title={section.title} description={section.description} />

                  <div className={styles.featuresCards}>
                    {getBlocksByCollection(section, 'block_card').map((card) => (
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

              {/* Setup Section - identified by title and card blocks */}
              {section.title.toLowerCase().match(/setup|go live/) && section.blocks.some(b => b.collection === 'block_card') && (
                <section className={styles.setup}>
                  <div className={styles.sectionHeading}>
                    <h2 className={styles.sectionTitle}>{section.title}</h2>
                  </div>

                  <div className={styles.setupCards}>
                    {getBlocksByCollection(section, 'block_card').map((card, index) => (
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

                  {section.notice && (
                    <div className={styles.sectionText}>
                      <p>{section.notice}</p>
                    </div>
                  )}
                </section>
              )}

              {/* FAQs Section - identified by block_faqs collection */}
              {section.blocks.some(b => b.collection === 'block_faqs') && (
                <section className={styles.faqs}>
                  <div className={styles.sectionHeading}>
                    <h2 className={styles.sectionTitle}>{section.title}</h2>
                  </div>

                  <div className={styles.qAndA}>
                    {getBlocksByCollection(section, 'block_faqs').map((faq) => (
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

              {/* Final CTA Banner - identified by block_banner collection */}
              {section.blocks.some(b => b.collection === 'block_banner') && getBlocksByCollection(section, 'block_banner').length > 0 && (
                <section className={styles.finalCta}>
                  {getBlocksByCollection(section, 'block_banner').map((banner) => (
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
            </React.Fragment>
          ))}
        </div>
      </main>
    </Layout>
  );
}
