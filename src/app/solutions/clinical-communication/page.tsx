"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Shield, Phone, MessageSquare, Users, Bell, Lock, Zap, Headphones } from "lucide-react";
import Link from "next/link";

export default function ClinicalCommunicationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#0b2a46] to-[#081a2c] text-white">
      {/* Hero Section */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0b2a46] to-[#081a2c]"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534759846116-57975b3c0c91?auto=format&fit=crop&w=2100&q=60')] bg-cover bg-center opacity-15"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.15),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Clinical Communication Solution
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-pink-200 bg-clip-text text-transparent">
              Secure, Intelligent
              <br />
              <span className="text-4xl md:text-5xl">Clinical Workflows</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto mb-12 leading-relaxed">
              Revolutionize clinical communication with AI-driven automation, secure messaging, and intelligent routing that ensures zero missed connections and 99.9% uptime.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="px-8 py-4 text-lg bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 border-0 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group">
                Request Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2 border-white/30 text-white hover:bg-white/10 rounded-full backdrop-blur-sm">
                View Security Features
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-32 px-6 bg-gradient-to-r from-slate-800/50 to-purple-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Advanced Clinical Communication Features
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Every feature designed to ensure seamless, secure, and intelligent clinical communication
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Phone className="w-12 h-12" />,
                title: "Automated Switchboard",
                description: "AI-powered call routing that understands context, urgency, and provider availability to ensure every call reaches the right person instantly.",
                features: ["Intelligent Routing", "Context Recognition", "Urgency Detection", "Provider Availability"]
              },
              {
                icon: <MessageSquare className="w-12 h-12" />,
                title: "Secure Messaging",
                description: "HIPAA-compliant messaging platform with end-to-end encryption, message tracking, and seamless integration with clinical workflows.",
                features: ["End-to-End Encryption", "Message Tracking", "Clinical Integration", "Audit Trails"]
              },
              {
                icon: <Bell className="w-12 h-12" />,
                title: "Provider On-Call",
                description: "Intelligent on-call management that automatically routes urgent calls, manages schedules, and ensures 24/7 coverage without gaps.",
                features: ["Automatic Routing", "Schedule Management", "24/7 Coverage", "Escalation Protocols"]
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Code Workflows",
                description: "Automated emergency response workflows that instantly notify the right teams, track response times, and ensure protocol compliance.",
                features: ["Emergency Protocols", "Team Notifications", "Response Tracking", "Compliance Monitoring"]
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Team Collaboration",
                description: "Advanced collaboration tools that connect clinical teams, share patient information securely, and coordinate care seamlessly.",
                features: ["Team Coordination", "Secure Sharing", "Care Coordination", "Real-time Updates"]
              },
              {
                icon: <Lock className="w-12 h-12" />,
                title: "Advanced Security",
                description: "Enterprise-grade security with multi-factor authentication, role-based access control, and comprehensive audit logging.",
                features: ["Multi-Factor Auth", "Role-Based Access", "Audit Logging", "Compliance Monitoring"]
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group"
              >
                <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-200 transition-colors">{feature.title}</h3>
                    <p className="text-purple-100 mb-6 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.features.map((item, j) => (
                        <li key={j} className="flex items-center text-purple-200">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Proven Clinical Impact
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              See how intelligent clinical communication transforms healthcare delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { number: "99.9%", label: "Uptime Guarantee", description: "Enterprise-grade reliability with 99.9% uptime and instant failover capabilities" },
              { number: "85%", label: "Faster Response Times", description: "Average response time reduced from 12 minutes to 1.8 minutes for urgent calls" },
              { number: "60%", label: "Reduction in Missed Calls", description: "Intelligent routing and automated escalation eliminate missed critical communications" },
              { number: "100%", label: "HIPAA Compliance", description: "Full compliance with HIPAA, HITECH, and other healthcare security regulations" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-purple-200 font-semibold mb-3">{stat.label}</div>
                <div className="text-purple-100 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-32 px-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Seamless Integration
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Works seamlessly with your existing clinical systems and workflows
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "EHR Integration",
                description: "Native integrations with Epic, Cerner, athenahealth, and other major EHR systems for seamless data flow.",
                icon: "🏥"
              },
              {
                title: "CCaaS Platforms",
                description: "Compatible with 8x8, RingCentral, Five9, and other leading contact center platforms.",
                icon: "📞"
              },
              {
                title: "Clinical Systems",
                description: "Integrates with nurse call systems, paging systems, and other clinical communication tools.",
                icon: "🔗"
              }
            ].map((integration, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{integration.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-white">{integration.title}</h3>
                <p className="text-purple-100">{integration.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Ready to Revolutionize Clinical Communication?
            </h2>
            <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
              Join leading health systems that have transformed clinical communication with SpinSci's intelligent platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="px-12 py-6 text-xl bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 border-0 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group">
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
