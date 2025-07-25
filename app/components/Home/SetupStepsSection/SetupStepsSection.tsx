import { Card, CardContent } from '../../../components/UI/Card';
import styles from './SetupStepsSection.module.scss';

export const SetupStepsSection: React.FC = () => {
  const setupSteps = [
    {
      stepNumber: 1,
      title: 'Upload Your Info',
      description:
        'Use PDFs, links, or voice to teach ChatAgent your services, hours, tone and FAQs',
    },
    {
      stepNumber: 2,
      title: 'Connect Your Channels',
      description: 'Link Instagram, WhatsApp, or your site chat in seconds.',
    },
    {
      stepNumber: 3,
      title: 'Go Live Instantly',
      description:
        'Your AI agent starts answering customers within minutes. you stay in control.',
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            No Setup Headaches.
            <br />
            Just Plug and Play.
          </h2>

          <p className={styles.subtitle}>
            Use PDFs, links, or voice to teach ChatAgent your
            <br />
            services, hours, tone and FAQs
          </p>
        </div>

        <div className={styles.stepsSection}>
          {setupSteps.map((step, index) => (
            <Card key={index} className={styles.stepCard}>
              <CardContent className={styles.cardContent}>
                <div className={styles.stepNumberContainer}>
                  <div className={styles.stepNumber}>{step.stepNumber}</div>
                </div>

                <div className={styles.textContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
