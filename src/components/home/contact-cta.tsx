"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Container from "@/components/common/container";
import SectionHeading from "@/components/common/section-heading";
import { contactContent } from "@/content/contact";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Clock,
  MessageCircle
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ContactCta() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit mobile number";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitStatus({
      type: "success",
      message: "Thank you! We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
    
    setTimeout(() => {
      setSubmitStatus({ type: null, message: "" });
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="section-space relative overflow-hidden">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-10" /> */}
      
      {/* Decorative Blur Elements */}
      <div className="absolute top-0 -right-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 -left-32 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />

      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Main Contact Card */}
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
            <div className="p-6 md:p-8 lg:p-10">
              <div className="grid gap-10 lg:grid-cols-2">
                {/* Left Side - Info */}
                <motion.div variants={itemVariants} className="space-y-6">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      <MessageCircle className="h-4 w-4" />
                      {contactContent.eyebrow}
                    </span>
                    <h2 className="mt-4 text-3xl font-bold text-foreground lg:text-4xl">
                      {contactContent.title}
                    </h2>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {contactContent.description}
                    </p>
                  </div>

                  {/* Contact Info Cards */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 rounded-xl border border-border bg-muted/30 p-4 transition-all hover:border-primary/30 hover:shadow-md">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase text-muted-foreground">Email Us</div>
                        <a href={`mailto:${contactContent.email}`} className="text-foreground hover:text-primary transition-colors">
                          {contactContent.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-xl border border-border bg-muted/30 p-4 transition-all hover:border-primary/30 hover:shadow-md">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase text-muted-foreground">Call Us</div>
                        <a href={`tel:${contactContent.phone}`} className="text-foreground hover:text-primary transition-colors">
                          {contactContent.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-xl border border-border bg-muted/30 p-4 transition-all hover:border-primary/30 hover:shadow-md">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase text-muted-foreground">Visit Us</div>
                        <div className="text-foreground">{contactContent.address}</div>
                      </div>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="rounded-xl border border-border bg-muted/30 p-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="font-semibold text-foreground">Business Hours</span>
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                      <span className="text-muted-foreground">Monday - Friday:</span>
                      <span className="text-foreground">9:00 AM - 7:00 PM</span>
                      <span className="text-muted-foreground">Saturday:</span>
                      <span className="text-foreground">10:00 AM - 5:00 PM</span>
                      <span className="text-muted-foreground">Sunday:</span>
                      <span className="text-foreground">Closed</span>
                    </div>
                  </div>
                </motion.div>

                {/* Right Side - Contact Form */}
                <motion.div variants={itemVariants}>
                  <div className="rounded-xl border border-border bg-muted/30 p-6">
                    <h3 className="mb-4 text-xl font-bold text-foreground">Send us a Message</h3>
                    
                    {submitStatus.type === "success" && (
                      <div className="mb-4 flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-400">
                        <CheckCircle className="h-5 w-5" />
                        <span className="text-sm">{submitStatus.message}</span>
                      </div>
                    )}

                    {submitStatus.type === "error" && (
                      <div className="mb-4 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-red-700 dark:border-red-800 dark:bg-red-950/30 dark:text-red-400">
                        <AlertCircle className="h-5 w-5" />
                        <span className="text-sm">{submitStatus.message}</span>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-foreground">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full rounded-lg border bg-card px-4 py-2.5 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                            errors.name ? "border-red-400 bg-red-50 dark:bg-red-950/20" : "border-border"
                          }`}
                          placeholder="Enter your full name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                        )}
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block text-sm font-medium text-foreground">Email *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full rounded-lg border bg-card px-4 py-2.5 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                              errors.email ? "border-red-400 bg-red-50 dark:bg-red-950/20" : "border-border"
                            }`}
                            placeholder="your@email.com"
                          />
                          {errors.email && (
                            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                          )}
                        </div>

                        <div>
                          <label className="mb-1.5 block text-sm font-medium text-foreground">Phone *</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full rounded-lg border bg-card px-4 py-2.5 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                              errors.phone ? "border-red-400 bg-red-50 dark:bg-red-950/20" : "border-border"
                            }`}
                            placeholder="10-digit mobile number"
                          />
                          {errors.phone && (
                            <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-foreground">Subject *</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`w-full rounded-lg border bg-card px-4 py-2.5 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                            errors.subject ? "border-red-400 bg-red-50 dark:bg-red-950/20" : "border-border"
                          }`}
                        >
                          <option value="">Select a subject</option>
                          <option value="Product Enquiry">Product Enquiry</option>
                          <option value="Bulk Order">Bulk Order</option>
                          <option value="Dealership">Dealership Opportunity</option>
                          <option value="Business Partnership">Business Partnership</option>
                          <option value="Feedback">Feedback</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.subject && (
                          <p className="mt-1 text-xs text-red-500">{errors.subject}</p>
                        )}
                      </div>

                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-foreground">Message *</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className={`w-full rounded-lg border bg-card px-4 py-2.5 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                            errors.message ? "border-red-400 bg-red-50 dark:bg-red-950/20" : "border-border"
                          }`}
                          placeholder="Tell us how we can help you..."
                        />
                        {errors.message && (
                          <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}