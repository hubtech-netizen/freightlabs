import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Loader2, Truck, Package, Building2, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultInterest?: 'routeforge' | 'loadforge' | 'both' | 'general';
  source?: string;
}

export function ContactModal({ isOpen, onClose, defaultInterest = 'general', source = 'unknown' }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    user_type: '',
    interest: defaultInterest,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = '0';
      document.body.style.left = '0';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      document.body.style.left = '';
    }

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      document.body.style.left = '';
    };
  }, [isOpen]);

  const userTypes = [
    { value: 'carrier', label: 'Carrier', icon: Truck, color: 'green' },
    { value: 'shipper', label: 'Shipper', icon: Package, color: 'blue' },
    { value: '3pl', label: '3PL/Broker', icon: Building2, color: 'amber' },
    { value: 'other', label: 'Other', icon: Users, color: 'gray' },
  ];

  const interests = [
    { value: 'routeforge', label: 'RouteForge™ (Carriers)', description: 'AI-powered route planning' },
    { value: 'loadforge', label: 'LoadForge™ (Shippers)', description: 'Smart capacity sourcing' },
    { value: 'both', label: 'Both Products', description: 'Complete platform access' },
    { value: 'general', label: 'General Inquiry', description: 'Learn more about FreightLabs' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      // ==========================================
      // DATABASE SUBMISSION - IMPLEMENTATION NEEDED
      // ==========================================
      // TODO: Connect to your backend API or database here
      //
      // Expected payload structure:
      // {
      //   name: formData.name,
      //   email: formData.email,
      //   company: formData.company,
      //   phone: formData.phone || null,
      //   user_type: formData.user_type,
      //   interest: formData.interest,
      //   message: formData.message || null,
      //   source: source,
      //   status: 'new',
      // }
      //
      // Example Supabase implementation:
      // const { error } = await supabase.from('leads').insert([payload]);
      // if (error) throw error;
      //
      // Example API call:
      // const response = await fetch('/api/leads', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(payload)
      // });
      // if (!response.ok) throw new Error('Submission failed');
      // ==========================================

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            company: '',
            phone: '',
            user_type: '',
            interest: defaultInterest,
            message: '',
          });
        }, 500);
      }, 2500);
    } catch (err) {
      setError('Failed to submit. Please try again or contact us directly.');
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[9998]"
            aria-hidden="true"
          />
          <div className="fixed z-[9999] flex items-center justify-center overflow-hidden pointer-events-auto left-0 right-0 top-24 bottom-24 sm:top-20 sm:bottom-20 md:top-24 md:bottom-32 lg:top-32 lg:bottom-40 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="w-full max-w-2xl h-full relative pointer-events-auto flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <Card className="relative bg-card border-2 shadow-2xl flex flex-col h-full overflow-hidden">
                <div className="flex justify-end p-4 bg-card/98 backdrop-blur-sm border-b border-border/40 flex-shrink-0">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    className="hover:bg-accent rounded-full w-10 h-10 hover:scale-110 transition-transform shadow-lg hover:shadow-xl"
                    aria-label="Close modal"
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>

                <div className="p-4 sm:p-6 md:p-8 pt-2 sm:pt-3 md:pt-4 overflow-y-auto flex-1 overscroll-contain">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8 sm:py-12"
                    >
                      <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                        <CheckCircle2 className="w-8 sm:w-10 h-8 sm:h-10 text-green-600" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">Thank You!</h3>
                      <p className="text-base sm:text-lg text-muted-foreground mb-2">Your request has been received.</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Our team will reach out to you within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <>
                      <div className="mb-6 sm:mb-8">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Get Started with FreightLabs</h2>
                        <p className="text-sm sm:text-base text-muted-foreground">
                          Fill out the form below and our team will reach out to schedule a personalized demo.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                        <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                          <div className="space-y-1.5">
                            <Label htmlFor="modal-name" className="text-xs sm:text-sm">Full Name *</Label>
                            <Input
                              id="modal-name"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="John Doe"
                              className="h-9 sm:h-12 text-xs sm:text-sm"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <Label htmlFor="modal-email" className="text-xs sm:text-sm">Email Address *</Label>
                            <Input
                              id="modal-email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="john@company.com"
                              className="h-9 sm:h-12 text-xs sm:text-sm"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                          <div className="space-y-1.5">
                            <Label htmlFor="modal-company" className="text-xs sm:text-sm">Company Name *</Label>
                            <Input
                              id="modal-company"
                              required
                              value={formData.company}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                              placeholder="ABC Logistics"
                              className="h-9 sm:h-12 text-xs sm:text-sm"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <Label htmlFor="modal-phone" className="text-xs sm:text-sm">Phone Number</Label>
                            <Input
                              id="modal-phone"
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="+1 (555) 000-0000"
                              className="h-9 sm:h-12 text-xs sm:text-sm"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5 sm:space-y-2">
                          <Label className="text-xs sm:text-sm">I am a: *</Label>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
                            {userTypes.map((type) => (
                              <button
                                key={type.value}
                                type="button"
                                onClick={() => setFormData({ ...formData, user_type: type.value })}
                                className={`p-2 sm:p-4 rounded-lg sm:rounded-xl border-2 transition-all flex flex-col items-center gap-1 sm:gap-2 hover:scale-105 ${
                                  formData.user_type === type.value
                                    ? `border-${type.color}-500 bg-${type.color}-50 dark:bg-${type.color}-950/30`
                                    : 'border-border hover:border-accent'
                                }`}
                              >
                                <type.icon
                                  className={`w-4 h-4 sm:w-6 sm:h-6 ${
                                    formData.user_type === type.value
                                      ? `text-${type.color}-600`
                                      : 'text-muted-foreground'
                                  }`}
                                />
                                <span
                                  className={`text-xs sm:text-sm font-medium ${
                                    formData.user_type === type.value
                                      ? `text-${type.color}-700 dark:text-${type.color}-400`
                                      : 'text-muted-foreground'
                                  }`}
                                >
                                  {type.label}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-1.5 sm:space-y-2">
                          <Label className="text-xs sm:text-sm">I'm interested in: *</Label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                            {interests.map((interest) => (
                              <button
                                key={interest.value}
                                type="button"
                                onClick={() => setFormData({ ...formData, interest: interest.value })}
                                className={`p-2 sm:p-4 rounded-lg sm:rounded-xl border-2 transition-all text-left hover:scale-[1.02] ${
                                  formData.interest === interest.value
                                    ? 'border-brand-blue bg-brand-azure dark:bg-brand-navy-light'
                                    : 'border-border hover:border-brand-blue/50'
                                }`}
                              >
                                <p
                                  className={`font-semibold mb-0.5 text-xs sm:text-sm ${
                                    formData.interest === interest.value
                                      ? 'text-brand-blue'
                                      : 'text-foreground'
                                  }`}
                                >
                                  {interest.label}
                                </p>
                                <p className="text-[10px] sm:text-xs text-muted-foreground">{interest.description}</p>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <Label htmlFor="modal-message" className="text-xs sm:text-sm">Additional Details</Label>
                          <textarea
                            id="modal-message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Tell us about your fleet size, volume, or any specific questions..."
                            rows={2}
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-input bg-background text-foreground text-xs sm:text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                          />
                        </div>

                        {error && (
                          <div className="p-2 sm:p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg sm:rounded-xl">
                            <p className="text-xs sm:text-sm text-red-600 dark:text-red-400">{error}</p>
                          </div>
                        )}

                        <Button
                          type="submit"
                          disabled={isSubmitting || !formData.user_type}
                          className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white py-3 sm:py-6 text-sm sm:text-lg rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                              Request Demo
                            </>
                          )}
                        </Button>

                        <p className="text-[10px] sm:text-xs text-center text-muted-foreground">
                          By submitting this form, you agree to be contacted by our team about FreightLabs services.
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </Card>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
