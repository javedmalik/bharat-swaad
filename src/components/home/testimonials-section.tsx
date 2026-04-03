"use client";

import { motion, Variants } from "framer-motion";
import Container from "@/components/common/container";
import SectionHeading from "@/components/common/section-heading";
import { testimonialsContent } from "@/content/testimonials";
import { Star, Quote, Sparkles, Heart } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="section-space relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at top left, color-mix(in srgb, var(--secondary) 12%, transparent), transparent 28%),
          radial-gradient(circle at bottom right, color-mix(in srgb, var(--primary) 10%, transparent), transparent 30%),
          linear-gradient(to bottom, var(--background), color-mix(in srgb, var(--background) 92%, white))
        `,
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30 dark:opacity-10" />

      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-10 top-20 h-64 w-64 rounded-full border"
          style={{ borderColor: "color-mix(in srgb, var(--primary) 12%, transparent)" }}
        />
        <div
          className="absolute bottom-20 right-10 h-80 w-80 rounded-full border"
          style={{ borderColor: "color-mix(in srgb, var(--secondary) 12%, transparent)" }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{ borderColor: "color-mix(in srgb, var(--border) 45%, transparent)" }}
        />

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-20 top-20 opacity-10"
        >
          <Quote
            className="h-32 w-32"
            style={{ color: "var(--primary)" }}
            strokeWidth={0.5}
          />
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 left-20 opacity-10"
        >
          <Quote
            className="h-28 w-28"
            style={{ color: "var(--secondary)" }}
            strokeWidth={0.5}
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
            eyebrow={testimonialsContent.eyebrow}
            title={testimonialsContent.title}
            description="What our customers say about us"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 flex flex-wrap items-center justify-center gap-8"
          >
            <div
              className="flex items-center gap-4 rounded-[24px] px-6 py-3 shadow-sm backdrop-blur-sm"
              style={{
                background: "color-mix(in srgb, var(--card) 88%, transparent)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="text-center">
                <div
                  className="text-3xl font-bold"
                  style={{ color: "var(--primary)" }}
                >
                  4.8
                </div>
                <div
                  className="text-xs"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Average Rating
                </div>
              </div>

              <div
                className="h-10 w-px"
                style={{ backgroundColor: "var(--border)" }}
              />

              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5"
                    fill="currentColor"
                    style={{ color: "var(--secondary)" }}
                  />
                ))}
              </div>
            </div>

            <div
              className="text-sm"
              style={{ color: "var(--muted-foreground)" }}
            >
              Based on 2,500+ customer reviews
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonialsContent.items.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.name}
                  variants={cardVariants}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="absolute -left-3 -top-3 opacity-10">
                    <Quote
                      className="h-12 w-12"
                      style={{ color: "var(--primary)" }}
                      strokeWidth={1}
                    />
                  </div>

                  <div
                    className="relative h-full rounded-[28px] border p-6 shadow-[0_16px_40px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
                    style={{
                      background: "color-mix(in srgb, var(--card) 94%, transparent)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <div className="mb-4 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4"
                          fill="currentColor"
                          style={{ color: "var(--secondary)" }}
                        />
                      ))}
                    </div>

                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "var(--foreground)" }}
                    >
                      {item.quote}
                    </p>

                    <div
                      className="my-4 h-px w-12 rounded-full transition-all duration-300 group-hover:w-24"
                      style={{
                        background: isEven
                          ? "linear-gradient(90deg, var(--primary), color-mix(in srgb, var(--primary) 45%, white))"
                          : "linear-gradient(90deg, var(--secondary), color-mix(in srgb, var(--accent) 45%, white))",
                      }}
                    />

                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-full text-white"
                        style={{
                          background: isEven
                            ? "linear-gradient(90deg, var(--primary), color-mix(in srgb, var(--primary) 65%, white))"
                            : "linear-gradient(90deg, var(--secondary), var(--accent))",
                        }}
                      >
                        <span className="text-sm font-bold">
                          {item.name.charAt(0)}
                        </span>
                      </div>

                      <div>
                        <div
                          className="font-bold"
                          style={{ color: "var(--foreground)" }}
                        >
                          {item.name}
                        </div>
                        <div
                          className="text-xs"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          {item.role}
                        </div>
                      </div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    >
                      <Heart
                        className="h-4 w-4"
                        style={{ color: "var(--accent)" }}
                        fill="currentColor"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            <div
              className="flex items-center gap-2 rounded-full px-4 py-2 shadow-sm backdrop-blur-sm"
              style={{
                background: "color-mix(in srgb, var(--card) 88%, transparent)",
                border: "1px solid var(--border)",
              }}
            >
              <Sparkles
                className="h-4 w-4"
                style={{ color: "var(--primary)" }}
              />
              <span
                className="text-sm"
                style={{ color: "var(--muted-foreground)" }}
              >
                100% Authentic Reviews
              </span>
            </div>

            <div
              className="flex items-center gap-2 rounded-full px-4 py-2 shadow-sm backdrop-blur-sm"
              style={{
                background: "color-mix(in srgb, var(--card) 88%, transparent)",
                border: "1px solid var(--border)",
              }}
            >
              <Heart
                className="h-4 w-4"
                style={{ color: "var(--accent)" }}
              />
              <span
                className="text-sm"
                style={{ color: "var(--muted-foreground)" }}
              >
                Verified Buyers
              </span>
            </div>

            <div
              className="flex items-center gap-2 rounded-full px-4 py-2 shadow-sm backdrop-blur-sm"
              style={{
                background: "color-mix(in srgb, var(--card) 88%, transparent)",
                border: "1px solid var(--border)",
              }}
            >
              <Quote
                className="h-4 w-4"
                style={{ color: "var(--secondary)" }}
              />
              <span
                className="text-sm"
                style={{ color: "var(--muted-foreground)" }}
              >
                Real Customer Stories
              </span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}