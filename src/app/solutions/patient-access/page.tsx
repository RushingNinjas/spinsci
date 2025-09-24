"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Users, Calendar, MessageSquare, BarChart3, Clock, Smartphone, Globe, Shield } from "lucide-react";
import Link from "next/link";

export default function PatientAccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <section className="relative py-32 px-6">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0b2a46] to-[#081a2c]"></div>
        <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=2100&q=60)] bg-cover bg-center opacity-15"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Patient Access Care Solution
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
              AI-Powered Digital
              <br />
              <span className="text-4xl md:text-5xl">Front Door</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed">
              Transform patient access with intelligent self-service, predictive scheduling, and seamless omni-channel experiences that reduce wait times by 70% and increase patient satisfaction by 45%.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="px-8 py-4 text-lg bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 border-0 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group">
                Request Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2 border-white/30 text-white hover:bg-white/10 rounded-full backdrop-blur-sm">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-32 px-6 bg-gradient-to-r from-slate-800/50 to-blue-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Revolutionary Patient Access Features
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Every feature designed to eliminate friction and create exceptional patient experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Calendar className="w-12 h-12" />,
                title: "Smart Scheduling",
                description: "AI-powered scheduling that predicts optimal appointment times, reduces no-shows by 35%, and automatically fills cancellations.",
                features: ["Predictive Scheduling", "Auto-Rescheduling", "Waitlist Management", "Provider Optimization"]
              },
              {
                icon: <MessageSquare className="w-12 h-12" />,
                title: "Predictive Triage",
                description: "Intelligent symptom assessment and routing that ensures patients see the right provider at the right time, every time.",
                features: ["Symptom Analysis", "Urgency Scoring", "Provider Matching", "Care Pathway Optimization"]
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: "Omni-Channel Support",
                description: "Seamless experience across phone, web, mobile, and chat with consistent, intelligent assistance at every touchpoint.",
                features: ["Multi-Channel Integration", "Context Preservation", "Unified Experience", "Channel Optimization"]
              },
              {
                icon: <BarChart3 className="w-12 h-12" />,
                title: "Real-time Analytics",
                description: "Live dashboards and insights that help you optimize patient flow, reduce bottlenecks, and improve operational efficiency.",
                features: ["Live Dashboards", "Performance Metrics", "Predictive Insights", "Custom Reports"]
              },
              {
                icon: <Clock className="w-12 h-12" />,
                title: "Wait Time Optimization",
                description: "Dynamic queue management that reduces average wait times by 70% while maintaining high patient satisfaction scores.",
                features: ["Dynamic Queuing", "Wait Time Predictions", "Patient Notifications", "Capacity Management"]
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Secure Patient Portal",
                description: "HIPAA-compliant patient portal with advanced security features and seamless integration with your existing systems.",
                features: ["HIPAA Compliance", "Advanced Security", "System Integration", "Patient Data Protection"]
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group"
              >
                <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-200 transition-colors">{feature.title}</h3>
                    <p className="text-blue-100 mb-6 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.features.map((item, j) => (
                        <li key={j} className="flex items-center text-blue-200">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Measurable Results
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              See the impact of AI-powered patient access on your health system
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { number: "70%", label: "Reduction in Wait Times", description: "Average patient wait time decreased from 45 minutes to 13 minutes" },
              { number: "45%", label: "Increase in Patient Satisfaction", description: "Patient satisfaction scores improved from 3.2 to 4.6 out of 5" },
              { number: "35%", label: "Reduction in No-Shows", description: "Predictive scheduling and automated reminders reduce missed appointments" },
              { number: "60%", label: "Increase in Digital Adoption", description: "More patients choose self-service options over phone calls" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-200 font-semibold mb-3">{stat.label}</div>
                <div className="text-blue-100 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Ready to Transform Patient Access?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Join leading health systems that have revolutionized patient access with SpinSci&apos;s AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="px-12 py-6 text-xl bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 border-0 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group">
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
