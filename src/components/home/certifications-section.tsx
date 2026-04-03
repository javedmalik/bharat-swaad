"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  ShieldCheck,
  FileText,
  Download,
  ExternalLink,
  Award,
} from "lucide-react";
import Container from "@/components/common/container";
import SectionHeading from "@/components/common/section-heading";
import { certificationsContent } from "@/content/certifications";

const categoryStyles: Record<string, string> = {
  "Food Safety": "from-[color:rgba(22,101,52,0.14)] to-[color:rgba(250,204,21,0.12)]",
  "Quality Management": "from-[color:rgba(250,204,21,0.16)] to-[color:rgba(220,38,38,0.10)]",
  "Export Compliance": "from-[color:rgba(22,101,52,0.10)] to-[color:rgba(220,38,38,0.10)]",
  "Religious & Organic": "from-[color:rgba(22,101,52,0.12)] to-[color:rgba(250,204,21,0.18)]",
};

export default function CertificationsSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleCertificates = showAll
    ? certificationsContent.items
    : certificationsContent.items.slice(0, 8);

  return (
    <section
      id="certifications"
      className="section-space relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at top right, color-mix(in srgb, var(--primary) 10%, transparent), transparent 28%),
          radial-gradient(circle at bottom left, color-mix(in srgb, var(--secondary) 10%, transparent), transparent 30%),
          linear-gradient(to bottom, var(--background), color-mix(in srgb, var(--background) 92%, white))
        `,
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30 dark:opacity-10" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow={certificationsContent.eyebrow}
          title={certificationsContent.title}
          description={certificationsContent.description}
        />

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          {[
            "Food Safety Certified",
            "Export Compliance",
            "Quality Assured",
            "Global Standards",
          ].map((item) => (
            <div
              key={item}
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm shadow-sm"
              style={{
                background: "color-mix(in srgb, var(--card) 90%, transparent)",
                borderColor: "var(--border)",
                color: "var(--foreground)",
              }}
            >
              <ShieldCheck
                className="h-4 w-4"
                style={{ color: "var(--primary)" }}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {visibleCertificates.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="group relative flex h-full overflow-hidden rounded-[28px] border shadow-[0_16px_40px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
              style={{
                background: "color-mix(in srgb, var(--card) 94%, transparent)",
                borderColor: "var(--border)",
              }}
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${categoryStyles[item.category]}`}
              />

              <div className="flex h-full w-full flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <div
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{
                      background:
                        "color-mix(in srgb, var(--primary) 12%, transparent)",
                      color: "var(--primary)",
                    }}
                  >
                    <Award className="h-6 w-6" />
                  </div>

                  <span
                    className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]"
                    style={{
                      background:
                        "color-mix(in srgb, var(--secondary) 18%, transparent)",
                      color: "var(--foreground)",
                    }}
                  >
                    {item.highlight}
                  </span>
                </div>

                <div className="mt-5">
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "var(--foreground)" }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="mt-2 min-h-[54px] text-sm leading-6"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {item.subtitle}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span
                    className="rounded-full border px-2.5 py-1 text-[11px] font-medium"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {item.category}
                  </span>
                </div>

                <div
                  className="mt-5 space-y-2 rounded-2xl border p-4"
                  style={{
                    background:
                      "color-mix(in srgb, var(--background) 72%, transparent)",
                    borderColor: "var(--border)",
                  }}
                >
                  <div className="flex items-center justify-between gap-3 text-xs">
                    <span style={{ color: "var(--muted-foreground)" }}>
                      Certificate No.
                    </span>
                    <span
                      className="font-semibold text-right"
                      style={{ color: "var(--foreground)" }}
                    >
                      {item.certificateNumber}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3 text-xs">
                    <span style={{ color: "var(--muted-foreground)" }}>
                      Issued On
                    </span>
                    <span style={{ color: "var(--foreground)" }}>
                      {item.issuedOn}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3 text-xs">
                    <span style={{ color: "var(--muted-foreground)" }}>
                      Valid Till
                    </span>
                    <span style={{ color: "var(--foreground)" }}>
                      {item.validTill}
                    </span>
                  </div>
                </div>

                <div className="mt-auto flex gap-2 pt-5">
                  <Link
                    href={item.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--accent), color-mix(in srgb, var(--accent) 65%, yellow))",
                    }}
                  >
                    <ExternalLink className="h-4 w-4" />
                    View PDF
                  </Link>

                  <Link
                    href={item.pdf}
                    download
                    className="inline-flex items-center justify-center rounded-xl border px-4 py-3 transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--foreground)",
                    }}
                    aria-label={`Download ${item.name} certificate`}
                  >
                    <Download className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="pointer-events-none absolute right-4 top-4 opacity-[0.05]">
                <FileText
                  className="h-20 w-20"
                  style={{ color: "var(--primary)" }}
                />
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
            style={{
              borderColor: "var(--border)",
              background: "color-mix(in srgb, var(--card) 90%, transparent)",
              color: "var(--foreground)",
            }}
          >
            <BadgeCheck
              className="h-4 w-4"
              style={{ color: "var(--primary)" }}
            />
            {showAll ? "Show Less Certificates" : "View All Certificates"}
          </button>
        </div>
      </Container>
    </section>
  );
}