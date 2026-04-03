import Container from "@/components/common/container";
import SectionHeading from "@/components/common/section-heading";
import Image from "next/image";
import { 
  CheckCircle, 
  Heart, 
  Star, 
  Sparkles,
  Leaf,
  Clock,
  Award,
  Infinity,
  Shield,
  TrendingUp,
  Zap
} from "lucide-react";

import { aboutContent } from "@/content/about";


export default function AboutSection() {
  return (
    <section id="about" className="section-space relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-10" />
      <div className="absolute top-0 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 -left-32 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

      <Container className="relative">
        <SectionHeading
          eyebrow={aboutContent.eyebrow}
          title={aboutContent.title}
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-primary/20 blur-2xl transition-all group-hover:bg-primary/30" />
              <p className="relative text-base leading-relaxed text-foreground/80 lg:text-lg">
                {aboutContent.description1}
              </p>
            </div>

            <div className="relative pl-5 border-l-4 border-primary">
              <p className="text-sm leading-relaxed text-foreground/70 lg:text-base">
                {aboutContent.description2}
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 p-6">
              <div className="flex items-start gap-3">
                <Sparkles className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-foreground/80 lg:text-base">
                  {aboutContent.description3}
                </p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="flex items-center gap-2 rounded-full bg-card px-3 py-1.5 shadow-sm border border-border">
                <CheckCircle className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-medium text-foreground/80">100% Natural</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-card px-3 py-1.5 shadow-sm border border-border">
                <Heart className="h-3.5 w-3.5 text-accent" />
                <span className="text-xs font-medium text-foreground/80">Made with Love</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-card px-3 py-1.5 shadow-sm border border-border">
                <Star className="h-3.5 w-3.5 text-secondary" />
                <span className="text-xs font-medium text-foreground/80">Authentic Taste</span>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="aspect-[4/3] relative bg-muted">
              {aboutContent.image ? (
                <Image
                  src={aboutContent.image}
                  alt={aboutContent.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <span className="text-muted-foreground">No image available</span>
                </div>
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>

        {/* Stats Cards - Single Row with Visible Icons */}
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aboutContent.stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-border"
                >
                  {/* Animated Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`} />
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  {/* Top Accent Line */}
                  <div className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${stat.color} transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100`} />

                  {/* Icon Container - Fixed Visibility */}
                  <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${stat.color.replace("from-", "bg-").replace("to-", "/10 bg-").split(" ")[0]} bg-opacity-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                    <Icon className={`h-7 w-7 ${stat.iconColor}`} strokeWidth={1.8} />
                  </div>

                  {/* Value */}
                  <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent lg:text-4xl`}>
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="mt-2 text-sm font-semibold text-foreground/70">
                    {stat.label}
                  </div>

                  {/* Decorative Dot */}
                  <div className={`absolute -bottom-2 -right-2 h-16 w-16 rounded-full bg-gradient-to-br ${stat.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -left-20 top-1/2 hidden opacity-30 xl:block">
          <div className="relative">
            <div className="h-24 w-24 animate-pulse rounded-full bg-primary/20 blur-2xl" />
            <div className="absolute inset-4 rounded-full bg-primary/30" />
          </div>
        </div>
        <div className="absolute -right-20 bottom-0 hidden opacity-30 xl:block">
          <div className="relative">
            <div className="h-32 w-32 animate-pulse rounded-full bg-secondary/20 blur-2xl" />
          </div>
        </div>
      </Container>
    </section>
  );
}