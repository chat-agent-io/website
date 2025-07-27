import { Card, CardContent } from '../../../components/UI/Card';
import styles from './ChatAgentForYouSection.module.scss';
import { ChatBubblesIcon } from '@/app/assets/icons/ChatBubblesIcon';
import { MissedMessagesIcon } from '@/app/assets/icons/MissedMessagesIcon';
import { HireStaffIcon } from '@/app/assets/icons/HireStaffIcon';
import { RepetitiveIcon } from '@/app/assets/icons/RepetitiveIcon';
import { TwentyFourSevenIcon } from '@/app/assets/icons/TwentyFourSevenIcon';

export const ChatAgentForYouSection: React.FC = () => {
  const scenarios = [
    {
      header: 'You get too many',
      title: 'DMs to reply manually',
      icon: <ChatBubblesIcon className={styles.icon} color="#7C38BC" />,
    },
    {
      header: "You've missed",
      title: 'messages and lost customers',
      icon: <MissedMessagesIcon className={styles.icon} />,
    },
    {
      header: "You don't want to",
      title: 'hire extra staff just to answer Instagram',
      icon: <HireStaffIcon className={styles.icon} />,
    },
    {
      header: "You're tired of",
      title: 'saying the same things over and over',
      icon: <RepetitiveIcon className={styles.icon} />,
    },
    {
      header: 'You want',
      title: 'every message answered even at 2 AM',
      icon: <TwentyFourSevenIcon className={styles.icon} />,
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>ChatAgent Is For You If...</h2>
        </div>

        <div className={styles.cardsSection}>
          {scenarios.map((scenario, index) => (
            <Card key={index} className={styles.scenarioCard}>
              <CardContent className={styles.cardContent}>
                <div className={styles.iconContainer}>
                  <div className={styles.iconBackground}>{scenario.icon}</div>
                </div>

                <div className={styles.textContent}>
                  <p className={styles.cardHeader}>{scenario.header}</p>
                  <p className={styles.cardTitle}>{scenario.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
