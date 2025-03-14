import { Geist, Geist_Mono, Lato } from "next/font/google";
import type { Metadata } from "next";
import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { StoreProvider } from './StoreProvider';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {config} from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });
  
  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });
  
  export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
  };

  const lato = Lato({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    display: 'swap'
  })
  
 
export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
    const awaitParams = await params
    const locale = awaitParams?.locale; 
    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }
    
    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();
    
    return (
        <html lang={locale}>
            <body className={` ${lato.className} `} >
                <NextIntlClientProvider messages={messages}>
                    <StoreProvider>
                        {children}
                    </StoreProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}