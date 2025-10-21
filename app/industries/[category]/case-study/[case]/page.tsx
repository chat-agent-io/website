'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Layout from '../../../../components/UI/Layout/Layout';
import styles from './case.module.scss';

const caseStudyData: Record<string, any> = {
  'beach-clubs': {
    breadcrumb: 'Industries\\Hospitality & Leisure\\Beach Clubs',
    title: 'Beach Club Guests Don\'t Wait — Neither Should Your Replies',
    subtitle: 'From lazy brunch to sunset party, ChatAgent answers every message in seconds — with human-quality recommendations that feel like they\'re from your most experienced host.',
    stats: [
      { icon: '⏱️', value: '38 sec', label: 'Avg. Reply Time', caption: 'instead of hours' },
      { icon: '📈', value: '+25%', label: 'Engagement Uplift', caption: 'on event posts' },
      { icon: '💰', value: '+40/mo', label: 'Staff Hours Saved', caption: 'in season' }
    ],
    problemTitle: 'Beach Club Reality — Fast, Loud, Full-On',
    guestExpect: {
      title: 'Guests Expect',
      description: 'Instant answers, friendly recommendations, today\'s details, and help in their language.',
      questions: [
        { text: 'What\'s on today?', color: 'orange' },
        { text: 'Send the cocktail menu', color: 'purple' },
        { text: 'Dress code for tonight?', color: 'cyan' },
        { text: 'Best time to arrive for sunset?', color: 'green' }
      ]
    },
    teamBottleneck: {
      title: 'The Bottleneck',
      description: 'Spiky DM volume, busy floor, constantly changing info — replies lag and valuable opportunities slip.',
      problems: [
        { role: 'Reception', issue: 'seating walk-ins + phones' },
        { role: 'Hosts', issue: 'greeting & managing flow' },
        { role: 'Managers', issue: 'running the floor & VIPs' },
        { role: 'DJs', issue: 'don\'t answer DMs' }
      ]
    }
  }
};

export default function CaseStudyPage() {
  const params = useParams();
  const caseSlug = params.case as string;
  
  const data = caseStudyData[caseSlug];

  if (!data) {
    return (
      <Layout>
        <main className={styles.page}>
          <div className={styles.container}>
            <div className={styles.notFound}>
              <h1>Case Study Not Found</h1>
              <p>The case study you&apos;re looking for doesn&apos;t exist.</p>
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
            <div className={styles.breadcrumb}>
              {data.breadcrumb.split('\\').map((part: string, index: number, arr: string[]) => (
                <span key={index} className={index === arr.length - 1 ? styles.active : styles.inactive}>
                  {part}{index < arr.length - 1 && '\\'}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Section */}
          <section className={styles.hero}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>{data.title}</h1>
              <p className={styles.heroSubtitle}>{data.subtitle}</p>
            </div>

            {/* Stats Cards */}
            <div className={styles.statsCards}>
              {data.stats.map((stat: any, index: number) => (
                <div key={index} className={styles.statCard}>
                  <div className={styles.statValue}>
                    <span className={styles.statIcon}>{stat.icon}</span>
                    <span className={styles.statNumber}>{stat.value}</span>
                  </div>
                  <h3 className={styles.statLabel}>{stat.label}</h3>
                  <p className={styles.statCaption}>{stat.caption}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className={styles.ctaButtons}>
              <button className={styles.primaryBtn}>Start 14-Day Free Trial</button>
              <button className={styles.secondaryBtn}>See It In Action</button>
            </div>
          </section>

          {/* Problem Section */}
          <section className={styles.problemSection}>
            <h2 className={styles.sectionTitle}>{data.problemTitle}</h2>
            
            <div className={styles.problemCards}>
              {/* Guest Expectations Card */}
              <div className={styles.problemCard}>
                <h3 className={styles.cardTitle}>{data.guestExpect.title}</h3>
                <p className={styles.cardDescription}>{data.guestExpect.description}</p>
                
                <div className={styles.questionsSection}>
                  <h4 className={styles.questionsTitle}>What Guests Ask</h4>
                  <div className={styles.questionsCards}>
                    {data.guestExpect.questions.map((q: any, i: number) => (
                      <div key={i} className={`${styles.questionCard} ${styles[q.color]}`}>
                        <span>{q.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Team Bottleneck Card */}
              <div className={styles.problemCard}>
                <h3 className={styles.cardTitle}>{data.teamBottleneck.title}</h3>
                <p className={styles.cardDescription}>{data.teamBottleneck.description}</p>
                
                <div className={styles.questionsSection}>
                  <h4 className={styles.questionsTitle}>What Your Team Is Doing</h4>
                  <div className={styles.questionsCards}>
                    {data.teamBottleneck.problems.map((p: any, i: number) => (
                      <div key={i} className={styles.problemStaffCard}>
                        <strong>{p.role}</strong>
                        <span>{p.issue}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className={styles.problemNote}>
              ChatAgent covers the channels so your team can cover the floor — it doesn&apos;t take reservations or payments.
            </p>
          </section>

          {/* Channels Section */}
          <section className={styles.channelsSection}>
            <h2 className={styles.sectionTitle}>One Voice, All Platforms</h2>
            <p className={styles.sectionSubtitle}>
              Clear answers, timely suggestions, tone that matches your brand — in any language.
            </p>
            
            <div className={styles.channelButtons}>
              <button className={`${styles.channelBtn} ${styles.active}`}>WhatsApp</button>
              <button className={styles.channelBtn}>Instagram</button>
              <button className={styles.channelBtn}>Website</button>
              <span className={styles.moreText}>& More</span>
            </div>

            <div className={styles.conversationDemo}>
              <p className={styles.placeholder}>Conversation demo placeholder</p>
            </div>
          </section>

          {/* Timeline Section */}
          <section className={styles.timelineSection}>
            <h2 className={styles.sectionTitle}>A Beach Club Day — Covered End to End</h2>
            
            <div className={styles.timelineCards}>
              {['Morning', 'Afternoon', 'Sunset', 'Late Night'].map((time, i) => (
                <div key={i} className={styles.timelineCard}>
                  <div className={styles.timelineImage}></div>
                  <h3>{time}</h3>
                  <p>Coverage description for {time.toLowerCase()}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className={styles.benefitsSection}>
            <h2 className={styles.sectionTitle}>Turn DMs Into Revenue Without Lifting a Finger</h2>
            
            <div className={styles.benefitsGrid}>
              {[
                '24/7 Instant Replies',
                'Menu & Content Brain',
                'Brand-Tuned Voice',
                'Human Handoff',
                'Contextual Recommender',
                'Multilingual Support'
              ].map((benefit, i) => (
                <div key={i} className={styles.benefitCard}>
                  <div className={styles.benefitImage}></div>
                  <h3>{benefit}</h3>
                  <p>Description for {benefit}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>But What If...</h2>
            
            <div className={styles.faqList}>
              {[
                {q: 'We already reply to DMs ourselves?', a: 'ChatAgent works alongside your team, handles overflow, and ensures no guest is left waiting'},
                {q: 'We don\'t want it to sound robotic?', a: 'It won\'t — replies use your brand tone and feel like your team'},
                {q: 'Our bookings are done manually?', a: 'No problem — ChatAgent guides guests and collects the info your team needs'},
                {q: 'We\'ve never used anything like this before?', a: 'Perfect — no technical knowledge needed, just your brand info'}
              ].map((faq, i) => (
                <div key={i} className={styles.faqItem}>
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA Banner */}
          <section className={styles.ctaBanner}>
            <div className={styles.bannerContent}>
              <h2>Every Missed Message Is a Missed Guest on the Beach.</h2>
              <p>Let your team focus on the vibe. ChatAgent handles messages — instantly, on brand, across every channel.</p>
              <button className={styles.primaryBtn}>Start 14-Day Free Trial</button>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
