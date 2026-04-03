"use client";

import Container from "@/components/common/container";
import Logo from "@/components/common/logo";
import { navigationLinks } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  Heart,
  Shield,
  Clock,
  Send
} from "lucide-react";
import { useState, useEffect } from "react";

// Social Icon Component
function SocialIcon({ item }: { item: { icon?: string; name?: string; svg?: string; href?: string; label?: string } }) {
  const t = String(item?.icon || item?.name || "")
    .trim()
    .toLowerCase();

  const cls = "block h-5 w-5 transition-transform group-hover:scale-110";

  if (item?.svg) {
    return (
      <span
        className="block h-5 w-5 transition-transform group-hover:scale-110"
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: item.svg }}
      />
    );
  }

  switch (t) {
    case "facebook":
    case "fb":
    case "facebook-f":
      return (
        <svg
          className={cls}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12H18l-.5 3h-2.6v7A10 10 0 0 0 22 12z" />
        </svg>
      );

    case "instagram":
    case "insta":
      return (
        <svg
          className={cls}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4.5A5.5 5.5 0 1 1 6.5 14 5.5 5.5 0 0 1 12 8.5zm0 2A3.5 3.5 0 1 0 15.5 14 3.5 3.5 0 0 0 12 10.5zM18 6.8a1.2 1.2 0 1 1-1.2 1.2A1.2 1.2 0 0 1 18 6.8z" />
        </svg>
      );

    case "youtube":
    case "yt":
      return (
        <svg
          className={cls}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5A3 3 0 0 0 2.4 7.2 31.8 31.8 0 0 0 2 12a31.8 31.8 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1A31.8 31.8 0 0 0 22 12a31.8 31.8 0 0 0-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
        </svg>
      );

    case "linkedin":
    case "linkedin-in":
      return (
        <svg
          className={cls}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M6.94 6.5A2.44 2.44 0 1 1 7 1.62a2.44 2.44 0 0 1-.06 4.88zM2.5 22h4.9V8.5H2.5V22zM9.1 8.5H14v1.85h.07c.68-1.29 2.34-2.65 4.82-2.65 5.15 0 6.11 3.39 6.11 7.8V22h-4.9v-5.77c0-1.38-.02-3.15-1.92-3.15-1.92 0-2.21 1.5-2.21 3.05V22H9.1V8.5z" />
        </svg>
      );

    default:
      return (
        <span
          className="block h-2 w-2 rounded-full bg-white/70"
          aria-hidden="true"
        />
      );
  }
}

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState<"idle" | "loading" | "success">("idle");

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribeStatus("loading");
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubscribeStatus("success");
    setEmail("");
    setTimeout(() => setSubscribeStatus("idle"), 3000);
  };

  const socialLinks = [
    { icon: "facebook", href: "#", label: "Facebook" },
    { icon: "instagram", href: "#", label: "Instagram" },
    { icon: "youtube", href: "#", label: "YouTube" },
    { icon: "linkedin", href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-[#0a120e] border-t border-emerald-900/30">
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div>
            <Logo />
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Premium Indian spices crafted with purity, tradition, and bold authentic flavour for every kitchen.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="group flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-all hover:bg-emerald-600 hover:text-white"
                  aria-label={social.label}
                >
                  <SocialIcon item={{ icon: social.icon }} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-500">
              Quick Links
            </h3>
            <div className="mt-4 flex flex-col gap-2">
              {navigationLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-gray-400 transition-colors hover:text-emerald-500"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-500">
              Contact Us
            </h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-emerald-500" />
                <span className="text-sm text-gray-400">{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-emerald-500" />
                <a href={`tel:${siteConfig.phone}`} className="text-sm text-gray-400 hover:text-emerald-500 transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-emerald-500" />
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-gray-400 hover:text-emerald-500 transition-colors break-all">
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-500">
              Stay Updated
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Subscribe for offers & updates
            </p>
            <form onSubmit={handleSubscribe} className="mt-3">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 rounded-lg border border-gray-700 bg-gray-800/50 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  required
                />
                <button
                  type="submit"
                  disabled={subscribeStatus === "loading"}
                  className="inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700 disabled:opacity-50"
                >
                  {subscribeStatus === "loading" ? (
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  ) : (
                    <Send className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>
            </form>
            {subscribeStatus === "success" && (
              <p className="mt-2 text-xs text-emerald-400">Thanks for subscribing!</p>
            )}

            {/* Trust Badges */}
            <div className="mt-4 flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 rounded-full bg-gray-800 px-2.5 py-1">
                <Shield className="h-3 w-3 text-emerald-500" />
                <span className="text-xs text-gray-400">100% Pure</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-gray-800 px-2.5 py-1">
                <Heart className="h-3 w-3 text-emerald-500" />
                <span className="text-xs text-gray-400">Authentic</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-gray-800 px-2.5 py-1">
                <Clock className="h-3 w-3 text-emerald-500" />
                <span className="text-xs text-gray-400">Fresh</span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-emerald-900/30 bg-[#0a120e]/50">
        <Container className="py-4">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs">
              <Link href="/privacy-policy" className="text-gray-500 hover:text-emerald-500 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-700">|</span>
              <Link href="/terms-of-service" className="text-gray-500 hover:text-emerald-500 transition-colors">
                Terms of Service
              </Link>
              <span className="text-gray-700">|</span>
              <Link href="/returns-policy" className="text-gray-500 hover:text-emerald-500 transition-colors">
                Returns Policy
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full bg-emerald-600 p-3 text-white shadow-lg transition-all hover:bg-emerald-700 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </footer>
  );
}