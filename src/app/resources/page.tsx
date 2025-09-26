"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Download, Play, FileText, Video, Image, Users, TrendingUp } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function ResourcesPage() {
  const resources = [
    {
      category: "Product Sheets",
      items: [
        {
          title: "Patient Access Care Overview",
          description: "Comprehensive guide to our AI-powered patient access solution",
          type: "PDF",
          icon: <FileText className="w-6 h-6" />,
          downloadUrl: "#"
        },
        {
          title: "Clinical Communication Platform",
          description: "Detailed specifications and capabilities of our communication suite",
          type: "PDF",
          icon: <FileText className="w-6 h-6" />,
          downloadUrl: "#"
        },
        {
          title: "Financial Services Solution",
          description: "Complete overview of our payment orchestration platform",
          type: "PDF",
          icon: <FileText className="w-6 h-6" />,
          downloadUrl: "#"
        }
      ]
    },
    {
      category: "Videos & Demos",
      items: [
        {
          title: "Platform Demo - 5 Minutes",
          description: "Quick overview of SpinSci&apos;s complete healthcare automation platform",
          type: "Video",
          icon: <Play className="w-6 h-6" />,
          downloadUrl: "#"
        },
        {
          title: "Patient Access in Action",
          description: "See how our AI reduces wait times and improves patient satisfaction",
          type: "Video",
          icon: <Video className="w-6 h-6" />,
          downloadUrl: "#"
        },
        {
          title: "ROI Calculator Tutorial",
          description: "Learn how to calculate your potential savings with SpinSci",
          type: "Video",
          icon: <TrendingUp className="w-6 h-6" />,
          downloadUrl: "#"
        }
      ]
    },
    {
      category: "Case Studies",
      items: [
        {
          title: "Regional Health System Success Story",
          description: "How we helped reduce patient wait times by 70% and increase satisfaction by 45%",
          type: "PDF",
          icon: <FileText className="w-6 h-6" />,
          downloadUrl: "#"
        },
        {
          title: "Multi-Hospital Network Transformation",
          description: "Complete digital transformation case study with measurable results",
          type: "PDF",
          icon: <FileText className="w-6 h-6" />,
          downloadUrl: "#"
        },
        {
          title: "Financial Services ROI Analysis",
          description: "Detailed analysis showing 45% increase in payment collections",
          type: "PDF",
          icon: <FileText className="w-6 h-6" />,
          downloadUrl: "#"
        }
      ]
    },
    {
      category: "White Papers",
      items: [
        {
          title: "The Future of Healthcare Automation",
          description: "Industry insights on AI-driven healthcare transformation",
          type: "PDF",
          icon: <FileText className="w-6 h-6" />,
          downloadUrl: "#"
        },
        {
          title: "Patient Experience Optimization",
          description: "Best practices for improving patient satisfaction through technology",
          type: "PDF",
          icon: <FileText className="w-6 h-6" />,
          downloadUrl: "#"
        },
        {
          title: "Healthcare Data Security & Compliance",
          description: "Comprehensive guide to HIPAA compliance and data protection",
          type: "PDF",
          icon: <FileText className="w-6 h-6" />,
          downloadUrl: "#"
        }
      ]
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
              <FileText className="w-4 h-4 mr-2" />
              Digital Resources
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
              Resources & Downloads
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed">
              Access our comprehensive library of product information, case studies, demos, and industry insights to help you make informed decisions about healthcare automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-32 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Explore Our Resources
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Everything you need to understand, evaluate, and implement SpinSci&apos;s healthcare automation solutions
            </p>
          </motion.div>

          <div className="space-y-16">
            {resources.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              >
                <h3 className="text-3xl font-bold mb-8 text-white">{category.category}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                      className="group"
                    >
                      <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-[#2A9DF4] to-cyan-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                              {item.icon}
                            </div>
                            <span className="text-xs font-semibold text-blue-200 bg-blue-500/20 px-2 py-1 rounded-full">
                              {item.type}
                            </span>
                          </div>
                          <h4 className="text-xl font-bold mb-3 text-white group-hover:text-blue-200 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-blue-100 mb-6 leading-relaxed">
                            {item.description}
                          </p>
                          <Button 
                            className="w-full bg-[#2A9DF4] hover:bg-[#2191e8] text-white group-hover:bg-white group-hover:text-[#2A9DF4] transition-all duration-300"
                            onClick={() => window.open(item.downloadUrl, '_blank')}
                          >
                            <Download className="w-4 h-4 mr-2" />
                            {item.type === &apos;Video&apos; ? &apos;Watch Now&apos; : &apos;Download&apos;}
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
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
              Need More Information?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Can&apos;t find what you&apos;re looking for? Our team is here to help with custom demos, detailed consultations, and personalized solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="px-12 py-6 text-xl bg-white text-[#2A9DF4] hover:bg-blue-50 border-0 rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 group">
                Schedule a Demo
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="px-12 py-6 text-xl border-2 border-white/30 text-white hover:bg-white/10 rounded-full backdrop-blur-sm">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
