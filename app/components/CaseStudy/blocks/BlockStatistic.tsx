import React from 'react';
import { getAssetCloud } from '@/app/utils/assets';
import styles from './BlockStatistic.module.scss';

interface BlockStatisticProps {
  id: number;
  count: string;
  title: string;
  subtitle: string;
  icon?: string | null;
  color?: string;
}

export const BlockStatistic: React.FC<BlockStatisticProps> = ({
  count,
  title,
  subtitle,
  icon,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.statIconContainer}>
        {icon && <img src={getAssetCloud(icon)} alt="" className={styles.statIcon} />}
        <span className={styles.statNumber}>{count}</span>
      </div>
      <div className={styles.titleSection}>
        <h3 className={styles.statLabel}>{title}</h3>
      </div>
      <div className={styles.captionSection}>
        <p className={styles.statCaption}>{subtitle}</p>
      </div>
    </div>
  );
};
