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
        <p className={styles.description}>
          These are the most asked questions about ChatAgent. Can&apos;t find
          what you&apos;re looking for?{' '}
          <a href="#" className={styles.link}>
            Chat with our friendly team ↗
          </a>
        </p>
      </div>
    </div>
  );
};
