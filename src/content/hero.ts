// content/hero.js
import img1 from "../../public/images/hero/1.jpg";
import img2 from "../../public/images/hero/2.jpg";
import img3 from "../../public/images/hero/3.jpg";
import img4 from "../../public/images/hero/4.jpg";

export const heroSlides = [
  {
    id: 1,
    title: "Pure Indian Spices, Crafted for Every Kitchen",
    subtitle:
      "From turmeric to Kashmiri mirch, Bharat Swaad delivers bold aroma, rich colour, and authentic taste in every pack.",
    image: img1,
    ctaPrimary: { label: "Explore Products", href: "#products" },
    ctaSecondary: { label: "About Us", href: "#about" }
  },
  {
    id: 2,
    title: "Tradition in Every Blend",
    subtitle:
      "Carefully sourced ingredients, hygienic processing, and consistency you can trust every single day.",
    image: img2,
    ctaPrimary: { label: "Why Choose Us", href: "#why-us" },
    ctaSecondary: { label: "Contact Us", href: "#contact" }
  },
  {
    id: 3,
    title: "The Heartbeat of Indian Spice",
    subtitle:
      "Premium masalas that elevate home cooking, restaurants, and food businesses with unforgettable flavour.",
    image: img3,
    ctaPrimary: { label: "View Range", href: "#products" },
    ctaSecondary: { label: "Get in Touch", href: "#contact" }
  },
  {
    id: 4,
    title: "Crafted with Care, Delivered with Pride",
    subtitle:
      "Each blend is a testament to our commitment to quality and tradition, ensuring every dish tells a story.",
    image: img4,
    ctaPrimary: { label: "Learn More", href: "#about" },
    ctaSecondary: { label: "Contact Us", href: "#contact" }
  }
];