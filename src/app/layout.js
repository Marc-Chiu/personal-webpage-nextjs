import {
  Geist,
  Geist_Mono,
  Montserrat,
  Playfair_Display,
} from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  weight: '400',
  subsets: ['latin'],
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Personal Webpage',
  description: 'My personal webpage',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${playfair.variable}} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
