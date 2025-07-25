import styles from './SpeaksLikeYouSection.module.scss';
import { CtaButton } from '../CtaButton/CtaButton';

export const SpeaksLikeYouSection: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Speaks Like You. <br />
            In Every Language.
          </h2>
          <p>
            ChatAgent matches your tone, style and professionalism in over{' '}
            <br /> 30 languages. Whether formal, casual, or playful — it sounds
            like you.
          </p>
        </div>
        <div className={styles.content}>
          <img src="/imgs/speaks-like-you.png" alt="Speaks Like You" />
        </div>
        <CtaButton />
      </div>
    </section>
  );
};
