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
      {/* Ambient gradient + blended tech imagery */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e2a47] via-[#143a63] to-[#0b2140]" />
        {/* soft tech texture - unsplash */}
        <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2100&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute -top-24 -left-32 h-[34rem] w-[34rem] rounded-full bg-cyan-400/25 blur-[120px]" />
        <div className="absolute top-1/3 -right-24 h-[30rem] w-[30rem] rounded-full bg-sky-500/25 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full bg-indigo-400/20 blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[length:18px_18px]" />
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

      {/* Journey image (bright, light background with texture) */}
      <section className="px-6 pb-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[28px] overflow-hidden border border-slate-200 bg-white/95 shadow-[0_50px_120px_-30px_rgba(2,6,23,0.25)]">
            {/* Light tech image */}
            <div className="absolute inset-0 opacity-45 bg-[url('https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=2100&auto=format&fit=crop')] bg-cover bg-center" />
            {/* Soft gradient wash */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(255,255,255,0.85))]" />
            <div className="relative z-10 p-3 md:p-6 lg:p-8">
              <div className="mx-auto max-w-5xl">
                <img
                  src="/graphics/portfolio-journey.png"
                  alt="SpinSci Patient Journey and Partnered Offerings"
                  className="w-full h-auto rounded-xl shadow-xl ring-1 ring-slate-200/70 saturate-125 contrast-110"
                />
              </div>
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
                className="rounded-2xl border border-slate-200 bg-white/90 hover:bg-white p-5 text-center transition-colors shadow-sm"
              >
                <div className="text-3xl font-bold text-slate-900">{s.k}</div>
                <div className="text-slate-600 text-sm mt-1">{s.l}</div>
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
                <Card className="relative overflow-hidden h-full bg-white/95 border-slate-200 hover:shadow-2xl transition-all shadow-md rounded-2xl">
                  {/* splash accents */}
                  <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-300/40 to-blue-400/30 blur-2xl" />
                  <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-300/40 to-sky-400/30 blur-2xl" />
                  <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_20%_10%,#0ea5e9_1px,transparent_1px)] bg-[length:18px_18px]" />
                  <CardContent className="relative p-7 text-slate-800">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-semibold text-slate-900">{partner.title}</h3>
                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs md:text-sm text-[#2A9DF4] hover:text-[#1f86d6] underline decoration-transparent hover:decoration-[#1f86d6]/40"
                      >
                        {partner.url}
                      </a>
                    </div>
                    <p className="text-slate-700 mb-5">{partner.tagline}</p>
                    <div className="space-y-2">
                      {partner.bullets.map((b, j) => (
                        <div key={j} className="flex gap-2 text-slate-700">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#2A9DF4] inline-block" />
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


