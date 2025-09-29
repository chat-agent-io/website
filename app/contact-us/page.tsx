'use client';

import React, { useState } from 'react';
import Layout from '../components/UI/Layout/Layout';
import { Button } from '../components/UI/Button/Button';
import styles from './contact-us.module.scss';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    topic: '',
    firstName: '',
    lastName: '',
    workEmail: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <Layout>
      <div className={styles.contactPage}>
        <div className={styles.container}>
          <div className={styles.formCard}>
            <div className={styles.header}>
              <h1 className={styles.title}>Contact ChatAgent</h1>
              <div className={styles.subtitleContainer}>
                <p className={styles.subtitle}>
                  Tell us what you need and we&apos;ll get back within one business day.
                </p>
                <p className={styles.emailLine}>
                  Prefer email? <a href="mailto:hello@chatagent.io" className={styles.emailLink}>hello@chatagent.io</a>
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.field}>
                <label htmlFor="topic" className={styles.label}>
                  Topic *
                </label>
                <div className={styles.selectContainer}>
                  <select
                    id="topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleInputChange}
                    className={styles.select}
                    required
                  >
                    <option value="" disabled>Select one...</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="sales">Sales</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                  <svg className={styles.selectIcon} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.58691 9.02344C7.68774 9.02344 7.76471 9.05385 7.84277 9.13184L12.1455 13.459L12.499 13.8145L17.1816 9.13184C17.2593 9.05424 17.3257 9.03227 17.4062 9.03516C17.5005 9.0386 17.5819 9.07117 17.668 9.15723C17.746 9.23531 17.7764 9.31223 17.7764 9.41309C17.7763 9.51371 17.7458 9.59001 17.668 9.66797L12.749 14.5869C12.6949 14.6411 12.6522 14.667 12.624 14.6787C12.5885 14.6935 12.5486 14.7021 12.5 14.7021C12.4755 14.7021 12.4532 14.6993 12.4326 14.6953L12.375 14.6787L12.3223 14.6484C12.3015 14.634 12.2779 14.6138 12.251 14.5869L7.30664 9.64355C7.2328 9.56972 7.20662 9.50009 7.20996 9.40527C7.21375 9.29797 7.24977 9.2141 7.33203 9.13184C7.40996 9.05403 7.48632 9.02351 7.58691 9.02344Z" fill="#1C1A24" stroke="#1C1A24"/>
                  </svg>
                </div>
              </div>

              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label htmlFor="firstName" className={styles.label}>
                    First name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="Jane"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="lastName" className={styles.label}>
                    Last name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="workEmail" className={styles.label}>
                  Work email *
                </label>
                <input
                  type="email"
                  id="workEmail"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="jane@company.com"
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="phone" className={styles.label}>
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="+1 415 555 0132"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={styles.textarea}
                  placeholder="How can we help?"
                  rows={8}
                  required
                />
              </div>

              <p className={styles.privacyText}>
                By submitting, you agree to our{' '}
                <a href="/legal/privacy-policy" className={styles.privacyLink}>
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="/legal/terms-conditions" className={styles.privacyLink}>
                  Terms
                </a>.
              </p>

              <Button
                type="submit"
                variant="gradient"
                size="lg"
                full
                className={styles.submitButton}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
