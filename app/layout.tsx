import type { Metadata } from 'next';
import { Onest } from 'next/font/google';
import './globals.css';
import { FaviconSwitcher } from './utils/FaviconSwitcher';

const onest = Onest({
  subsets: ['latin'],
});

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
      <body className={onest.className}>
        <FaviconSwitcher />
        {children}
      </body>
    </html>
  );
}
