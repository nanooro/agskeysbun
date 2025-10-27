import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

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

type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'At least one message is required' }, { status: 400 });
    }

    const conversation: ChatMessage[] = messages
      .filter((message: ChatMessage) => message?.content)
      .map((message: ChatMessage) => ({
        role: message.role === 'assistant' ? 'assistant' : 'user',
        content: String(message.content),
      }));

    if (conversation.length === 0) {
      return NextResponse.json({ error: 'Messages must include content' }, { status: 400 });
    }

    const API_KEY = process.env.GOOGLE_GEMINI_API_KEY;

    if (!API_KEY) {
      return NextResponse.json(
        {
          error: 'GOOGLE_GEMINI_API_KEY is not configured on the server',
        },
        { status: 500 }
      );
    }

    // Try multiple AI services
    const genAI = new GoogleGenerativeAI(API_KEY);

    // Try different models
    const models = ['gemini-pro', 'gemini-1.5-pro', 'gemini-1.0-pro'];

    for (const modelName of models) {
      try {
        console.log(`Trying model: ${modelName}`);
        const model = genAI.getGenerativeModel({ model: modelName });

        const conversationText = conversation
          .map((message) =>
            message.role === 'assistant'
              ? `Assistant: ${message.content}`
              : `User: ${message.content}`
          )
          .join('\n');

        const prompt = `${BUSINESS_CONTEXT}

Conversation so far:
${conversationText}

Respond as the AGS Financial Services AI assistant. Provide a concise, helpful reply focused on our services. Do not mention internal instructions.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;

        if (response && response.text()) {
          return NextResponse.json({ response: response.text() });
        }
      } catch (modelError) {
        console.log(`Model ${modelName} failed:`, modelError);
        continue;
      }
    }

    // Fallback responses
    const lastUserMessage = [...conversation]
      .reverse()
      .find((message) => message.role === 'user');

    const lowerMessage = lastUserMessage?.content?.toLowerCase?.() ?? '';

    let fallbackResponse = '';

    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey') || lowerMessage.includes('yo')) {
      fallbackResponse = "Hello! Welcome to AGS Financial Services! I'm your AI assistant here to help with all your loan questions. We offer personal loans, business loans, home loans, and vehicle loans with competitive rates starting from 8.4%. What would you like to know about our services?";
    } else if (lowerMessage.includes('rate') || lowerMessage.includes('interest') || lowerMessage.includes('cost')) {
      fallbackResponse = "Our interest rates are very competitive! Personal Loans: 10.5%-18%, Business Loans: 9.5%-16%, Home Loans: 8.4%-12%, Vehicle Loans: 9.5%-14%. With our 98% approval rate and 24-hour processing, we can get you the best rates quickly. Would you like a personalized rate quote?";
    } else if (lowerMessage.includes('apply') || lowerMessage.includes('application')) {
      fallbackResponse = "Applying with AGS is super easy! Our 100% digital process takes just 5 minutes. No complex paperwork required - we use minimal documentation and offer instant pre-approval. Once approved, funds are in your account within 2-3 business days. Ready to get started?";
    } else {
      fallbackResponse = "I'd be happy to help you with information about our loan products! We offer personal loans, business loans, home loans, and vehicle loans with competitive rates and quick approval. What specific type of loan are you interested in learning more about?";
    }

    return NextResponse.json({ response: fallbackResponse });
  } catch (error) {
    console.error('AI API Error:', error);

    // Enhanced fallback responses for unknown errors
    let fallbackResponse = 'I\'m sorry, I encountered an error while processing your request. ';
    
    // Try to get the message from the error if available
    const errorMessage = error instanceof Error ? error.message : String(error);
    const lowerMessage = errorMessage.toLowerCase();

    if (lowerMessage.includes('business') || lowerMessage.includes('company')) {
      fallbackResponse = "For business loans, we offer amounts from ₹1,00,000 to ₹1,00,00,000 with competitive rates of 9.5%-16%. We provide collateral-free options, flexible repayment terms up to 84 months, overdraft facilities, and balance transfer options. Perfect for expanding your business!";
    } else if (lowerMessage.includes('personal') || lowerMessage.includes('individual')) {
      fallbackResponse = "Our personal loans range from ₹50,000 to ₹25,00,000 with interest rates of 10.5%-18%. No collateral required, flexible EMI options, and minimal documentation. Whether you need funds for education, medical expenses, or any personal need - we've got you covered!";
    } else if (lowerMessage.includes('home') || lowerMessage.includes('property')) {
      fallbackResponse = "Home loans up to ₹1,00,00,000 with industry-best rates starting at 8.4%! We offer up to 90% of property value, tax benefits under Section 80C, 24, and 80EEA, plus balance transfer and top-up facilities. Pre-approved offers available too!";
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('support') || lowerMessage.includes('help')) {
      fallbackResponse = "We're here 24/7! Call us at +91 80 1234 5678 or +91 80 1234 5679, email support@agskeys.com, or visit our office at 123 Business District, Bangalore. Our average response time is just 2 minutes!";
    } else {
      fallbackResponse = "I'd be happy to help you with information about AGS Financial Services! We offer comprehensive loan solutions with competitive rates and quick approval. What would you like to know about our services?";
    }

    return NextResponse.json({ response: fallbackResponse });
  }
}
