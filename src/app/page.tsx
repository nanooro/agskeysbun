"use client";
import { FullscreenProvider } from "@/lib/fullscreen-context";
import {
  CheckCircle,
  Shield,
  Clock,
  Users,
  Award,
  Headphones,
  Check,
  X,
  Star,
  Phone,
  Mail,
  MapPin,
  Send,
  MessageSquare,
  TrendingUp,
  Zap,
  Globe,
  Target,
  Heart,
  Lightbulb,
  Rocket,
  ChevronDown,
  Play,
  Quote,
} from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";
import AiChat from "@/components/ui/ai-chat";
import { motion } from "framer-motion";
import { Suspense } from "react";
import LoanOption from "@/components/ui/loan-option";
import HeroSectionOne from "@/components/hero-section-demo-1";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IconPhone } from "@tabler/icons-react";
// Dynamically import the Header component with SSR disabled

const Header = dynamic(() => import("@/components/ui/header"), { ssr: false });

// Lazy load the HeroSectionOne component
const LazyHero = dynamic(() => import("@/components/ui/hero"), {
  ssr: false,
  loading: () => (
    <div className="flex-1 flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
});

const features = [
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description:
      "256-bit SSL encryption protects all your financial data and transactions with military-grade security protocols.",
    details: [
      "End-to-end encryption",
      "PCI DSS compliant",
      "Regular security audits",
    ],
  },
  {
    icon: Clock,
    title: "Lightning Fast Approval",
    description:
      "Get loan approval in as little as 24 hours with our AI-powered application processing system.",
    details: [
      "24-hour processing",
      "Real-time status updates",
      "Instant pre-approval",
    ],
  },
  {
    icon: Users,
    title: "Expert Financial Advisors",
    description:
      "Certified financial experts guide you through every step, ensuring you get the best loan for your needs.",
    details: [
      "Personal consultation",
      "Custom loan structuring",
      "Ongoing support",
    ],
  },
  {
    icon: Award,
    title: "Industry Best Rates",
    description:
      "Competitive interest rates starting from 8.4% with flexible repayment options tailored to your budget.",
    details: ["Starting from 8.4%", "No hidden fees", "Flexible EMI options"],
  },
  {
    icon: Headphones,
    title: "24/7 Premium Support",
    description:
      "Round-the-clock customer service via phone, email, live chat, and WhatsApp for immediate assistance.",
    details: [
      "24/7 availability",
      "Multi-channel support",
      "Average 2min response time",
    ],
  },
  {
    icon: CheckCircle,
    title: "100% Digital Process",
    description:
      "Complete your entire loan application online with minimal documentation and instant disbursal.",
    details: [
      "Paperless application",
      "Digital signatures",
      "Instant disbursal",
    ],
  },
];

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

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Small Business Owner",
    content:
      "AGS helped me expand my boutique when I needed it most. The process was incredibly smooth and the rates were unbeatable!",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "Rajesh Kumar",
    role: "Software Developer",
    content:
      "Got my personal loan approved in just 18 hours! The team was professional and guided me through every step.",
    rating: 5,
    avatar: "RK",
  },
  {
    name: "Anita Patel",
    role: "Restaurant Owner",
    content:
      "The business loan helped me renovate my restaurant. Excellent service and very competitive interest rates.",
    rating: 5,
    avatar: "AP",
  },
];

const stats = [
  { number: "50,000+", label: "Happy Customers", icon: Users },
  { number: "₹500Cr+", label: "Loans Disbursed", icon: TrendingUp },
  { number: "98%", label: "Approval Rate", icon: Award },
  { number: "24hrs", label: "Average Approval", icon: Clock },
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <FullscreenProvider>
      <AiChat />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col min-h-screen font-sans"
      >
        {/* Background */}
        <motion.div
          className="fixed inset-0 -z-10"
          initial={{ filter: "blur(10px)" }}
          animate={{ filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/main-bg.jpg"
            alt="Background"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              imageRendering: "crisp-edges",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
            }}
            loading="eager"
          />
        </motion.div>
        <Header />
        {/* Hero Section */}
        <section id="home">
          <Suspense
            fallback={
              <div className="flex-1 flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            }
          >
            <LazyHero />
          </Suspense>
        </section>
        {/* Loan Options Section */}
        <LoanOption />
        {/* Features Section */}
        <section
          id="features"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800"
        >
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
                Why Choose <span className="text-green-600">AGS?</span>
              </h2>
              <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with personalized service to
                deliver exceptional financial solutions.
              </p>
            </motion.div>
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700 group"
                >
                  <div className="flex items-start mb-6">
                    <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  {/* Feature Details */}
                  <div className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-neutral-500 dark:text-neutral-400">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center bg-green-600 rounded-3xl p-12"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Experience the Difference?
              </h3>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust AGS for their
                financial needs. Start your application today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                >
                  <button onClick={() => scrollToSection("#apply")}>
                    Apply Now
                  </button>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold"
                >
                  <Link href="tel:+91801234567">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        {/* How It Works Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  How It <span className="text-green-400">Works</span>
                </h2>
                <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                  Getting a loan with AGS is simple, fast, and transparent.
                  Here's how it works in 3 easy steps.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    step: "01",
                    title: "Apply Online",
                    description:
                      "Fill out our simple online application form in just 5 minutes. No complex paperwork required.",
                    icon: Lightbulb,
                    color: "bg-blue-500",
                  },
                  {
                    step: "02",
                    title: "Get Approved",
                    description:
                      "Our AI system reviews your application and you get approval within 24 hours with competitive rates.",
                    icon: Rocket,
                    color: "bg-green-500",
                  },
                  {
                    step: "03",
                    title: "Receive Funds",
                    description:
                      "Once approved, funds are disbursed directly to your account within 2-3 business days.",
                    icon: Target,
                    color: "bg-purple-500",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <div className="relative mb-8">
                      <div
                        className={`w-20 h-20 ${item.color} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}
                      >
                        <item.icon className="w-10 h-10 text-white" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-8 h-8 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full flex items-center justify-center text-sm font-bold">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {item.title}
                    </h3>
                    <p className="text-neutral-300 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900 dark:bg-black">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Trusted by <span className="text-green-400">Thousands</span>
              </h2>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                Our track record speaks for itself. Here's what we've achieved
                together with our customers.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-neutral-300 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  What Our <span className="text-green-400">Customers Say</span>
                </h2>
                <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                  Don't just take our word for it. Here's what real customers
                  have to say about their experience with AGS.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">
                          {testimonial.avatar}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-neutral-300 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-green-500 mb-4 opacity-20" />
                    <p className="text-neutral-300 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        {/* Pricing Section */}
        <section
          id="pricing"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
                Transparent <span className="text-green-600">Pricing</span>
              </h2>
              <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto mb-8">
                Choose the perfect plan for your financial needs. All pricing is
                transparent with no hidden charges.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-white dark:bg-neutral-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                    plan.popular
                      ? "border-green-500 transform scale-105"
                      : "border-neutral-200 dark:border-neutral-700 hover:border-green-300"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-green-500 text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                        <Star className="w-4 h-4" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-5xl font-bold text-neutral-900 dark:text-white">
                        {plan.price}
                      </span>
                      <span className="text-neutral-600 dark:text-neutral-400 text-lg">
                        /{plan.period}
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
                    className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-200 ${
                      plan.popular
                        ? "bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
                        : "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100"
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </motion.div>
              ))}
            </div>
            {/* Interest Rates Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-neutral-800 rounded-3xl p-8 shadow-lg border border-neutral-200 dark:border-neutral-700"
            >
              <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8 text-center">
                Current Interest Rates
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-green-500">
                      <th className="text-left py-4 px-6 text-neutral-900 dark:text-white font-bold text-lg">
                        Loan Type
                      </th>
                      <th className="text-left py-4 px-6 text-neutral-900 dark:text-white font-bold text-lg">
                        Interest Rate
                      </th>
                      <th className="text-left py-4 px-6 text-neutral-900 dark:text-white font-bold text-lg">
                        Tenure
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        type: "Personal Loan",
                        rate: "10.5% - 18%",
                        tenure: "12-60 months",
                      },
                      {
                        type: "Business Loan",
                        rate: "9.5% - 16%",
                        tenure: "6-84 months",
                      },
                      {
                        type: "Home Loan",
                        rate: "8.4% - 12%",
                        tenure: "5-30 years",
                      },
                      {
                        type: "Vehicle Loan",
                        rate: "9.5% - 14%",
                        tenure: "12-84 months",
                      },
                    ].map((rate, index) => (
                      <tr
                        key={index}
                        className="border-b border-neutral-100 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-colors"
                      >
                        <td className="py-5 px-6 text-neutral-900 dark:text-white font-semibold text-lg">
                          {rate.type}
                        </td>
                        <td className="py-5 px-6 text-green-600 dark:text-green-400 font-bold text-lg">
                          {rate.rate}
                        </td>
                        <td className="py-5 px-6 text-neutral-600 dark:text-neutral-300 text-lg">
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
        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-neutral-800 rounded-3xl p-10 shadow-2xl border border-neutral-200 dark:border-neutral-700"
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                    Get in Touch
                  </h2>
                  <p className="text-lg text-neutral-600 dark:text-neutral-300">
                    Have questions? Need help with your application? We're here
                    to help!
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-neutral-50 dark:bg-neutral-700 border-2 border-neutral-300 dark:border-neutral-600 rounded-xl text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-neutral-50 dark:bg-neutral-700 border-2 border-neutral-300 dark:border-neutral-600 rounded-xl text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-neutral-50 dark:bg-neutral-700 border-2 border-neutral-300 dark:border-neutral-600 rounded-xl text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3"
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-neutral-50 dark:bg-neutral-700 border-2 border-neutral-300 dark:border-neutral-600 rounded-xl text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="loan">Loan Application</option>
                        <option value="support">Technical Support</option>
                        <option value="business">Business Partnership</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-4 bg-neutral-50 dark:bg-neutral-700 border-2 border-neutral-300 dark:border-neutral-600 rounded-xl text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-vertical transition-all duration-200"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg font-bold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-5 h-5 mr-3" />
                    Send Message
                  </Button>
                </form>
              </motion.div>
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12"
              >
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Contact Information
                  </h2>
                  <p className="text-lg text-neutral-300 mb-8">
                    Reach out through any channel. We're available 24/7 to
                    assist you!
                  </p>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      icon: Phone,
                      title: "Phone",
                      details: ["+91 80 1234 5678", "+91 80 1234 5679"],
                      description: "Call us during business hours",
                      color: "bg-blue-500",
                    },
                    {
                      icon: Mail,
                      title: "Email",
                      details: ["info@agskeys.com", "support@agskeys.com"],
                      description: "We respond within 24 hours",
                      color: "bg-green-500",
                    },
                    {
                      icon: MapPin,
                      title: "Address",
                      details: [
                        "123 Business District",
                        "Bangalore, Karnataka 560001",
                      ],
                      description: "Visit our office",
                      color: "bg-purple-500",
                    },
                    {
                      icon: Clock,
                      title: "Business Hours",
                      details: [
                        "Mon - Fri: 9:00 AM - 6:00 PM",
                        "Sat: 10:00 AM - 4:00 PM",
                      ],
                      description: "24/7 emergency support",
                      color: "bg-orange-500",
                    },
                  ].map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-6 p-6 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/15 transition-all duration-300"
                    >
                      <div className={`p-4 ${info.color} rounded-xl`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => (
                          <p
                            key={detailIndex}
                            className="text-neutral-300 font-medium"
                          >
                            {detail}
                          </p>
                        ))}
                        <p className="text-sm text-neutral-400 mt-2">
                          {info.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/20 rounded-xl">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Need Immediate Help?</h3>
                  <p className="text-green-100">
                    Get instant assistance from our experts
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-white text-green-600 hover:bg-gray-100 flex-1 py-4 text-lg font-semibold rounded-xl"
                >
                  <Link href="tel:+91801234567">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600 flex-1 py-4 text-lg font-semibold rounded-xl"
                >
                  <button onClick={() => scrollToSection("#contact")}>
                    Apply Online
                  </button>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-neutral-900 dark:bg-black border-t border-neutral-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">A</span>
                  </div>
                  <span className="text-2xl font-bold text-white">
                    AGS <span className="text-green-500">KEYS</span>
                  </span>
                </div>
                <p className="text-neutral-300 mb-6 max-w-md">
                  Your trusted partner for financial solutions. We provide fast,
                  secure, and transparent loan services across India.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="tel:+91801234567"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    Call Now
                  </Link>
                  <button
                    onClick={() => scrollToSection("#contact")}
                    className="border border-neutral-600 text-neutral-300 px-6 py-3 rounded-lg hover:border-green-500 hover:text-green-500 transition-colors font-medium"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Services</h4>
                <ul className="space-y-2 text-neutral-300">
                  <li>
                    <button
                      onClick={() => scrollToSection("#loans")}
                      className="hover:text-green-500 transition-colors text-left"
                    >
                      Personal Loans
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("#loans")}
                      className="hover:text-green-500 transition-colors text-left"
                    >
                      Business Loans
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("#loans")}
                      className="hover:text-green-500 transition-colors text-left"
                    >
                      Home Loans
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("#loans")}
                      className="hover:text-green-500 transition-colors text-left"
                    >
                      Vehicle Loans
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Company</h4>
                <ul className="space-y-2 text-neutral-300">
                  <li>
                    <button
                      onClick={() => scrollToSection("#features")}
                      className="hover:text-green-500 transition-colors text-left"
                    >
                      About Us
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("#contact")}
                      className="hover:text-green-500 transition-colors text-left"
                    >
                      Contact
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("#pricing")}
                      className="hover:text-green-500 transition-colors text-left"
                    >
                      Pricing
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("#contact")}
                      className="hover:text-green-500 transition-colors text-left"
                    >
                      Support
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
              <p>
                &copy; 2025 AGS Financial Services. All rights reserved. |
                Licensed financial services provider.
              </p>
            </div>
          </div>
        </footer>
      </motion.div>
    </FullscreenProvider>
  );
}
