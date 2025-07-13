import React from 'react';
import styles from './ProgressBar.module.scss';

interface ProgressBarProps {
  value: number; // 0-100
  max?: number;
  className?: string;
  variant?: 'default' | 'gradient' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  className,
  variant = 'default',
  size = 'md',
  showLabel = false,
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={`${styles.container} ${className || ''}`}>
      <div className={`${styles.track} ${styles[size]}`}>
        <div
          className={`${styles.fill} ${styles[variant]}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <span className={styles.label}>{Math.round(percentage)}%</span>
      )}
    </div>
  );
};

interface StepProgressProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

export const StepProgress: React.FC<StepProgressProps> = ({
  currentStep,
  totalSteps,
  className,
}) => {
  return (
    <div className={`${styles.stepContainer} ${className || ''}`}>
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className={`${styles.step} ${
            index < currentStep ? styles.completed : ''
          } ${index === currentStep ? styles.current : ''}`}
        />
      ))}
    </div>
  );
};
