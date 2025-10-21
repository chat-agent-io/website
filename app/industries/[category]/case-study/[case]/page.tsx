'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Layout from '../../../../components/UI/Layout/Layout';
import styles from './case.module.scss';

interface Stat {
  icon: string;
  value: string;
  label: string;
  caption: string;
}

interface GuestExpect {
  title: string;
  description: string;
  subtitle: string;
  image: string;
}

interface TeamBottleneck {
  title: string;
  description: string;
  subtitle: string;
  image: string;
}

interface Channel {
  title: string;
  subtitle: string;
  buttons: string[];
  conversationTitle1: string;
  conversationImage1: string;
  conversationTitle2: string;
  conversationImage2: string;
  screenshot: string;
}

interface TimelineCard {
  title: string;
  description: string;
}

interface Timeline {
  title: string;
  cards: TimelineCard[];
}

interface BenefitCard {
  title: string;
  description: string;
}

interface Benefits {
  title: string;
  cards: BenefitCard[];
}

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

interface Features {
  title: string;
  subtitle: string;
  cards: FeatureCard[];
}

interface SetupCard {
  number: string;
  title: string;
  description: string;
}

interface Setup {
  title: string;
  cards: SetupCard[];
  subtitle: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface FinalCTA {
  logo: string;
  title: string;
  subtitle: string;
  buttonText: string;
}

interface CaseStudy {
  breadcrumb: string;
  title: string;
  subtitle: string;
  stats: Stat[];
  problemTitle: string;
  guestExpect: GuestExpect;
  teamBottleneck: TeamBottleneck;
  channels: Channel;
  timeline: Timeline;
  benefits: Benefits;
  features: Features;
  setup: Setup;
  faqs: FAQ[];
  finalCta: FinalCTA;
}

const caseStudyData: Record<string, CaseStudy> = {
  'beach-clubs': {
    breadcrumb: 'Industries\\Hospitality & Leisure\\Beach Clubs',
    title: 'Beach Club Guests Don\'t Wait — Neither Should Your Replies',
    subtitle: 'From lazy brunch to sunset party, ChatAgent answers every message in seconds — with human-quality recommendations that feel like they\'re from your most experienced host.',
    stats: [
      { 
        icon: 'https://api.builder.io/api/v1/image/assets/TEMP/3a41cb072b5ee98e0acee938b2f36b967745bcb1?width=74', 
        value: '38 sec', 
        label: 'Avg. Reply Time', 
        caption: 'instead of hours' 
      },
      { 
        icon: 'https://api.builder.io/api/v1/image/assets/TEMP/b505eb2cdf42549b481296254a7377c82abccc14?width=70', 
        value: '+25%', 
        label: 'Engagement Uplift', 
        caption: 'on event posts' 
      },
      { 
        icon: 'https://api.builder.io/api/v1/image/assets/TEMP/fb0886daa9ed09b6bda3ecc55ebd63d6bc937d8c?width=120', 
        value: '+40/mo', 
        label: 'Staff Hours Saved', 
        caption: 'in season' 
      }
    ],
    problemTitle: 'Beach Club Reality\n— Fast, Loud, Full-On',
    guestExpect: {
      title: 'Guests Expect',
      description: 'Instant answers, friendly recommendations, today\'s details, and help in their language.',
      subtitle: 'What Guests Ask',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/5d8884493fd099859b3740a9c5d70adf422185c4?width=600'
    },
    teamBottleneck: {
      title: 'The Bottleneck',
      description: 'Spiky DM volume, busy floor, constantly changing info — replies lag and valuable opportunities slip.',
      subtitle: 'What Your Team Is Doing',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/e3a51180b88f2721b89ba59b05fea1a8b9d23036?width=568'
    },
    channels: {
      title: 'One Voice, All Platforms',
      subtitle: 'Clear answers, timely suggestions, tone that matches your brand — in any language.',
      buttons: ['WhatsApp', 'Instagram', 'Website'],
      conversationTitle1: 'Conversations\nThat Feel Human',
      conversationTitle2: 'Recommendations,\nNot Lists',
      conversationImage1: 'https://api.builder.io/api/v1/image/assets/TEMP/55cb404fbd7e627a9a4a5496609cb5491f4c313f?width=580',
      conversationImage2: 'https://api.builder.io/api/v1/image/assets/TEMP/f719f08ed7cf7ca84a2fdff9b2b96081e1db4dee?width=580',
      screenshot: 'https://api.builder.io/api/v1/image/assets/TEMP/373c4d2f7b1b5512af3b8fd1157c8e017ea0328d?width=600'
    },
    timeline: {
      title: 'A Beach Club Day\n— Covered End to End',
      cards: [
        { title: 'Morning', description: 'Opening hours, towel policy, shaded spots,  and tasty brunch highlights.' },
        { title: 'Afternoon', description: 'Instant drinks and shisha menus, poolside snacks, multilingual support.' },
        { title: 'Sunset', description: 'Promotes tonight\'s DJ, answers dress code, recommends best arrival time' },
        { title: 'Late Night', description: 'Answers next-day questions across time zones, covering Friday, vegan options, parking' }
      ]
    },
    benefits: {
      title: 'Turn DMs Into Revenue\nWithout Lifting a Finger',
      cards: [
        { title: '24/7 Instant Replies', description: 'Instant answers on Instagram & WhatsApp — even when your team\'s offline' },
        { title: 'Menu & Content Brain', description: 'Ingests menus, event flyers, house rules, FAQs, location & parking notes' },
        { title: 'Brand-Tuned Voice', description: 'Relaxed & friendly, premium & minimal, or party-forward — you choose' },
        { title: 'Human Handoff', description: 'Escalates edge cases (VIPs, complaints, lost items) to staff with context' },
        { title: 'Contextual Recommender', description: 'Recommends tables, bottles, shisha, and events based on time, vibe, and guest cues' },
        { title: 'Multilingual Support', description: 'Auto-detects and replies in the guest\'s language with on-brand tone' }
      ]
    },
    features: {
      title: 'Why Beach Clubs Love This\n— Even If They Don\'t Know It Yet',
      subtitle: 'This isn\'t a chatbot. This is an upgrade to your guest experience.',
      cards: [
        { 
          icon: 'https://api.builder.io/api/v1/image/assets/TEMP/b691ca61d5fd834b549f8c3cefd5a22b8e25875e?width=112',
          title: 'Trained to Think\nLike You',
          description: 'Upload your menu, services, pricing, tone of voice, FAQs, and hashtags. ChatAgent learns fast'
        },
        { 
          icon: 'https://api.builder.io/api/v1/image/assets/TEMP/fae5055a0ffe003f7f0bd52b40a2aa0762b64a8d?width=182',
          title: 'Quick Launch,\nZero Stress',
          description: 'Go live the same day. No dev team needed. No weeks of setup'
        },
        { 
          icon: 'https://api.builder.io/api/v1/image/assets/TEMP/6ff380cf795e0a7efec20d3b73e761c0ab7c69d6?width=102',
          title: 'Staff Time\nReclaimed',
          description: 'Save 30–40 hrs/mo and let your team focus on the floor — not the inbox'
        }
      ]
    },
    setup: {
      title: 'Go Live Fast — No Engineering Required',
      subtitle: 'No waiting 7 days to see results — go live today',
      cards: [
        {
          number: 'https://api.builder.io/api/v1/image/assets/TEMP/a6502f81d08899283e6bc857107b1cc1da47460b?width=80',
          title: 'Load Your Content',
          description: 'Menus, event details, flyers, FAQs, house rules, location & parking'
        },
        {
          number: 'https://api.builder.io/api/v1/image/assets/TEMP/5818e4fb94c1b47b2db4407eaf7a3a345fa9c290?width=80',
          title: 'Set the Voice',
          description: 'Choose tone & phrasing — we align replies to your brand'
        },
        {
          number: 'https://api.builder.io/api/v1/image/assets/TEMP/dd50c5b24f7cbfd4add034d5d6bf91f4a0b7ac99?width=80',
          title: 'Connect Channels',
          description: 'Instagram, WhatsApp Business, drop-in website widget'
        },
        {
          number: 'https://api.builder.io/api/v1/image/assets/TEMP/5aa2cf86543e463bf1a9634978e9719b6cfbd6bb?width=80',
          title: 'Guarded Launch',
          description: 'Start in review mode, then go full auto with escalation triggers'
        }
      ]
    },
    faqs: [
      { 
        question: 'We already reply to DMs ourselves?', 
        answer: 'ChatAgent works alongside your team, handles overflow, and ensures no guest is left waiting' 
      },
      { 
        question: 'We don\'t want it to sound robotic?', 
        answer: 'It won\'t — replies use your brand tone and feel like your team' 
      },
      { 
        question: 'Our bookings are done manually?', 
        answer: 'No problem — ChatAgent guides guests and collects the info your team needs' 
      },
      { 
        question: 'We\'ve never used anything like this before?', 
        answer: 'Perfect — no technical knowledge needed, just your brand info' 
      }
    ],
    finalCta: {
      logo: 'https://api.builder.io/api/v1/image/assets/TEMP/0b4768191c965e62aac3a96d78ab484f707fec83?width=300',
      title: 'Every Missed Message Is a Missed Guest on the Beach.',
      subtitle: 'Let your team focus on the vibe. ChatAgent handles messages — instantly, on brand, across every channel.',
      buttonText: 'Start 14-Day Free Trial',
      background: 'https://api.builder.io/api/v1/image/assets/TEMP/36cf94c30090f066a3c60121d2de3eb62aac9c9f?width=1700'
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
          <div className={styles.mainContainer}>
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
            <div className={styles.heroSection}>
              <div className={styles.breadcrumb}>
                {data.breadcrumb.split('\\').map((part: string, index: number, arr: string[]) => (
                  <React.Fragment key={index}>
                    <span className={index === arr.length - 1 ? styles.active : styles.inactive}>
                      {part}
                    </span>
                    {index < arr.length - 1 && '\\'}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <section className={styles.hero}>
            <div className={styles.heroContentWrapper}>
              <div className={styles.containerText}>
                <div className={styles.heading}>
                  <h1 className={styles.heroTitle}>{data.title}</h1>
                </div>
                <div className={styles.subheading}>
                  <p className={styles.heroSubtitle}>{data.subtitle}</p>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className={styles.cards}>
              {data.stats.map((stat: Stat, index: number) => (
                <div key={index} className={styles.card}>
                  <div className={styles.statIconContainer}>
                    <Image src={stat.icon} alt="" width={74} height={74} className={styles.statIconImg} />
                    <span className={styles.statNumber}>{stat.value}</span>
                  </div>
                  <div className={styles.titleSection}>
                    <h3 className={styles.statLabel}>{stat.label}</h3>
                  </div>
                  <div className={styles.captionSection}>
                    <p className={styles.statCaption}>{stat.caption}</p>
                  </div>
                </div>
              ))}
            </div>

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

          {/* Problem Section */}
          <section className={styles.problem}>
            <div className={styles.problemHeading}>
              <h2 className={styles.sectionTitle}>{data.problemTitle}</h2>
            </div>
            
            <div className={styles.problemCards}>
              {/* Guest Expectations Card */}
              <div className={styles.guestProblem}>
                <div className={styles.containerTextProblem}>
                  <div className={styles.problemCardTitle}>
                    <h3>{data.guestExpect.title}</h3>
                  </div>
                  <div className={styles.item}>
                    <p>{data.guestExpect.description}</p>
                  </div>
                </div>
                <div className={styles.textSection}>
                  <h4>{data.guestExpect.subtitle}</h4>
                </div>
                <div className={styles.containerQuestions}>
                  <Image src={data.guestExpect.image} alt="What Guests Ask" width={600} height={400} className={styles.questionsCards} />
                </div>
              </div>

              {/* Team Bottleneck Card */}
              <div className={styles.staffProblem}>
                <div className={styles.containerTextProblem}>
                  <div className={styles.problemCardTitle}>
                    <h3>{data.teamBottleneck.title}</h3>
                  </div>
                  <div className={styles.item}>
                    <p>{data.teamBottleneck.description}</p>
                  </div>
                </div>
                <div className={styles.textSection}>
                  <h4>{data.teamBottleneck.subtitle}</h4>
                </div>
                <div className={styles.containerQuestions}>
                  <div className={styles.questionCardsWrapper}>
                    <Image src={data.teamBottleneck.image} alt="What Your Team Is Doing" width={568} height={400} className={styles.groupCards} />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.problemText}>
              <p>ChatAgent covers the channels so your team can cover the floor — it doesn&apos;t take reservations or payments.</p>
            </div>
          </section>

          {/* Channels Section */}
          <section className={styles.channels}>
            <div className={styles.channelsHeader}>
              <div className={styles.channelsHeading}>
                <h2>{data.channels.title}</h2>
              </div>
              <div className={styles.channelsText}>
                <p>{data.channels.subtitle}</p>
              </div>
            </div>

            <div className={styles.seeItInAction}>
              <div className={styles.buttonsContainer}>
                {data.channels.buttons.map((btn: string, i: number): React.ReactElement => (
                  <button 
                    key={i} 
                    className={`${styles.buttonPillChannels} ${i === 0 ? styles.active : ''}`}
                  >
                    {btn}
                  </button>
                ))}
                <div className={styles.moreText}>& More</div>
              </div>

              <div className={styles.channelContainer}>
                <div className={styles.conversationSamples}>
                  <div className={styles.minichatCards}>
                    <div className={styles.minichatHeading}>
                      <h3 className={styles.gradientInstagram}>{data.channels.conversationTitle1}</h3>
                    </div>
                    <Image src={data.channels.conversationImage1} alt="Conversation sample" width={300} height={400} className={styles.conversationCard} />
                  </div>

                  <div className={styles.minichatCards}>
                    <div className={styles.minichatHeading}>
                      <h3 className={styles.gradientBlue}>{data.channels.conversationTitle2}</h3>
                    </div>
                    <Image src={data.channels.conversationImage2} alt="Conversation sample" width={300} height={400} className={styles.conversationCard} />
                  </div>
                </div>

                <Image src={data.channels.screenshot} alt="Mobile screenshot" width={400} height={600} className={styles.screenshots} />
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section className={styles.timeline}>
            <div className={styles.timelineHeading}>
              <h2 className={styles.sectionTitle}>{data.timeline.title}</h2>
            </div>
            
            <div className={styles.timelineCards}>
              {data.timeline.cards.map((card: TimelineCard, i: number): React.ReactElement => (
                <div key={i} className={styles.timelineCard}>
                  <div className={styles.timelinePhotos}></div>
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

          {/* Benefits Section */}
          <section className={styles.benefits}>
            <div className={styles.benefitsHeading}>
              <h2 className={styles.sectionTitle}>{data.benefits.title}</h2>
            </div>
            
            <div className={styles.benefitsCards}>
              <div className={styles.benefitsRow}>
                {data.benefits.cards.slice(0, 3).map((card: BenefitCard, i: number): React.ReactElement => (
                  <div key={i} className={styles.benefitCard}>
                    <div className={styles.benefitImage}></div>
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
              <div className={styles.benefitsRow}>
                {data.benefits.cards.slice(3, 6).map((card: BenefitCard, i: number): React.ReactElement => (
                  <div key={i} className={styles.benefitCard}>
                    <div className={styles.benefitImage}></div>
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

          {/* Features Section */}
          <section className={styles.features}>
            <div className={styles.featuresHeader}>
              <div className={styles.featuresHeading}>
                <h2>{data.features.title}</h2>
              </div>
              <div className={styles.featuresSubheading}>
                <p>{data.features.subtitle}</p>
              </div>
            </div>

            <div className={styles.featuresCards}>
              {data.features.cards.map((card: FeatureCard, i: number): React.ReactElement => (
                <div key={i} className={styles.featureCard}>
                  <div className={styles.featureIcon}>
                    <Image src={card.icon} alt="" width={50} height={50} />
                  </div>
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

          {/* Setup Section */}
          <section className={styles.setup}>
            <div className={styles.setupHeading}>
              <h2>{data.setup.title}</h2>
            </div>

            <div className={styles.setupCards}>
              {data.setup.cards.map((card: SetupCard, i: number): React.ReactElement => (
                <div key={i} className={styles.setupCard}>
                  <div className={styles.setupIcon}>
                    <Image src={card.number} alt="" width={60} height={60} />
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

            <div className={styles.setupText}>
              <p>{data.setup.subtitle}</p>
            </div>
          </section>

          {/* FAQs Section */}
          <section className={styles.faqs}>
            <div className={styles.faqsHeading}>
              <h2 className={styles.sectionTitle}>But What If...</h2>
            </div>
            
            <div className={styles.qAndA}>
              {data.faqs.map((faq: FAQ, i: number): React.ReactElement => (
                <div key={i} className={styles.qAndAFrame}>
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

          {/* Final CTA Banner */}
          <section className={styles.finalCta}>
            <div className={styles.bannerFrame}>
              <div className={styles.logoAndText}>
                <Image src={data.finalCta.logo} alt="ChatAgent" width={120} height={120} className={styles.logoButton} />
                <div className={styles.bannerTextContent}>
                  <h2>{data.finalCta.title}</h2>
                  <p>{data.finalCta.subtitle}</p>
                </div>
              </div>
              <div className={styles.containerButton}>
                <button className={styles.buttonPrimary}>
                  {data.finalCta.buttonText}
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
