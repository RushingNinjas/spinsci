"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Zap, Shield, Users, TrendingUp, Star, Play, BarChart3, ChevronUp } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#0b2a46] to-[#081a2c] text-white overflow-hidden">
      <Navigation />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-[#2A9DF4] to-cyan-500"></div>
        <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=2100&q=60)] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A9DF4]/25 via-[#2A9DF4]/20 to-[#1b6fb4]/20"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] bg-[url(/graphics/hero-waves.svg)] bg-bottom bg-cover opacity-60"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.2),transparent_60%)]"></div>
        
        {/* Floating Geometric Shapes */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg opacity-60 blur-sm"
        />
        <motion.div
          animate={{ 
            y: [0, 40, 0],
            rotate: [360, 180, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-50 blur-sm"
        />
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            x: [0, 20, 0],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-40 blur-sm"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            x: [0, -15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-14 h-14 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg opacity-50 blur-sm"
        />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 rounded-full text-yellow-300 text-sm font-medium mb-8 backdrop-blur-sm"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 mr-2"
              >
                ⚡
              </motion.div>
              AI-Powered Healthcare Revolution
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              <motion.span
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="bg-gradient-to-r from-white via-blue-100 via-cyan-200 to-indigo-200 bg-clip-text text-transparent bg-[length:200%_100%]"
              >
                Better Access, Better Care
              </motion.span>
              <br />
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-cyan-200 to-blue-300 bg-clip-text text-transparent"
              >
                Patient & Provider Workflows Automated
              </motion.span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Enterprise AI company that eliminates healthcare friction, reduces costs, and delivers exceptional patient experiences at scale.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="px-8 py-4 text-lg bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 border-0 rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 group text-black font-bold" asChild>
                <Link href="/contact" className="text-black">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Play className="mr-2 w-5 h-5" />
                  </motion.div>
                  Get Started
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: "400M+", label: "Healthcare Interactions", color: "from-blue-400 to-cyan-400" },
              { number: "60M+", label: "Patients Served", color: "from-purple-400 to-pink-400" },
              { number: "40%", label: "Cost Reduction", color: "from-emerald-400 to-teal-400" },
              { number: "160", label: "Customers", color: "from-yellow-400 to-orange-400" }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
              >
                <motion.div 
                  className="relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
                  whileHover={{ 
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                    borderColor: "rgba(59, 130, 246, 0.5)"
                  }}
                >
                  <motion.div 
                    className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                    animate={{ 
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundSize: "200% 100%" }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-blue-200 text-sm group-hover:text-white transition-colors">{stat.label}</div>
                  
                  {/* Animated background glow */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl`}
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0, 0.1, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            x: [0, 10, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, 25, 0],
            x: [0, -15, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            x: [0, 20, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-5 w-16 h-16 bg-gradient-to-r from-emerald-500/25 to-teal-500/25 rounded-lg blur-lg"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            x: [0, -10, 0],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-5 w-24 h-24 bg-gradient-to-r from-yellow-500/25 to-orange-500/25 rounded-full blur-lg"
        />
      </section>

      {/* Solutions Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=2100&q=60)] bg-cover bg-center opacity-12"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/12 via-[#2A9DF4]/10 to-cyan-400/12"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/12 via-transparent to-white/12"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl"
          />
          <motion.div
            animate={{ 
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"
          />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 border border-emerald-400/30 rounded-full text-emerald-300 text-sm font-medium mb-8 backdrop-blur-sm"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 mr-2"
              >
                🚀
              </motion.div>
              AI-Powered Solutions
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <motion.span
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="bg-gradient-to-r from-white via-blue-100 via-cyan-200 to-blue-200 bg-clip-text text-transparent bg-[length:200%_100%]"
              >
                AI Enabled Healthcare Workflow Solutions
              </motion.span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Three powerful platforms that work together to eliminate every point of friction in healthcare delivery
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12" />,
                title: "Patient Access Care",
                subtitle: "Cut Down Time to Visit with AI Agents",
                description: "Go beyond scheduling with end-to-end automation that handles the entire patient journey — from referral to refill — in one seamless experience.",
                features: ["Automated scheduling", "Referral intake automation", "Prior-authorization automation", "Order-to-registration automation", "Faster retail & specialty pharmacy refills"],
                        gradient: "from-[#2A9DF4] to-[#1b6fb4]",
                link: "/solutions/patient-access",
                imageUrl: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=60"
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Clinical Communication",
                subtitle: "Secure, Intelligent Workflows",
                description: "Keep providers, nurses, and staff connected in real-time with secure, reliable communication with AI-driven automated Agents:",
                features: ["Automated Operator Console", "Automated Transfer Center", "Code and on-call workflows", "CCaaS and EHR integrated", "No missed connections"],
                gradient: "from-purple-500 to-pink-500",
                link: "/solutions/clinical-communication",
                imageUrl: "https://images.unsplash.com/photo-1578496781936-3881b47a0a1a?auto=format&fit=crop&w=1200&q=60"
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: "Patient Financial Services",
                subtitle: "Frictionless Payment Experience",
                description: "Improve patient payment collections with automated financial tools with AI agents for self-service and AI Assistance for high touch human touch in contact centers.",
                features: ["Payment Orchestration", "EHR Reconciliation", "Eliminate PCI exposure", "Native EHR workflows", "CCaaS Enabled"],
                gradient: "from-green-500 to-emerald-500",
                link: "/solutions/financial-services",
                imageUrl: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=1200&q=60"
              }
            ].map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="group"
                whileHover={{ y: -10 }}
              >
                <Link href={solution.link}>
                  <Card className="relative overflow-hidden h-full bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#2A9DF4]/25 cursor-pointer">
                    {/* Animated background gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      animate={{ 
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
                      }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {solution.imageUrl && (
                      <motion.div
                        className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                        style={{ backgroundImage: `url(${solution.imageUrl})` }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    
                    <CardContent className="p-8 relative z-10">
                      <motion.div 
                        className={`w-16 h-16 bg-gradient-to-r ${solution.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {solution.icon}
                      </motion.div>
                      
                      <motion.h3 
                        className="text-2xl font-bold mb-2 text-white group-hover:text-blue-200 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {solution.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-blue-300 font-medium mb-4"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {solution.subtitle}
                      </motion.p>
                      
                      <p className="text-blue-100 mb-6 leading-relaxed">{solution.description}</p>
                      
                      <ul className="space-y-3">
                        {solution.features.map((feature, j) => (
                          <motion.li 
                            key={j} 
                            className="flex items-center text-blue-200"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: j * 0.1 }}
                            whileHover={{ x: 5, color: "#ffffff" }}
                          >
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            </motion.div>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                      
                      <motion.div 
                        className="mt-6 space-y-2"
                        whileHover={{ y: -2 }}
                      >
                        <div className="flex items-center text-blue-300 group-hover:text-white transition-colors">
                          <span className="text-sm font-medium">Learn More</span>
                          <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </motion.div>
                        </div>
                        <div className="flex gap-4 text-sm">
                          <motion.span 
                            className="text-blue-300 hover:text-white underline decoration-transparent hover:decoration-white/40 transition-colors"
                            whileHover={{ scale: 1.05 }}
                          >
                            Case Studies
                          </motion.span>
                          <motion.span 
                            className="text-blue-300 hover:text-white underline decoration-transparent hover:decoration-white/40 transition-colors"
                            whileHover={{ scale: 1.05 }}
                          >
                            ROI Calculator
                          </motion.span>
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SpinSci AI Factory Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2100&q=60)] bg-cover bg-center opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 via-pink-400/12 to-indigo-500/15"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/15 via-transparent to-white/15"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              x: [0, -100, 0],
              y: [0, 50, 0],
              rotate: [0, -180, -360]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-20 w-48 h-48 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              x: [0, 120, 0],
              y: [0, -40, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-20 w-36 h-36 bg-gradient-to-r from-cyan-400/15 to-blue-400/15 rounded-full blur-3xl"
          />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-400/20 to-pink-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium mb-8 backdrop-blur-sm"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-4 h-4 mr-2"
              >
                ⚙️
              </motion.div>
              AI Factory Technology
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <motion.span
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="bg-gradient-to-r from-white via-purple-100 via-pink-200 to-blue-200 bg-clip-text text-transparent bg-[length:200%_100%]"
              >
                SpinSci AI Factory
              </motion.span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Two powerful AI components that work together to deliver intelligent healthcare automation at scale
            </motion.p>
          </motion.div>

          {/* Why AI Agents Are Different */}
          <section className="mt-14">
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-6">Why AI Agents Are Different</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[ 
                {t:"Autonomy vs. Reactivity", d:"Agents plan, decide and act to achieve goals — not just respond to inputs.", icon:"🚀"},
                {t:"Multi‑Step Reasoning", d:"Break down problems, think ahead and adapt like a digital project manager.", icon:"🧠"},
                {t:"Tool & Data Orchestration", d:"Coordinate APIs, systems and streams like a conductor leading an orchestra.", icon:"🔗"},
                {t:"Personalization at Scale", d:"Remember context, learn preferences and tailor actions per user/workflow.", icon:"👤"},
                {t:"Continuous Improvement", d:"LLMs + feedback loops = smarter outcomes over time, automatically.", icon:"⚡"}
              ].map((i)=> (
                <div key={i.t} className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur hover:bg-white/15 transition-colors">
                  <div className="text-2xl mb-2">{i.icon}</div>
                  <div className="text-lg font-semibold mb-1">{i.t}</div>
                  <div className="text-blue-100/90">{i.d}</div>
                </div>
              ))}
            </div>
          </section>

          {/* SpinSci AI Agents & Sub‑Agents */}
          <section className="mt-16">
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8">SpinSci AI Agents & Sub‑Agents</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[ 
                {title:"Scheduling Agents", items:["Patient Identification & Verification","Appointment Cancel","Appointment Confirm","Appointment Reschedule","Open Scheduling","Direct Scheduling","Ticket Scheduling","Prior‑Auth","Registration (Orders / Referral)"]},
                {title:"Billing Agents", items:["Account Summary","Bill Pay","Payment Reconciliation","General Ledger"]},
                {title:"Pharmacy Refill Agents", items:["Prescription Details","Prescription Order","Refill Reminder","Pickup Reminder","Benefits Management","Adherence Tracking"]}
              ].map((c)=> (
                <div key={c.title} className="relative overflow-hidden rounded-2xl bg-white/10 border border-white/20 backdrop-blur">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400" />
                  <div className="p-6">
                    <h4 className="text-lg font-semibold mb-3">{c.title}</h4>
                    <ul className="space-y-2 text-blue-100/90 text-sm">
                      {c.items.map((x)=> (
                        <li key={x} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70 inline-block" /><span>{x}</span></li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Solution Overview (Simple Flow) */}
          <section className="mt-16">
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-6">Solution Overview</h3>
            <p className="text-center text-blue-100/90 max-w-4xl mx-auto mb-8">Pre‑built Agents orchestrated by an LLM across all EHRs via MCP and a Rules Abstraction Engine — resulting in a unified, intelligent system that automates workflows and elevates patient engagement.</p>
            <div className="grid gap-4">
              <div className="mx-auto w-full max-w-3xl">
                <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur p-5">
                  <div className="text-center">
                    <div className="inline-block rounded-xl px-5 py-3 bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-white/20">LLM (Brain of the System)</div>
                  </div>
                  <div className="my-3 text-center text-white/80">↓</div>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <div className="rounded-xl px-5 py-3 bg-white/10 border border-white/20">MCP (Middleware Communication Platform)</div>
                    <div className="rounded-xl px-5 py-3 bg-white/10 border border-white/20">Rules Abstraction Engine</div>
                  </div>
                  <div className="my-3 text-center text-white/80">↓</div>
                  <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
                    {["Epic","Oracle","Athena","NextGen","eClinicalWorks","Cerner"].map((e)=> (
                      <span key={e} className="rounded-full px-3 py-1 bg-white/10 border border-white/20">{e}</span>
                    ))}
                  </div>
                  <div className="my-3 text-center text-white/80">↓</div>
                  <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
                    {["Scheduling Agents","Billing Agents","Pharmacy Agents"].map((e)=> (
                      <span key={e} className="rounded-full px-3 py-1 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border border-white/20">{e}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* BYOA Section */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8 }}
              className="group"
              whileHover={{ y: -10, rotateY: 5 }}
            >
              <div className="relative overflow-hidden h-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#2A9DF4]/25 p-8">
                {/* Animated background gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-[#2A9DF4]/10 via-blue-600/5 to-cyan-500/10 opacity-50"
                  animate={{ 
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Floating particles */}
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full"
                />
                <motion.div
                  animate={{ 
                    y: [0, 15, 0],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-cyan-400 rounded-full"
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-r from-[#2A9DF4] to-[#1b6fb4] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Users className="w-10 h-10" />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-3xl font-bold mb-4 text-white group-hover:text-blue-200 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    The Bridge
                  </motion.h3>
                  
                  <motion.p 
                    className="text-blue-300 font-medium mb-4 text-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    Connect Any AI Agent
                  </motion.p>
                  
                  <p className="text-blue-100 mb-6 leading-relaxed text-lg">
                    Don&apos;t get locked into one AI platform. The Bridge lets you bring your own AI agents or use SpinSci&apos;s — seamlessly connecting them to healthcare workflows so you get more out of your existing investments.
                  </p>
                  
                  <ul className="space-y-3">
                    {[
                      "Works with any CCaaS & UCaaS platform",
                      "Compatible with all major AI agents", 
                      "Custom or SpinSci-proven agent deployment",
                      "Seamless healthcare workflow integration"
                    ].map((feature, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-center text-blue-200"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        whileHover={{ x: 5, color: "#ffffff" }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        </motion.div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Brain Section */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8 }}
              className="group"
              whileHover={{ y: -10, rotateY: -5 }}
            >
              <div className="relative overflow-hidden h-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 p-8">
                {/* Animated background gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-indigo-500/10 opacity-50"
                  animate={{ 
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
                  }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Floating particles */}
                <motion.div
                  animate={{ 
                    y: [0, -25, 0],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-6 left-4 w-2.5 h-2.5 bg-purple-400 rounded-full"
                />
                <motion.div
                  animate={{ 
                    y: [0, 18, 0],
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-pink-400 rounded-full"
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <BarChart3 className="w-10 h-10" />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-3xl font-bold mb-4 text-white group-hover:text-purple-200 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    The Brain
                  </motion.h3>
                  
                  <motion.p 
                    className="text-purple-300 font-medium mb-4 text-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    Healthcare Intelligence Built In
                  </motion.p>
                  
                  <p className="text-blue-100 mb-6 leading-relaxed text-lg">
                    AI agents are only as good as the data and rules they understand. The Brain comes preloaded with healthcare workflows, PHI access, and automation logic — making your AI safe, smart, and deployment-ready from day one.
                  </p>
                  
                  <ul className="space-y-3">
                    {[
                      "Universal EHR integration",
                      "Pre-packaged healthcare workflows",
                      "Patient access, clinical, and financial automation",
                      "Secure, scalable, and compliance-ready"
                    ].map((feature, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-center text-blue-200"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        whileHover={{ x: 5, color: "#ffffff" }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        </motion.div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Integration Flow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-[#2A9DF4] to-[#1b6fb4] rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <ArrowRight className="w-8 h-8 text-blue-300" />
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
            </div>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              &quot;The Bridge connects. The Brain powers.&quot;
              <br />
              &quot;The Bridge + The Brain = the only AI ecosystem that unites any agent with healthcare intelligence for true end-to-end automation.&quot;
            </p>
          </motion.div>
        </div>
      </section>

      {/**
       * Why SpinSci Section (temporarily disabled)
       * To re-enable in future, remove this comment block.
       *
       * <section className="py-32 px-6 relative overflow-hidden">
       *   <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=2100&q=60)] bg-cover bg-center opacity-12"></div>
       *   <div className="absolute inset-0 bg-gradient-to-r from-[#2A9DF4]/15 via-blue-500/12 to-cyan-400/15"></div>
       *   <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-white/12"></div>
       *   <div className="max-w-7xl mx-auto relative z-10">
       *     <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-20">
       *       <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Why Healthcare Leaders Trust SpinSci</h2>
       *       <p className="text-xl text-blue-100 max-w-3xl mx-auto">Driven by culture. Powered by passion. Proven at scale.</p>
       *     </motion.div>
       *     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
       *       {items.map((item, i) => (
       *         <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group">
       *           <div className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/15 hover:border-white/30 transition-all duration-300 h-full">
       *             <div className="text-4xl mb-4">{item.icon}</div>
       *             <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-200 transition-colors">{item.title}</h3>
       *             <p className="text-blue-100 leading-relaxed">{item.description}</p>
       *           </div>
       *         </motion.div>
       *       ))}
       *     </div>
       *   </div>
       * </section>
       */}

      {/* Partners Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2100&q=60)] bg-cover bg-center opacity-8"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-[#2A9DF4]/8 to-indigo-500/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
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
              Strategic partnerships that power exceptional healthcare automation solutions
            </p>
          </motion.div>

          {/* Partner Categories */}
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Strategic Partners */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 h-full">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Strategic Partners</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["NICE CXOne", "Cisco", "Five9", "Avaya", "Genesys", "Vonage", "Zoom", "RingCentral", "8x8", "Intermedia"].map((partner, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      className="bg-white/20 rounded-lg p-4 flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-105"
                    >
                      {partner === "Cisco" ? (
                        <img src="/logos/Cisco.jpeg" alt="Cisco" className="h-10 w-auto object-contain" />
                      ) : partner === "NICE CXOne" ? (
                        <img src="/logos/NICECXOne.png" alt="NICE CXOne" className="h-10 w-auto object-contain" />
                      ) : partner === "Five9" ? (
                        <img src="/logos/Five9.jpeg" alt="Five9" className="h-10 w-auto object-contain" />
                      ) : partner === "Avaya" ? (
                        <img src="/logos/avaya.jpeg" alt="Avaya" className="h-10 w-auto object-contain" />
                      ) : partner === "Genesys" ? (
                        <img src="/logos/genesys.jpeg" alt="Genesys" className="h-10 w-auto object-contain" />
                      ) : partner === "Vonage" ? (
                        <img src="/logos/vonage.png" alt="Vonage" className="h-10 w-auto object-contain" />
                      ) : partner === "Zoom" ? (
                        <img src="/logos/zoom.png" alt="Zoom" className="h-10 w-auto object-contain" />
                      ) : partner === "RingCentral" ? (
                        <img src="/logos/ringcentral.jpeg" alt="RingCentral" className="h-10 w-auto object-contain" />
                      ) : partner === "8x8" ? (
                        <img src="/logos/8x8.jpeg" alt="8x8" className="h-10 w-auto object-contain" />
                      ) : partner === "Intermedia" ? (
                        <img src="/logos/intermedia.jpeg" alt="Intermedia" className="h-10 w-auto object-contain" />
                      ) : (
                        <div className="h-10 w-16 bg-white/40 rounded flex items-center justify-center">
                          <span className="text-white text-sm font-bold">{partner.charAt(0)}</span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Value Add Partners */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 h-full">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Value Add Partners</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["CDW", "WWT", "Presidio", "ConvergeOne", "NTT", "CX Advanced Solutions", "Trace3"].map((partner, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      className="bg-white/20 rounded-lg p-3 flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-105"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center mr-2">
                        <span className="text-white text-xs font-bold">{partner.charAt(0)}</span>
                      </div>
                      <span className="text-white text-xs font-medium">{partner}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* EHR Partners */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 h-full">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">EHR Partners</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["Oracle Health", "Epic", "Athena Health", "NextGen", "Meditech", "eClinicalWorks"].map((partner, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      className="bg-white/20 rounded-lg p-3 flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-105"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded flex items-center justify-center mr-2">
                        <span className="text-white text-xs font-bold">{partner.charAt(0)}</span>
                      </div>
                      <span className="text-white text-xs font-medium">{partner}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Portfolio Companies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 h-full">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Portfolio Companies</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["eHealth", "Persivia", "TimeDoc", "Rhythym"].map((company, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      className="bg-white/20 rounded-lg p-3 flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-105"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded flex items-center justify-center mr-2">
                        <span className="text-white text-xs font-bold">{company.charAt(0)}</span>
                      </div>
                      <span className="text-white text-xs font-medium">{company}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Our Clients Are Saying Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=2100&q=60)] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A9DF4]/18 via-blue-500/15 to-cyan-400/18"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-white/12"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              What Our Clients Are Saying
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Real feedback from healthcare leaders who have transformed their operations with SpinSci.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Sometimes we’re not very adaptive to new technologies, but our nursing staff loved SpinSci and saw the value the minute we went live with it.",
                rating: 5,
                source: "Midwest Hospital, ACO – Epic EHR"
              },
              {
                quote: "SpinSci has allowed us 6 more hours per day to really get the patient experience right. Losing that call could really be their life.",
                rating: 5,
                source: "Southeast – FQHC – Epic EHR"
              },
              {
                quote: "Patients were unhappy. We were able to take technology, integrate it, and now we’re able to provide a completely different experience. Now when a patient calls, we know who’s calling and why.",
                rating: 5,
                source: "South – CDO – Oracle Health"
              },
              {
                quote: "We’ve been able to decrease patient lookup time — SpinSci provided real results for our hospital. They’re now a trusted advisor.",
                rating: 5,
                source: "Northeast – Community Health System – athenahealth"
              },
              {
                quote: "When a patient calls, the technology recognizes the phone number and automatically opens the correct EHR. After implementation, we saved about 43 seconds per call.",
                rating: 4,
                source: "West Coast – IDN – NextGen"
              },
              {
                quote: "Our contact center agents used to work in 11 screens, now we have that down to 1 operator console thanks to SpinSci. It’s also provided a higher level of personal experience.",
                rating: 5,
                source: "Texas – Academic Medical Center – Epic EHR"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 h-full">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star 
                        key={starIndex} 
                        className={`w-5 h-5 ${
                          starIndex < Math.floor(testimonial.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : starIndex < testimonial.rating 
                            ? 'text-yellow-400 fill-current opacity-50' 
                            : 'text-gray-400'
                        }`} 
                      />
                    ))}
                  </div>
                  <blockquote className="text-white text-lg leading-relaxed mb-4 italic">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <div className="text-center">
                    {testimonial.source && (
                      <p className="text-blue-300 text-sm">{testimonial.source}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=2100&q=60)] bg-cover bg-center opacity-12"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/12 via-[#2A9DF4]/10 to-blue-500/12"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/12 via-transparent to-white/12"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
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
            <div className="flex justify-center">
              <Button size="lg" className="px-12 py-6 text-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 border-0 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group" asChild>
                <Link href="/contact">
                  Start Your Transformation
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-white/10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-white font-semibold mb-6 text-lg">SpinSci</h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://spinsci.com/eula/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white underline decoration-transparent hover:decoration-white/40 transition-colors">
                    EULA
                  </a>
                </li>
                <li>
                  <a href="https://spinsci.com/spinsci-healthcare-privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white underline decoration-transparent hover:decoration-white/40 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="https://spinsci.com/spinsci-healthcare-posh-policy/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white underline decoration-transparent hover:decoration-white/40 transition-colors">
                    PoSH Policy
                  </a>
                </li>
                <li>
                  <a href="https://trust.spinsci.com" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white underline decoration-transparent hover:decoration-white/40 transition-colors">
                    Security Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Solutions</h4>
              <ul className="space-y-3">
                {["Patient Access Care", "Clinical Communication", "Patient Financial Services", "SpinSci AI", "Portfolio Offerings"].map((item, i) => (
                  <li key={i} className="text-blue-200 hover:text-white transition-colors cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Connect</h4>
              <ul className="space-y-3 text-blue-200">
                <li>14850 Quotum Dr., Ste 325</li>
                <li>Dallas TX 75254</li>
                <li>
                  <a href="tel:+19728918656" className="hover:text-white transition-colors">972-891-8656</a>
                </li>
                <li>
                  <a href="mailto:info@spinsci.com" className="hover:text-white transition-colors">info@spinsci.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-blue-300">© {new Date().getFullYear()} SpinSci. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-[#2A9DF4] to-[#1b6fb4] hover:from-[#2191e8] hover:to-[#185f98] text-white rounded-full shadow-2xl hover:shadow-[#2A9DF4]/25 transition-all duration-300 flex items-center justify-center group"
        >
          <ChevronUp className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform" />
        </motion.button>
      )}
    </div>
  );
}