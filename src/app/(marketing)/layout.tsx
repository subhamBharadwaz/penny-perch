import { AnimatedHoverButton } from '@/components/animated-hover-button';
import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default async function MarketingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 py-5 bg-background/10 backdrop-blur-lg border-b border-b-slate-200/70">
        <nav className="container flex justify-between items-center">
          <Image
            src="/images/logo.svg"
            alt="Penny Perch"
            height={60}
            width={200}
          />
          <ul className="flex items-center gap-x-10 font-medium">
            <li>Features</li>
            <li>How It Works</li>
            <li>Pricing</li>
          </ul>
          <div className="flex justify-center text-center">
            <AnimatedHoverButton
              containerClassName="rounded-full"
              as="button"
              className="bg-primary text-white  flex items-center space-x-2 py-2.5"
            >
              <span>Get Started</span>
              <ArrowRight />
            </AnimatedHoverButton>
          </div>
        </nav>
      </header>
      <main className="container min-h-screen">{children}</main>
    </div>
  );
}
