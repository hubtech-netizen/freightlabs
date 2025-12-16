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

export function LaneMaker() {
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

        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-blue-hover text-white shadow-lg shadow-brand-blue/20">
                <Network className="w-4 h-4" />
                <span className="font-semibold text-sm">LaneMaker™ | The Matching Engine</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Operational Velocity for the{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue via-indigo-600 to-brand-blue">
                  Modern Supply Chain
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                LaneMaker™ cuts through the noise to find the perfect capacity at the right price.
                Stop paying for empty air. Start matching with science.
              </p>

              <div className="flex items-center gap-4 p-5 bg-card border-l-4 border-brand-blue rounded-xl shadow-lg">
                <div className="w-14 h-14 rounded-full bg-brand-azure dark:bg-brand-navy-light flex items-center justify-center">
                  <Clock className="w-7 h-7 text-brand-blue" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">70% Faster</p>
                  <p className="text-sm text-muted-foreground">Time-to-book vs traditional load boards</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-brand-blue to-brand-blue-hover hover:from-brand-blue-hover hover:to-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-brand-blue/20 hover:shadow-xl transition-all group">
                  Request Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="px-8 py-6 text-lg rounded-xl border-2 border-brand-blue/20 hover:bg-brand-azure dark:hover:bg-brand-navy-light transition-all">
                  View Pricing
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-blue">
                    <AnimatedCounter end={15} suffix="%" />
                  </div>
                  <div className="text-sm text-muted-foreground">Carriers Rejected</div>
                </div>
                <div className="h-10 w-px bg-border" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-blue">7-Point</div>
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
                          <p className="font-semibold">LaneMaker Dashboard</p>
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

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                  <Package className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">For Shippers</h3>
                  <p className="text-brand-blue font-semibold">The Efficiency Equation</p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-8">
                Reduce shipping costs without compromising speed. See exactly where your freight is and who is moving it.
              </p>

              <div className="space-y-6">
                <Card className="p-5 border-2 hover:border-brand-blue/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-azure dark:bg-brand-navy-light flex items-center justify-center flex-shrink-0">
                      <TrendingDown className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Cost Reduction</h4>
                      <p className="text-sm text-muted-foreground">Data-driven matching that finds the optimal rate without compromising on quality or speed.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-5 border-2 hover:border-brand-blue/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-azure dark:bg-brand-navy-light flex items-center justify-center flex-shrink-0">
                      <Eye className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Full Transparency</h4>
                      <p className="text-sm text-muted-foreground">Real-time visibility into every mile. Know exactly where your freight is at all times.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-5 border-2 hover:border-brand-blue/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-azure dark:bg-brand-navy-light flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Safety First</h4>
                      <p className="text-sm text-muted-foreground">We reject 15% of carriers that do not meet our Lab Safety Standards. Only verified carriers touch your goods.</p>
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
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">For 3PLs & Brokers</h3>
                  <p className="text-amber-600 font-semibold">Execution Automation</p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-8">
                Supercharge your team. One broker using LaneMaker™ can do the work of five using manual boards.
              </p>

              <div className="space-y-6">
                <Card className="p-5 border-2 hover:border-amber-500/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">5x Team Productivity</h4>
                      <p className="text-sm text-muted-foreground">Scale your brokerage to 50+ loads per broker without adding headcount or overhead.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-5 border-2 hover:border-amber-500/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Closed-Loop Network</h4>
                      <p className="text-sm text-muted-foreground">Keep carriers in your network longer by automatically booking their backhauls.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-5 border-2 hover:border-amber-500/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
                      <Gauge className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Operational Velocity</h4>
                      <p className="text-sm text-muted-foreground">Handle more volume with fewer clicks. Automated load selection from departure to return.</p>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-brand-azure via-blue-50/50 to-white dark:from-brand-navy dark:via-brand-navy-light dark:to-brand-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The <span className="text-brand-blue">7-Point</span> Compliance Check
            </h2>
            <p className="text-xl text-muted-foreground">
              Every carrier. Every load. No exceptions. Our Compliance Automation ensures only verified carriers with valid authority touch your goods.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-6xl mx-auto">
            {[
              { icon: FileCheck, label: 'Authority Status' },
              { icon: Shield, label: 'Insurance Valid' },
              { icon: Truck, label: 'Safety Rating' },
              { icon: Users, label: 'EIN/TIN Check' },
              { icon: BarChart3, label: 'Operating History' },
              { icon: Target, label: 'Equipment Match' },
              { icon: CheckCircle2, label: 'Final Approval' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-4 text-center border-2 hover:border-brand-blue transition-all hover:shadow-lg group h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-azure dark:bg-brand-navy-light flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-blue transition-colors">
                    <item.icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-sm font-semibold">{item.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
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
                      &quot;We were drowning in emails and spreadsheets. LaneMaker did not just organize us; it sped us up. We moved 30% more freight last quarter with the same team size.&quot;
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

                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-brand-blue">+30%</p>
                    <p className="text-sm text-white/70">More Freight Moved</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-brand-blue">Same</p>
                    <p className="text-sm text-white/70">Team Size</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-brand-blue">-70%</p>
                    <p className="text-sm text-white/70">Time-to-Book</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-blue-hover">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stop paying for empty air. Start matching with science.
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join the network of shippers and 3PLs who have revolutionized their freight operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-brand-blue hover:bg-blue-50 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all group">
                Initialize LaneMaker
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/contact">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl">
                  Talk to a Scientist
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
