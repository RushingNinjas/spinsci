"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, BarChart3, TrendingUp, Eye, Target, Brain, Zap, Database, PieChart } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function AIAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-[#2A9DF4] to-cyan-500 text-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-[#2A9DF4] to-cyan-500"></div>
        <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2100&q=60)] bg-cover bg-center opacity-15"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(249,115,22,0.15),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 border border-orange-400/30 rounded-full text-orange-300 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI Analytics Solution
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-orange-100 to-red-200 bg-clip-text text-transparent">
              Intelligent Insights
              <br />
              <span className="text-4xl md:text-5xl">& Predictions</span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-4xl mx-auto mb-12 leading-relaxed">
              Unlock the power of healthcare data with advanced AI analytics, predictive modeling, and real-time insights that drive better outcomes, operational efficiency, and strategic decision-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="px-8 py-4 text-lg bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 border-0 rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 group">
                Request Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2 border-white/30 text-white hover:bg-white/10 rounded-full backdrop-blur-sm">
                View Sample Reports
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SpinSci AI – Clean Narrative */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">SpinSci AI: The Bridge + The Brain</h2>
            <p className="text-orange-100 max-w-3xl mx-auto">Two pillars working as one. The Bridge connects any agent to real workflows. The Brain guides agents with healthcare intelligence and guardrails.</p>
          </div>

          {/* Two-pillar overview (side-by-side) */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur p-6">
              <h3 className="text-2xl font-bold mb-2">The Bridge</h3>
              <p className="text-orange-100/90 mb-4">Connect any agent to EHRs, CCaaS/UCaaS, CRMs and data. Normalize auth, events and APIs into safe workflow actions.</p>
              <ul className="space-y-2 text-sm text-orange-100/90">
                <li>• Any‑agent connectivity (BYO or SpinSci)</li>
                <li>• Healthcare‑grade adapters (FHIR/HL7/SFTP, queues)</li>
                <li>• Event + workflow bus (retries, idempotency, audit)</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur p-6">
              <h3 className="text-2xl font-bold mb-2">The Brain</h3>
              <p className="text-orange-100/90 mb-4">Healthcare intelligence for agents: rules, retrieval, compliance, reasoning and optimization baked in.</p>
              <ul className="space-y-2 text-sm text-orange-100/90">
                <li>• Ontology + rules (access/clinical/financial)</li>
                <li>• PHI‑aware retrieval and safety guardrails</li>
                <li>• KPI optimization with feedback loops</li>
              </ul>
            </div>
          </div>

          {/* Agents & Sub‑Agents (accordion) */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-6">Agents & Sub‑Agents</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Bridge agents */}
              <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur p-1">
                <details className="rounded-2xl open:bg-white/5">
                  <summary className="cursor-pointer list-none p-5 text-lg font-semibold">The Bridge – Operational Agents</summary>
                  <div className="px-5 pb-5 grid md:grid-cols-2 gap-4">
                    {[
                      {title:"Scheduling Agents", items:["Patient Identification & Verification","Appointment Cancel","Appointment Confirm","Appointment Reschedule","Open Scheduling","Direct Scheduling","Ticket Scheduling","Prior‑Auth","Registration (Orders / Referral)"]},
                      {title:"Billing Agents", items:["Account Summary","Bill Pay","Payment Reconciliation","General Ledger"]},
                      {title:"Pharmacy Refill Agents", items:["Prescription Details","Prescription Order","Refill Reminder","Pickup Reminder","Benefits Management","Adherence Tracking"]}
                    ].map((c)=> (
                      <div key={c.title} className="relative overflow-hidden rounded-xl bg-white/10 border border-white/20 p-4">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-400" />
                        <h5 className="font-semibold mb-2">{c.title}</h5>
                        <ul className="space-y-1 text-orange-100/90 text-sm">
                          {c.items.map((x)=> (
                            <li key={x} className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70 inline-block" /><span>{x}</span></li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </details>
              </div>

              {/* Brain sub‑agents */}
              <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur p-1">
                <details className="rounded-2xl open:bg-white/5">
                  <summary className="cursor-pointer list-none p-5 text-lg font-semibold">The Brain – Intelligence Sub‑Agents</summary>
                  <ul className="px-5 pb-5 grid md:grid-cols-2 gap-3 text-sm text-orange-100/90">
                  {[
                    "Reasoning & Planning",
                    "Policy / Prior‑Auth Rules",
                    "Personalization / Memory",
                    "Data Quality & Normalization",
                    "Compliance & Guardrails",
                    "Task Decomposition",
                    "ROI / KPI Optimizer",
                    "Safety & Redaction"
                  ].map((x)=> (
                    <li key={x} className="rounded-xl bg-white/10 border border-white/20 px-3 py-2">{x}</li>
                  ))}
                  </ul>
                </details>
              </div>
            </div>
          </div>

          {/* Solution Architecture */}
          <div className="max-w-5xl mx-auto mb-12">
            <h3 className="text-3xl font-bold text-center mb-6">Solution Architecture</h3>
            <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur p-6">
              <div className="text-center mb-3">
                <div className="inline-block rounded-xl px-5 py-3 bg-gradient-to-r from-orange-500/30 to-red-500/30 border border-white/20">LLM (Brain of the System)</div>
              </div>
              <div className="text-center text-white/80 mb-3">↓</div>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-3">
                <div className="rounded-xl px-5 py-3 bg-white/10 border border-white/20">MCP (Middleware Communication Platform)</div>
                <div className="rounded-xl px-5 py-3 bg-white/10 border border-white/20">Rules Abstraction Engine</div>
              </div>
              <div className="text-center text-white/80 mb-3">↓</div>
              <div className="flex flex-wrap items-center justify-center gap-2 text-sm mb-3">
                {["Epic","Oracle","Athena","NextGen","eClinicalWorks","Cerner"].map((e)=> (
                  <span key={e} className="rounded-full px-3 py-1 bg-white/10 border border-white/20">{e}</span>
                ))}
              </div>
              <div className="text-center text-white/80 mb-3">↓</div>
              <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
                {["Scheduling Agents","Billing Agents","Pharmacy Agents"].map((e)=> (
                  <span key={e} className="rounded-full px-3 py-1 bg-gradient-to-r from-orange-500/30 to-red-500/30 border border-white/20">{e}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Outcomes + Analytics (compact band) */}
          <div className="mb-4">
            <h3 className="text-3xl font-bold text-center mb-6">Outcomes & Analytics</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {k:"36%", l:"Faster time to treatment"},
                {k:"$1M+", l:"Annual revenue lift"},
                {k:"95%+", l:"RPM device connectivity"},
                {k:"80%", l:"Operational efficiency"}
              ].map((s)=> (
                <div key={s.l} className="text-center p-6 rounded-2xl border border-white/20 bg-white/10 backdrop-blur">
                  <div className="text-4xl font-bold">{s.k}</div>
                  <div className="text-orange-100 mt-2">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-32 px-6 bg-gradient-to-r from-slate-800/50 to-orange-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
              Advanced AI Analytics Features
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Every feature designed to transform data into actionable insights and predictions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-12 h-12" />,
                title: "Predictive Analytics",
                description: "Advanced machine learning models that predict patient outcomes, resource needs, and operational bottlenecks with 95% accuracy.",
                features: ["Patient Outcome Prediction", "Resource Forecasting", "Risk Stratification", "Demand Planning"]
              },
              {
                icon: <BarChart3 className="w-12 h-12" />,
                title: "Performance Dashboards",
                description: "Real-time dashboards that provide instant visibility into key performance indicators, patient flow, and operational metrics.",
                features: ["Real-time KPIs", "Patient Flow Analytics", "Operational Metrics", "Custom Dashboards"]
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: "ROI Tracking",
                description: "Comprehensive ROI analysis that tracks the financial impact of SpinSci implementations and identifies optimization opportunities.",
                features: ["Cost Savings Analysis", "Revenue Impact", "Efficiency Gains", "Investment Tracking"]
              },
              {
                icon: <PieChart className="w-12 h-12" />,
                title: "Custom Reports",
                description: "Flexible reporting system that generates custom reports for different stakeholders with automated scheduling and distribution.",
                features: ["Automated Reports", "Custom Metrics", "Scheduled Delivery", "Multi-format Export"]
              },
              {
                icon: <Eye className="w-12 h-12" />,
                title: "Data Visualization",
                description: "Advanced data visualization tools that transform complex healthcare data into intuitive, actionable insights.",
                features: ["Interactive Charts", "Heat Maps", "Trend Analysis", "Comparative Views"]
              },
              {
                icon: <Database className="w-12 h-12" />,
                title: "Data Integration",
                description: "Seamless integration with EHRs, billing systems, and other healthcare data sources for comprehensive analytics.",
                features: ["EHR Integration", "Billing System Sync", "Real-time Data", "Data Quality Assurance"]
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group"
              >
                <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-200 transition-colors">{feature.title}</h3>
                    <p className="text-orange-100 mb-6 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.features.map((item, j) => (
                        <li key={j} className="flex items-center text-orange-200">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
              Data-Driven Results
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              See the impact of AI-powered analytics on healthcare operations and outcomes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { number: "95%", label: "Prediction Accuracy", description: "Machine learning models achieve 95% accuracy in predicting patient outcomes and resource needs" },
              { number: "40%", label: "Faster Decision Making", description: "Real-time insights reduce decision-making time from hours to minutes" },
              { number: "25%", label: "Cost Reduction", description: "Data-driven optimization reduces operational costs by 25% on average" },
              { number: "80%", label: "Improved Efficiency", description: "Predictive analytics improve operational efficiency and resource utilization" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-orange-200 font-semibold mb-3">{stat.label}</div>
                <div className="text-orange-100 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Types Section */}
      <section className="py-32 px-6 bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
              Comprehensive Analytics Suite
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              From operational insights to clinical outcomes, we cover every aspect of healthcare analytics
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Operational Analytics",
                description: "Patient flow, resource utilization, and operational efficiency metrics that drive better resource allocation.",
                icon: "⚙️"
              },
              {
                title: "Clinical Analytics",
                description: "Patient outcomes, care quality, and clinical performance metrics that improve patient care delivery.",
                icon: "🏥"
              },
              {
                title: "Financial Analytics",
                description: "Revenue optimization, cost analysis, and financial performance metrics that maximize ROI.",
                icon: "💰"
              }
            ].map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-white">{type.title}</h3>
                <p className="text-orange-100">{type.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
              Ready to Unlock Your Data&apos;s Potential?
            </h2>
            <p className="text-xl text-orange-100 mb-12 max-w-2xl mx-auto">
              Join leading health systems that have transformed their operations with SpinSci&apos;s AI-powered analytics platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="px-12 py-6 text-xl bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 border-0 rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 group">
                Start Your Analytics Journey
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
