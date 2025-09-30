"use client";

import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PortfolioOfferingsPage() {
  return (
    <div className="min-h-screen relative text-white">
      {/* Ambient gradient mesh background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c] via-slate-900 to-[#06080f]" />
        <div className="absolute -top-24 -left-32 h-[34rem] w-[34rem] rounded-full bg-cyan-500/15 blur-[120px]" />
        <div className="absolute top-1/3 -right-24 h-[30rem] w-[30rem] rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full bg-blue-400/10 blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[length:18px_18px]" />
      </div>
      <Navigation />

      {/* Hero */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-24 h-[28rem] w-[28rem] rounded-full bg-blue-600/10 blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#2A9DF4]" />
              <span className="text-sm text-blue-200">Solutions Portfolio</span>
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
              Portfolio Offerings
            </h1>
            <p className="mt-4 text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              From Digital Front Door to RPM, we orchestrate a unified, outcomes-driven journey with SpinSci products and select partners.
            </p>
            <div className="mt-10 flex gap-4 justify-center">
              <Button className="px-8 py-4 text-lg bg-[#2A9DF4] hover:bg-[#2191e8] rounded-full shadow-xl shadow-cyan-500/10">
                Talk to Solutions Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/">
                <Button variant="outline" className="px-8 py-4 text-lg border-white/20 hover:bg-white/10 rounded-full text-white">
                  Back to Home
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Journey image (heroic presentation) */}
      <section className="px-6 pb-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[28px] overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 via-white/[0.05] to-white/[0.02] shadow-[0_60px_160px_-30px_rgba(0,0,0,0.7)]">
            {/* Colored glows */}
            <div className="absolute -inset-24 bg-[radial-gradient(60%_60%_at_20%_30%,rgba(42,157,244,0.25),transparent_60%),radial-gradient(50%_50%_at_80%_0%,rgba(99,102,241,0.22),transparent_60%)] blur-3xl" />
            {/* Subtle grid */}
            <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(0deg,rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="relative z-10 p-3 md:p-6 lg:p-8">
              <img
                src="/graphics/portfolio-journey.png"
                alt="SpinSci Patient Journey and Partnered Offerings"
                className="w-full h-auto rounded-2xl shadow-2xl shadow-cyan-500/10"
              />
            </div>
          </div>
          {/* Animated stats strip */}
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {k:"36%", l:"Faster time to treatment"},
              {k:">$1M+", l:"Annual revenue lift potential"},
              {k:"95%+", l:"Device connectivity (RPM)"},
              {k:">200", l:"Hospitals impacted"},
            ].map((s,i)=> (
              <motion.div
                key={s.k}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl border border-white/10 bg-white/[0.06] hover:bg-white/[0.1] backdrop-blur p-5 text-center transition-colors"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">{s.k}</div>
                <div className="text-blue-200 text-sm mt-1">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings by Partner */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Best-in-class portfolio, measurable outcomes</h2>
            <p className="mt-3 text-blue-200/90 max-w-3xl mx-auto">Select proven capabilities with deep EHR integration. Compose your portfolio to match goals and timelines.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Persivia",
                url: "https://www.persivia.com/",
                tagline: "Drive VBC with AI-powered intelligence",
                bullets: [
                  "Risk stratification, cost/utilization analytics, and SDOH insights",
                  "Unified clinical + claims data across 25+ EHRs",
                  "Trusted by enterprise health systems (e.g., CommonSpirit, Lifepoint, Prime Healthcare)",
                  ">200 hospitals, 12,000+ clinicians, millions of lives managed",
                ],
              },
              {
                title: "Rhythm",
                url: "https://www.myrhythmnow.com/",
                tagline: "EHR-integrated RPM without IT burden",
                bullets: [
                  "Cardiac RPM embedded in EHR workflows",
                  "Adaptive scheduler: configure alerts by patient/device",
                  "95%+ device connectivity and 100% billing compliance",
                  "Replaces legacy RPM systems (e.g., PaceArt)",
                ],
              },
              {
                title: "eHealth Technologies",
                url: "https://www.ehealthtechnologies.com/",
                tagline: "Accelerate time to treatment and reduce clinician burnout",
                bullets: [
                  "Automated retrieval of medical records and images for referrals",
                  "36% faster time to treatment; improved clinician experience",
                  "Concierge service with embedded AI",
                  "$1M+ added revenue; 27% less clinician prep time",
                ],
              },
              {
                title: "TimeDoc Health",
                url: "https://www.timedochealth.com/",
                tagline: "Proactive care, better outcomes, stronger revenue",
                bullets: [
                  "Virtual Chronic Care and Remote Patient Monitoring programs",
                  "Real-time vitals integrated directly into EHRs",
                  "Advanced Primary Care Management with Medicare billing",
                  "Behavioral Health support embedded in care workflows",
                  "Up to $1M+ annual revenue lift; fewer ED visits; higher satisfaction",
                ],
              },
            ].map((partner, i) => (
              <motion.div
                key={partner.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Card className="h-full bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors shadow-xl shadow-black/20 rounded-2xl">
                  <CardContent className="p-7">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-semibold text-white">{partner.title}</h3>
                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs md:text-sm text-blue-200 hover:text-white underline decoration-transparent hover:decoration-white/40"
                      >
                        {partner.url}
                      </a>
                    </div>
                    <p className="text-blue-100/90 mb-5">{partner.tagline}</p>
                    <div className="space-y-2">
                      {partner.bullets.map((b, j) => (
                        <div key={j} className="flex gap-2 text-blue-200">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#2A9DF4] inline-block" />
                          <span className="leading-relaxed">{b}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Bring the Portfolio to Your Health System</h2>
            <p className="text-blue-100/90 mb-8">
              Assemble the right capabilities for your priorities—delivered with measurable outcomes and accelerated timelines.
            </p>
            <Button className="px-10 py-5 text-lg bg-[#2A9DF4] hover:bg-[#2191e8] rounded-full shadow-xl shadow-cyan-500/10">
              Schedule a Portfolio Briefing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


