import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Truck,
  Route,
  Brain,
  Clock,
  DollarSign,
  MapPin,
  Gauge,
  CheckCircle2,
  Zap,
  Settings,
  Play,
  Target,
  TrendingUp,
  Calendar,
  Navigation,
  Fuel,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AnimatedCounter } from '@/components/shared/AnimatedCounter';

export function RouteForge() {
  const steps = [
    {
      step: '01',
      title: 'Input Your Parameters',
      description: 'Tell the Lab your equipment type, home base, and preferred regions. Set your time windows and revenue goals.',
      icon: Settings,
    },
    {
      step: '02',
      title: 'The Reactor Analysis',
      description: 'Our engine scans thousands of lanes instantly to find "Revenue Paths," not just single loads. We calculate return trips before you leave.',
      icon: Brain,
    },
    {
      step: '03',
      title: 'Execute & Earn',
      description: 'You get a schedule. You drive. We handle the paperwork, negotiations, and load matching. Pure revenue automation.',
      icon: Play,
    },
  ];

  const features = [
    {
      icon: DollarSign,
      title: 'Predictable Revenue',
      description: 'Flatten the peaks and valleys of income. Know what you will make this week, not just today.',
      stat: '<5%',
      statLabel: 'Weekly variance target',
    },
    {
      icon: Users,
      title: 'Dispatcherless Operations',
      description: 'Perfect for Owner-Operators who want to drive, not dial. AI handles negotiations 24/7.',
      stat: '15 hrs',
      statLabel: 'Saved per week',
    },
    {
      icon: Navigation,
      title: 'Smart Routing',
      description: 'We calculate the return trip before you even leave, minimizing deadhead miles completely.',
      stat: '-15%',
      statLabel: 'Deadhead reduction',
    },
    {
      icon: Calendar,
      title: 'Weekly Revenue Lock',
      description: 'Get advance visibility into your weekly earnings. No more guessing, just predictable income.',
      stat: '+20%',
      statLabel: 'Average revenue increase',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-emerald-50/50 to-teal-50/30 dark:from-green-950/30 dark:via-emerald-950/20 dark:to-teal-950/20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-green-200/30 to-emerald-200/30 blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-teal-200/30 to-green-200/30 blur-3xl"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/20">
                <Route className="w-4 h-4" />
                <span className="font-semibold text-sm">RouteForge™ | The Revenue Architect</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                Your Fleet on{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
                  Autopilot
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                RouteForge™ replaces the chaos of the spot market with the precision of AI.
                Stop guessing. Start engineering your revenue.
              </p>

              <div className="flex items-center gap-4 p-5 bg-card border-l-4 border-green-500 rounded-xl shadow-lg">
                <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">15% Reduction</p>
                  <p className="text-sm text-muted-foreground">in deadhead miles within the first 30 days</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-green-500/20 hover:shadow-xl transition-all group">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="px-8 py-6 text-lg rounded-xl border-2 border-green-200 dark:border-green-800 hover:bg-green-50 dark:hover:bg-green-950/30 transition-all">
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">
                    <AnimatedCounter end={98} suffix="%" />
                  </div>
                  <div className="text-sm text-muted-foreground">Asset Utilization</div>
                </div>
                <div className="h-10 w-px bg-border" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">
                    <AnimatedCounter end={50} suffix="+" />
                  </div>
                  <div className="text-sm text-muted-foreground">Data Points Analyzed</div>
                </div>
                <div className="h-10 w-px bg-border" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">24/7</div>
                  <div className="text-sm text-muted-foreground">AI Dispatch</div>
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
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur-2xl opacity-20" />
                <div className="relative bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-8 text-white overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                          <Truck className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-semibold">RouteForge Dashboard</p>
                          <p className="text-sm text-white/70">Live Revenue Path</p>
                        </div>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-green-400/20 text-green-200 text-xs font-medium">
                        Active
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                        <MapPin className="w-5 h-5 text-green-300" />
                        <div className="flex-1">
                          <p className="text-sm text-white/70">Current Route</p>
                          <p className="font-semibold">Dallas, TX → Chicago, IL → Detroit, MI</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="p-3 bg-white/10 rounded-lg text-center">
                          <p className="text-2xl font-bold">$4,850</p>
                          <p className="text-xs text-white/70">Weekly Target</p>
                        </div>
                        <div className="p-3 bg-white/10 rounded-lg text-center">
                          <p className="text-2xl font-bold">1,847</p>
                          <p className="text-xs text-white/70">Miles Planned</p>
                        </div>
                        <div className="p-3 bg-white/10 rounded-lg text-center">
                          <p className="text-2xl font-bold">$2.62</p>
                          <p className="text-xs text-white/70">Per Mile</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-green-400/20 rounded-xl">
                      <div className="flex items-center gap-3">
                        <Zap className="w-5 h-5 text-green-300" />
                        <span className="font-medium">Return Load Secured</span>
                      </div>
                      <CheckCircle2 className="w-5 h-5 text-green-300" />
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 mb-6">
              <Brain className="w-4 h-4" />
              <span className="text-sm font-semibold">How It Works</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Three Steps to <span className="text-green-600">Automated Revenue</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              From manual chaos to precision engineering. Let the Lab handle your dispatch.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="p-8 h-full border-2 hover:border-green-500 transition-all hover:shadow-xl group relative overflow-hidden">
                  <div className="absolute top-0 right-0 text-8xl font-bold text-green-100 dark:text-green-900/30 -translate-y-4 translate-x-4">
                    {item.step}
                  </div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-green-500/20">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-green-50 via-emerald-50/50 to-white dark:from-green-950/20 dark:via-emerald-950/10 dark:to-brand-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Features Built for <span className="text-green-600">Revenue</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Every feature is designed to maximize your earning potential and minimize wasted time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full border-2 hover:border-green-500/50 transition-all hover:shadow-lg group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 transition-colors">
                      <feature.icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold">{feature.title}</h3>
                        <div className="text-right">
                          <p className="text-xl font-bold text-green-600">{feature.stat}</p>
                          <p className="text-xs text-muted-foreground">{feature.statLabel}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
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
              className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.03)_25%,rgba(255,255,255,.03)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.03)_75%)] bg-[length:20px_20px]" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-medium mb-4 italic leading-relaxed">
                      &quot;I used to spend my evenings looking for a load back home. Now, RouteForge has my return trip booked before I even leave my driveway. It is like having a team of 10 dispatchers working for free.&quot;
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                        <Truck className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold">Owner-Operator</p>
                        <p className="text-white/70 text-sm">Texas Region</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20">
                  <div className="text-center">
                    <p className="text-3xl font-bold">+$800</p>
                    <p className="text-sm text-white/70">Weekly Revenue Increase</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold">0 hrs</p>
                    <p className="text-sm text-white/70">Evening Load Searching</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold">100%</p>
                    <p className="text-sm text-white/70">Return Loads Booked</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Engineer Your Revenue?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join thousands of carriers who have automated their dispatch and increased their weekly earnings.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-green-700 hover:bg-green-50 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all group">
                Initialize RouteForge
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
