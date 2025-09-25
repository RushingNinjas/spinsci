"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Zap, Shield, Users, TrendingUp, Star, Play, BarChart3 } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#0b2a46] to-[#081a2c] text-white overflow-hidden">
      <Navigation />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        {/* Background Images */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-[#2A9DF4] to-cyan-500"></div>
        <div className="absolute top-6 left-6 md:top-10 md:left-10 z-20">
          <img
            src="/graphics/thumbnail_image001.png"
            alt="SpinSci"
            className="h-8 md:h-10 w-auto opacity-90"
          />
        </div>
        <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=2100&q=60)] bg-cover bg-center opacity-25"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A9DF4]/25 via-[#2A9DF4]/20 to-[#1b6fb4]/20"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] bg-[url(/graphics/hero-waves.svg)] bg-bottom bg-cover opacity-60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.15),transparent_50%)]"></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            {/* removed badge per request */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent leading-tight">
              Better Access, Better Care
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">Patient & Provider Workflows Automated</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed">
              Enterprise AI company that eliminates healthcare friction, reduces costs,
              and delivers exceptional patient experiences at scale.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
                    <Button size="lg" className="px-8 py-4 text-lg bg-gradient-to-r from-[#2A9DF4] to-[#1b6fb4] hover:from-[#2191e8] hover:to-[#185f98] border-0 rounded-full shadow-2xl hover:shadow-[#2A9DF4]/25 transition-all duration-300 group">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: "400M+", label: "Healthcare Interactions" },
              { number: "60M+", label: "Patients Served" },
              { number: "40%", label: "Cost Reduction" },
                      { number: "160", label: "Customers" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
        />
      </section>

      {/* Solutions Section */}
      <section className="py-32 px-6 relative bg-gradient-to-br from-[#2A9DF4]/8 via-blue-50/12 to-cyan-50/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              AI Enabled Healthcare Workflow Solutions
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Three powerful platforms that work together to eliminate every point of friction in healthcare delivery
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12" />,
                title: "Patient Access Care",
                subtitle: "AI-Powered Digital Front Door",
                description: "Transform patient access with intelligent self-service, predictive scheduling, and seamless omni-channel experiences that reduce wait times by 70%.",
                features: ["Smart Scheduling", "Predictive Triage", "Omni-Channel Support", "Real-time Analytics"],
                        gradient: "from-[#2A9DF4] to-[#1b6fb4]",
                link: "/solutions/patient-access",
                imageUrl: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=60"
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Clinical Communication",
                subtitle: "Secure, Intelligent Workflows",
                description: "Revolutionize clinical communication with AI-driven automation, secure messaging, and intelligent routing that ensures zero missed connections.",
                features: ["Automated Switchboard", "Secure Messaging", "Code Workflows", "Provider On-Call"],
                gradient: "from-purple-500 to-pink-500",
                link: "/solutions/clinical-communication",
                imageUrl: "https://images.unsplash.com/photo-1578496781936-3881b47a0a1a?auto=format&fit=crop&w=1200&q=60"
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: "Patient Financial Services",
                subtitle: "Frictionless Payment Experience",
                description: "Eliminate billing friction with intelligent payment orchestration, automated reconciliation, and personalized financial guidance that increases collections by 45%.",
                features: ["Payment Orchestration", "EHR Reconciliation", "Smart Reminders", "Pause/Resume"],
                gradient: "from-green-500 to-emerald-500",
                link: "/solutions/financial-services",
                imageUrl: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=1200&q=60"
              }
            ].map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="group"
              >
                <Link href={solution.link}>
                  <Card className="relative overflow-hidden h-full bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#2A9DF4]/25 cursor-pointer">
                    {solution.imageUrl && (
                      <div
                        className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                        style={{ backgroundImage: `url(${solution.imageUrl})` }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 bg-gradient-to-r ${solution.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        {solution.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-200 transition-colors">{solution.title}</h3>
                      <p className="text-blue-300 font-medium mb-4">{solution.subtitle}</p>
                      <p className="text-blue-100 mb-6 leading-relaxed">{solution.description}</p>
                      <ul className="space-y-3">
                        {solution.features.map((feature, j) => (
                          <li key={j} className="flex items-center text-blue-200">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 space-y-2">
                        <div className="flex items-center text-blue-300 group-hover:text-white transition-colors">
                          <span className="text-sm font-medium">Learn More</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                        <div className="flex gap-4 text-sm">
                          <span className="text-blue-300 hover:text-white underline decoration-transparent hover:decoration-white/40 transition-colors">Case Studies</span>
                          <span className="text-blue-300 hover:text-white underline decoration-transparent hover:decoration-white/40 transition-colors">ROI Calculator</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SpinSci Section */}
      <section className="py-32 px-6 bg-gradient-to-r from-[#2A9DF4]/20 via-blue-600/15 to-cyan-500/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Why Healthcare Leaders Choose SpinSci
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Built by healthcare veterans, powered by cutting-edge AI, trusted by the industry&apos;s most innovative health systems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Deep Healthcare DNA",
                description: "Founded by healthcare veterans with 20+ years of experience building solutions that actually work in real clinical environments.",
                icon: "🏥"
              },
              {
                title: "Proven at Scale",
                description: "Processing 400M+ healthcare interactions annually, touching 60M+ patients across the nation&apos;s leading health systems.",
                icon: "📊"
              },
              {
                title: "Universal Integration",
                description: "Native integrations with Epic, Cerner, athenahealth, and all major CCaaS platforms. Deploy in weeks, not months.",
                icon: "🔗"
              },
              {
                title: "AI That Delivers",
                description: "Our proprietary AI engine focuses on measurable outcomes: reduced costs, improved satisfaction, and better clinical outcomes.",
                icon: "🤖"
              },
              {
                title: "Enterprise Ready",
                description: "Backed by leading healthcare investors and innovation partners. Built for enterprise scale with 99.9% uptime guarantee.",
                icon: "🏢"
              },
              {
                title: "Future-Proof Platform",
                description: "Continuously evolving AI capabilities that adapt to changing healthcare needs and regulatory requirements.",
                icon: "🚀"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group"
              >
                <div className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/15 hover:border-white/30 transition-all duration-300 h-full">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-200 transition-colors">{item.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-blue-600/10 via-[#2A9DF4]/5 to-indigo-600/10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Trusted by Leading CCaaS, UCaaS and EHR Vendors
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Leading technology partners trust SpinSci to deliver exceptional healthcare automation solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center"
          >
            {["Epic", "Cerner", "athenahealth", "8x8", "RingCentral"].map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="w-32 h-16 bg-white/15 backdrop-blur-sm border border-white/30 rounded-xl flex items-center justify-center text-white font-semibold hover:bg-white/25 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#2A9DF4]/20"
              >
                {partner}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-32 px-6 bg-gradient-to-r from-[#2A9DF4]/25 via-blue-600/20 to-cyan-500/25 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
              &quot;SpinSci didn&apos;t just improve our patient access—it revolutionized it. We cut call times in half, 
              moved 40% of scheduling to digital channels, and our patient satisfaction scores increased by 35%. 
              This is the future of healthcare delivery.&quot;
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                JS
              </div>
              <div className="text-left">
                <p className="text-white font-semibold text-lg">Dr. Jennifer Smith</p>
                <p className="text-blue-200">Chief Information Officer, Regional Health System</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-indigo-600/15 via-[#2A9DF4]/10 to-blue-600/15">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Join the healthcare revolution. See how SpinSci can transform your health system in just 30 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="px-12 py-6 text-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 border-0 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group">
                Start Your Transformation
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="px-12 py-6 text-xl border-2 border-white/30 text-white hover:bg-white/10 rounded-full backdrop-blur-sm">
                Schedule a Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-white/10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">SpinSci</h3>
              <p className="text-blue-200 text-lg leading-relaxed mb-6">
                The AI-powered platform that&apos;s transforming healthcare access, communication, and financial services for health systems nationwide.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                  Request Demo
                </Button>
                <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                  Contact Sales
                </Button>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Solutions</h4>
              <ul className="space-y-3">
                {["Patient Access Care", "Clinical Communication", "Patient Financial Services", "AI Analytics"].map((item, i) => (
                  <li key={i} className="text-blue-200 hover:text-white transition-colors cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Connect</h4>
              <ul className="space-y-3">
                <li className="text-blue-200">info@spinsci.com</li>
                <li className="text-blue-200">1-800-SPINSCI</li>
                <li className="text-blue-200">Enterprise Support</li>
                <li className="text-blue-200">Developer Portal</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-blue-300">© {new Date().getFullYear()} SpinSci. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}