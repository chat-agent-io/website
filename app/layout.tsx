import type {ReactNode} from 'react'
import type {Metadata} from 'next';

import {FaviconSwitcher} from './utils/FaviconSwitcher';
import {QueryProvider} from './providers/QueryProvider';

//Styles
import './globals.css';

export const metadata: Metadata = {
    title: 'ChatAgent - AI Customer Service Automation | Instant Replies 24/7',
    description: 'Automate customer service on Instagram, WhatsApp & website chat with ChatAgent\'s AI assistant. Instant replies, smart conversations, 14-day free trial. No credit card needed.',
    keywords: 'AI customer service, chatbot, Instagram automation, WhatsApp business, customer support automation, AI messaging',
    openGraph: {
        title: 'ChatAgent - AI Customer Service Automation',
        description: 'Automate customer service across all channels. Instant replies, smarter conversations. Try free for 14 days.',
        url: 'https://chatagent.io',
        siteName: 'ChatAgent',
        locale: 'en_US',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'ChatAgent - AI Customer Service Automation',
        description: 'Automate customer service on Instagram, WhatsApp & website with AI-powered replies. 14-day free trial.',
        creator: '@ChatAgent'
    }
};

export default function RootLayout({children}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            <link href="https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap" rel="stylesheet"/>
        </head>
        <body>
        <FaviconSwitcher/>
        <QueryProvider>
            {children}
        </QueryProvider>
        </body>
        </html>
    );
}
