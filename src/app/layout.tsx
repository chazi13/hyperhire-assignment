import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import Requirements from '@/components/organisms/Requirements';
import Jobs from '@/components/organisms/Jobs';

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
  employeeCarousel,
}: Readonly<{
  children: React.ReactNode;
  employeeCarousel: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <main className="min-h-screen overflow-x-hidden bg-hero-mobile bg-cover bg-center pb-[60px] md:bg-hero-desktop xl:min-h-[844px]">
          <Header />
          <div className="mx-auto flex max-w-screen-xl flex-col xl:flex-row">
            {children}
            <div className="mt-6 flex-1 xl:mt-15 xl:px-4">{employeeCarousel}</div>
          </div>
          <Requirements />
          <Jobs />
        </main>
        <Footer />
      </body>
    </html>
  );
}
