"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Loader2, CheckCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ApplyNowPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    loanType: '',
    amount: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();

  const validateForm = () => {
    
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) {
        newErrors.fullName = 'Full name is required';
    }

    if (!formData.email) {
        newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
    }

    if (!formData.phone) {
        newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.loanType) {
        newErrors.loanType = 'Please select a loan type';
    }
    
    if (!formData.amount) {
      newErrors.amount = 'Loan amount is required';
    } else if (isNaN(Number(formData.amount)) || Number(formData.amount) <= 0) {
      newErrors.amount = 'Please enter a valid loan amount';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      loanType: value
    }));
    
    // Clear error when user selects an option
    if (errors.loanType) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.loanType;
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      alert("Please fill out all required fields correctly.");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Application submitted successfully! We'll get back to you shortly.");
      
      // Reset form after success
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        loanType: '',
        amount: ''
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 to-neutral-800 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <Button 
          variant="ghost" 
          onClick={() => router.back()} 
          className="mb-6 flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </Button>
        
        <div className="max-w-3xl mx-auto bg-black/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-12 border border-white/10">
          <h1 className="text-4xl font-bold text-white mb-6 text-center">
            Apply for a Loan
          </h1>
          
          <p className="text-lg text-neutral-300 mb-8 text-center">
            Fill out the form below to start your loan application process.
            Our team will review your application and get back to you shortly.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-neutral-300 mb-2" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-black/20 border ${errors.fullName ? 'border-red-500' : 'border-white/20'} rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-green-500`}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-400">{errors.fullName}</p>
              )}
            </div>
            
            <div>
              <label className="block text-neutral-300 mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-black/20 border ${errors.email ? 'border-red-500' : 'border-white/20'} rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-green-500`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </div>
            
            <div>
              <label className="block text-neutral-300 mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-black/20 border ${errors.phone ? 'border-red-500' : 'border-white/20'} rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-green-500`}
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <label className="block text-neutral-300 mb-2" htmlFor="loanType">
                Loan Type
              </label>
              <Select 
                value={formData.loanType}
                onValueChange={handleSelectChange}
              >
                <SelectTrigger className="w-full bg-white/10 border-white/20 text-white hover:bg-white/15 hover:border-white/30 h-12">
                  <SelectValue placeholder="Select loan type" />
                </SelectTrigger>
                <SelectContent className="bg-neutral-800 border-white/10 text-white">
                  <SelectItem value="personal" className="hover:bg-neutral-700 focus:bg-neutral-700">
                    Personal Loan
                  </SelectItem>
                  <SelectItem value="business" className="hover:bg-neutral-700 focus:bg-neutral-700">
                    Business Loan
                  </SelectItem>
                  <SelectItem value="home" className="hover:bg-neutral-700 focus:bg-neutral-700">
                    Home Loan
                  </SelectItem>
                </SelectContent>
              </Select>
              {errors.loanType && (
                <p className="mt-1 text-sm text-red-400">{errors.loanType}</p>
              )}
            </div>
            
            <div>
              <label className="block text-neutral-300 mb-2" htmlFor="amount">
                Loan Amount (₹)
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                min="1"
                className={`w-full px-4 py-3 bg-white/10 border ${errors.amount ? 'border-red-500' : 'border-white/20'} rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-green-500`}
                placeholder="Enter desired loan amount"
              />
              {errors.amount && (
                <p className="mt-1 text-sm text-red-400">{errors.amount}</p>
              )}
            </div>
            
            <div className="pt-2">
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </Button>
            </div>
            
            <p className="text-sm text-neutral-400 text-center mt-6">
              By submitting this form, you agree to our{' '}
              <Link href="/privacy-policy" className="text-green-400 hover:underline">
                Privacy Policy
              </Link>
              {' '}and{' '}
              <Link href="/terms" className="text-green-400 hover:underline">
                Terms of Service
              </Link>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
