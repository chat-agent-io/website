import React from 'react';
import SvgGeneral1 from '@/app/assets/icons/faq/General1';
import SvgGeneral2 from '@/app/assets/icons/faq/General2';
import SvgGeneral3 from '@/app/assets/icons/faq/General3';
import SvgFeatures1 from '@/app/assets/icons/faq/Features1';
import SvgFeatures2 from '@/app/assets/icons/faq/Features2';
import SvgFeatures3 from '@/app/assets/icons/faq/Features3';
import SvgFeatures4 from '@/app/assets/icons/faq/Features4';
import SvgFeatures5 from '@/app/assets/icons/faq/Features5';
import SvgFeatures6 from '@/app/assets/icons/faq/Features6';
import SvgSetup1 from '@/app/assets/icons/faq/Setup1';
import SvgSetup2 from '@/app/assets/icons/faq/Setup2';
import SvgSetup3 from '@/app/assets/icons/faq/Setup3';
import SvgSetup4 from '@/app/assets/icons/faq/Setup4';
import SvgSetup5 from '@/app/assets/icons/faq/Setup5';
import SvgPricing1 from '@/app/assets/icons/faq/Pricing1';
import SvgPricing2 from '@/app/assets/icons/faq/Pricing2';
import SvgPricing3 from '@/app/assets/icons/faq/Pricing3';
import SvgPricing4 from '@/app/assets/icons/faq/Pricing4';
import SvgSupport1 from '@/app/assets/icons/faq/Support1';
import SvgSupport2 from '@/app/assets/icons/faq/Support2';
import SvgSupport3 from '@/app/assets/icons/faq/Support3';
import SvgSecurity1 from '@/app/assets/icons/faq/Security1';
import SvgSecurity2 from '@/app/assets/icons/faq/Security2';
import SvgSecurity3 from '@/app/assets/icons/faq/Security3';
import SvgLocation1 from '@/app/assets/icons/faq/Location1';
import SvgLocation2 from '@/app/assets/icons/faq/Location2';

export interface FAQQuestionData {
  question: string;
  answer: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface FAQCategoryData {
  name: string;
  questions: FAQQuestionData[];
}

export const FAQData: FAQCategoryData[] = [
  {
    name: 'General',
    questions: [
      {
        question: 'What is ChatAgent?',
        answer:
          'ChatAgent is an AI-powered assistant that handles your business’s Instagram, WhatsApp, and website chat conversations—trained specifically for hospitality. It instantly replies to customers, answers questions, manages bookings, and follows your brand’s tone of voice 24/7.',
        icon: SvgGeneral1,
      },
      {
        question: 'What types of businesses is ChatAgent for?',
        answer:
          'ChatAgent is built for restaurants, beach clubs, hotels, cafes, bars, spas, gyms, and other hospitality businesses that receive high volumes of customer messages.',
        icon: SvgGeneral2,
      },
      {
        question: 'Is this just a chatbot?',
        answer:
          'Not at all. ChatAgent is far more advanced than a traditional chatbot. It understands natural language, follows multi-step logic, and can handle complex guest requests in multiple languages—with zero scripting or templates needed.',
        icon: SvgGeneral3,
      },
    ],
  },
  {
    name: 'Features & Capabilities',
    questions: [
      {
        question: 'What platforms does ChatAgent work with?',
        answer:
          'Currently, ChatAgent supports Instagram DMs, WhatsApp Business, and website chat. Support for Messenger and Google Business chat is coming soon.',
        icon: SvgFeatures1,
      },
      {
        question: 'Can ChatAgent speak multiple languages?',
        answer:
          "Yes. The Growth and Pro plans include full multilingual support. ChatAgent detects the guest's language and replies accordingly.",
        icon: SvgFeatures2,
      },
      {
        question: 'Can it handle bookings or reservations?',
        answer:
          'Yes. ChatAgent can take bookings directly, link to your booking engine, or collect guest details and pass them to your staff in real-time.',
        icon: SvgFeatures3,
      },
      {
        question: "Does it match my brand's tone of voice?",
        answer:
          'Yes. During setup, we capture and apply your brand tone—whether formal, playful, elegant, or casual. Your agent replies like a real team member.',
        icon: SvgFeatures4,
      },
      {
        question: 'Can I adjust how ChatAgent replies to certain questions?',
        answer:
          "Yes. We can customize replies to fit your preferences. If you want specific answers, greetings, or booking flows, just let us know and we'll adjust the system.",
        icon: SvgFeatures5,
      },
      {
        question: 'What if a guest wants to speak to a real person?',
        answer:
          'ChatAgent can detect these requests and automatically hand over the conversation to your staff. You choose the conditions for human takeover.',
        icon: SvgFeatures6,
      },
    ],
  },
  {
    name: 'Setup & Onboarding',
    questions: [
      {
        question: 'How do you train the AI for my business?',
        answer:
          'During onboarding, we collect your menus, services, prices, hours, operating hours, tone of voice, Instagram tags, WhatsApp numbers, and more. You can also send voice notes to describe your business in your own words. Our team trains your ChatAgent and launches it—fully customized—within 7 days.',
        icon: SvgSetup1,
      },
      {
        question: 'What do I need to get started?',
        answer:
          'Just sign up, provide your basic business info, and upload your materials. We’ll handle everything else.',
        icon: SvgSetup2,
      },
      {
        question: 'Can I change my details or content later?',
        answer:
          'Yes. You can update your menus, services, hours, or promotions anytime. Our team can do it for you, or you’ll be able to update content through our dashboard (coming soon).',
        icon: SvgSetup3,
      },
      {
        question: 'Can ChatAgent handle promotions or seasonal menus?',
        answer:
          'Absolutely. You can send us your updated promotions, events, or seasonal menus and we’ll update the system accordingly—usually within 24 hours.',
        icon: SvgSetup4,
      },
      {
        question: 'Can I use voice notes instead of writing everything?',
        answer:
          'Yes. During onboarding, we encourage you to send voice notes to explain your business, tone of voice, and expectations. This helps us train the AI faster and more accurately.',
        icon: SvgSetup5,
      },
    ],
  },
  {
    name: 'Pricing & Plans',
    questions: [
      {
        question: 'How much does ChatAgent cost?',
        answer:
          'We offer three plans—Starter, Growth, and Pro—each with different conversation limits and feature sets. Pricing is monthly, per agent. Visit the [Pricing] page for full details.',
        icon: SvgPricing1,
      },
      {
        question: 'Is there a free trial?',
        answer:
          'Yes. We offer a 14-day free trial. No credit card required. It includes full setup, training, and usage.',
        icon: SvgPricing2,
      },
      {
        question: 'Are there any setup fees?',
        answer: 'No. Setup is included in your trial or first month.',
        icon: SvgPricing3,
      },
      {
        question: 'Do I have to sign a long-term contract?',
        answer:
          'No. You can cancel anytime. We offer both monthly and annual billing options.',
        icon: SvgPricing4,
      },
    ],
  },
  {
    name: 'Support & Troubleshooting',
    questions: [
      {
        question: 'What if something goes wrong?',
        answer:
          'Our team monitors your ChatAgent daily during the setup phase and beyond. You’ll have direct access to support via WhatsApp and email. We solve any issues quickly.',
        icon: SvgSupport1,
      },
      {
        question: 'Do I get reports or analytics?',
        answer:
          'Yes. You’ll receive regular reports showing guest conversations, top questions, reply speed, missed inquiries, and engagement stats.',
        icon: SvgSupport2,
      },
      {
        question: 'Is ChatAgent always online?',
        answer:
          'Yes. Your ChatAgent is active 24/7, 365 days a year—even on holidays, weekends, or staff shortages.',
        icon: SvgSupport3,
      },
    ],
  },
  {
    name: 'Security & Privacy',
    questions: [
      {
        question: 'Is my customer data safe?',
        answer:
          'Absolutely. ChatAgent uses secure encryption protocols, and all data is handled in compliance with international Security standards. You retain full ownership of your customer data.',
        icon: SvgSecurity1,
      },
      {
        question: 'Do you train your AI on our customer messages?',
        answer:
          'No. Your conversations are private and never used to train any third-party systems. Everything stays within your account only.',
        icon: SvgSecurity2,
      },
      {
        question: 'Is ChatAgent GDPR compliant?',
        answer:
          'Yes. We are fully GDPR compliant and follow global data protection regulations.',
        icon: SvgSecurity3,
      },
    ],
  },
  {
    name: 'Multi-Location & Partnerships',
    questions: [
      {
        question: 'Can I use ChatAgent across multiple locations or brands?',
        answer:
          'Yes. We support multi-location clients and hospitality groups. Each venue can have its own ChatAgent, fully trained on its unique menu, services, and tone of voice.',
        icon: SvgLocation1,
      },
      {
        question: 'Can I resell ChatAgent or offer it to my clients?',
        answer:
          'We do not offer a white-label option at this time. However, agencies or hospitality groups can contact us to explore Locationhip opportunities for managing multiple accounts.',
        icon: SvgLocation2,
      },
    ],
  },
];
