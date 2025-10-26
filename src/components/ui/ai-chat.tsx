"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Sparkles,
  Calculator,
  ClipboardList,
  HelpCircle,
  Send,
  User,
  Bot,
  Loader2,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { useFullscreen } from "@/lib/fullscreen-context";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

const BUSINESS_CONTEXT = `You are an AI assistant for AGS Financial Services, a leading loan provider in India. Here are key details about our services:

LOAN PRODUCTS:
- Personal Loans: ₹50,000 - ₹25,00,000, 10.5% - 18% interest, 12-60 months tenure
- Business Loans: ₹1,00,000 - ₹1,00,00,000, 9.5% - 16% interest, 6-84 months tenure
- Home Loans: Up to ₹1,00,00,000, 8.4% - 12% interest, 5-30 years tenure
- Vehicle Loans: ₹1,00,000 - ₹50,00,000, 9.5% - 14% interest, 12-84 months tenure

KEY FEATURES:
- 24-hour loan approval
- 98% approval rate
- 50,000+ happy customers
- ₹500Cr+ loans disbursed
- 100% digital process
- Bank-grade security (256-bit SSL)
- 24/7 premium support
- No hidden fees

PROCESS:
1. Apply online (5 minutes)
2. Get approved (within 24 hours)
3. Receive funds (2-3 business days)

CONTACT:
- Phone: +91 80 1234 5678, +91 80 1234 5679
- Email: info@agskeys.com, support@agskeys.com
- Address: 123 Business District, Bangalore, Karnataka 560001

Always be helpful, professional, and focus on how AGS can help customers with their financial needs.`;

export default function AiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const { isFullscreen, setIsFullscreen } = useFullscreen();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I'm your AGS AI Assistant. How can I help you with your loan needs today?",
      role: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const generateResponse = async (userMessage: string): Promise<string> => {
    try {
      console.log("Sending message to AI API:", userMessage);

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log("AI API Response:", data);

      return (
        data.response ||
        "I'm having trouble connecting right now. Please try again."
      );
    } catch (error) {
      console.error("Error generating response:", error);
      return getIntelligentResponse(userMessage);
    }
  };

  const getIntelligentResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // More specific keyword matching
    if (
      lowerMessage.includes("hello") ||
      lowerMessage.includes("hi") ||
      lowerMessage.includes("hey") ||
      lowerMessage.includes("yo")
    ) {
      return "Hello! Welcome to AGS Financial Services! I'm your AI assistant here to help with all your loan questions. We offer personal loans, business loans, home loans, and vehicle loans with competitive rates starting from 8.4%. What would you like to know about our services?";
    }

    if (
      lowerMessage.includes("rate") ||
      lowerMessage.includes("interest") ||
      lowerMessage.includes("apr") ||
      lowerMessage.includes("cost")
    ) {
      return "Our interest rates are very competitive! Personal Loans: 10.5%-18%, Business Loans: 9.5%-16%, Home Loans: 8.4%-12%, Vehicle Loans: 9.5%-14%. With our 98% approval rate and 24-hour processing, we can get you the best rates quickly. Would you like a personalized rate quote?";
    }

    if (
      lowerMessage.includes("apply") ||
      lowerMessage.includes("application") ||
      lowerMessage.includes("process")
    ) {
      return "Applying with AGS is super easy! Our 100% digital process takes just 5 minutes. No complex paperwork required - we use minimal documentation and offer instant pre-approval. Once approved, funds are in your account within 2-3 business days. Ready to get started?";
    }

    if (
      lowerMessage.includes("time") ||
      lowerMessage.includes("fast") ||
      lowerMessage.includes("quick") ||
      lowerMessage.includes("urgent")
    ) {
      return "Speed is our specialty! We offer 24-hour loan approval with our AI-powered system. Our average approval time is just 24 hours, and once approved, funds are disbursed within 2-3 business days. That's why 50,000+ customers trust us for their urgent financial needs!";
    }

    if (
      lowerMessage.includes("business") ||
      lowerMessage.includes("company") ||
      lowerMessage.includes("enterprise")
    ) {
      return "For business loans, we offer amounts from ₹1,00,000 to ₹1,00,00,000 with competitive rates of 9.5%-16%. We provide collateral-free options, flexible repayment terms up to 84 months, overdraft facilities, and balance transfer options. Perfect for expanding your business!";
    }

    if (
      lowerMessage.includes("personal") ||
      lowerMessage.includes("individual")
    ) {
      return "Our personal loans range from ₹50,000 to ₹25,00,000 with interest rates of 10.5%-18%. No collateral required, flexible EMI options, and minimal documentation. Whether you need funds for education, medical expenses, or any personal need - we've got you covered!";
    }

    if (
      lowerMessage.includes("home") ||
      lowerMessage.includes("property") ||
      lowerMessage.includes("mortgage")
    ) {
      return "Home loans up to ₹1,00,00,000 with industry-best rates starting at 8.4%! We offer up to 90% of property value, tax benefits under Section 80C, 24, and 80EEA, plus balance transfer and top-up facilities. Pre-approved offers available too!";
    }

    if (
      lowerMessage.includes("car") ||
      lowerMessage.includes("vehicle") ||
      lowerMessage.includes("auto")
    ) {
      return "Vehicle loans from ₹1,00,000 to ₹50,00,000 with rates of 9.5%-14%. Quick approval, flexible tenure up to 84 months, and minimal documentation required. Drive your dream car home with AGS financing!";
    }

    if (
      lowerMessage.includes("contact") ||
      lowerMessage.includes("support") ||
      lowerMessage.includes("help") ||
      lowerMessage.includes("phone") ||
      lowerMessage.includes("email")
    ) {
      return "We're here 24/7! Call us at +91 80 1234 5678 or +91 80 1234 5679, email support@agskeys.com, or visit our office at 123 Business District, Bangalore. Our average response time is just 2 minutes!";
    }

    if (
      lowerMessage.includes("document") ||
      lowerMessage.includes("paper") ||
      lowerMessage.includes("requirement")
    ) {
      return "We keep it simple! For most loans, you just need: ID proof, address proof, income proof, and bank statements. Our 100% digital process means no physical paperwork - everything is online with digital signatures!";
    }

    if (
      lowerMessage.includes("security") ||
      lowerMessage.includes("safe") ||
      lowerMessage.includes("protection")
    ) {
      return "Your security is our priority! We use 256-bit SSL encryption, PCI DSS compliance, and regular security audits. All your financial data and transactions are protected with military-grade security protocols. Bank-grade security guaranteed!";
    }

    return "I'd be happy to help you with information about our loan products! We offer personal loans, business loans, home loans, and vehicle loans with competitive rates and quick approval. What specific type of loan are you interested in learning more about?";
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage.trim(),
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);
    setShowQuickActions(false);

    try {
      const aiResponse = await generateResponse(userMessage.content);

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        role: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      // Use intelligent fallback for any chat errors
      const fallbackResponse = getIntelligentResponse(userMessage.content);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: fallbackResponse,
        role: "assistant",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickAction = (action: string) => {
    let message = "";
    switch (action) {
      case "calculator":
        message = "Can you help me calculate loan payments?";
        break;
      case "status":
        message = "How can I check my application status?";
        break;
      case "general":
        message = "I have a question about your loan services.";
        break;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      content: message,
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setShowQuickActions(false);
    setIsLoading(true);

    generateResponse(message).then((aiResponse) => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        role: "assistant",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 ${
        isFullscreen ? "bottom-0 right-0" : ""
      }`}
    >
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => setIsOpen(true)}
            className="group relative bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-white/20"
            aria-label="Open AI Assistant"
          >
            {/* Pulsing background effect */}
            <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>

            {/* Main icon */}
            <div className="relative flex items-center justify-center">
              <Sparkles className="w-6 h-6 mr-0 group-hover:scale-110 transition-transform duration-200" />
              {/* <MessageSquare className="w-6 h-6" /> */}
            </div>

            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              Ask our AI Assistant!
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
            </div>
          </motion.button>
        )}

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`${
              isFullscreen
                ? "fixed inset-0 w-screen h-screen rounded-none z-50"
                : "w-80 h-96 rounded-2xl"
            } bg-white dark:bg-neutral-800 shadow-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">AGS AI Assistant</h3>
                  <p className="text-xs text-green-100">Online now</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
                  aria-label={
                    isFullscreen ? "Exit fullscreen" : "Enter fullscreen"
                  }
                >
                  {isFullscreen ? (
                    <Minimize2 className="w-5 h-5" />
                  ) : (
                    <Maximize2 className="w-5 h-5" />
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div
              className={`flex-1 overflow-y-auto p-4 space-y-4 ${
                isFullscreen ? "max-h-[calc(100vh-200px)]" : "max-h-64"
              }`}
            >
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                  )}

                  <div
                    className={`max-w-[70%] ${
                      message.role === "user" ? "order-2" : "order-1"
                    }`}
                  >
                    <div
                      className={`rounded-lg px-3 py-2 text-sm ${
                        message.role === "user"
                          ? "bg-green-500 text-white rounded-br-sm"
                          : "bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white rounded-bl-sm"
                      }`}
                    >
                      {message.content}
                    </div>
                    <div
                      className={`text-xs text-neutral-500 mt-1 ${
                        message.role === "user" ? "text-right" : "text-left"
                      }`}
                    >
                      {formatTime(message.timestamp)}
                    </div>
                  </div>

                  {message.role === "user" && (
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-white" />
                    </div>
                  )}
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3 justify-start"
                >
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="bg-neutral-100 dark:bg-neutral-700 rounded-lg rounded-bl-sm px-3 py-2">
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin text-green-600" />
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">
                        AI is typing...
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {showQuickActions && messages.length === 1 && (
              <div className="px-4 pb-4">
                <div className="space-y-2">
                  <button
                    onClick={() => handleQuickAction("calculator")}
                    className="w-full bg-white dark:bg-neutral-800 hover:bg-green-50 dark:hover:bg-green-900/20 border border-neutral-200 dark:border-neutral-700 rounded-lg px-3 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:text-green-600 dark:hover:text-green-400 transition-all duration-200 flex items-center gap-2"
                  >
                    <Calculator className="w-4 h-4" />
                    Loan Calculator
                  </button>
                  <button
                    onClick={() => handleQuickAction("status")}
                    className="w-full bg-white dark:bg-neutral-800 hover:bg-green-50 dark:hover:bg-green-900/20 border border-neutral-200 dark:border-neutral-700 rounded-lg px-3 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:text-green-600 dark:hover:text-green-400 transition-all duration-200 flex items-center gap-2"
                  >
                    <ClipboardList className="w-4 h-4" />
                    Application Status
                  </button>
                  <button
                    onClick={() => handleQuickAction("general")}
                    className="w-full bg-white dark:bg-neutral-800 hover:bg-green-50 dark:hover:bg-green-900/20 border border-neutral-200 dark:border-neutral-700 rounded-lg px-3 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:text-green-600 dark:hover:text-green-400 transition-all duration-200 flex items-center gap-2"
                  >
                    <HelpCircle className="w-4 h-4" />
                    General Inquiry
                  </button>
                </div>
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={handleSendMessage}
              className="p-4 border-t border-neutral-200 dark:border-neutral-700"
            >
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1 px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg text-sm bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim() || isLoading}
                  className="bg-green-500 hover:bg-green-600 disabled:bg-neutral-400 text-white p-2 rounded-lg transition-colors duration-200 flex items-center justify-center"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
