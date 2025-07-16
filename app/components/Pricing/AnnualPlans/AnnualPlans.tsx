'use client';

import React from 'react';
import { Button } from '../../UI/Button';
import { Card, CardContent } from '../../UI/Card';
import { Separator } from '../../UI/Separator/Separator';
import { CheckIcon } from '@/app/assets/icons/CheckIcon';
import { ChevronIcon } from '@/app/assets/icons/ChevronIcon';
import styles from './AnnualPlans.module.scss';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';

interface AnnualPlansProps {
  onSwitchToMonthly: () => void;
}

export const AnnualPlans: React.FC<AnnualPlansProps> = ({
  onSwitchToMonthly,
}) => {
  const isTablet = useMediaQuery('900');

  const plans = [
    {
      title: 'Starter',
      savings: 'Save $598',
      description: 'For small venues with\nmoderate traffic.',
      price: '$249',
      period: '/mo.',
      annualBilling: '$2,990 Billed Annually',
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
      savings: 'Save $998',
      description: 'For busy venues like restaurants,\nbeach clubs, salons',
      price: '$416',
      period: '/mo.',
      annualBilling: '$4,990 Billed Annually',
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
      savings: 'Save $1,598',
      description: 'For large venues, hotels, or\nmulti-location businesses',
      price: '$666',
      period: '/mo.',
      annualBilling: '$7,990 Billed Annually',
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
      savings: '',
      description:
        'For hotel groups, chains, or high-volume businesses. Tailored pricing based on usage',
      pricePrefix: 'Starts at',
      price: '$999',
      period: '/mo.',
      annualBilling: '',
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

  const MonthlyPlansToggle = () => (
    <div className={styles.monthlyPlans} onClick={onSwitchToMonthly}>
      <span className={styles.monthlyText}>Monthly Plans</span>
      <ChevronIcon className={styles.chevronIcon} />
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.titleSection}>
            <span className={styles.breadcrumb}>Pricing\</span>
            <h2 className={styles.title}>Annual Plans</h2>
          </div>
          {!isTablet && <MonthlyPlansToggle />}
        </div>

        <section className={styles.section}>
          {plans.map((plan, index) => (
            <Card key={index} className={styles.planCard}>
              <CardContent className={styles.cardContent}>
                <div className={styles.planHeader}>
                  <div className={styles.titleContainer}>
                    <span className={styles.planTitle}>{plan.title}</span>
                    {plan.savings && (
                      <span className={styles.savings}>{plan.savings}</span>
                    )}
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
                    {plan.annualBilling && (
                      <div className={styles.annualBilling}>
                        {plan.annualBilling}
                      </div>
                    )}
                  </div>
                </div>
                <div className={styles.buttonSection}>
                  <Button full variant={plan.buttonVariant}>
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
            <div className={styles.monthlyPlansBottom}>
              <MonthlyPlansToggle />
            </div>
          )}
        </section>
      </div>
    </div>
  );
};
