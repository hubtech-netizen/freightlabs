import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Truck,
  Package,
  Building2,
  Brain,
  TrendingUp,
  Clock,
  Shield,
  CheckCircle2,
  Zap,
  BarChart3,
  Network,
  Play,
  Route,
  Target,
  Gauge,
  FileCheck,
  Cpu,
  CircuitBoard,
  Activity,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedCounter } from '@/components/shared/AnimatedCounter';
import { Card } from '@/components/ui/card';

export function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen bg-gradient-to-br from-brand-slate-50 via-brand-azure to-white dark:from-brand-navy dark:via-brand-navy-light dark:to-brand-navy overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />

        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-brand-blue/10 to-brand-azure opacity-50 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card backdrop-blur-sm border border-brand-blue/20 shadow-sm"
              >
                <Brain className="w-4 h-4 text-brand-blue" />
                <span className="text-sm font-medium text-brand-navy dark:text-brand-slate-50">
                  AI-Powered Freight Ecosystem
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                The Science of{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue via-brand-blue-hover to-brand-blue">
                  Moving Freight
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                We are building the most trusted, intelligent logistics ecosystem. Experience
                Uber-style simplicity with enterprise-grade control.
              </p>

              <div className="flex items-center gap-3 p-4 bg-card border-l-4 border-brand-orange rounded-lg shadow-sm">
                <BarChart3 className="w-6 h-6 text-brand-orange flex-shrink-0" />
                <p className="text-sm font-medium">
                  Industry average empty miles sit at <span className="font-bold text-foreground">20%</span>. Our
                  network targets{' '}
                  <span className="font-bold text-brand-orange">&lt;5%</span>.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all group">
                  Initialize Your Ecosystem
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  className="px-8 py-6 text-lg rounded-xl border-2 hover:bg-accent transition-all"
                >
                  See How It Works
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-foreground">
                    <AnimatedCounter end={10} suffix="k+" />
                  </div>
                  <div className="text-sm text-muted-foreground">Loads Matched</div>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <div className="text-3xl font-bold text-foreground">
                    <AnimatedCounter end={500} suffix="+" />
                  </div>
                  <div className="text-sm text-muted-foreground">Verified Carriers</div>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <div className="text-3xl font-bold text-foreground">
                    <AnimatedCounter end={98} suffix="%" />
                  </div>
                  <div className="text-sm text-muted-foreground">Match Rate</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="relative bg-card backdrop-blur-sm rounded-3xl p-2 border-2 border-border shadow-2xl overflow-hidden group">
                <div className="aspect-video bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute w-64 h-64 border border-brand-blue/20 rounded-full animate-pulse" />
                    <div className="absolute w-48 h-48 border border-brand-blue/30 rounded-full animate-pulse delay-150" />
                    <div className="absolute w-32 h-32 border border-brand-blue/40 rounded-full animate-pulse delay-300" />
                  </div>

                  <div className="relative z-10 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 rounded-full bg-brand-orange/90 backdrop-blur-md border border-white/20 flex items-center justify-center cursor-pointer mb-4 mx-auto shadow-lg shadow-brand-orange/30"
                    >
                      <Play className="w-8 h-8 text-white ml-1" />
                    </motion.div>
                    <p className="text-white/80 text-sm font-medium">Watch the FreightLabs Story</p>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg">
                      <CircuitBoard className="w-4 h-4 text-brand-blue" />
                      <span className="text-xs text-white/80">AI-Powered</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg">
                      <Activity className="w-4 h-4 text-green-400" />
                      <span className="text-xs text-white/80">Live Network</span>
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-azure dark:bg-brand-navy-light border border-brand-blue/20 mb-6"
            >
              <Target className="w-4 h-4 text-brand-blue" />
              <span className="text-sm font-semibold text-brand-blue">Choose Your Path</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Who Are You in the Ecosystem?
            </motion.h2>
            <p className="text-xl text-muted-foreground">
              Logistics is not one-size-fits-all. Select your path to see how the Lab optimizes
              your specific variance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-8 h-full border-2 hover:border-green-500 transition-all hover:shadow-xl group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-500/10 to-transparent rounded-bl-full" />
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-green-500/20">
                  <Truck className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">For Carriers & Fleets</h3>
                <p className="text-sm text-green-600 dark:text-green-400 font-semibold mb-4">The Goal: Revenue Automation</p>
                <p className="text-muted-foreground mb-6">
                  The average carrier spends <span className="font-bold text-foreground">15 hours a week</span>{' '}
                  searching for loads. That is lost revenue.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Weekly Revenue Stability</p>
                      <p className="text-xs text-muted-foreground">
                        &lt;5% variance in weekly paychecks
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Hands-Free Dispatch</p>
                      <p className="text-xs text-muted-foreground">Our AI negotiates while you sleep</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">98% Asset Utilization</p>
                      <p className="text-xs text-muted-foreground">We do not let your truck sit</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-3">Your Tool:</p>
                  <Link to="/routeforge">
                    <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white group/btn">
                      Automate My Fleet
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-8 h-full border-2 hover:border-brand-blue transition-all hover:shadow-xl group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-blue/10 to-transparent rounded-bl-full" />
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-blue to-brand-blue-hover flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-brand-blue/20">
                  <Package className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">For Shippers</h3>
                <p className="text-sm text-brand-blue font-semibold mb-4">The Goal: The Efficiency Equation</p>
                <p className="text-muted-foreground mb-6">
                  Manual freight matching adds{' '}
                  <span className="font-bold text-foreground">12-18% operational overhead</span> to every shipment.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Instant Capacity</p>
                      <p className="text-xs text-muted-foreground">
                        Access thousands of verified trucks in seconds
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Cost Reduction</p>
                      <p className="text-xs text-muted-foreground">
                        Data-driven matching lowers rates
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">100% Compliance</p>
                      <p className="text-xs text-muted-foreground">
                        Automated EIN/TIN checks on every load
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-3">Your Tool:</p>
                  <Link to="/lanemaker">
                    <Button className="w-full bg-gradient-to-r from-brand-blue to-brand-blue-hover hover:from-brand-blue-hover hover:to-blue-700 text-white group/btn">
                      Optimize My Logistics
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-8 h-full border-2 hover:border-amber-500 transition-all hover:shadow-xl group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-full" />
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-amber-500/20">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">For 3PLs & Brokers</h3>
                <p className="text-sm text-amber-600 dark:text-amber-400 font-semibold mb-4">The Goal: Execution Automation</p>
                <p className="text-muted-foreground mb-6">
                  Administrative tasks consume <span className="font-bold text-foreground">40% of a broker&apos;s day</span>.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Operational Velocity</p>
                      <p className="text-xs text-muted-foreground">
                        50+ loads per broker without adding headcount
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Closed-Loop Logic</p>
                      <p className="text-xs text-muted-foreground">
                        Enhanced matching reduces overhead
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Scalability</p>
                      <p className="text-xs text-muted-foreground">
                        Handle more volume with fewer clicks
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-3">Your Tool:</p>
                  <Link to="/lanemaker">
                    <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white group/btn">
                      Upgrade My Brokerage
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-brand-slate-50 via-green-50/30 to-emerald-50/50 dark:from-brand-navy dark:via-green-950/20 dark:to-emerald-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold flex items-center gap-2">
                <Route className="w-4 h-4" />
                RouteForge™ | The Revenue Architect
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-4xl md:text-5xl font-bold">
                  Automate Your Revenue.{' '}
                  <span className="text-green-600">Stop Guessing.</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Manual dispatch is a failed experiment. It relies on opinions, phone calls, and luck.
                  RouteForge™ is an AI-powered load orchestration engine that designs end-to-end revenue paths.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-card rounded-xl border border-border">
                    <Cpu className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-1">Intelligent Pathing</h4>
                    <p className="text-sm text-muted-foreground">50+ real-time market data points</p>
                  </div>
                  <div className="p-4 bg-card rounded-xl border border-border">
                    <Gauge className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-1">Asset Optimization</h4>
                    <p className="text-sm text-muted-foreground">Maximize equipment utilization</p>
                  </div>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl">
                  <p className="text-lg font-semibold text-green-800 dark:text-green-200">
                    +20% Average Weekly Revenue
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400">
                    For fleets switching from spot market to RouteForge
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link to="/routeforge">
                    <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-5 rounded-xl group">
                      Start Your RouteForge Trial
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/routeforge">
                    <Button variant="outline" className="px-6 py-5 rounded-xl">
                      View Technical Specs
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05))] bg-[length:20px_20px]" />
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-3">
                      <Truck className="w-10 h-10" />
                      <div>
                        <p className="text-sm text-white/70">Target Audience</p>
                        <p className="font-semibold">Carriers, Fleet Owners, Owner-Operators</p>
                      </div>
                    </div>
                    <div className="h-px bg-white/20" />
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-white/80">Deadhead Reduction</span>
                        <span className="font-bold text-xl">-15%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/80">Revenue Increase</span>
                        <span className="font-bold text-xl">+20%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/80">Time Saved Weekly</span>
                        <span className="font-bold text-xl">15 hrs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-brand-slate-50 via-brand-azure to-blue-50/50 dark:from-brand-navy dark:via-brand-navy-light dark:to-blue-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="px-4 py-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-blue-hover text-white text-sm font-semibold flex items-center gap-2">
                <Network className="w-4 h-4" />
                LaneMaker™ | The Matching Engine
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1 relative"
              >
                <div className="bg-gradient-to-br from-brand-blue to-brand-blue-hover rounded-2xl p-8 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05))] bg-[length:20px_20px]" />
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-3">
                      <Package className="w-10 h-10" />
                      <div>
                        <p className="text-sm text-white/70">Target Audience</p>
                        <p className="font-semibold">Shippers, Brokers, 3PLs</p>
                      </div>
                    </div>
                    <div className="h-px bg-white/20" />
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-white/80">Time-to-Book Reduction</span>
                        <span className="font-bold text-xl">-70%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/80">Carrier Rejection Rate</span>
                        <span className="font-bold text-xl">15%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/80">Compliance Automation</span>
                        <span className="font-bold text-xl">7-Point Check</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6 order-1 lg:order-2"
              >
                <h2 className="text-4xl md:text-5xl font-bold">
                  Perfect Matching.{' '}
                  <span className="text-brand-blue">Zero Empty Miles.</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Inefficiency and empty miles are the enemies of profit. LaneMaker™ analyzes space, weight,
                  distance, and equipment to find the perfect carrier instantly.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-card rounded-xl border border-border">
                    <Target className="w-8 h-8 text-brand-blue mb-3" />
                    <h4 className="font-bold mb-1">Granular Analysis</h4>
                    <p className="text-sm text-muted-foreground">Weight, space, equipment matching</p>
                  </div>
                  <div className="p-4 bg-card rounded-xl border border-border">
                    <FileCheck className="w-8 h-8 text-brand-blue mb-3" />
                    <h4 className="font-bold mb-1">Compliance Automation</h4>
                    <p className="text-sm text-muted-foreground">7-point safety check every time</p>
                  </div>
                </div>

                <div className="p-4 bg-brand-azure dark:bg-brand-navy-light border border-brand-blue/20 rounded-xl">
                  <p className="text-lg font-semibold text-brand-navy dark:text-brand-slate-50">
                    Drastically reduce operational overhead
                  </p>
                  <p className="text-sm text-brand-blue">
                    and shipping costs with intelligent matching
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link to="/lanemaker">
                    <Button className="bg-gradient-to-r from-brand-blue to-brand-blue-hover hover:from-brand-blue-hover hover:to-blue-700 text-white px-6 py-5 rounded-xl group">
                      Deploy LaneMaker
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/lanemaker">
                    <Button variant="outline" className="px-6 py-5 rounded-xl">
                      View Technical Specs
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-6">
                <Zap className="w-4 h-4 text-brand-orange" />
                <span className="text-sm font-semibold text-brand-orange">Data Over Opinions</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                The <span className="text-brand-blue">Vision</span> & Trust
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                FreightLabs is not just a brokerage. We are a next-generation ecosystem combining
                AI, automation, and a culture of experimentation to reshape how freight moves across America.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-brand-slate-50 to-white dark:from-brand-navy-light dark:to-brand-navy rounded-2xl p-6 border border-border"
              >
                <Shield className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="font-bold text-lg mb-2">Verified Compliance</h3>
                <p className="text-sm text-muted-foreground">
                  Automated safety checks on every carrier, every single time. No exceptions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-brand-slate-50 to-white dark:from-brand-navy-light dark:to-brand-navy rounded-2xl p-6 border border-border"
              >
                <Network className="w-10 h-10 text-brand-blue mb-4" />
                <h3 className="font-bold text-lg mb-2">Scalable Architecture</h3>
                <p className="text-sm text-muted-foreground">
                  Built for Enterprise needs from day one. Infrastructure that grows with you.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-brand-slate-50 to-white dark:from-brand-navy-light dark:to-brand-navy rounded-2xl p-6 border border-border"
              >
                <TrendingUp className="w-10 h-10 text-brand-orange mb-4" />
                <h3 className="font-bold text-lg mb-2">The Future</h3>
                <p className="text-sm text-muted-foreground">
                  Integrating Factoring, Telematics, and Franchise 3PL networks into one ecosystem.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-brand-navy to-brand-navy-light rounded-2xl p-8 text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05))] bg-[length:20px_20px]" />
              </div>
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-medium mb-2 italic">
                      &quot;In a chaotic market, the only currency that matters is predictability.
                      FreightLabs did not just find me a truck; they engineered a supply chain that
                      actually works.&quot;
                    </p>
                    <p className="text-white/70 text-sm">
                      — Beta Partner, Mid-Size Automotive Shipper
                    </p>
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
            <h2 className="text-4xl font-bold mb-6">
              Ready to transform your freight operations?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join the ecosystem of shippers and carriers using AI-powered freight matching
            </p>
            <Button className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all group">
              <Zap className="w-5 h-5 mr-2" />
              Initialize Your Ecosystem
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
