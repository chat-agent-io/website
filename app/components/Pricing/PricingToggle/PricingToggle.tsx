'use client';

import React from 'react';
import styles from './PricingToggle.module.scss';

interface PricingToggleProps {
    isAnnual: boolean;
    onToggle: () => void;
}

export const PricingToggle: React.FC<PricingToggleProps> = ({
                                                                isAnnual,
                                                                onToggle,
                                                            }) => {
    return (
        <div className={styles.container}>
            <div className={styles.toggleWrapper}>
                <button
                    className={`${styles.toggleOption} ${
                        !isAnnual ? styles.active : ''
                    }`}
                    onClick={onToggle}
                    disabled={!isAnnual}
                >
                    Monthly Plans
                </button>
                <button
                    className={`${styles.toggleOption} ${isAnnual ? styles.active : ''}`}
                    onClick={onToggle}
                    disabled={isAnnual}
                >
                    Annual Plans
                </button>
            </div>
        </div>
    );
};
