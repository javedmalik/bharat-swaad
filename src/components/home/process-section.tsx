"use client";

import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import Container from "@/components/common/container";
import SectionHeading from "@/components/common/section-heading";
import { processContent } from "@/content/process";
import {
  Search,
  Handshake,
  Package,
  Heart,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const stepIcons = [Search, Handshake, Package, Heart];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="section-space relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at top right, color-mix(in srgb, var(--primary) 10%, transparent), transparent 28%),
          radial-gradient(circle at bottom left, color-mix(in srgb, var(--secondary) 12%, transparent), transparent 30%),
          linear-gradient(to bottom, var(--background), color-mix(in srgb, var(--background) 92%, white))
        `,
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30 dark:opacity-10" />

      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute right-10 top-20 h-64 w-64 rounded-full border"
          style={{ borderColor: "color-mix(in srgb, var(--primary) 12%, transparent)" }}
        />
        <div
          className="absolute bottom-20 left-10 h-80 w-80 rounded-full border"
          style={{ borderColor: "color-mix(in srgb, var(--secondary) 12%, transparent)" }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{ borderColor: "color-mix(in srgb, var(--border) 45%, transparent)" }}
        />

        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-20 top-32 opacity-10"
        >
          <Sparkles
            className="h-24 w-24"
            style={{ color: "var(--primary)" }}
            strokeWidth={1}
          />
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 left-20 opacity-10"
        >
          <Sparkles
            className="h-20 w-20"
            style={{ color: "var(--secondary)" }}
            strokeWidth={1}
          />
        </motion.div>
      </div>

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <SectionHeading
            eyebrow={processContent.eyebrow}
            title={processContent.title}
            description="From farm to your kitchen, we ensure quality at every step"
          />

          <div className="relative">
            <div
              className="absolute left-[10%] right-[10%] top-32 hidden h-0.5 xl:block"
              style={{
                background:
                  "linear-gradient(90deg, color-mix(in srgb, var(--primary) 35%, white), color-mix(in srgb, var(--secondary) 50%, white), color-mix(in srgb, var(--primary) 35%, white))",
              }}
            />

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {processContent.steps.map((step, index) => {
                const Icon = stepIcons[index % stepIcons.length];
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={step.title}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    className="group relative"
                  >
                    <div className="absolute -left-4 -top-4 z-10">
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white shadow-lg"
                        style={{
                          background: isEven
                            ? "linear-gradient(90deg, var(--primary), color-mix(in srgb, var(--primary) 65%, white))"
                            : "linear-gradient(90deg, var(--secondary), var(--accent))",
                        }}
                      >
                        {index + 1}
                      </div>
                    </div>

                    <div
                      className="relative h-full rounded-[28px] border p-6 shadow-[0_16px_40px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
                      style={{
                        background: "color-mix(in srgb, var(--card) 94%, transparent)",
                        borderColor: "var(--border)",
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="inline-flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300"
                        style={{
                          background: isEven
                            ? "color-mix(in srgb, var(--primary) 12%, transparent)"
                            : "color-mix(in srgb, var(--secondary) 20%, transparent)",
                          color: isEven ? "var(--primary)" : "var(--secondary-foreground)",
                        }}
                      >
                        <Icon size={28} strokeWidth={1.8} />
                      </motion.div>

                      <h3
                        className="mt-5 text-xl font-bold"
                        style={{ color: "var(--foreground)" }}
                      >
                        {step.title}
                      </h3>

                      <p
                        className="mt-3 text-sm leading-relaxed"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        {step.description}
                      </p>

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 48 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-4 h-0.5 rounded-full transition-all duration-300 group-hover:w-24"
                        style={{
                          background: isEven
                            ? "linear-gradient(90deg, var(--primary), color-mix(in srgb, var(--primary) 45%, white))"
                            : "linear-gradient(90deg, var(--secondary), color-mix(in srgb, var(--accent) 45%, white))",
                        }}
                      />

                      <div
                        className="mt-4 flex items-center gap-1 text-xs font-medium"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        <span>Step {index + 1}</span>
                        {index < processContent.steps.length - 1 && (
                          <ArrowRight className="h-3 w-3" />
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 shadow-sm"
              style={{
                background:
                  "linear-gradient(90deg, color-mix(in srgb, var(--primary) 12%, white), color-mix(in srgb, var(--secondary) 20%, white))",
                border: "1px solid var(--border)",
              }}
            >
              <Sparkles
                className="h-4 w-4"
                style={{ color: "var(--primary)" }}
              />
              <span
                className="text-sm font-medium"
                style={{ color: "var(--primary)" }}
              >
                From farm to kitchen in 4 simple steps
              </span>
              <Sparkles
                className="h-4 w-4"
                style={{ color: "var(--accent)" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}