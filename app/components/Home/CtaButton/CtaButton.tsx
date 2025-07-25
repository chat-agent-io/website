import React from 'react';
import { Button } from '../../../components/UI/Button/Button';
import styles from './CtaButton.module.scss';

export const CtaButton: React.FC = () => {
  return (
    <div className={styles.ctaSection}>
      <Button variant="gradient" className={styles.ctaButton}>
        Start 14-Day Free Trial
      </Button>
      <p className={styles.disclaimer}>No credit card. Cancel anytime.</p>
    </div>
  );
};
