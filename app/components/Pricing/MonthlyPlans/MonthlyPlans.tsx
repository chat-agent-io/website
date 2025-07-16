'use client';

import React from 'react';
import { Button } from '../../UI/Button';
import { Card, CardContent } from '../../UI/Card';
import { Separator } from '../../UI/Separator/Separator';
import { CheckIcon } from '@/app/assets/icons/CheckIcon';
import { ChevronIcon } from '@/app/assets/icons/ChevronIcon';
import styles from './MonthlyPlans.module.scss';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';

interface MonthlyPlansProps {
  onSwitchToAnnual: () => void;
}

export const MonthlyPlans: React.FC<MonthlyPlansProps> = ({
  onSwitchToAnnual,
}) => {
  const isTablet = useMediaQuery('900');

  const plans = [
    {
      title: 'Starter',
      description: 'For small venues with\nmoderate traffic.',
      price: '$299',
      period: '/mo.',
      buttonText: 'Select',
      buttonVariant: 'secondary' as const,
      popular: false,
      features: [
        '30-Day Free Trial (live from day one)',
        'Up to 600 unique customer conversations/month',
        'Supports 2 languages',
        'Instagram & WhatsApp auto-reply',
        'Unlimited messages per conversation',
        'Basic analytics dashboard',
      ],
    },
    {
      title: 'Growth',
      description: 'For busy venues like restaurants,\nbeach clubs, salons',
      price: '$499',
      period: '/mo.',
      buttonText: 'Select',
      buttonVariant: 'secondary' as const,
      popular: true,
      features: [
        '30-Day Free Trial (live from day one)',
        'Up to 1,500 unique customer conversations/month',
        'Full multilingual support',
        'Instagram, WhatsApp & Facebook Messenger',
        'Priority onboarding',
        'Advanced analytics',
        'CRM/API integrations',
      ],
    },
    {
      title: 'Pro',
      description: 'For large venues, hotels, or\nmulti-location businesses',
      price: '$799',
      period: '/mo.',
      buttonText: 'Select',
      buttonVariant: 'secondary' as const,
      popular: false,
      features: [
        '30-Day Free Trial (live from day one)',
        'Up to 3,000 unique customer conversations/month',
        'Full multilingual & dialect support',
        'All major messaging platforms',
        'Dedicated success manager',
        'Custom FAQ training',
        'CRM/PMS integrations',
      ],
    },
    {
      title: 'Enterprise',
      description:
        'For hotel groups, chains, or high-volume businesses. Tailored pricing based on usage',
      pricePrefix: 'Starts at',
      price: '$999',
      period: '/mo.',
      buttonText: "Let's Talk",
      buttonVariant: 'primary' as const,
      popular: false,
      features: [
        '30-Day Free Trial (live from day one)',
        'Up to 3,000 unique customer conversations/month',
        'Unlimited messaging platforms',
        'POS, PMS, CRM & booking integrations',
        'Custom SLAs & onboarding',
        'Dedicated technical support',
        'Tailored volume pricing',
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.titleSection}>
            <span className={styles.breadcrumb}>Pricing\</span>
            <h2 className={styles.title}>Monthly Plans</h2>
          </div>
          <div className={styles.annualPlans} onClick={onSwitchToAnnual}>
            <span className={styles.annualText}>
              Save 2 Months with Annual Plans
            </span>
            <ChevronIcon color="#2d11df" className={styles.chevronIcon} />
          </div>
        </div>

        <section className={styles.section}>
          {plans.map((plan, index) => (
            <Card key={index} className={styles.planCard}>
              <CardContent className={styles.cardContent}>
                <div className={styles.planHeader}>
                  <div className={styles.titleContainer}>
                    <span className={styles.planTitle}>{plan.title}</span>
                  </div>
                  {plan.popular && (
                    <div className={styles.popularBadge}>Popular</div>
                  )}
                </div>
                <div className={styles.descriptionContainer}>
                  <div className={styles.description}>
                    {plan.description.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < plan.description.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div className={styles.priceSection}>
                  {plan.pricePrefix && (
                    <div className={styles.pricePrefix}>{plan.pricePrefix}</div>
                  )}
                  <div className={styles.priceContainer}>
                    <div className={styles.price}>{plan.price}</div>
                  </div>
                  <div className={styles.priceDetails}>
                    <div className={styles.period}>{plan.period}</div>
                  </div>
                </div>
                <div className={styles.buttonSection}>
                  <Button full variant={plan.buttonVariant} size="md">
                    {plan.buttonText}
                  </Button>
                  <div className={styles.separatorContainer}>
                    <Separator />
                  </div>
                </div>
                <div className={styles.featuresSection}>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className={styles.feature}>
                      <CheckIcon className={styles.checkIcon} />
                      <div className={styles.featureText}>{feature}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
          {isTablet && (
            <div
              className={styles.annualPlans}
              onClick={onSwitchToAnnual}
              style={{ marginTop: '10px' }}
            >
              <span className={styles.annualText}>
                Save 2 Months with Annual Plans
              </span>
              <ChevronIcon color="#2d11df" className={styles.chevronIcon} />
            </div>
          )}
        </section>
      </div>
    </div>
  );
};
