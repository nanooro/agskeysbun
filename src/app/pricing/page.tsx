"use client";

export const dynamic = "force-dynamic";

import { motion } from "framer-motion";
import { Check, X, Star } from "lucide-react";
import Header from "@/components/ui/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Starter",
    price: "₹2,999",
    period: "per month",
    description: "Perfect for small businesses and startups",
    features: [
      { name: "Up to ₹5,00,000 loan amount", included: true },
      { name: "12-36 months tenure", included: true },
      { name: "Basic documentation required", included: true },
      { name: "Online application tracking", included: true },
      { name: "Email support", included: true },
      { name: "Priority processing", included: false },
      { name: "Dedicated relationship manager", included: false },
      { name: "Flexible repayment options", included: false },
    ],
    popular: false,
    buttonText: "Get Started",
  },
  {
    name: "Professional",
    price: "₹4,999",
    period: "per month",
    description: "Ideal for growing businesses and professionals",
    features: [
      { name: "Up to ₹25,00,000 loan amount", included: true },
      { name: "12-60 months tenure", included: true },
      { name: "Minimal documentation", included: true },
      { name: "Online application tracking", included: true },
      { name: "Priority email & chat support", included: true },
      { name: "Priority processing", included: true },
      { name: "Dedicated relationship manager", included: true },
      { name: "Flexible repayment options", included: true },
    ],
    popular: true,
    buttonText: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "₹7,999",
    period: "per month",
    description: "For large businesses and corporations",
    features: [
      { name: "Up to ₹1,00,00,000 loan amount", included: true },
      { name: "12-84 months tenure", included: true },
      { name: "Express documentation", included: true },
      { name: "Dedicated account portal", included: true },
      { name: "24/7 priority support", included: true },
      { name: "Instant processing", included: true },
      { name: "Senior relationship manager", included: true },
      { name: "Custom repayment schedules", included: true },
    ],
    popular: false,
    buttonText: "Contact Sales",
  },
];

const interestRates = [
  { type: "Personal Loan", rate: "10.5% - 18%", tenure: "12-60 months" },
  { type: "Business Loan", rate: "9.5% - 16%", tenure: "6-84 months" },
  { type: "Home Loan", rate: "8.4% - 12%", tenure: "5-30 years" },
  { type: "Vehicle Loan", rate: "9.5% - 14%", tenure: "12-84 months" },
];

export default function PricingPage() {
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
            Transparent Pricing,
            <span className="text-green-600"> No Hidden Fees</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-600 dark:text-neutral-300 mb-8 max-w-3xl mx-auto"
          >
            Choose the perfect plan for your financial needs. All our pricing is
            transparent with no hidden charges or surprise fees.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                  plan.popular
                    ? "border-green-500 transform scale-105"
                    : "border-neutral-200 dark:border-neutral-700 hover:border-green-300"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-neutral-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-neutral-600 dark:text-neutral-400">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-neutral-400 mt-0.5 flex-shrink-0" />
                      )}
                      <span
                        className={`${
                          feature.included
                            ? "text-neutral-900 dark:text-white"
                            : "text-neutral-400 dark:text-neutral-500 line-through"
                        }`}
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-3 text-lg font-semibold ${
                    plan.popular
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Interest Rates Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6 text-center">
              Current Interest Rates
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-3 px-4 text-neutral-900 dark:text-white font-semibold">
                      Loan Type
                    </th>
                    <th className="text-left py-3 px-4 text-neutral-900 dark:text-white font-semibold">
                      Interest Rate
                    </th>
                    <th className="text-left py-3 px-4 text-neutral-900 dark:text-white font-semibold">
                      Tenure
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {interestRates.map((rate, index) => (
                    <tr
                      key={index}
                      className="border-b border-neutral-100 dark:border-neutral-700"
                    >
                      <td className="py-4 px-4 text-neutral-900 dark:text-white font-medium">
                        {rate.type}
                      </td>
                      <td className="py-4 px-4 text-green-600 dark:text-green-400 font-semibold">
                        {rate.rate}
                      </td>
                      <td className="py-4 px-4 text-neutral-600 dark:text-neutral-300">
                        {rate.tenure}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
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
            Need a Custom Solution?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-green-100 mb-8"
          >
            Contact our team for personalized pricing and loan solutions
            tailored to your specific needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg"
            >
              <Link href="/contact">Contact Sales</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg"
            >
              <Link href="tel:+91801234567">Call Now</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
