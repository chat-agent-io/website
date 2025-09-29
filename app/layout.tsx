import type {ReactNode} from 'react'
import type {Metadata} from 'next';

import {FaviconSwitcher} from './utils/FaviconSwitcher';
import {QueryProvider} from './providers/QueryProvider';

//Styles
import './globals.css';

export const metadata: Metadata = {
    title: 'ChatAgent - Start replying smarter',
    description: "ChatAgent replies to every Instagram, WhatsApp, or website message — so you don't have to."
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
