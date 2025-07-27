'use client';

import styles from './RealResults.module.scss';
import { Clock2Icon } from '@/app/assets/icons/Clock2Icon';
import { DollarIcon } from '@/app/assets/icons/DollarIcon';
import { EarthIcon } from '@/app/assets/icons/EarthIcon';
import { ChatBubblesIcon } from '@/app/assets/icons/ChatBubblesIcon';
import animationData from '../../../../public/animations/phone/phone.json';
import Lottie from 'lottie-react';

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
      <div className={styles.phoneSection}>
        <div className={styles.phoneContainer}>
          <Lottie animationData={animationData} loop={true} autoplay={true} />
        </div>
      </div>
    </section>
  );
};
