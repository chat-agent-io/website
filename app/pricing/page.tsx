'use client';

import {useState} from 'react';
import {AnnualPlans} from '../components/Pricing/AnnualPlans/AnnualPlans';
import {MonthlyPlans} from '../components/Pricing/MonthlyPlans/MonthlyPlans';
import {PricingToggle} from '../components/Pricing/PricingToggle';
import Layout from '../components/UI/Layout/Layout';

export default function PricingPage() {
    const [isAnnual, setIsAnnual] = useState(true);

    const togglePlan = () => setIsAnnual(!isAnnual);

    return (
        <Layout>
            <div style={{background: 'var(--background-section, #f1f2f2)', minHeight: '90vh', padding: '40px 0'}}>
                <PricingToggle isAnnual={isAnnual} onToggle={togglePlan}/>
                {isAnnual ? <AnnualPlans/> : <MonthlyPlans/>}
            </div>
        </Layout>
    );
}
