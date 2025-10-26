'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Shield, Clock, Users, Award, Headphones } from 'lucide-react';
import Header from '@/components/ui/header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const features = [
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Bank-grade security with 256-bit encryption to protect your financial data and transactions.'
  },
  {
    icon: Clock,
    title: 'Quick Approval',
    description: 'Get loan approval in as little as 24 hours with our streamlined digital application process.'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Dedicated loan specialists available to guide you through every step of the process.'
  },
  {
    icon: Award,
    title: 'Competitive Rates',
    description: 'Industry-leading interest rates with flexible repayment options to suit your needs.'
  },
  {
    icon: Headphones,
    title: '24/7 Customer Service',
    description: 'Round-the-clock customer support via phone, email, and live chat for all your queries.'
  },
  {
    icon: CheckCircle,
    title: 'Hassle-Free Process',
    description: 'Simple online application with minimal documentation and fast disbursal.'
  }
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-6"
          >
            Powerful Features for
            <span className="text-green-600"> Smart Lending</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-600 dark:text-neutral-300 mb-8 max-w-3xl mx-auto"
          >
            Discover why thousands of customers choose AGS for their financial needs.
            Our innovative platform combines cutting-edge technology with personalized service.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
              <Link href="/apply-now">
                Apply Now
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Why Choose AGS?
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              We combine technology, expertise, and exceptional service to deliver the best loan experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
                    <feature.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-neutral-600 dark:text-neutral-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Get Started?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-green-100 mb-8"
          >
            Join thousands of satisfied customers who trust AGS for their financial needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg">
              <Link href="/apply-now">
                Apply for Loan
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg">
              <Link href="tel:+91801234567">
                Call Now
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
