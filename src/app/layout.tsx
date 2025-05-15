import type { Metadata } from 'next';
import { GeistSans } from 'next/font/google';
import { GeistMono } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // For potential toast notifications

const geistSans = GeistSans({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = GeistMono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ECS Open Day - University of Kelaniya',
  description: 'Join the Electronics and Computer Science Open Day at the University of Kelaniya. Explore innovation, discover opportunities, and shape your future with us.',
  icons: {
    icon: '/favicon.ico', // Ensure favicon.ico is in /public folder
  },
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
