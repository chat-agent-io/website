'use client';

import React from 'react';
import { AccordionSimple } from '../../components/UI/AccordionSimple';
import styles from './PrivacyPolicyContent.module.scss';

interface PolicySection {
  title: string;
  content: string;
}

const policySections: PolicySection[] = [
  {
    title: "Who we are and how to contact us",
    content: "Legal entity: InstaReply W.L.L.\nAddress: [Insert registered address, Amwaj Islands, Kingdom of Bahrain]\nEmail (privacy): privacy@instareply.io\nEmail (general): hello@instareply.io"
  },
  {
    title: "Scope and roles",
    content: "This Policy applies to:\n\nWeb properties we operate (marketing sites, dashboards, documentation).\nPlatform Services (Chat Agent interfaces, APIs, integrations, admin and analytics tools).\nSupport channels (email, chat, helpdesk).\n\nRole definitions:\n\nFor Customer Content (messages, media, attachments, and related metadata processed on behalf of your business through Chat Agent), you (the business customer) are the Controller and InstaReply is the Processor under GDPR / Data Manager under Bahrain PDPL. For Account Data (your admin user account, billing/contact details, Service configuration, security logs, platform analytics), InstaReply is the Controller. If there is any inconsistency between this Policy and a signed Data Processing Addendum (DPA) with you, the DPA governs our Processor obligations."
  },
  {
    title: "Definitions",
    content: "Customer Content: Any content, personal data, or media your organization submits to or through the Service for processing on your behalf.\n\nAccount Data: Registration, billing, payment, team member details, plan, usage metrics, and system configuration.\n\nTechnical Data: Device, browser, IP, timestamps, headers, event logs, diagnostic logs, and telemetry created by your use of the Service.\n\nIntegrations Data: Data exchanged via authorized connectors (e.g., Meta/WhatsApp, Instagram, Facebook Messenger, Google Business Messages, email providers, SMS gateways, CRM/POS/Helpdesk tools).\n\nSensitive Data: Data considered sensitive under applicable law (e.g., health data, government identifiers). You must not intentionally submit sensitive data unless our contract explicitly permits it and you implement appropriate controls."
  },
  {
    title: "Categories of information we collect",
    content: "A. Information you provide directly\nAccount & Profile: Name, email, phone, job title, company name, industry, plan selection, language preferences.\nBilling & Payments: Billing address, tax IDs, plan details, transaction records (processed by our payment processor; we do not store raw card numbers).\nSupport/Comms: Messages, attachments, satisfaction ratings, and related metadata.\n\nB. Customer Content (as your Processor)\nEnd‑user messages and attachments flowing through Chat Agent, message timestamps, channel identifiers, conversation routing details, and model output.\n\nC. Automatically collected\nTechnical/Device Data: IP address, user‑agent, OS/browser type and version, approximate location (derived from IP), time zone, system performance.\nUsage & Telemetry: Feature use, API calls, latency, error rates, admin actions (e.g., role changes), authentication events.\n\nD. From third parties (with your authorization or under contract)\nIntegrations: Account IDs, profiles, message content and metadata from connected channels (e.g., WhatsApp Business API, Instagram, Facebook Messenger, email/SMS gateways), CRM/Helpdesk records, and webhooks.\nVendors & Partners: Fraud prevention and payment processors (e.g., address verification results), analytics and security vendors.\n\nE. Cookies and similar technologies\nSee Section 15 (Cookies & Tracking) for details on session cookies, analytics, and consent choices."
  },
  {
    title: "Purposes and legal bases for processing (GDPR/UK GDPR)",
    content: "We use personal data for the following purposes and legal bases:\n\nPurpose\tExamples\tLegal Basis\n\nDeliver & operate the Service\tRouting messages, generating model outputs, authentication, authorization, uptime, scaling\tContract (Art. 6(1)(b))\n\nImprove & secure the Service\tError diagnostics, analytics, security monitoring, QA, model performance measurement\tLegitimate Interests (Art. 6(1)(f))\n\nSupport & communications\tResponding to tickets, incident notices, service announcements\tContract; Legitimate Interests\n\nBilling & fraud prevention\tPayments, invoicing, chargeback handling\tContract; Legal Obligation (tax/records)\nMarketing (optional)\tProduct updates, newsletters\tConsent (Art. 6(1)(a)) where required; otherwise Legitimate Interests\n\nCompliance & enforcement\tRecordkeeping, audits, enforcing terms, responding to lawful requests\tLegal \n\nObligation; Legitimate Interests\n\nAI training & model improvement:\nWe do not use Customer Content to train third‑party foundation models (e.g., model providers) unless you explicitly opt in via an admin control or written agreement.\n\nWe may use de‑identified, aggregated telemetry and synthetic test data to improve reliability and safety (Legitimate Interests).\nOptional opt‑in features that learn from your Customer Content (e.g., per‑tenant fine‑tuning, FAQs, canned responses) operate only within your tenant and are covered by Contract."
  },
  {
    title: "Data retention",
    content: "Customer Content: Retained for the duration of your subscription and per your retention settings (conversation history, log windows). You can delete content or close the account to trigger deletion.\n\nAccount/Contract Data: Retained as needed for ongoing Service, financial records, and legal obligations (typically 7 years for finance/tax in many jurisdictions, unless a longer statutory period applies).\n\nSecurity & Audit Logs: Typically 90–365 days depending on event type, unless needed for investigations or legal claims.\n\nBackups: Rolling backups are kept for disaster recovery and are deleted on a schedule; deleted records may persist in backups for a limited time before being overwritten."
  },
  {
    title: "How we share information",
    content: "We do not sell personal information. We share information only as described below:\n\n1. Service Providers / Sub‑processors\nCloud hosting, managed databases, queueing, content delivery networks, error monitoring, logging, analytics, communications, identity, and payments.\n\nExamples (subject to change): cloud infrastructure providers, managed databases, email/SMS delivery, payment processors, identity/auth providers, analytics/security tools, and model providers for AI inference strictly under Processor terms.\n\nWe maintain a current Sub‑processor List available at: [Insert URL to Sub‑processors] and require appropriate data protection terms, including confidentiality and security commitments.\n\n1. Integrations (at your direction)\nIf you connect third‑party channels or systems, we share and receive data as needed to operate those integrations (e.g., WhatsApp Business API provider, Instagram/Facebook Messenger, CRM/helpdesk). Their use of your data is governed by their own policies and contracts.\n\n2. Corporate transactions\nIn connection with a merger, acquisition, financing, or sale of assets, personal data may be transferred subject to confidentiality and appropriate safeguards.\n\n3. Legal disclosures\nWe may disclose information to comply with laws, lawful requests, or legal process; to protect our rights, users, or the public; to enforce agreements; or to detect/prevent fraud, abuse, or security incidents."
  },
  {
    title: "International data transfers",
    content: "We operate internationally. Where personal data is transferred outside its origin jurisdiction:\n\nEEA/UK: We rely on Standard Contractual Clauses (SCCs) and, where applicable, the UK Addendum/IDTA, plus supplementary measures.\n\nBahrain PDPL: Cross‑border transfers occur under permitted grounds (e.g., adequate protection, consent where required, or other PDPL transfer conditions).\n\nOther regions: We use contractual and technical safeguards appropriate to the destination and the nature of the data."
  },
  {
    title: "Security",
    content: "We implement administrative, technical, and physical safeguards designed to protect personal data, including:\n\nEncryption in transit (TLS) and at rest for primary data stores where feasible.\nAccess controls and least‑privilege role assignments; SSO/MFA for internal admin systems.\nNetwork segmentation, firewalling, and endpoint protection.\nSecure software development lifecycle (code review, dependency scanning, secrets management).\nLogging, monitoring, and anomaly detection.\nVendor due diligence and sub‑processor data protection terms.\nBusiness continuity and disaster recovery plans with periodic testing.\n\nIncident response: If we learn of a breach affecting personal data, we will investigate promptly and notify you and/or authorities as required by law and our DPA/contract commitments (e.g., GDPR Arts. 33/34 timelines)."
  },
  {
    title: "Your responsibilities (Customer as Controller)",
    content: "You are responsible for:\n\nProviding legally adequate privacy notices to your end users.\nChoosing lawful bases for processing Customer Content and honoring data subject rights.\nConfiguring retention, access, permissions, and integrations appropriately.\nAvoiding the submission of Sensitive Data unless permitted by our agreement and protected by appropriate technical and organizational measures."
  },
  {
    title: "Your privacy rights",
    content: "Your rights depend on your location and applicable law. Subject to exceptions, you may have rights to:\n\nAccess your personal data.\nRectify inaccurate or incomplete data.\nErase data (\"right to be forgotten\").\nRestrict or object to processing (including objection to direct marketing).\nPortability (obtain a copy in a structured, commonly used, machine‑readable format).\nWithdraw consent where processing is based on consent (without affecting prior processing).\nAppeal a decision on your request where required by law.\n\nHow to exercise:\n\nFor Account Data we control: email privacy@instareply.io.\nFor Customer Content we process on your organization's behalf: contact your organization (the Controller). We will assist the Controller upon request, consistent with our DPA.\nWe may ask for verification of identity and scope. We will not discriminate against you for exercising your rights."
  },
  {
    title: "Regional disclosures",
    content: "A) European Economic Area (EEA) & United Kingdom\n\nController/Processor roles: As stated in Section 2.\nLegal bases: See Section 5.\nAutomated decision‑making: Chat Agent may use AI models to assist with responses. Fully automated decisions producing legal or similarly significant effects are not made by us without human oversight by your organization. You can configure automation levels and escalation rules.\nComplaints: You may lodge a complaint with your local supervisory authority. We welcome you to contact us first at privacy@instareply.io.\n\nB) California (CCPA/CPRA) and certain U.S. States\n\nCategories collected (in the last 12 months): identifiers; commercial information (subscription details); internet/network activity; geolocation (coarse, from IP); professional information; inferences (limited, e.g., segmenting for product adoption); audio/visual only if you submit it in support or Customer Content.\nSources: You, your organization, your end users, devices, cookies, integrated platforms, and service providers.\nPurposes & disclosures: As described in Sections 5 and 7.\n\"Sale\" or \"Sharing\" of personal information: We do not sell personal information. We do not \"share\" personal information for cross‑context behavioral advertising except via optional marketing cookies on our websites. You can opt out via our cookie banner or by enabling Global Privacy Control (GPC), which we honor for our web properties where technically feasible.\nSensitive personal information: We do not use or disclose SPI for inferring characteristics. Any credentials/API keys you store are used solely to provide the Service.\nYour rights: Right to know/access, deletion, correction, portability, opt‑out of sale/sharing, limit use of SPI (where applicable), and non‑discrimination. Submit requests to privacy@instareply.io. You may appoint an authorized agent per CCPA rules.\n\nC) Bahrain PDPL\n\nLegal grounds: Consent (where required), contract necessity, legal obligation, or other PDPL‑recognized bases.\nRights: Access, rectification, erasure, objection, and complaint to the competent authority.\nDirect marketing: We will obtain consents required by Bahrain law and honor opt‑outs.\nCross‑border transfer: Per Section 8 and PDPL transfer conditions."
  },
  {
    title: "Children's privacy",
    content: "The Service is not directed to children under 16 (or the age defined by local law, if higher). We do not knowingly collect personal data from children. If you believe a child has provided data, contact privacy@instareply.io and we will take appropriate steps."
  },
  {
    title: "Automated processing and profiling",
    content: "We use AI to assist with message handling and content generation. You can configure confidence thresholds, human‑in‑the‑loop review, escalation workflows, blocklists/allowlists, and channel‑specific behaviors. We do not engage in solely automated processing that produces legal or similarly significant effects on individuals without human oversight by your organization."
  },
  {
    title: "Cookies & tracking technologies",
    content: "We use:\n\nStrictly necessary cookies for login sessions, security, and load balancing.\nFunctional cookies to remember preferences (e.g., language).\nAnalytics cookies to understand usage and improve performance.\nOptional marketing cookies on our marketing sites (never in the logged‑in product) with your consent where required.\n\nConsent management: Our web properties display a cookie banner where required, allowing you to accept, reject, or granularly manage categories. You can withdraw consent at any time via the banner link or browser settings. We honor GPC signals on supported properties."
  },
  {
    title: "Third‑party links and services",
    content: "The Service may link to or interoperate with third‑party services. Their privacy practices are governed by their own policies. Please review those policies before enabling integrations."
  },
  {
    title: "Data processing addendum (DPA)",
    content: "When we process Customer Content on your behalf, our DPA applies and is incorporated by reference into our Terms. The DPA includes: subject matter and duration, nature and purpose of processing, types of personal data, categories of data subjects, Controller instructions, confidentiality, security measures, sub‑processor obligations, assistance with data subject rights, international transfers, and audit terms.\n\nDPA URL: [Insert link to downloadable DPA]\nSub‑processors: [Insert link to current list]"
  },
  {
    title: "Data accuracy and minimization",
    content: "You are responsible for the accuracy of information you provide. We apply data minimization principles and limit collection to what is necessary for the stated purposes."
  },
  {
    title: "Retention, deletion, and export controls",
    content: "Admins can configure retention for conversations and logs where available, and may export or delete data via dashboard or API. Upon account closure, we will delete or anonymize Customer Content within a commercially reasonable period, subject to backup cycles and legal holds."
  },
  {
    title: "Changes to this Policy",
    content: "We may update this Policy to reflect operational, legal, or regulatory changes. We will post the updated Policy with a new \"Last Updated\" date and, where required, provide notice (e.g., email or in‑product message). Material changes will take effect no sooner than the notice period required by law or our contract."
  },
  {
    title: "Contact us",
    content: "Questions, requests, or complaints: privacy@instareply.io\nWe will respond within the timeframes required by applicable law."
  },
  {
    title: "Jurisdiction‑specific terms prevail",
    content: "If any provision of this Policy conflicts with local law in your jurisdiction, the stricter requirement prevails for data subject rights and protections."
  },
  {
    title: "Non‑contractual notice",
    content: "This Policy describes our practices and does not create legal rights or obligations beyond those required by law or set out in our Terms or DPA."
  }
];

export const PrivacyPolicyContent: React.FC = () => {
  return (
    <div className={styles.privacyPolicyContainer}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>ChatAgent Privacy Policy</h1>
          <p className={styles.heroSubtitle}>Updated September 14, 2025</p>
          
          <div className={styles.heroDescription}>
            <p>
              This Privacy Policy explains how InstaReply W.L.L. (&quot;InstaReply,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, discloses, and protects personal information in connection with the Chat Agent service and related websites, dashboards, APIs, plugins, and support channels (collectively, the &quot;Service&quot;).
            </p>
          </div>

          {/* Privacy Icon */}
          <div className={styles.privacyIcon}>
            <svg width="76" height="75" viewBox="0 0 76 75" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.5 -0.00146484C15.1594 -0.00146484 6.75 8.40791 6.75 18.7485C6.75 29.0892 15.1594 37.4985 25.5 37.4985C35.8406 37.4985 44.25 29.0892 44.25 18.7485C44.25 8.40791 35.8406 -0.00146484 25.5 -0.00146484ZM25.5 34.3735C16.8844 34.3735 9.875 27.3642 9.875 18.7485C9.875 10.1329 16.8844 3.12354 25.5 3.12354C34.1156 3.12354 41.125 10.1329 41.125 18.7485C41.125 27.3642 34.1156 34.3735 25.5 34.3735ZM37.8188 48.7454C37.4188 49.511 36.4719 49.8017 35.7094 49.3954C32.5844 47.7454 29.0562 46.8735 25.5 46.8735C13.4375 46.8735 3.625 56.686 3.625 68.7485V73.436C3.625 74.2985 2.925 74.9985 2.0625 74.9985C1.2 74.9985 0.5 74.2985 0.5 73.436V68.7485C0.5 54.9642 11.7156 43.7485 25.5 43.7485C29.5625 43.7485 33.5969 44.7454 37.1688 46.6329C37.9313 47.036 38.225 47.9798 37.8188 48.7423V48.7454ZM69.25 47.9329V42.1892C69.25 36.1579 64.3438 31.2517 58.3125 31.2517C52.2812 31.2517 47.375 36.1579 47.375 42.1892V47.9329C43.6844 49.6923 41.125 53.461 41.125 57.8142V64.0642C41.125 70.0954 46.0312 75.0017 52.0625 75.0017H64.5625C70.5938 75.0017 75.5 70.0954 75.5 64.0642V57.8142C75.5 53.461 72.9406 49.6923 69.25 47.9329ZM50.5 42.1892C50.5 37.8829 54.0062 34.3767 58.3125 34.3767C62.6188 34.3767 66.125 37.8829 66.125 42.1892V46.9892C65.6156 46.9173 65.0938 46.8767 64.5625 46.8767H52.0625C51.5312 46.8767 51.0094 46.9142 50.5 46.9892V42.1892ZM72.375 64.0642C72.375 68.3704 68.8688 71.8767 64.5625 71.8767H52.0625C47.7562 71.8767 44.25 68.3704 44.25 64.0642V57.8142C44.25 53.5079 47.7562 50.0017 52.0625 50.0017H64.5625C68.8688 50.0017 72.375 53.5079 72.375 57.8142V64.0642ZM61.4375 60.9392C61.4375 62.6642 60.0375 64.0642 58.3125 64.0642C56.5875 64.0642 55.1875 62.6642 55.1875 60.9392C55.1875 59.2142 56.5875 57.8142 58.3125 57.8142C60.0375 57.8142 61.4375 59.2142 61.4375 60.9392Z" fill="url(#paint0_linear_3264_17288)"/>
              <defs>
                <linearGradient id="paint0_linear_3264_17288" x1="-20.2897" y1="-44.4112" x2="93.7182" y2="-31.3409" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#07A5EB"/>
                  <stop offset="1" stopColor="#3214F0"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className={styles.heroSubDescription}>
            <p>
              This document is intended to be globally compliant, including with the EU/UK GDPR, the California Consumer Privacy Act as amended by the CPRA (CCPA), and the Bahrain Personal Data Protection Law (Law No. 30 of 2018) (Bahrain PDPL). Where local law imposes stricter requirements, we will comply with those requirements.
            </p>
          </div>
        </div>
      </div>

      {/* Privacy Policy Accordion */}
      <div className={styles.accordionContainer}>
        <AccordionSimple items={policySections} />
      </div>
    </div>
  );
};
