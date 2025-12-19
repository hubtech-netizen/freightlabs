import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Package,
  Network,
  Brain,
  Clock,
  Shield,
  Target,
  CheckCircle2,
  Zap,
  BarChart3,
  FileCheck,
  Users,
  TrendingDown,
  Eye,
  Layers,
  Scale,
  Truck,
  Building2,
  Gauge,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AnimatedCounter } from '@/components/shared/AnimatedCounter';
import { MaskedTextReveal } from '@/components/shared/MaskedTextReveal';
import { ContactModal } from '@/components/shared/ContactModal';

export function LoadForge() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('loadforge_page');
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen bg-gradient-to-br from-brand-azure via-blue-50/50 to-indigo-50/30 dark:from-brand-navy dark:via-blue-950/30 dark:to-indigo-950/20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f610_1px,transparent_1px),linear-gradient(to_bottom,#3b82f610_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-200/30 to-indigo-200/30 blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-indigo-200/30 to-blue-200/30 blur-3xl"
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.3, 0.4] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-12 pb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-blue-hover text-white shadow-lg shadow-brand-blue/20">
                <Network className="w-4 h-4" />
                <span className="font-semibold text-sm">LoadForge™</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                The Standard for{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue via-indigo-600 to-brand-blue">
                  Digital Freight Management
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                Source capacity, track shipments, and manage compliance in one unified dashboard.
              </p>

              <div className="flex items-center gap-4 p-5 bg-card border-l-4 border-brand-blue rounded-xl shadow-lg">
                <div className="w-14 h-14 rounded-full bg-brand-azure dark:bg-brand-navy-light flex items-center justify-center">
                  <Clock className="w-7 h-7 text-brand-blue" />
                </div>
                <div>
                  <p className="text-base font-semibold text-foreground">Reduce your time-to-cover by 50% using our automated matching engine.</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => {
                    setModalSource('loadforge_hero');
                    setIsModalOpen(true);
                  }}
                  className="bg-gradient-to-r from-brand-blue to-brand-blue-hover hover:from-brand-blue-hover hover:to-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-brand-blue/20 hover:shadow-xl transition-all group"
                >
                  Request LoadForge Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <a href="#features">
                  <Button variant="outline" className="px-8 py-6 text-lg rounded-xl border-2 border-brand-blue/20 hover:bg-brand-azure dark:hover:bg-brand-navy-light transition-all">
                    View Features
                  </Button>
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 md:gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-blue">50%</div>
                  <div className="text-sm text-muted-foreground">Faster Coverage</div>
                </div>
                <div className="h-10 w-px bg-border" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-blue">8-Point</div>
                  <div className="text-sm text-muted-foreground">Safety Check</div>
                </div>
                <div className="h-10 w-px bg-border" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-blue">
                    <AnimatedCounter end={100} suffix="%" />
                  </div>
                  <div className="text-sm text-muted-foreground">Compliance</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-indigo-600 rounded-3xl blur-2xl opacity-20" />
                <div className="relative bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-3xl p-8 text-white overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-brand-blue/20 flex items-center justify-center">
                          <Network className="w-6 h-6 text-brand-blue" />
                        </div>
                        <div>
                          <p className="font-semibold">LoadForge Dashboard</p>
                          <p className="text-sm text-white/70">Live Matching</p>
                        </div>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-brand-blue/20 text-blue-300 text-xs font-medium flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        Matching
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="p-4 bg-white/5 rounded-xl">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-white/70">Load Parameters</span>
                          <span className="text-xs px-2 py-1 bg-green-500/20 text-green-300 rounded-full">Optimized</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="flex items-center gap-2">
                            <Scale className="w-4 h-4 text-white/50" />
                            <span className="text-sm">42,000 lbs</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Layers className="w-4 h-4 text-white/50" />
                            <span className="text-sm">Full Truckload</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-white/5 rounded-xl">
                        <p className="text-sm text-white/70 mb-3">Top Carrier Matches</p>
                        <div className="space-y-2">
                          {[
                            { name: 'Swift Logistics', score: 98, rate: '$2.45' },
                            { name: 'Prime Freight', score: 95, rate: '$2.52' },
                            { name: 'Atlas Transport', score: 92, rate: '$2.48' },
                          ].map((carrier) => (
                            <div key={carrier.name} className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                              <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-400" />
                                <span className="text-sm">{carrier.name}</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className="text-xs text-white/50">{carrier.score}% match</span>
                                <span className="text-sm font-semibold text-brand-blue">{carrier.rate}/mi</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-brand-blue/20 rounded-xl">
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-brand-blue" />
                        <span className="font-medium">All Carriers Verified</span>
                      </div>
                      <FileCheck className="w-5 h-5 text-green-400" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="features" className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <MaskedTextReveal useViewportTrigger={true}>
                  <h3 className="text-3xl font-bold mb-4">Core Capabilities</h3>
                </MaskedTextReveal>
              </div>

              <div className="space-y-6">
                <Card className="p-5 border-2 hover:border-brand-blue/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-azure dark:bg-brand-navy-light flex items-center justify-center flex-shrink-0">
                      <Network className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Smart Capacity Sourcing</h4>
                      <p className="text-sm text-muted-foreground">Identify carriers who frequent your lanes to build a reliable &quot;virtual fleet.&quot;</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-5 border-2 hover:border-brand-blue/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-azure dark:bg-brand-navy-light flex items-center justify-center flex-shrink-0">
                      <Eye className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Real-Time Tracking</h4>
                      <p className="text-sm text-muted-foreground">Integration with ELDs provides 24/7 visibility into shipment location.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-5 border-2 hover:border-brand-blue/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-azure dark:bg-brand-navy-light flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Dynamic Pricing Models</h4>
                      <p className="text-sm text-muted-foreground">Access real-time rate indices to benchmark your freight spend.</p>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <MaskedTextReveal useViewportTrigger={true}>
                  <h3 className="text-3xl font-bold mb-4">For Brokers</h3>
                </MaskedTextReveal>
                <p className="text-lg text-muted-foreground">
                  LoadForge™ Pro accelerates your brokerage operations with high-volume execution tools.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-5 border-2 hover:border-brand-blue/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-azure dark:bg-brand-navy-light flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">5x Faster Matching</h4>
                      <p className="text-sm text-muted-foreground">Cover loads in minutes, not hours, by matching freight to live truck assets.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-5 border-2 hover:border-brand-blue/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-azure dark:bg-brand-navy-light flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Scale Operations</h4>
                      <p className="text-sm text-muted-foreground">Enable your team to handle 50+ loads per broker without adding headcount.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-5 border-2 hover:border-brand-blue/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-azure dark:bg-brand-navy-light flex items-center justify-center flex-shrink-0">
                      <Gauge className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Automated Workflows</h4>
                      <p className="text-sm text-muted-foreground">Reduce administrative overhead with smart automation tools.</p>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-brand-azure via-blue-50/50 to-white dark:from-brand-navy dark:via-brand-navy-light dark:to-brand-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <MaskedTextReveal useViewportTrigger={true}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                The <span className="text-brand-blue">8-Point</span> Compliance Check
              </h2>
            </MaskedTextReveal>
            <p className="text-xl text-muted-foreground mb-6">
              We take risk off the road. Our automated system validates every carrier against 8 strict safety protocols before dispatch. We automatically reject carriers that don&apos;t meet these standards.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 border-2">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-azure dark:bg-brand-navy-light flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <p className="font-bold text-sm mb-1">Authority & Insurance</p>
                      <p className="text-xs text-muted-foreground">Active MC/DOT verification and coverage checks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-azure dark:bg-brand-navy-light flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <p className="font-bold text-sm mb-1">Safety & Performance</p>
                      <p className="text-xs text-muted-foreground">FMCSA rating analysis and inspection history</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-azure dark:bg-brand-navy-light flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <p className="font-bold text-sm mb-1">Fraud Protection</p>
                      <p className="text-xs text-muted-foreground">Double-brokering check and identity verification</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-azure dark:bg-brand-navy-light flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <p className="font-bold text-sm mb-1">Equipment Match</p>
                      <p className="text-xs text-muted-foreground">Type validation and operational history</p>
                    </div>
                  </div>
                </div>
                <div className="bg-brand-azure dark:bg-brand-navy-light rounded-xl p-6 flex flex-col justify-center">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-brand-blue/20 flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-8 h-8 text-brand-blue" />
                    </div>
                    <p className="text-2xl font-bold text-brand-blue">100%</p>
                    <p className="text-sm text-muted-foreground">Compliance Rate</p>
                  </div>
                  <p className="text-xs text-center text-muted-foreground">
                    Every carrier must pass all 8 checks before they can haul your freight
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,.05)_25%,rgba(59,130,246,.05)_50%,transparent_50%,transparent_75%,rgba(59,130,246,.05)_75%)] bg-[length:20px_20px]" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-brand-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-medium mb-4 italic leading-relaxed">
                      &quot;We were drowning in emails and spreadsheets. LoadForge didn&apos;t just organize us; it sped us up. We moved 30% more freight last quarter with the same team size.&quot;
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center">
                        <Package className="w-6 h-6 text-brand-blue" />
                      </div>
                      <div>
                        <p className="font-semibold">Logistics Director</p>
                        <p className="text-white/70 text-sm">FMCG Brand</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-brand-blue to-brand-blue-hover">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto text-white"
          >
            <MaskedTextReveal useViewportTrigger={true}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Optimize your supply chain with industrial-grade tech
              </h2>
            </MaskedTextReveal>
            <p className="text-xl text-white/80 mb-8">
              Join the network of shippers and 3PLs using LoadForge to streamline their operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => {
                  setModalSource('loadforge_bottom_cta');
                  setIsModalOpen(true);
                }}
                className="bg-white text-brand-blue hover:bg-blue-50 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all group"
              >
                Get Started with LoadForge
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/contact">
                <Button className="bg-white text-brand-blue hover:bg-blue-50 px-8 py-6 text-lg rounded-xl border-2 border-white shadow-lg">
                  Contact Sales Team
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultInterest="loadforge"
        source={modalSource}
      />
    </div>
  );
}
