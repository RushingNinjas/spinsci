"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, TrendingUp, CreditCard, FileText, Bell, Pause, DollarSign, Calculator, Shield } from "lucide-react";
import Link from "next/link";

export default function FinancialServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#0b2a46] to-[#081a2c] text-white">
      {/* Hero Section */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0b2a46] to-[#081a2c]"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&w=2100&q=60')] bg-cover bg-center opacity-15"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.15),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full text-green-300 text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Patient Financial Services Solution
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-green-100 to-emerald-200 bg-clip-text text-transparent">
              Frictionless Payment
              <br />
              <span className="text-4xl md:text-5xl">Experience</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto mb-12 leading-relaxed">
              Eliminate billing friction with intelligent payment orchestration, automated reconciliation, and personalized financial guidance that increases collections by 45% and improves patient satisfaction by 60%.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="px-8 py-4 text-lg bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 border-0 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 group">
                Request Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2 border-white/30 text-white hover:bg-white/10 rounded-full backdrop-blur-sm">
                View ROI Calculator
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-32 px-6 bg-gradient-to-r from-slate-800/50 to-green-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Advanced Financial Services Features
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Every feature designed to eliminate billing friction and maximize collections
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <CreditCard className="w-12 h-12" />,
                title: "Payment Orchestration",
                description: "Intelligent payment processing that automatically selects the best payment method, optimizes success rates, and reduces processing costs by 25%.",
                features: ["Multi-Channel Payments", "Success Rate Optimization", "Cost Reduction", "Real-time Processing"]
              },
              {
                icon: <FileText className="w-12 h-12" />,
                title: "EHR Reconciliation",
                description: "Automated reconciliation between billing systems and EHRs that eliminates manual errors and ensures 100% accuracy in financial records.",
                features: ["Automated Matching", "Error Detection", "Real-time Sync", "Audit Trails"]
              },
              {
                icon: <Bell className="w-12 h-12" />,
                title: "Smart Reminders",
                description: "AI-powered reminder system that personalizes communication timing and channels to maximize payment collection while maintaining patient satisfaction.",
                features: ["Personalized Timing", "Multi-Channel Delivery", "Payment Optimization", "Patient Preferences"]
              },
              {
                icon: <Pause className="w-12 h-12" />,
                title: "Pause/Resume",
                description: "Flexible payment management that allows patients to pause payments during financial hardship and automatically resume when appropriate.",
                features: ["Flexible Scheduling", "Financial Hardship Support", "Automatic Resumption", "Patient Communication"]
              },
              {
                icon: <Calculator className="w-12 h-12" />,
                title: "Financial Planning",
                description: "Personalized financial planning tools that help patients understand their bills, explore payment options, and create manageable payment plans.",
                features: ["Bill Explanation", "Payment Options", "Plan Creation", "Financial Education"]
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Security & Compliance",
                description: "Enterprise-grade security with PCI DSS compliance, fraud detection, and comprehensive audit logging for all financial transactions.",
                features: ["PCI DSS Compliance", "Fraud Detection", "Audit Logging", "Data Protection"]
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group"
              >
                <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-200 transition-colors">{feature.title}</h3>
                    <p className="text-green-100 mb-6 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.features.map((item, j) => (
                        <li key={j} className="flex items-center text-green-200">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Measurable Financial Impact
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              See the financial transformation with SpinSci&apos;s intelligent payment platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { number: "45%", label: "Increase in Collections", description: "Average collection rate improved from 78% to 95% within 6 months" },
              { number: "60%", label: "Improvement in Patient Satisfaction", description: "Patient satisfaction with billing process increased from 2.8 to 4.5 out of 5" },
              { number: "70%", label: "Reduction in Bad Debt", description: "Intelligent payment plans and flexible options reduce write-offs significantly" },
              { number: "25%", label: "Reduction in Processing Costs", description: "Automated processes and optimized payment methods reduce operational costs" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-green-200 font-semibold mb-3">{stat.label}</div>
                <div className="text-green-100 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-32 px-6 bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Comprehensive Payment Solutions
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Support for all payment methods and financial assistance programs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Traditional Payments",
                description: "Credit cards, debit cards, ACH transfers, and check processing with optimized success rates.",
                icon: "💳"
              },
              {
                title: "Digital Wallets",
                description: "Apple Pay, Google Pay, PayPal, and other digital payment methods for modern convenience.",
                icon: "📱"
              },
              {
                title: "Financial Assistance",
                description: "Integration with charity care, payment plans, and financial assistance programs.",
                icon: "🤝"
              }
            ].map((method, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-white">{method.title}</h3>
                <p className="text-green-100">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Ready to Transform Patient Financial Services?
            </h2>
            <p className="text-xl text-green-100 mb-12 max-w-2xl mx-auto">
              Join leading health systems that have revolutionized patient financial services with SpinSci&apos;s intelligent platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="px-12 py-6 text-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 border-0 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 group">
                Start Your Transformation
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link href="/">
                <Button variant="outline" size="lg" className="px-12 py-6 text-xl border-2 border-white/30 text-white hover:bg-white/10 rounded-full backdrop-blur-sm">
                  Back to Home
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
