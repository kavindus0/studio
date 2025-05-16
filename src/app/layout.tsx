
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // For potential toast notifications
import CircuitBackground from '@/components/circuit-background'; // Import the new background

export const metadata: Metadata = {
  title: 'ECS Open Day - University of Kelaniya',
  description: 'Join the Electronics and Computer Science Open Day at the University of Kelaniya. Explore innovation, discover opportunities, and shape your future with us.',
  icons: {
    icon: 'https://res.cloudinary.com/du5tkpcut/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1747354628/ecsc_logo_header-b0c5d86f_qnybfn.png',
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
        <CircuitBackground />
        {/* Wrap children in a div that establishes a stacking context above the background */}
        <div className="relative z-0">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
