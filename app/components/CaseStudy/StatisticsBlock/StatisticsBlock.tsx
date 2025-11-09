import React from 'react';
import Image from 'next/image';
import styles from './StatisticsBlock.module.scss';

interface Statistic {
  id: number;
  count: string;
  title: string;
  subtitle: string;
  icon: string | null;
  color: string;
}

interface StatisticsBlockProps {
  blocks: Statistic[];
}

export const StatisticsBlock: React.FC<StatisticsBlockProps> = ({ blocks }) => {
  return (
    <div className={styles.statistics}>
      {blocks.map((stat) => (
        <div key={stat.id} className={styles.statisticCard}>
          {stat.icon && (
            <div className={styles.icon}>
              <Image
                src={stat.icon}
                alt={stat.title}
                width={48}
                height={48}
                unoptimized
              />
            </div>
          )}
          <div className={styles.content}>
            <div className={styles.count} style={{ color: stat.color }}>
              {stat.count}
            </div>
            <div className={styles.title}>{stat.title}</div>
            <div className={styles.subtitle}>{stat.subtitle}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
