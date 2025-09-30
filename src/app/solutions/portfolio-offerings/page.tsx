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
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b3b3b] via-[#144d7e] to-[#341b6f]" />
        {/* soft tech texture - unsplash */}
        <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2100&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute -top-24 -left-32 h-[34rem] w-[34rem] rounded-full bg-cyan-400/25 blur-[120px]" />
        <div className="absolute top-1/3 -right-24 h-[30rem] w-[30rem] rounded-full bg-sky-500/25 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full bg-indigo-400/20 blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[length:18px_18px]" />
      </div>
      <Navigation />

      {/* Split Hero (radical reboot) */}
      <section className="relative py-16 md:py-24 px-6">
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#2A9DF4]" />
              <span className="text-sm text-blue-100">SpinSci Portfolio</span>
            </div>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-cyan-100 to-sky-200 bg-clip-text text-transparent">
              Build Your End‑to‑End Care Capability
            </h1>
            <p className="mt-5 text-lg md:text-xl text-blue-100/95 leading-relaxed max-w-xl">
              Compose a solution from proven modules: digital front door, referral intake, analytics, clinical comms, care coordination, and RPM.
            </p>
            <div className="mt-8 flex gap-4">
              <Button className="px-8 py-4 text-lg bg-[#2A9DF4] hover:bg-[#2191e8] rounded-full shadow-xl shadow-cyan-500/10">
                Design My Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="#blueprint">
                <Button variant="outline" className="px-8 py-4 text-lg border-white/20 hover:bg-white/10 rounded-full text-white">
                  See Blueprint
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Compact vibrant image on right (restored) */}
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative rounded-[22px] overflow-hidden border border-slate-200/60 bg-white/95 shadow-[0_30px_90px_-20px_rgba(2,6,23,0.45)]">
              <div className="absolute inset-0 opacity-45 bg-[url('https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=2100&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(255,255,255,0.9))]" />
              <div className="relative z-10 p-4 md:p-6">
                <div className="mx-auto max-w-2xl">
                  <img src="/graphics/portfolio-journey.png" alt="SpinSci Portfolio Journey" className="w-full h-auto rounded-xl ring-1 ring-slate-200 saturate-125 contrast-110" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick impact stats (no large image) */}
      <section className="px-6 pb-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
              className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur p-5 text-center"
            >
              <div className="text-3xl font-bold text-white">{s.k}</div>
              <div className="text-blue-100 text-sm mt-1">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Modules Grid (colorful) */}
      <section className="py-6 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Best‑in‑class capabilities. One integrated experience.</h2>
            <p className="mt-3 text-blue-100/95 max-w-3xl mx-auto">Pick the modules you need today and expand over time—each with measurable outcomes and deep EHR integration.</p>
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
                  {/* colorful header stripe */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400" />
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

      {/* Investment/Backer reference */}
      <section className="px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur p-4 text-center">
            <span className="text-blue-100">Backed by </span>
            <a
              href="https://www.aldrichcap.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline decoration-transparent hover:decoration-white/50 hover:text-white"
            >
              Aldrich Capital Partners
            </a>
          </div>
        </div>
      </section>

      {/* Blueprint Timeline */}
      <section id="blueprint" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-2xl md:text-3xl font-semibold mb-10 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Blueprint to Live in 90 Days</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[{n:1,t:"Discover",d:"Prioritize use cases, success metrics, data sources"},{n:2,t:"Assemble",d:"Pick modules, integrate with EHR & comms"},{n:3,t:"Prove",d:"Pilot with ROI tracking, scale across service lines"}].map((s)=> (
              <div key={s.n} className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur p-6 text-center">
                <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-[#2A9DF4]/20 text-[#2A9DF4] flex items-center justify-center font-bold">{s.n}</div>
                <div className="text-white font-semibold">{s.t}</div>
                <div className="text-blue-200 mt-1 text-sm">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
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


