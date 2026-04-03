"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Send, GitFork, Link2 } from "lucide-react";

export function Contact() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[oklch(0.115_0.022_260)]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[oklch(0.8_0.12_300)] text-sm font-semibold tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[oklch(0.95_0.01_260)] tracking-tight mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-[oklch(0.6_0.02_260)] text-lg max-w-xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-[oklch(0.13_0.025_260)] rounded-3xl p-6 border border-[oklch(0.25_0.02_260)]">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[oklch(0.8_0.12_300/0.1)] flex items-center justify-center text-[oklch(0.8_0.12_300)] flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[oklch(0.85_0.01_260)] mb-1">Location</p>
                  <p className="text-[oklch(0.6_0.02_260)] text-sm">{t("contact.location")}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-4 border-t border-[oklch(0.2_0.02_260)]">
                <div className="w-2 h-2 rounded-full bg-[oklch(0.75_0.15_145)] animate-pulse" />
                <span className="text-sm text-[oklch(0.65_0.02_260)]">{t("contact.available")}</span>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { icon: GitFork, label: "GitHub", href: "https://github.com/HelderMendes", value: "@HelderMendes" },
                { icon: Link2, label: "LinkedIn", href: "https://linkedin.com/in/heldermendes", value: "/in/heldermendes" },
              ].map(({ icon: Icon, label, href, value }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[oklch(0.13_0.025_260)] rounded-2xl border border-[oklch(0.25_0.02_260)] hover:border-[oklch(0.8_0.12_300/0.3)] hover:bg-[oklch(0.15_0.025_260)] transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[oklch(0.18_0.025_260)] flex items-center justify-center text-[oklch(0.55_0.02_260)] group-hover:text-[oklch(0.8_0.12_300)] transition-colors">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-[oklch(0.5_0.02_260)] mb-0.5">{label}</p>
                    <p className="text-sm text-[oklch(0.75_0.02_260)] font-medium">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-[oklch(0.13_0.025_260)] rounded-3xl p-8 border border-[oklch(0.25_0.02_260)]">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-[oklch(0.8_0.12_300/0.1)] flex items-center justify-center mx-auto mb-4 text-2xl">
                    ✓
                  </div>
                  <p className="text-[oklch(0.8_0.12_300)] font-semibold text-lg mb-2">Success!</p>
                  <p className="text-[oklch(0.6_0.02_260)]">{t("contact.success")}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { key: "name", type: "text", label: t("contact.name") },
                      { key: "email", type: "email", label: t("contact.email") },
                    ].map((field) => (
                      <div key={field.key}>
                        <label className="block text-xs font-semibold text-[oklch(0.55_0.02_260)] uppercase tracking-wider mb-2">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          required
                          value={formData[field.key as "name" | "email"]}
                          onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                          className="w-full bg-[oklch(0.16_0.025_260)] border border-[oklch(0.25_0.02_260)] rounded-xl px-4 py-3 text-[oklch(0.9_0.01_260)] text-sm placeholder:text-[oklch(0.35_0.02_260)] focus:outline-none focus:border-[oklch(0.8_0.12_300/0.5)] transition-colors"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[oklch(0.55_0.02_260)] uppercase tracking-wider mb-2">
                      {t("contact.message")}
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[oklch(0.16_0.025_260)] border border-[oklch(0.25_0.02_260)] rounded-xl px-4 py-3 text-[oklch(0.9_0.01_260)] text-sm placeholder:text-[oklch(0.35_0.02_260)] focus:outline-none focus:border-[oklch(0.8_0.12_300/0.5)] transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[oklch(0.8_0.12_300)] text-[oklch(0.1_0.02_260)] font-semibold text-sm hover:bg-[oklch(0.85_0.12_300)] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_30px_oklch(0.8_0.12_300/0.2)]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[oklch(0.1_0.02_260)] border-t-transparent rounded-full animate-spin" />
                        {t("contact.sending")}
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        {t("contact.send")}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
