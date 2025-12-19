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
import { MaskedTextReveal } from '@/components/shared/MaskedTextReveal';
import { ContactModal } from '@/components/shared/ContactModal';

export function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    type: '',
    volume: '',
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
      setFormData({ name: '', company: '', email: '', type: '', volume: '', message: '' });
    }, 4000);
  };

  const contactTypes = [
    { value: 'carrier', label: 'Carrier', icon: Truck },
    { value: 'shipper', label: 'Shipper', icon: Package },
    { value: '3pl', label: '3PL Broker', icon: Building2 },
    { value: 'other', label: 'Other', icon: Users },
  ];

  const directLines = [
    {
      title: 'Carrier Relations',
      description: 'Support for fleets and owner-operators',
      phone: '+1 817 520 8170',
      email: 'carriers@freightlabs.io',
      icon: Truck,
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      iconColor: 'text-green-600',
    },
    {
      title: 'Shipper Solutions',
      description: 'Enterprise accounts and capacity planning',
      phone: '+1 817 520 8170',
      email: 'shippers@freightlabs.io',
      icon: Package,
      bgColor: 'bg-brand-azure dark:bg-brand-navy-light',
      iconColor: 'text-brand-blue',
    },
    {
      title: 'Brokerage Partnerships',
      description: 'Tools for 3PLs and intermediaries',
      phone: '+1 817 520 8170',
      email: 'partnerships@freightlabs.io',
      icon: Building2,
      bgColor: 'bg-amber-100 dark:bg-amber-900/30',
      iconColor: 'text-amber-600',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-12 bg-gradient-to-br from-brand-slate-50 via-brand-azure to-blue-50/50 dark:from-brand-navy dark:via-brand-navy-light dark:to-brand-navy overflow-hidden">
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
              <Mail className="w-5 h-5 text-brand-blue" />
              <span className="font-semibold">Contact Us</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6">
              Let&apos;s Move Freight
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team is ready to help you optimize your logistics operations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">
              Have questions about our platform? Our team is ready to help you optimize your logistics operations.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              whileHover={{ y: -8 }}
            >
              <Card className="p-8 border-2 border-brand-blue/20 h-full hover:border-brand-blue transition-all duration-300 hover:shadow-2xl hover:shadow-brand-blue/20 group relative overflow-hidden backdrop-blur-sm">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-14 h-14 rounded-2xl bg-brand-azure dark:bg-brand-navy-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MapPin className="w-7 h-7 text-brand-blue" />
                </div>
                <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  1621 Central Avenue, Suite 58586<br />
                  Cheyenne, WY 82201<br />
                  United States
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="p-8 border-2 border-brand-blue/20 h-full hover:border-brand-blue transition-all duration-300 hover:shadow-2xl hover:shadow-brand-blue/20 group relative overflow-hidden backdrop-blur-sm">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-14 h-14 rounded-2xl bg-brand-azure dark:bg-brand-navy-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Phone className="w-7 h-7 text-brand-blue" />
                </div>
                <h3 className="font-bold text-lg mb-3">Call Us</h3>
                <a href="tel:+18175208170" className="text-sm font-semibold text-brand-blue hover:text-brand-blue-hover transition-colors block mb-4">
                  +1 817 520 8170
                </a>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Mon-Fri: 6:00 AM - 8:00 PM PST<br/>
                  Sat: 8:00 AM - 4:00 PM PST
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -8 }}
            >
              <Card className="p-8 border-2 border-brand-blue/20 h-full hover:border-brand-blue transition-all duration-300 hover:shadow-2xl hover:shadow-brand-blue/20 group relative overflow-hidden backdrop-blur-sm">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-14 h-14 rounded-2xl bg-brand-azure dark:bg-brand-navy-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Mail className="w-7 h-7 text-brand-blue" />
                </div>
                <h3 className="font-bold text-lg mb-3">Email Us</h3>
                <a href="mailto:hello@FreightLabs.io" className="text-sm font-semibold text-brand-blue hover:text-brand-blue-hover transition-colors block mb-4">
                  hello@FreightLabs.io
                </a>
                <p className="text-xs text-muted-foreground">
                  Response time: 2-4 hours
                </p>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 lg:p-12 border-2 border-brand-blue/20 max-w-2xl mx-auto hover:border-brand-blue/40 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-blue/10 backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-3">Send Us a Message</h2>
              <p className="text-muted-foreground mb-10">Fill out the form below and our team will get back to you as soon as possible.</p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent Successfully!</h3>
                  <p className="text-muted-foreground">Our team will review your request and respond shortly.</p>
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
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your company name"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>I am a:</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
                    <Label htmlFor="volume">Fleet Size / Volume</Label>
                    <Input
                      id="volume"
                      value={formData.volume}
                      onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                      placeholder="e.g., 50 trucks or 1000 loads/month"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your freight challenges and what you are looking to achieve..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.type}
                    className="w-full bg-gradient-to-r from-brand-blue to-brand-blue/80 hover:from-brand-blue hover:to-brand-blue text-white py-6 text-lg rounded-xl shadow-lg hover:shadow-2xl hover:shadow-brand-blue/40 transition-all duration-300 font-semibold disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-br from-brand-slate-50 to-white dark:from-brand-navy dark:to-brand-navy-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <MaskedTextReveal useViewportTrigger={true}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Department <span className="text-brand-blue">Contacts</span>
              </h2>
            </MaskedTextReveal>
            <p className="text-lg text-muted-foreground">
              Connect directly with the team that can best help you with your logistics needs.
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
                whileHover={{ y: -8 }}
              >
                <Card className="p-8 h-full border-2 border-opacity-20 hover:border-opacity-100 transition-all duration-300 hover:shadow-2xl group relative overflow-hidden backdrop-blur-sm" style={{borderColor: `var(--tw-border-color, ${line.iconColor})`}}>
                  <div className={`absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full`} style={{background: `linear-gradient(to bottom-left, ${line.iconColor}15, transparent)`}} />
                  <div className={`w-16 h-16 rounded-2xl ${line.bgColor} flex items-center justify-center mb-6 group-hover:scale-125 transition-all duration-300 shadow-lg`} style={{boxShadow: `0 4px 20px ${line.iconColor}30`}}>
                    <line.icon className={`w-8 h-8 ${line.iconColor}`} />
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

      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-brand-blue via-brand-blue-hover to-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/2 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto text-white"
          >
            <MaskedTextReveal useViewportTrigger={true}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Prefer to Schedule a Demo?
              </h2>
            </MaskedTextReveal>
            <p className="text-lg text-white/90 mb-10 leading-relaxed">
              Book a personalized walkthrough of our platform with one of our logistics experts and discover how we can transform your operations.
            </p>
            <Button
              onClick={() => {
                setIsModalOpen(true);
              }}
              className="bg-white text-brand-blue hover:bg-blue-50 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-2xl hover:shadow-white/20 transition-all font-semibold"
            >
              Schedule Platform Demo
            </Button>
          </motion.div>
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultInterest="general"
        source="contact_page_demo_cta"
      />
    </div>
  );
}
