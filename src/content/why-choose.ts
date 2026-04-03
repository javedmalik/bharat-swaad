// content/why-choose.ts

import { type LucideIcon } from "lucide-react";

export type StatItem = {
  label: string;
  value: string;
};

export type FeaturePoint = {
  title: string;
  description: string;
  icon: string;
};

export type Certification = {
  name: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
};

export type TrustBadge = {
  label: string;
  icon: string;
};

export type WhyChooseContent = {
  eyebrow: string;
  title: string;
  description: string;
  stats: StatItem[];
  points: FeaturePoint[];
  certifications: Certification[];
  images: GalleryImage[];
  trustBadges: TrustBadge[];
};

export const whyChooseContent: WhyChooseContent = {
  eyebrow: "Why Choose Bharat Swaad",
  title: "Purity, Aroma, and Trust in Every Pack",
  description: "Experience the true essence of Indian spices with our commitment to quality and authenticity.",
  
  // Statistics
  stats: [
    { label: "Happy Customers", value: "50,000+" },
    { label: "Spice Varieties", value: "25+" },
    { label: "Years of Trust", value: "5+" },
    { label: "Quality Checks", value: "100%" },
  ],
  
  // Feature Points
  points: [
    {
      title: "100% Natural",
      description: "No fillers, no artificial colors, no preservatives. Just pure, authentic spices from the finest farms.",
      icon: "Leaf",
    },
    {
      title: "Rich Aroma",
      description: "Processed using traditional methods to retain natural essential oils and captivating aromas.",
      icon: "Sparkles",
    },
    {
      title: "Premium Quality",
      description: "Strict hygiene standards and modern quality control at every stage of production.",
      icon: "ShieldCheck",
    },
    {
      title: "Authentic Taste",
      description: "Blends inspired by India's rich culinary heritage, crafted by master spice experts.",
      icon: "BadgeCheck",
    },
    {
      title: "Farm Fresh",
      description: "Directly sourced from trusted farmers, ensuring maximum freshness and flavor retention.",
      icon: "Heart",
    },
    {
      title: "Timely Delivery",
      description: "Fast and reliable shipping across India with secure packaging to preserve freshness.",
      icon: "Clock",
    },
    {
      title: "Award Winning",
      description: "Recognized for excellence in spice manufacturing and quality standards.",
      icon: "Award",
    },
    {
      title: "Eco-Friendly",
      description: "Sustainable practices and eco-friendly packaging for a greener tomorrow.",
      icon: "Globe",
    },
  ],
  
  // Certifications
  certifications: [
    { name: "FSSAI Certified" },
    { name: "ISO 22000:2018" },
    { name: "Non-GMO" },
    { name: "Vegan Friendly" },
  ],
  
  // Images for gallery
  images: [
    { src: "/images/why-choose/14.jpg", alt: "Fresh spices from farm" },
    { src: "/images/why-choose/15.jpg", alt: "Quality testing" },
    { src: "/images/why-choose/16.jpg", alt: "Modern packaging" },
    { src: "/images/why-choose/17.jpg", alt: "Premium spices" },
  ],
  
  // Trust Badges
  trustBadges: [
    { label: "Free Shipping on Orders ₹500+", icon: "Truck" },
    { label: "100% Satisfaction Guarantee", icon: "Heart" },
    { label: "10,000+ Happy Customers", icon: "Users" },
    { label: "4.8/5 Customer Rating", icon: "Star" },
  ],
};