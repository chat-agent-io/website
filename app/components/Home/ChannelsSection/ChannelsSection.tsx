'use client';

import {useState} from 'react';
import styles from './ChannelsSection.module.scss';
import Image from 'next/image';
import {useAutoSwipe} from '@/app/hooks/useAutoSwipe';

type Channel = 'whatsapp' | 'instagram' | 'website';

type MessageType = 'user' | 'agent' | 'handoff';

interface Message {
    type: MessageType;
    text: string;
    icon?: string;
}

interface ConversationCard {
    id: string;
    heading: string;
    messages: Message[];
    indicator: number;
}

interface ChannelContent {
    cards: ConversationCard[];
    phoneImage: string;
    phoneAlt: string;
}

export const ChannelsSection: React.FC = () => {
    const [activeChannel, setActiveChannel] = useState<Channel>('whatsapp');

    const {
        currentSlide,
        goToSlide,
        isDragging,
        dragOffset,
        containerRef,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        handleMouseLeave,
    } = useAutoSwipe({
        totalSlides: 2, // Two cards per channel
        autoSwipeInterval: 5000,
    });

    const channelData: Record<Channel, ChannelContent> = {
        whatsapp: {
            phoneImage: '/images/channels/phone-mockup.png',
            phoneAlt: 'WhatsApp conversation',
            cards: [
                {
                    id: 'whatsapp-card1',
                    heading: 'On-Brand Tone',
                    messages: [
                        {
                            type: 'user',
                            text: 'Dress code for dinner?',
                        },
                        {
                            type: 'agent',
                            text: 'Resort smart-casual works best — linen shirts and summer dresses. You\'ll fit right in.',
                            icon: '/images/channels/agent-icon.png',
                        },
                        {
                            type: 'user',
                            text: 'Best time to arrive for sunset views?',
                        },
                        {
                            type: 'agent',
                            text: '7:15–7:30 PM on the hotel terrace — I can hold a front-row table if you like.',
                            icon: '/images/channels/agent-icon.png',
                        },
                    ],
                    indicator: 1,
                },
                {
                    id: 'whatsapp-card2',
                    heading: 'Instant Human Handoff',
                    messages: [
                        {
                            type: 'user',
                            text: 'I think we lost a wallet by the pool.',
                        },
                        {
                            type: 'agent',
                            text: 'I\'m looping in our Duty Manager now - sharing your details and last location.',
                            icon: '/images/channels/agent-icon.png',
                        },
                        {
                            type: 'handoff',
                            text: 'Handed to Staff — Duty Manager • Pool deck, near cabana 4',
                        },
                        {
                            type: 'agent',
                            text: 'Hi, I\'m at the front desk. I\'ve alerted security. What color is the wallet, and whose name is on the ID?',
                            icon: '/images/channels/agent-icon.png',
                        },
                    ],
                    indicator: 2,
                },
            ],
        },
        instagram: {
            phoneImage: '/images/channels/instagram-mockup.png',
            phoneAlt: 'Instagram conversation',
            cards: [
                {
                    id: 'instagram-card1',
                    heading: 'On-Brand Tone',
                    messages: [
                        {
                            type: 'user',
                            text: 'Dress code for dinner?',
                        },
                        {
                            type: 'agent',
                            text: 'Resort smart-casual works best — linen shirts and summer dresses. You\'ll fit right in.',
                            icon: '/images/channels/agent-icon.png',
                        },
                        {
                            type: 'user',
                            text: 'Best time to arrive for sunset views?',
                        },
                        {
                            type: 'agent',
                            text: '7:15–7:30 PM on the hotel terrace — I can hold a front-row table if you like.',
                            icon: '/images/channels/agent-icon.png',
                        },
                    ],
                    indicator: 1,
                },
                {
                    id: 'instagram-card2',
                    heading: 'Instant Human Handoff',
                    messages: [
                        {
                            type: 'user',
                            text: 'I think we lost a wallet by the pool.',
                        },
                        {
                            type: 'agent',
                            text: 'I\'m looping in our Duty Manager now - sharing your details and last location.',
                            icon: '/images/channels/agent-icon.png',
                        },
                        {
                            type: 'handoff',
                            text: 'Handed to Staff — Duty Manager • Pool deck, near cabana 4',
                        },
                        {
                            type: 'agent',
                            text: 'Hi, I\'m at the front desk. I\'ve alerted security. What color is the wallet, and whose name is on the ID?',
                            icon: '/images/channels/agent-icon.png',
                        },
                    ],
                    indicator: 2,
                },
            ],
        },
        website: {
            phoneImage: '/images/channels/website-mockup.png',
            phoneAlt: 'Website chat conversation',
            cards: [
                {
                    id: 'website-card1',
                    heading: 'On-Brand Tone',
                    messages: [
                        {
                            type: 'user',
                            text: 'Dress code for dinner?',
                        },
                        {
                            type: 'agent',
                            text: 'Resort smart-casual works best — linen shirts and summer dresses. You\'ll fit right in.',
                            icon: '/images/channels/agent-icon.png',
                        },
                        {
                            type: 'user',
                            text: 'Best time to arrive for sunset views?',
                        },
                        {
                            type: 'agent',
                            text: '7:15–7:30 PM on the hotel terrace — I can hold a front-row table if you like.',
                            icon: '/images/channels/agent-icon.png',
                        },
                    ],
                    indicator: 1,
                },
                {
                    id: 'website-card2',
                    heading: 'Instant Human Handoff',
                    messages: [
                        {
                            type: 'user',
                            text: 'I think we lost a wallet by the pool.',
                        },
                        {
                            type: 'agent',
                            text: 'I\'m looping in our Duty Manager now - sharing your details and last location.',
                            icon: '/images/channels/agent-icon.png',
                        },
                        {
                            type: 'handoff',
                            text: 'Handed to Staff — Duty Manager • Pool deck, near cabana 4',
                        },
                        {
                            type: 'agent',
                            text: 'Hi, I\'m at the front desk. I\'ve alerted security. What color is the wallet, and whose name is on the ID?',
                            icon: '/images/channels/agent-icon.png',
                        },
                    ],
                    indicator: 2,
                },
            ],
        },
    };

    const currentChannelData = channelData[activeChannel];

    const renderCard = (card: ConversationCard) => (
        <div key={card.id} className={styles.miniChatCard}>
            <div className={styles.cardHeading}>
                <h3 className={styles.cardTitle}>{card.heading}</h3>
            </div>

            <div className={styles.conversationCard}>
                <div className={styles.messagesContainer}>
                    {card.messages.map((message, idx) => (
                        <div
                            key={idx}
                            className={`${styles.message} ${
                                message.type === 'user'
                                    ? styles.userMessage
                                    : styles.agentMessage
                            }`}
                        >
                            {message.type === 'agent' && message.icon && (
                                <div className={styles.agentIcon}>
                                    <Image
                                        src={message.icon}
                                        alt="Agent"
                                        width={40}
                                        height={40}
                                    />
                                </div>
                            )}
                            <div
                                className={`${styles.messagePill} ${
                                    message.type === 'user'
                                        ? styles.userPill
                                        : message.type === 'handoff'
                                            ? styles.handoffPill
                                            : styles.agentPill
                                }`}
                            >
                                <p
                                    className={
                                        message.type === 'handoff'
                                            ? styles.handoffText
                                            : ''
                                    }
                                >
                                    {message.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>One Voice - Your Brand Everywhere</h2>

                <div className={styles.channelSelector}>
                    <div className={styles.buttonsContainer}>
                        <button
                            className={`${styles.channelButton} ${
                                activeChannel === 'whatsapp' ? styles.active : ''
                            }`}
                            onClick={() => setActiveChannel('whatsapp')}
                        >
                            WhatsApp
                        </button>
                        <button
                            className={`${styles.channelButton} ${
                                activeChannel === 'instagram' ? styles.active : ''
                            }`}
                            onClick={() => setActiveChannel('instagram')}
                        >
                            Instagram
                        </button>
                        <button
                            className={`${styles.channelButton} ${
                                activeChannel === 'website' ? styles.active : ''
                            }`}
                            onClick={() => setActiveChannel('website')}
                        >
                            Website
                        </button>
                        <div className={styles.moreLabel}>& More</div>
                    </div>

                    {/* Desktop Layout */}
                    <div className={styles.channelContent}>
                        <div className={styles.conversationSamples}>
                            {currentChannelData.cards.map((card) => renderCard(card))}
                        </div>

                        <div className={styles.phoneContainer}>
                            <Image
                                src={currentChannelData.phoneImage}
                                alt={currentChannelData.phoneAlt}
                                width={302}
                                height={622}
                                className={styles.phoneImage}
                            />
                        </div>
                    </div>

                    {/* Mobile Carousel */}
                    <div className={styles.mobileCarousel}>
                        <div
                            className={styles.carouselContainer}
                            ref={containerRef}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                            style={{cursor: isDragging ? 'grabbing' : 'grab'}}
                        >
                            <div
                                className={styles.carouselTrack}
                                style={{
                                    transform: `translateX(calc(-${currentSlide * 100}% + ${dragOffset}px))`,
                                    transition: isDragging ? 'none' : 'transform 0.3s ease-out',
                                }}
                            >
                                {currentChannelData.cards.map((card) => (
                                    <div key={card.id} className={styles.carouselSlide}>
                                        {renderCard(card)}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Pagination Dots */}
                        <div className={styles.pagination}>
                            {currentChannelData.cards.map((_, index) => (
                                <button
                                    key={index}
                                    className={`${styles.paginationDot} ${
                                        index === currentSlide ? styles.paginationDotActive : ''
                                    }`}
                                    onClick={() => goToSlide(index)}
                                />
                            ))}
                        </div>

                        <div className={styles.phoneContainerMobile}>
                            <Image
                                src={currentChannelData.phoneImage}
                                alt={currentChannelData.phoneAlt}
                                width={302}
                                height={622}
                                className={styles.phoneImage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
