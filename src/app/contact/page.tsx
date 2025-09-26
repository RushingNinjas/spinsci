"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Clock, MessageSquare, Calendar, Users } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      description: "Get in touch with our team",
      contact: "hello@spinsci.com",
      action: "Send Email"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      description: "Speak with a solutions expert",
      contact: "+1 (555) 123-4567",
      action: "Call Now"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Live Chat",
      description: "Chat with our support team",
      contact: "Available 24/7",
      action: "Start Chat"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Schedule Demo",
      description: "Book a personalized demo",
      contact: "30-minute session",
      action: "Book Demo"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Market Street, Suite 400",
      zip: "San Francisco, CA 94105",
      phone: "+1 (555) 123-4567"
    },
    {
      city: "New York",
      address: "456 Broadway, Floor 12",
      zip: "New York, NY 10013",
      phone: "+1 (555) 987-6543"
    },
    {
      city: "Remote",
      address: "Global Remote Team",
      zip: "15+ Countries",
      phone: "hello@spinsci.com"
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
              <MessageSquare className="w-4 h-4 mr-2" />
              Get in Touch
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
              Let&apos;s Transform Healthcare Together
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed">
              Ready to revolutionize your healthcare operations? Our team of experts is here to help you implement AI-powered solutions that deliver exceptional patient experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-32 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              How Can We Help?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Choose the best way to connect with our team
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-[#2A9DF4] to-cyan-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-200 transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-blue-100 mb-4 leading-relaxed">
                      {method.description}
                    </p>
                    <p className="text-[#2A9DF4] font-semibold mb-6">
                      {method.contact}
                    </p>
                    <Button className="w-full bg-[#2A9DF4] hover:bg-[#2191e8] text-white group-hover:bg-white group-hover:text-[#2A9DF4] transition-all duration-300">
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Send Us a Message
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Have a specific question or want to discuss your healthcare automation needs? We&apos;d love to hear from you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-[#2A9DF4] focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-[#2A9DF4] focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-[#2A9DF4] focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">Phone</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-[#2A9DF4] focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Organization</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-[#2A9DF4] focus:border-transparent"
                      placeholder="Enter your organization name"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">How can we help?</label>
                    <select className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#2A9DF4] focus:border-transparent">
                      <option value="" className="bg-gray-800">Select an option</option>
                      <option value="demo" className="bg-gray-800">Schedule a Demo</option>
                      <option value="pricing" className="bg-gray-800">Pricing Information</option>
                      <option value="support" className="bg-gray-800">Technical Support</option>
                      <option value="partnership" className="bg-gray-800">Partnership Opportunity</option>
                      <option value="other" className="bg-gray-800">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Message</label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-[#2A9DF4] focus:border-transparent resize-none"
                      placeholder="Tell us about your healthcare automation needs..."
                    ></textarea>
                  </div>

                  <Button size="lg" className="w-full bg-[#2A9DF4] hover:bg-[#2191e8] text-white py-4 text-lg rounded-lg">
                    Send Message
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-32 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Our Locations
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Find us around the world
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-[#2A9DF4] to-cyan-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-200 transition-colors">
                      {office.city}
                    </h3>
                    <div className="space-y-2 text-blue-100">
                      <p>{office.address}</p>
                      <p>{office.zip}</p>
                      <p className="text-[#2A9DF4] font-semibold">{office.phone}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/20 border border-white/30 rounded-full text-white text-lg font-medium mb-8">
              <Clock className="w-5 h-5 mr-3" />
              Quick Response Guarantee
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              We Respond Fast
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Our team is committed to responding to all inquiries within 24 hours. For urgent matters, 
              we&apos;re available via phone and live chat.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">&lt; 24h</div>
                <div className="text-blue-200">Email Response</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">&lt; 2h</div>
                <div className="text-blue-200">Phone Response</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-blue-200">Live Chat</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
