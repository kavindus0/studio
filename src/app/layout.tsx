
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // For potential toast notifications

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
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
