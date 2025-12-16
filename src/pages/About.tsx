import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Beaker,
  Brain,
  Target,
  Zap,
  Users,
  Clock,
  Trophy,
  Lightbulb,
  BarChart3,
  FlaskConical,
  Microscope,
  Atom,
  Rocket,
  GraduationCap,
  Heart,
  Code,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AnimatedCounter } from '@/components/shared/AnimatedCounter';

export function About() {
  const principles = [
    {
      icon: Target,
      title: 'Obsess Over the Freight Ecosystem',
      description: 'Shippers, carriers, and 3PLs are our north star. Every decision is evaluated through the lens of ecosystem value.',
    },
    {
      icon: Zap,
      title: 'Bias for Intelligent Action',
      description: 'Speed matters, but AI-driven decision-making matters more. We move fast, but we move smart.',
    },
    {
      icon: BarChart3,
      title: 'Data or it Did Not Happen',
      description: 'Reasoning beats rank. Metrics are truth. We do not care about titles, we care about data.',
    },
  ];

  const rituals = [
    {
      icon: Code,
      title: 'Hack-the-Freight',
      description: 'We run 24-hour hackathons to solve industry problems. Innovation happens when we remove barriers.',
    },
    {
      icon: FlaskConical,
      title: 'The Uniform',
      description: 'We wear the Lab Coat as a symbol of our commitment to the scientific method of logistics.',
    },
    {
      icon: Trophy,
      title: 'Breakthrough Reviews',
      description: 'We celebrate failed experiments as much as wins, because failure is the fuel for innovation.',
    },
    {
      icon: Clock,
      title: 'Daily Stand-Up Experiments',
      description: 'Quick meetings to review hypotheses, share learnings, and align on the next experiment.',
    },
  ];

  const scientists = [
    {
      role: 'Chief Experimentation Officer',
      abbr: 'CXO',
      description: 'Leads the strategic vision and experimental direction of FreightLabs.',
    },
    {
      role: 'Chief Freight Scientist',
      abbr: 'CFS',
      description: 'Architects the AI and data systems that power our matching engines.',
    },
    {
      role: 'Head of Field Experiments',
      abbr: 'HFE',
      description: 'Oversees real-world testing and carrier/shipper relationships.',
    },
    {
      role: 'Talent Acquisition Scientist',
      abbr: 'TAS',
      description: 'Identifies and recruits the next generation of logistics scientists.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-brand-blue/10 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-orange/10 blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-32 flex items-center min-h-screen">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <Beaker className="w-5 h-5 text-brand-blue" />
                <span className="font-semibold">Welcome to The Lab</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                We are <span className="text-brand-blue">Scientists</span> of Efficiency
              </h1>

              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                At FreightLabs, we do not just move boxes. We experiment. We innovate. We engineer breakthroughs.
                Every decision we make is backed by data points, not gut feelings.
              </p>

              <div className="flex items-center justify-center gap-8 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-blue">
                    <AnimatedCounter end={50} suffix="+" />
                  </div>
                  <div className="text-sm text-white/70">Data Points Per Decision</div>
                </div>
                <div className="h-12 w-px bg-white/20" />
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-blue">
                    <AnimatedCounter end={24} suffix="/7" />
                  </div>
                  <div className="text-sm text-white/70">AI Operations</div>
                </div>
                <div className="h-12 w-px bg-white/20" />
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-blue">
                    <AnimatedCounter end={0} suffix="%" />
                  </div>
                  <div className="text-sm text-white/70">Gut Feelings</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-slate-50 dark:from-brand-navy to-transparent" />
      </section>

      <section className="py-24 bg-gradient-to-b from-brand-slate-50 to-white dark:from-brand-navy dark:to-brand-navy-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-azure dark:bg-brand-navy border border-brand-blue/20 mb-6">
              <Microscope className="w-4 h-4 text-brand-blue" />
              <span className="text-sm font-semibold text-brand-blue">Our Philosophy</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The <span className="text-brand-blue">FreightLabs</span> Way
            </h2>
            <p className="text-xl text-muted-foreground">
              We believe in Experimentation over Ego and Data over Opinions. We try, test, learn, and iterate.
              This is not a brokerage. This is a laboratory.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <Card className="p-8 h-full border-2 hover:border-brand-blue transition-all hover:shadow-xl group text-center">
                    <div className="w-16 h-16 rounded-2xl bg-brand-azure dark:bg-brand-navy-light flex items-center justify-center mb-6 mx-auto group-hover:bg-brand-blue transition-colors">
                      <principle.icon className="w-8 h-8 text-brand-blue group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                    <p className="text-muted-foreground">{principle.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-6">
              <Atom className="w-4 h-4 text-brand-orange" />
              <span className="text-sm font-semibold text-brand-orange">Culture & Rituals</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How We <span className="text-brand-orange">Operate</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Our rituals define who we are. They are the experiments that shape our culture and drive innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {rituals.map((ritual, index) => (
              <motion.div
                key={ritual.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full border-2 hover:border-brand-orange/50 transition-all hover:shadow-lg group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange transition-colors">
                      <ritual.icon className="w-6 h-6 text-brand-orange group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{ritual.title}</h3>
                      <p className="text-muted-foreground">{ritual.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-brand-slate-50 to-brand-azure dark:from-brand-navy dark:to-brand-navy-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6">
              <Users className="w-4 h-4 text-brand-blue" />
              <span className="text-sm font-semibold">Meet the Scientists</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The <span className="text-brand-blue">Leadership</span> Team
            </h2>
            <p className="text-xl text-muted-foreground">
              Our leaders are not executives. They are scientists leading experiments that reshape logistics.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {scientists.map((scientist, index) => (
              <motion.div
                key={scientist.abbr}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full border-2 hover:border-brand-blue transition-all hover:shadow-xl group text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-navy-light flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-white">{scientist.abbr}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{scientist.role}</h3>
                  <p className="text-sm text-muted-foreground">{scientist.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,.05)_25%,rgba(59,130,246,.05)_50%,transparent_50%,transparent_75%,rgba(59,130,246,.05)_75%)] bg-[length:20px_20px]" />
              
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 rounded-2xl bg-brand-blue/20 flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-10 h-10 text-brand-blue" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Do You Have the DNA of a Scientist?
                </h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  We are always looking for curious minds who want to experiment, innovate, and reshape the future of logistics.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/careers">
                    <Button className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all group">
                      View Career Openings
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-brand-slate-50 to-white dark:from-brand-navy dark:to-brand-navy-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-azure dark:bg-brand-navy border border-brand-blue/20 mb-6">
              <Rocket className="w-4 h-4 text-brand-blue" />
              <span className="text-sm font-semibold text-brand-blue">The Future</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Building the Future of <span className="text-brand-blue">Freight</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We are not stopping at matching. The future includes integrated Factoring Partnerships, 
              deep Telematics Integration, Franchise 3PL Offices, and dedicated Mobile Apps for drivers and shippers.
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { label: 'Factoring Integration', status: 'Coming Soon' },
                { label: 'Advanced Telematics', status: 'In Development' },
                { label: 'Franchise 3PL Network', status: 'Planning' },
                { label: 'Mobile Apps', status: 'Beta Testing' },
              ].map((item) => (
                <Card key={item.label} className="p-4 border-2 hover:border-brand-blue/50 transition-all">
                  <p className="font-semibold mb-1">{item.label}</p>
                  <p className="text-xs text-brand-blue">{item.status}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
