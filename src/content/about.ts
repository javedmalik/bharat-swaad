import { 

  Leaf,
  Clock,
  Award,
  Infinity,

} from "lucide-react";

export const aboutContent = {
  eyebrow: "About Bharat Swaad",
  title: "The Heartbeat of Indian Spice",
  image: "/images/about/1.png",
  description1:
    "Founded in 2026 in the vibrant culinary centre of Delhi, Bharat Swaad was born from a singular obsession: to reclaim the purity of the Indian spice rack.",
  description2:
    "We do not just manufacture masala; we craft aromatic masterpieces. From the earthy depth of turmeric to the fiery soul of Kashmiri mirch, every blend is a tribute to India's rich culinary heritage.",
  description3:
    "Our modern facility combines heritage-inspired grinding practices with strict quality controls, ensuring every pack reaches your kitchen with purity, freshness, and flavour.",
  stats: [
    { label: "Natural Ingredients", value: "100%", icon: Leaf, color: "from-emerald-500 to-green-600", iconColor: "text-emerald-600 dark:text-emerald-400" },
    { label: "Quality Focused", value: "24/7", icon: Clock, color: "from-blue-500 to-cyan-600", iconColor: "text-blue-600 dark:text-blue-400" },
    { label: "Crafted in India", value: "2026", icon: Award, color: "from-amber-500 to-orange-600", iconColor: "text-amber-600 dark:text-amber-400" },
    { label: "Authentic Taste", value: "∞", icon: Infinity, color: "from-purple-500 to-pink-600", iconColor: "text-purple-600 dark:text-purple-400" }
  ]
};
