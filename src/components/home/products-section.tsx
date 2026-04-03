"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/common/container";
import SectionHeading from "@/components/common/section-heading";
import { productsContent, type ProductItem } from "@/content/products";
import {
  Leaf,
  Flame,
  Wind,
  Star,
  Crown,
  Sparkles,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

type ProductIconMap = {
  [key: string]: LucideIcon;
};

const productIcons: ProductIconMap = {
  "Turmeric Powder": Leaf,
  "Red Chilli Powder": Flame,
  "Coriander Powder": Wind,
  "Garam Masala": Star,
  "Kitchen King Masala": Crown,
  "Cumin Powder": Sparkles,
};

type TabCategory = {
  id: string;
  name: string;
  filter: (product: ProductItem) => boolean;
};

const tabs: TabCategory[] = [
  {
    id: "premium",
    name: "Premium Spices",
    filter: (product) =>
      [
        "Turmeric Powder",
        "Red Chilli Powder",
        "Coriander Powder",
        "Cumin Powder",
        "Kashmiri Red Chilli",
        "Black Pepper Powder",
        "Cardamom Powder",
        "Cinnamon Powder",
      ].includes(product.name),
  },
  {
    id: "blends",
    name: "Masala Blends",
    filter: (product) =>
      [
        "Garam Masala",
        "Kitchen King Masala",
        "Meat Masala",
        "Chole Masala",
        "Chicken Masala",
        "Paneer Masala",
        "Tandoori Chicken Masala",
        "Sambar Powder",
      ].includes(product.name),
  },
  {
    id: "whole",
    name: "Whole Spices",
    filter: (product) =>
      [
        "Whole Cloves",
        "Green Cardamom",
        "Black Cardamom",
        "Star Anise",
      ].includes(product.name),
  },
  {
    id: "combo",
    name: "Value Packs",
    filter: (product) =>
      ["Spice Gift Box", "Everyday Masala Pack"].includes(product.name),
  },
  {
    id: "all",
    name: "All Products",
    filter: () => true,
  },
];

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState("premium");

  const activeTabConfig = tabs.find((tab) => tab.id === activeTab);
  const activeProducts = activeTabConfig
    ? productsContent.items.filter(activeTabConfig.filter)
    : productsContent.items;

  return (
    <section id="products" className="section-space relative overflow-hidden">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30 dark:opacity-10" />
      <div className="pointer-events-none absolute top-0 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -right-32 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow={productsContent.eyebrow}
          title={productsContent.title}
          description={productsContent.description}
        />

        {/* Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "scale-105 border-[var(--primary)] bg-[var(--primary)] text-white shadow-[0_10px_30px_rgba(22,101,52,0.28)]"
                  : "bg-white dark:bg-zinc-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-zinc-700 hover:bg-primary/10 hover:text-primary hover:border-primary/50"
              }`}
              aria-pressed={activeTab === tab.id}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Products Grid - 4 cards per row */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {activeProducts.map((product: ProductItem, index: number) => {
            const Icon = productIcons[product.name] || Leaf;

            return (
              <div
                key={product.name}
                className="group relative overflow-hidden rounded-2xl bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-border"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Badge */}
                {(product.isNew || product.isBestseller) && (
                  <div className="absolute top-3 left-3 z-10 flex gap-1">
                    {product.isNew && (
                      <span className="inline-flex items-center rounded-full bg-gradient-to-r from-red-500 to-red-500 px-2.5 py-0.5 text-xs font-semibold text-white shadow-lg">
                        New
                      </span>
                    )}
                    {product.isBestseller && (
                      <span className="inline-flex items-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-2.5 py-0.5 text-xs font-semibold text-white shadow-lg">
                        Bestseller
                      </span>
                    )}
                  </div>
                )}

                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Icon Overlay */}
                  <div className="absolute bottom-3 right-3 rounded-full bg-white/90 p-1.5 shadow-lg opacity-0 transition-all duration-500 group-hover:opacity-100 dark:bg-zinc-900/90">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-4">
                  {/* Title */}
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-bold text-foreground line-clamp-1">
                      {product.name}
                    </h3>
                    <Icon className="h-4 w-4 text-primary/60 flex-shrink-0 mt-0.5" />
                  </div>

                  {/* Description */}
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>

                  {/* Features */}
                  {product.features && product.features.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {product.features.slice(0, 2).map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full bg-primary/10 px-1.5 py-0.5 text-[9px] font-medium text-primary"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Learn More Link */}
                  <div className="mt-3 flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:gap-1.5">
                    <span>Learn More</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {activeProducts.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">
              No products found in this category.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}