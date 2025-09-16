import type {Metadata} from 'next';
import './globals.css';
import {FaviconSwitcher} from './utils/FaviconSwitcher';

export const metadata: Metadata = {
    title: 'ChatAgent - Start replying smarter',
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <FaviconSwitcher/>
        {children}
        </body>
        </html>
    );
}
