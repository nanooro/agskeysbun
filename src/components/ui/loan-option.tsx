import { Card } from "@/components/ui/card";
import { DollarSign, Clock, Percent, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface LoanOption {
  title: string;
  amount: string;
  term: string;
  rate: string;
  features: string[];
}

const loanOptions: LoanOption[] = [

  {
    title: "Personal Loan",
    amount: "₹50,000 - ₹50,00,000",
    term: "12-60 months",
    rate: "10.5% - 24% p.a.",
    features: [
      "Competitive interest rates",
      "No collateral required",
      "Flexible EMI options",
      "Minimal documentation"
    ]
  },
  {
    title: "Business Loan",
    amount: "₹5,00,000 - ₹5,00,00,000",
    term: "6-84 months",
    rate: "9.5% - 18% p.a.",
    features: [
      "Collateral free options available",
      "Flexible repayment terms",
      "Overdraft facility",
      "Balance transfer option"
    ]
  },
  {
    title: "Home Loan",
    amount: "₹20,00,000 - ₹10,00,00,000",
    term: "5-30 years",
    rate: "8.4% - 11% p.a.",
    features: [
      "Up to 90% of property value",
      "Balance transfer & top-up",
      "Tax benefits under Section 80C, 24, 80EEA",
      "Pre-approved offers"
    ]
  }
];

export default function LoanOption() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/grid.svg')" }}>
      <div className="absolute inset-0 bg-black/60 md:hidden"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-3xl">
            <h2 className="text-4xl font-bold text-white mb-4">
              Flexible Loan Options
            </h2>
            <p className="text-lg text-neutral-300">
              Tailored loan solutions with competitive interest rates for Indian customers
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loanOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group transition-all hover:border-green-500/50 hover:-translate-y-1">
                <div className="p-6 md:p-8 flex flex-col h-full">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-6">
                      {option.title}
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 bg-black/20 rounded-lg">
                        <div className="p-2 bg-green-500/20 rounded-lg">
                          <DollarSign className="w-5 h-5 text-green-400" />
                        </div>
                        <div>
                          <p className="text-sm text-neutral-400">Loan Amount</p>
                          <p className="font-semibold text-white">{option.amount}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-black/20 rounded-lg">
                        <div className="p-2 bg-blue-500/20 rounded-lg">
                          <Clock className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm text-neutral-400">Tenure</p>
                          <p className="font-semibold text-white">{option.term}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-black/20 rounded-lg">
                        <div className="p-2 bg-purple-500/20 rounded-lg">
                          <Percent className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-sm text-neutral-400">Interest Rate</p>
                          <p className="font-semibold text-white">{option.rate}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-white/10">
                    <h4 className="font-medium text-white mb-4 text-lg">
                      Key Benefits:
                    </h4>
                    <ul className="space-y-3 mb-8">
                      {option.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                              <CheckCircle className="w-3 h-3 text-green-400" />
                            </div>
                          </div>
                          <span className="text-neutral-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white" size="lg">
                      <Link href="/apply-now">
                        Apply Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
