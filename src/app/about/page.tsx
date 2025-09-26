"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Users, Target, Heart, Award, Globe, Zap, Shield, Linkedin } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function AboutPage() {
  const leadership = [
    {
      name: "Andy Asava",
      title: "Chief Executive Officer",
      bio: "The Strategist - Growth, Strategy, and Inspiration. Works closely with the Founder to improve cross functional business alignment and to achieve SpinSci&apos;s long-term vision. His core focus is &apos;value creation&apos;.",
      image: "/leadership/andy-asava.jpg",
      linkedin: "https://linkedin.com/in/andy-asava" // Add real LinkedIn URL
    },
    {
      name: "Rajit Kumar",
      title: "Founder / Chief Innovation Officer",
      bio: "The Visionary - Transformational, Entrepreneurial, and Motivational. Since co-founding SpinSci in 2006, Rajit has transformed SpinSci from a service-based delivery organization into a true healthcare innovator with deep investments in patient engagement solutions.",
      image: "/leadership/rajit-kumar.jpg",
      linkedin: "https://linkedin.com/in/rajit-kumar" // Add real LinkedIn URL
    },
    {
      name: "Alice Liou",
      title: "Vice President of Finance & HR Ops",
      bio: "Finance and People Expert: Budgeting, Forecasting, Talent Acquisition and Workforce Planning. Specialist on financial analysis, strategic planning, budget preparation, team leadership and collaboration.",
      image: "/leadership/alice-liou.jpg",
      linkedin: "https://linkedin.com/in/alice-liou" // Add real LinkedIn URL
    },
    {
      name: "Doug Lang",
      title: "Senior Vice President of Services",
      bio: "COO | CCO | SaaS | CX | Customer Success. High-level executive responsible for leading and managing the service operations of SpinSci. With over 15 years of executive experience, he is a seasoned operational leader with a passion for customer success.",
      image: "/leadership/doug-lang.jpg",
      linkedin: "https://linkedin.com/in/doug-lang" // Add real LinkedIn URL
    },
    {
      name: "Ashvin Asava",
      title: "Chief Revenue Officer",
      bio: "Chief Revenue Officer - Sales Leadership, Sales Ops, and New Ventures. Moved into this position after his role as Vice President of Sales, showing his rapid trajectory at SpinSci. Has deep technical knowledge and strong understanding of healthcare provider challenges.",
      image: "/leadership/ashvin-asava.jpg",
      linkedin: "https://linkedin.com/in/ashvin-asava" // Add real LinkedIn URL
    },
    {
      name: "Rohit Potaraju",
      title: "Vice President of Product Management",
      bio: "The Product Leader - Roadmaps, Disruption and Excellence. Responsible for leading and developing the organization&apos;s expansive portfolio of solutions. Focuses on building impactful experiences in the Patient Engagement domain.",
      image: "/leadership/rohit-potaraju.jpg",
      linkedin: "https://linkedin.com/in/rohit-potaraju" // Add real LinkedIn URL
    },
    {
      name: "Cody Clark",
      title: "Vice President of Sales",
      bio: "Sales - Patient Journey, Relationships, and Execution. Thoroughly enjoys all aspects of meeting with customers, identifying areas where SpinSci can help, and providing a better healthcare experience for all involved.",
      image: "/leadership/cody-clark.jpg",
      linkedin: "https://linkedin.com/in/cody-clark" // Add real LinkedIn URL
    },
    {
      name: "Forrest Salsberry",
      title: "Vice President of Sales",
      bio: "Sales - Goal Attainment, Communication, and Relationships. Brings both B2B and healthcare experience to SpinSci. Has fostered deep relationships with customers and partners and strives to deliver excellent results.",
      image: "/leadership/forrest-salsberry.jpg",
      linkedin: "https://linkedin.com/in/forrest-salsberry" // Add real LinkedIn URL
    },
    {
      name: "John Hanson",
      title: "Vice President of Sales (North America)",
      bio: "Sales - Strategic, Leadership-Oriented, Revenue-Driven. Leads a team of direct and channel sales professionals who deliver innovative and advanced contact center solutions to clients across various industries.",
      image: "/leadership/john-hanson.jpg",
      linkedin: "https://linkedin.com/in/john-hanson" // Add real LinkedIn URL
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Patient-First",
      description: "Every decision we make is guided by what&apos;s best for patients and their families."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "We push the boundaries of what&apos;s possible in healthcare technology."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust & Security",
      description: "We maintain the highest standards of data protection and regulatory compliance."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work closely with healthcare providers to create solutions that truly work."
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
              About SpinSci
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
              Transforming Healthcare Through AI
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed">
              Founded by healthcare veterans and AI experts, SpinSci is on a mission to eliminate every point of friction in healthcare delivery, making exceptional patient experiences the standard.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-32 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Our Story
              </h2>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                SpinSci was born from a simple observation: healthcare is too complex for patients and providers alike. 
                Our founders, having spent decades in healthcare technology, witnessed firsthand the frustration of 
                patients waiting on hold, providers juggling multiple systems, and administrators struggling with 
                inefficient workflows.
              </p>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                We set out to change that. By combining deep healthcare expertise with cutting-edge AI technology, 
                we&apos;ve created a platform that doesn&apos;t just automate processes—it transforms the entire healthcare 
                experience for everyone involved.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">400M+</div>
                  <div className="text-blue-200 text-sm">Healthcare Interactions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">60M+</div>
                  <div className="text-blue-200 text-sm">Patients Served</div>
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
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=60"
                  alt="Healthcare team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Leadership Team
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Healthcare veterans and technology innovators working together to transform patient care
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-200 transition-colors">
                      {leader.name}
                    </h3>
                    <p className="text-white font-semibold mb-4">{leader.title}</p>
                    <p className="text-blue-100 text-sm leading-relaxed mb-4">
                      {leader.bio}
                    </p>
                    <div className="flex justify-center">
                      <Link 
                        href={leader.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 hover:scale-110"
                      >
                        <Linkedin className="w-5 h-5 text-white" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-32 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-[#2A9DF4] to-cyan-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-200 transition-colors">
                  {value.title}
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Mission */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                To eliminate every point of friction in healthcare delivery, making exceptional patient 
                experiences the standard while empowering providers with intelligent automation that 
                enhances rather than replaces human care.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Target className="w-6 h-6 text-[#2A9DF4] mr-3" />
                  <span className="text-blue-100">Reduce healthcare costs by 40%</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-6 h-6 text-[#2A9DF4] mr-3" />
                  <span className="text-blue-100">Improve patient satisfaction by 50%</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-6 h-6 text-[#2A9DF4] mr-3" />
                  <span className="text-blue-100">Eliminate provider burnout</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Our Culture
              </h2>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                We believe that the best healthcare technology is invisible to patients but transformative 
                for providers. Our culture is built on collaboration, continuous learning, and a shared 
                commitment to making healthcare better for everyone.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white/10 rounded-xl">
                  <Award className="w-8 h-8 text-[#2A9DF4] mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">100%</div>
                  <div className="text-blue-200 text-sm">Remote-First</div>
                </div>
                <div className="text-center p-6 bg-white/10 rounded-xl">
                  <Globe className="w-8 h-8 text-[#2A9DF4] mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">15+</div>
                  <div className="text-blue-200 text-sm">Countries</div>
                </div>
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
              Join Our Mission
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Ready to transform healthcare together? Let&apos;s discuss how SpinSci can help your organization deliver exceptional patient experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="px-12 py-6 text-xl bg-white text-[#2A9DF4] hover:bg-blue-50 border-0 rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 group">
                Schedule a Demo
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link href="/careers">
                <Button variant="outline" size="lg" className="px-12 py-6 text-xl border-2 border-white/30 text-white hover:bg-white/10 rounded-full backdrop-blur-sm">
                  View Careers
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
