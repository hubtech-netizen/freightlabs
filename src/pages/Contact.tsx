import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  Clock,
  Beaker,
  Truck,
  Package,
  Building2,
  TrendingUp,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', type: '', message: '' });
    }, 4000);
  };

  const contactTypes = [
    { value: 'carrier', label: 'Carrier', icon: Truck },
    { value: 'shipper', label: 'Shipper', icon: Package },
    { value: '3pl', label: '3PL / Broker', icon: Building2 },
    { value: 'investor', label: 'Investor', icon: TrendingUp },
    { value: 'jobseeker', label: 'Job Seeker', icon: Users },
  ];

  const directLines = [
    {
      title: 'Shipper Success Chemist',
      description: 'For shippers looking to optimize their supply chain',
      phone: '+1 (555) 123-4567',
      email: 'shippers@freightlabs.com',
      icon: Package,
      bgColor: 'bg-brand-azure dark:bg-brand-navy-light',
      iconColor: 'text-brand-blue',
    },
    {
      title: 'Carrier Success Engineer',
      description: 'For carriers ready to automate their revenue',
      phone: '+1 (555) 234-5678',
      email: 'carriers@freightlabs.com',
      icon: Truck,
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      iconColor: 'text-green-600',
    },
    {
      title: 'Market Penetration Strategist',
      description: 'For partnership and investment inquiries',
      phone: '+1 (555) 345-6789',
      email: 'partnerships@freightlabs.com',
      icon: TrendingUp,
      bgColor: 'bg-orange-100 dark:bg-orange-900/30',
      iconColor: 'text-brand-orange',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-24 bg-gradient-to-br from-brand-slate-50 via-brand-azure to-blue-50/50 dark:from-brand-navy dark:via-brand-navy-light dark:to-brand-navy overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-blue/10 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-brand-blue/20 shadow-lg mb-8">
              <Beaker className="w-5 h-5 text-brand-blue" />
              <span className="font-semibold">Connect with The Lab</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6">
              Ready to Run an{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue via-blue-500 to-brand-blue">
                Experiment?
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Reach out to our team of scientists. We are ready to help you optimize your freight operations.
            </p>

            <div className="inline-flex items-center gap-3 px-5 py-3 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl">
              <Clock className="w-5 h-5 text-green-600" />
              <p className="text-sm font-medium text-green-800 dark:text-green-200">
                Our scientists typically respond within <span className="font-bold">2 hours</span> during business operational windows
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <Card className="p-8 border-2">
                <h2 className="text-2xl font-bold mb-2">Transmit Your Data</h2>
                <p className="text-muted-foreground mb-8">Fill out the form below and we will get back to you shortly.</p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Data Transmitted Successfully!</h3>
                    <p className="text-muted-foreground">Our scientists will analyze your request and respond shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your full name"
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@company.com"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>I am a:</Label>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                        {contactTypes.map((type) => (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() => setFormData({ ...formData, type: type.value })}
                            className={`p-3 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                              formData.type === type.value
                                ? 'border-brand-blue bg-brand-azure dark:bg-brand-navy-light'
                                : 'border-border hover:border-brand-blue/50'
                            }`}
                          >
                            <type.icon className={`w-5 h-5 ${
                              formData.type === type.value ? 'text-brand-blue' : 'text-muted-foreground'
                            }`} />
                            <span className={`text-xs font-medium ${
                              formData.type === type.value ? 'text-brand-blue' : 'text-muted-foreground'
                            }`}>
                              {type.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your freight challenges and what you are looking to achieve..."
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.type}
                      className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white py-6 text-lg rounded-xl"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Transmitting Data...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 w-5 h-5" />
                          Transmit Data
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <Card className="p-6 border-2">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-azure dark:bg-brand-navy-light flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Corporate HQ (The Lab)</h3>
                    <p className="text-muted-foreground">
                      123 Innovation Drive<br />
                      Silicon Valley, CA 94025<br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-azure dark:bg-brand-navy-light flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">General Inquiries</h3>
                    <a href="mailto:info@freightlabs.com" className="text-brand-blue hover:underline">
                      info@freightlabs.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-azure dark:bg-brand-navy-light flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Main Line</h3>
                    <p className="text-muted-foreground">+1 (555) 000-0000</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 bg-gradient-to-br from-brand-navy to-brand-navy-light text-white">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Beaker className="w-5 h-5 text-brand-blue" />
                  Lab Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/70">Monday - Friday</span>
                    <span>6:00 AM - 8:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Saturday</span>
                    <span>8:00 AM - 4:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Sunday</span>
                    <span>Emergency Only</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-xs text-white/60">
                    AI-powered systems operate 24/7 for automated matching and dispatch.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-brand-slate-50 to-white dark:from-brand-navy dark:to-brand-navy-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Direct Lines to Our <span className="text-brand-blue">Scientists</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Connect directly with the specialist who can best address your specific needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {directLines.map((line, index) => (
              <motion.div
                key={line.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full border-2 hover:border-brand-blue/50 transition-all hover:shadow-lg group">
                  <div className={`w-14 h-14 rounded-xl ${line.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <line.icon className={`w-7 h-7 ${line.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{line.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{line.description}</p>
                  <div className="space-y-2 pt-4 border-t border-border">
                    <a href={`tel:${line.phone}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-blue transition-colors">
                      <Phone className="w-4 h-4" />
                      {line.phone}
                    </a>
                    <a href={`mailto:${line.email}`} className="flex items-center gap-2 text-sm text-brand-blue hover:underline">
                      <Mail className="w-4 h-4" />
                      {line.email}
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-brand-blue to-brand-blue-hover">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prefer to Schedule a Demo?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Book a personalized walkthrough of our platform with one of our freight scientists.
            </p>
            <Button className="bg-white text-brand-blue hover:bg-blue-50 px-8 py-6 text-lg rounded-xl shadow-lg">
              Schedule a Demo
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
