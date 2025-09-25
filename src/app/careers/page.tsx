"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock, Users, Heart, Zap, Globe, Award, Coffee, Laptop } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Lead the development of our next-generation healthcare AI models and algorithms.",
      requirements: ["5+ years ML/AI experience", "Healthcare domain knowledge", "Python, TensorFlow/PyTorch"]
    },
    {
      title: "Product Manager - Patient Experience",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Drive product strategy for our patient-facing solutions and user experience.",
      requirements: ["3+ years product management", "Healthcare or SaaS experience", "Strong analytical skills"]
    },
    {
      title: "Clinical Implementation Specialist",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      description: "Help healthcare organizations successfully implement and optimize SpinSci solutions.",
      requirements: ["Clinical background preferred", "Implementation experience", "Strong communication skills"]
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build beautiful, responsive user interfaces for our healthcare platform.",
      requirements: ["React/Next.js expertise", "TypeScript experience", "Healthcare UI/UX knowledge"]
    },
    {
      title: "Sales Engineer",
      department: "Sales",
      location: "New York, NY",
      type: "Full-time",
      description: "Partner with sales team to demonstrate technical capabilities to healthcare prospects.",
      requirements: ["Technical background", "Sales experience", "Healthcare industry knowledge"]
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Maintain and scale our cloud infrastructure to support millions of healthcare interactions.",
      requirements: ["AWS/Azure experience", "Kubernetes knowledge", "Healthcare compliance (HIPAA)"]
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision coverage for you and your family"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Learning & Development",
      description: "Annual learning budget, conference attendance, and professional development opportunities"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Remote-First Culture",
      description: "Work from anywhere with flexible hours and a home office stipend"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Equity & Growth",
      description: "Competitive salary, equity participation, and clear career progression paths"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Work-Life Balance",
      description: "Unlimited PTO, mental health days, and flexible work arrangements"
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Top Equipment",
      description: "Latest MacBook Pro, monitor setup, and all the tools you need to succeed"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-[#2A9DF4] to-cyan-500 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-[#2A9DF4] to-cyan-500"></div>
        <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=2100&q=60)] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A9DF4]/25 via-[#2A9DF4]/20 to-[#1b6fb4]/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/20 border border-white/30 rounded-full text-white text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Join Our Team
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
              Build the Future of Healthcare
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed">
              Join a team of passionate healthcare innovators and AI experts who are transforming how patients and providers interact with healthcare technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="px-8 py-4 text-lg bg-white text-[#2A9DF4] hover:bg-blue-50 border-0 rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 group">
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Work at SpinSci */}
      <section className="py-32 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Why Work at SpinSci?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're not just building software—we're revolutionizing healthcare. Join us in making a real difference in millions of lives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-[#2A9DF4] to-cyan-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-200 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-blue-100 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Open Positions
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Find your next role in healthcare technology innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-200 transition-colors">
                          {position.title}
                        </h3>
                        <p className="text-[#2A9DF4] font-semibold mb-2">{position.department}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-blue-200 text-sm mb-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </div>
                        <div className="flex items-center text-blue-200 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.type}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-blue-100 mb-6 leading-relaxed">
                      {position.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-center text-blue-200 text-sm">
                            <div className="w-1.5 h-1.5 bg-[#2A9DF4] rounded-full mr-3"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="w-full bg-[#2A9DF4] hover:bg-[#2191e8] text-white group-hover:bg-white group-hover:text-[#2A9DF4] transition-all duration-300">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-32 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Our Culture
              </h2>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                At SpinSci, we believe that the best healthcare technology is built by diverse teams who 
                understand both the technical challenges and the human impact of what we're creating.
              </p>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                We foster a culture of innovation, collaboration, and continuous learning. Every team member 
                has a voice, and we encourage experimentation and calculated risk-taking to push the boundaries 
                of what's possible in healthcare technology.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-[#2A9DF4] mr-3" />
                  <span className="text-blue-100">Diverse, inclusive team from 15+ countries</span>
                </div>
                <div className="flex items-center">
                  <Zap className="w-6 h-6 text-[#2A9DF4] mr-3" />
                  <span className="text-blue-100">Fast-paced, innovative environment</span>
                </div>
                <div className="flex items-center">
                  <Heart className="w-6 h-6 text-[#2A9DF4] mr-3" />
                  <span className="text-blue-100">Mission-driven work with real impact</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=60"
                  alt="SpinSci team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-r from-[#2A9DF4]/20 to-cyan-500/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Don't See Your Role?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              We're always looking for exceptional talent. Send us your resume and let us know how you'd like to contribute to transforming healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="px-12 py-6 text-xl bg-white text-[#2A9DF4] hover:bg-blue-50 border-0 rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 group">
                Send Your Resume
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="px-12 py-6 text-xl border-2 border-white/30 text-white hover:bg-white/10 rounded-full backdrop-blur-sm">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
