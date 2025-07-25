import styles from './RealResults.module.scss';
import { Clock2Icon } from '@/app/assets/icons/Clock2Icon';
import { DollarIcon } from '@/app/assets/icons/DollarIcon';
import { EarthIcon } from '@/app/assets/icons/EarthIcon';
import { ChatBubblesIcon } from '@/app/assets/icons/ChatBubblesIcon';

export const RealResults = (): React.ReactElement => {
  const metrics = [
    {
      icon: <Clock2Icon />,
      title: <>95% of customers questions answered instantly</>,
    },
    {
      icon: <DollarIcon />,
      title: 'Cuts support workload by 50%',
    },
    {
      icon: <EarthIcon />,
      title: 'Supports 30+ languages',
    },
    {
      icon: <ChatBubblesIcon color="#03010C" />,
      title: (
        <>
          Up to 3,000 customer
          <br />
          conversations/month
        </>
      ),
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.leftColumn}>
        <div className={styles.headingContainer}>
          <h2 className={styles.mainHeading}>
            Real Results.
            <br />
            Real Speed.
          </h2>
        </div>

        <div className={styles.subHeadingContainer}>
          <p className={styles.subHeading}>
            Give your customers answers.
            <br />
            Not waiting time.
          </p>
        </div>
      </div>

      <div className={styles.phoneSection}>
        <div className={styles.phoneContainer}>
          <img src="/imgs/phone-example.png" alt="test" />
        </div>
      </div>

      <div className={styles.rightColumn}>
        {metrics.map((metric, index) => (
          <div key={index} className={styles.metricItem}>
            <div className={styles.metricIcon}>{metric.icon}</div>

            <div className={styles.metricText}>{metric.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
