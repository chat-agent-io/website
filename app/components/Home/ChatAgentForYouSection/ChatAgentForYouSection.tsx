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
      title: 'You get too many DMs to reply manually',
      icon: <ChatBubblesIcon className={styles.icon} />,
    },
    {
      title: "You've missed messages and lost customers",
      icon: <MissedMessagesIcon className={styles.icon} />,
    },
    {
      title: "You don't want to hire extra staff just to answer Instagram",
      icon: <HireStaffIcon className={styles.icon} />,
    },
    {
      title: "You're tired of saying the same things over and over",
      icon: <RepetitiveIcon className={styles.icon} />,
    },
    {
      title: 'You want every message answered even at 2 AM',
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
