'use client';

import { useState } from 'react';
import { AnnualPlans } from '../components/Pricing/AnnualPlans/AnnualPlans';
import { MonthlyPlans } from '../components/Pricing/MonthlyPlans/MonthlyPlans';
import Layout from '../components/UI/Layout/Layout';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  const switchToMonthly = () => setIsAnnual(false);
  const switchToAnnual = () => setIsAnnual(true);

  return (
    <Layout>
      {isAnnual ? (
        <AnnualPlans onSwitchToMonthly={switchToMonthly} />
      ) : (
        <MonthlyPlans onSwitchToAnnual={switchToAnnual} />
      )}
    </Layout>
  );
}
