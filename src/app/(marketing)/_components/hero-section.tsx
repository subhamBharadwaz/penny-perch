'use client';

import { AnimatedHoverButton } from '@/components/animated-hover-button';
import { ArrowRight, TrendingUp } from 'lucide-react';

import Image from 'next/image';

export function HeroSection() {
  return (
    <>
      <section className="pt-24  bg-dot-black/[0.2] relative 3xl:pt-44">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex justify-between items-start">
          <div className="space-y-10 z-10">
            <h1 className="text-7xl 3xl:text-8xl font-normal leading-[1.1]">
              <span className="inline-block">
                Empower{' '}
                <span className="inline-flex items-center">
                  <span className="h-14 w-14 rounded-full bg-black" />
                  <span className="h-14 w-14 rounded-full bg-primary inline-flex justify-center items-center -ml-6">
                    <TrendingUp className="text-white" />
                  </span>
                </span>
              </span>
              <br />
              Your{' '}
              <span className="font-heading italic text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-fuchsia-600">
                Finances
              </span>{' '}
              to
              <br />
              Achieve your <br />
              Financial{' '}
              <span className="font-heading italic text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-fuchsia-600">
                goals
              </span>
            </h1>
            <p className="max-w-xl text-xl text-secondary-foreground/90">
              The Intelligent Expense Tracker That Helps You Make Informed
              Decisions About Your Money
            </p>

            <AnimatedHoverButton
              containerClassName="rounded-full"
              as="button"
              className="bg-primary text-white  flex items-center space-x-2 py-4"
            >
              <span>Get Started Now</span>
              <ArrowRight />
            </AnimatedHoverButton>
          </div>
          <div className="z-10 relative">
            <div className="bg-purple-600 absolute inset-0 -z-10 rounded-lg top-12" />
            <Image
              src="/images/finance-image.png"
              height={500}
              width={700}
              className="-mt-16 3xl:h-[650px] 3xl:w-[800px]"
              alt="Finance image"
            />
          </div>
        </div>
      </section>
    </>
  );
}
