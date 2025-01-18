import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const poppins = localFont({
  src: [
    {
      path: './fonts/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hyperhire - Your trusted staffing &amp; development partner',
  description: 'Best IT recruitment &amp; software development firm in South Korea and India.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <main className="min-h-screen bg-hero-mobile xl:bg-hero-desktop bg-cover bg-center pb-[60px] xl:min-h-0 overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
