import styles from './FAQHeader.module.scss';
import { HeroIcon } from '@/app/assets/icons/faq/HeroIcon';

export const FAQHeader: React.FC = () => {
  return (
    <div className={styles.faqHeader}>
      <div className={styles.iconContainer}>
        <HeroIcon />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Frequently Asked Questions</h1>
        {/* Desktop version - single paragraph */}
        <p className={styles.descriptionDesktop}>
          These are the most asked questions about ChatAgent.
            {/*  Can&apos;t find*/}
            {/*what you&apos;re looking for?{' '}*/}
            {/*<a href="#" className={styles.link}>*/}
            {/*  Chat with our friendly team ↗*/}
            {/*</a>*/}
        </p>
        {/* Mobile version - separate paragraphs */}
        <div className={styles.mobileContent}>
          <p className={styles.subtitle}>
            These are the most asked questions about ChatAgent.
          </p>
          <p className={styles.description}>
            Can&apos;t find what you&apos;re looking for?{' '}
            <a href="#" className={styles.link}>
              Chat with our friendly team ↗
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
