"use client";

import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PortfolioOfferingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navigation />

      {/* Hero */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(42,157,244,0.15),transparent_40%)]" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Portfolio Offerings
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              An end-to-end care journey that combines SpinSci experiences with best-in-class partners to deliver measurable clinical and financial outcomes.
            </p>
            <div className="mt-10 flex gap-4 justify-center">
              <Button className="px-8 py-4 text-lg bg-[#2A9DF4] hover:bg-[#2191e8] rounded-full">
                Talk to Solutions Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/">
                <Button variant="outline" className="px-8 py-4 text-lg border-white/30 rounded-full text-white">
                  Back to Home
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Journey image (drop-in) */}
      <section className="px-6 pb-10">
        <div className="max-w-6xl mx-auto">
          {/* Place the first provided image at public/graphics/portfolio-journey.png */}
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <img
              src="/graphics/portfolio-journey.png"
              alt="SpinSci Patient Journey and Partnered Offerings"
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-blue-200 mt-3">
            Tip: save your provided curve image to <code className="text-blue-100">public/graphics/portfolio-journey.png</code> to display it here.
          </p>
        </div>
      </section>

      {/* Offerings by Partner */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
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
                <Card className="h-full bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-2xl font-bold text-white">{partner.title}</h3>
                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-200 hover:text-white underline decoration-transparent hover:decoration-white/40"
                      >
                        {partner.url}
                      </a>
                    </div>
                    <p className="text-blue-100 mb-4">{partner.tagline}</p>
                    <ul className="space-y-2 text-blue-200">
                      {partner.bullets.map((b, j) => (
                        <li key={j} className="leading-relaxed">• {b}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bring the Portfolio to Your Health System</h2>
            <p className="text-blue-100 mb-8">
              We assemble the right capabilities for your use case—front door to RPM—delivered with measurable outcomes and accelerated timelines.
            </p>
            <Button className="px-10 py-5 text-lg bg-[#2A9DF4] hover:bg-[#2191e8] rounded-full">
              Schedule a Portfolio Briefing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


