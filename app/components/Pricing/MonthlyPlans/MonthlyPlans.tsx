'use client';

import React, { useState } from 'react';
import { Button } from '../../UI/Button';
import { Card, CardContent } from '../../UI/Card';
import { Separator } from '../../UI/Separator/Separator';
import { CheckIcon } from '@/app/assets/icons/CheckIcon';
import { ChevronDown } from 'lucide-react';
import styles from './MonthlyPlans.module.scss';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';

interface MonthlyPlansProps {
  onSwitchToAnnual: () => void;
}

export const MonthlyPlans: React.FC<MonthlyPlansProps> = ({
  onSwitchToAnnual,
}) => {
  const isTablet = useMediaQuery('900');
  const isMobile = useMediaQuery('768');
  const [expandedPlans, setExpandedPlans] = useState<number[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  const plans = [
    {
      title: 'Starter',
      description: 'For small venues with\nmoderate traffic.',
      price: '$299',
      period: '/mo.',
      buttonText: 'Subscribe',
      annualBilling: 'Save with annual billing (1 month off) ↗',
      buttonVariant: 'ghost' as const,
      popular: false,
      features: [
        '14-Day Free Trial (live from day one)',
        'Up to 600 unique customer conversations/month',
        'Supports 1 user',
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
      buttonText: 'Subscribe',
      annualBilling: 'Save with annual billing (1 month off) ↗',
      buttonVariant: 'ghost' as const,
      popular: true,
      features: [
        '14-Day Free Trial (live from day one)',
        'Up to 1,500 unique customer conversations/month',
        'Supports up to 5 users',
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
      annualBilling: 'Save with annual billing (1 month off) ↗',
      buttonText: 'Subscribe',
      buttonVariant: 'ghost' as const,
      popular: false,
      features: [
        '14-Day Free Trial (live from day one)',
        'Up to 3,000 unique customer conversations/month',
        'Supports up to 10 users',
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
      price: '$1199',
      period: '/mo.',
      annualBilling: 'Tailored annual discounts available ↗',
      buttonText: "Let's Talk",
      buttonVariant: 'primary' as const,
      popular: false,
      features: [
        '14-Day Free Trial (live from day one)',
        'Up to 3,000 unique customer conversations/month',
        'Unlimited messaging platforms',
        'Supports custom user limits',
        'POS, PMS, CRM & booking integrations',
        'Custom SLAs & onboarding',
        'Dedicated technical support',
        'Tailored volume pricing',
      ],
    },
  ];

  const AnnualPlansToggle = () => (
    <div>
      <div className={styles.annualPlans} onClick={onSwitchToAnnual}>
        <span className={styles.annualText}>
          Save 1 Month with Annual Plans ↗
        </span>
      </div>
    </div>
  );

  const togglePlanExpansion = (planIndex: number) => {
    setExpandedPlans((prev) =>
      prev.includes(planIndex)
        ? prev.filter((index) => index !== planIndex)
        : [...prev, planIndex]
    );
  };

  const handlePlanSelection = (planIndex: number) => {
    setSelectedPlan(planIndex);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.titleSection}>
            <span className={styles.breadcrumb}>Pricing\</span>
            <h2 className={styles.title}>Monthly Plans</h2>
          </div>
          <div className={styles.subtitleContainer}>
            <span className={styles.subtitle}>
              Choose a plan to unlock your Free Trial
            </span>
            <AnnualPlansToggle />
          </div>
        </div>
        <div className={styles.headerSeparator}>
          <Separator />
        </div>
        <section className={styles.section}>
          <div
            className={`${styles.plansWrapper} ${
              expandedPlans.length > 0 ? styles.expanded : ''
            }`}
          >
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`${styles.planCard} ${
                  isMobile ? styles.mobileCard : ''
                } ${selectedPlan === index ? styles.selected : ''}`}
              >
                <CardContent className={styles.cardContent}>
                  {isMobile ? (
                    <>
                      <div className={styles.mobilePlanHeader}>
                        <div className={styles.mobilePlanInfo}>
                          <div className={styles.planTitle}>{plan.title}</div>
                          <div className={styles.description}>
                            {plan.description.split('\n').map((line, i) => (
                              <React.Fragment key={i}>
                                {line}
                                {i <
                                  plan.description.split('\n').length - 1 && (
                                  <br />
                                )}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                        <div className={styles.mobileRightSection}>
                          <div
                            className={styles.mobileCheckbox}
                            onClick={() => handlePlanSelection(index)}
                          >
                            {selectedPlan === index ? (
                              <div className={styles.selectedCheckbox}>
                                <CheckIcon className={styles.checkIcon} />
                              </div>
                            ) : (
                              <div className={styles.unselectedCheckbox}></div>
                            )}
                          </div>
                          <div className={styles.mobilePrice}>
                            <div className={styles.price}>{plan.price}</div>
                            <div className={styles.period}>{plan.period}</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.mobileFeaturesSection}>
                        {!expandedPlans.includes(index) && (
                          <div
                            className={styles.viewBenefitsText}
                            onClick={() => togglePlanExpansion(index)}
                          >
                            <span>View benefits ↓</span>
                          </div>
                        )}
                        {expandedPlans.includes(index) && (
                          <div className={styles.mobileFeaturesList}>
                            {plan.features.map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className={styles.feature}
                              >
                                <CheckIcon className={styles.checkIcon} />
                                <div className={styles.featureText}>
                                  {feature}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
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
                              {i < plan.description.split('\n').length - 1 && (
                                <br />
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                      <div className={styles.priceSection}>
                        {plan.pricePrefix && (
                          <div className={styles.pricePrefix}>
                            {plan.pricePrefix}
                          </div>
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
                    </>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className={styles.annualPlansBottom}>
            <AnnualPlansToggle />
            <Button variant="gradient" size="lg" full>
              Subscribe
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};
