'use client'

import {
  Leaf,
  ShieldCheck,
  Sparkles,
  BadgeCheck,
  Heart,
  Clock,
  Award,
  Truck,
  Star,
  Users,
  Globe,
  Sprout,
  Wheat,
  Flower2,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { motion, easeOut } from "framer-motion";
import Container from "@/components/common/container";
import SectionHeading from "@/components/common/section-heading";
import { whyChooseContent } from "@/content/why-choose";

type IconMap = {
  [key: string]: LucideIcon;
};

const iconMap: IconMap = {
  Leaf,
  Sparkles,
  ShieldCheck,
  BadgeCheck,
  Heart,
  Clock,
  Award,
  Truck,
  Star,
  Users,
  Globe,
  Sprout,
  Wheat,
  Flower2,
};

type TrustBadgeIcon = "Truck" | "Heart" | "Users" | "Star";

const trustBadgeIcons: Record<TrustBadgeIcon, LucideIcon> = {
  Truck,
  Heart,
  Users,
  Star,
};

function getTrustBadgeIcon(iconName: string): LucideIcon {
  return trustBadgeIcons[iconName as TrustBadgeIcon] || Heart;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const statVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: easeOut },
  },
};

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="section-space relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at top right, color-mix(in srgb, var(--primary) 10%, transparent), transparent 28%),
          radial-gradient(circle at bottom left, color-mix(in srgb, var(--secondary) 12%, transparent), transparent 28%),
          linear-gradient(to bottom, var(--background), color-mix(in srgb, var(--background) 88%, white))
        `,
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30 dark:opacity-10" />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-5 top-10 opacity-[0.06]">
          <Sprout
            className="h-32 w-32"
            style={{ color: "var(--primary)" }}
            strokeWidth={0.5}
          />
        </div>
        <div className="absolute bottom-20 right-10 opacity-[0.06]">
          <Wheat
            className="h-40 w-40"
            style={{ color: "var(--secondary)" }}
            strokeWidth={0.5}
          />
        </div>
        <div className="absolute right-1/4 top-1/3 opacity-[0.05]">
          <Flower2
            className="h-24 w-24"
            style={{ color: "var(--accent)" }}
            strokeWidth={0.5}
          />
        </div>

        <div
          className="absolute left-1/3 top-40 h-64 w-64 rounded-full border"
          style={{ borderColor: "color-mix(in srgb, var(--primary) 10%, transparent)" }}
        />
        <div
          className="absolute bottom-20 right-1/4 h-48 w-48 rounded-full border"
          style={{ borderColor: "color-mix(in srgb, var(--secondary) 10%, transparent)" }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{ borderColor: "color-mix(in srgb, var(--border) 45%, transparent)" }}
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <SectionHeading
            eyebrow={whyChooseContent.eyebrow}
            title={whyChooseContent.title}
            description={whyChooseContent.description}
          />

          <motion.div
            variants={containerVariants}
            className="mb-12 grid grid-cols-2 gap-4 rounded-[28px] border p-6 shadow-[0_16px_40px_rgba(0,0,0,0.05)] backdrop-blur-sm md:grid-cols-4"
            style={{
              background: "color-mix(in srgb, var(--card) 88%, transparent)",
              borderColor: "var(--border)",
            }}
          >
            {whyChooseContent.stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={statVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div
                  className="text-2xl font-bold md:text-3xl"
                  style={{ color: "var(--accent)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="mt-1 text-xs"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {whyChooseContent.points.map((point, idx) => {
              const Icon = iconMap[point.icon] || Leaf;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={point.title}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group rounded-[28px] border p-6 shadow-[0_16px_40px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
                  style={{
                    background: "color-mix(in srgb, var(--card) 92%, transparent)",
                    borderColor: "var(--border)",
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300"
                    style={{
                      background: isEven
                        ? "color-mix(in srgb, var(--primary) 12%, transparent)"
                        : "color-mix(in srgb, var(--secondary) 18%, transparent)",
                      color: isEven ? "var(--primary)" : "var(--secondary-foreground)",
                    }}
                  >
                    <Icon size={24} strokeWidth={1.8} />
                  </motion.div>

                  <h3
                    className="mt-5 text-xl font-bold"
                    style={{ color: "var(--foreground)" }}
                  >
                    {point.title}
                  </h3>

                  <p
                    className="mt-3 text-sm leading-relaxed"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {point.description}
                  </p>

                  <motion.div
                    initial={{ width: 48 }}
                    whileHover={{ width: 96 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 h-0.5 rounded-full"
                    style={{
                      width: 48,
                      background: isEven
                        ? "linear-gradient(90deg, var(--primary), color-mix(in srgb, var(--primary) 45%, white))"
                        : "linear-gradient(90deg, var(--secondary), color-mix(in srgb, var(--accent) 45%, white))",
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <div
              className="rounded-[32px] border p-8 shadow-[0_18px_50px_rgba(0,0,0,0.06)] backdrop-blur-sm"
              style={{
                background: `
                  linear-gradient(
                    135deg,
                    color-mix(in srgb, var(--primary) 8%, var(--card)),
                    color-mix(in srgb, var(--secondary) 10%, var(--card))
                  )
                `,
                borderColor: "var(--border)",
              }}
            >
              <div className="grid items-center gap-8 lg:grid-cols-2">
                <div>
                  <h3
                    className="text-2xl font-bold"
                    style={{ color: "var(--foreground)" }}
                  >
                    Our Commitment to Quality
                  </h3>
                  <p
                    className="mt-3 leading-relaxed"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    At Bharat Swaad, we believe that great food starts with great
                    ingredients. Our spices are sourced from the finest farms across
                    India and processed using state-of-the-art technology while
                    preserving traditional wisdom.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {whyChooseContent.certifications.map((cert) => (
                      <motion.div
                        key={cert.name}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 rounded-full border px-3 py-1.5 shadow-sm"
                        style={{
                          background: "color-mix(in srgb, var(--card) 92%, transparent)",
                          borderColor: "var(--border)",
                        }}
                      >
                        <BadgeCheck
                          className="h-4 w-4"
                          style={{ color: "var(--primary)" }}
                        />
                        <span
                          className="text-sm font-medium"
                          style={{ color: "var(--foreground)" }}
                        >
                          {cert.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {whyChooseContent.images.map((img, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="relative aspect-video overflow-hidden rounded-2xl border shadow-md"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            {whyChooseContent.trustBadges.map((badge) => {
              const Icon = getTrustBadgeIcon(badge.icon);

              return (
                <motion.div
                  key={badge.label}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="flex items-center gap-2 rounded-full border px-4 py-2 shadow-md transition-all duration-300"
                  style={{
                    background: "color-mix(in srgb, var(--card) 88%, transparent)",
                    borderColor: "var(--border)",
                  }}
                >
                  <div
                    className="rounded-full p-1.5"
                    style={{
                      background:
                        "color-mix(in srgb, var(--primary) 12%, transparent)",
                    }}
                  >
                    <Icon
                      className="h-3.5 w-3.5"
                      style={{ color: "var(--primary)" }}
                    />
                  </div>
                  <span
                    className="text-sm"
                    style={{ color: "var(--foreground)" }}
                  >
                    {badge.label}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-32 left-10 opacity-20"
      >
        <Sprout
          className="h-16 w-16"
          style={{ color: "var(--primary)" }}
          strokeWidth={1}
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute right-10 top-40 opacity-20"
      >
        <Wheat
          className="h-20 w-20"
          style={{ color: "var(--secondary)" }}
          strokeWidth={1}
        />
      </motion.div>

      <motion.div
        animate={{ rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="pointer-events-none absolute bottom-20 right-20 opacity-15"
      >
        <Flower2
          className="h-24 w-24"
          style={{ color: "var(--accent)" }}
          strokeWidth={1}
        />
      </motion.div>
    </section>
  );
}