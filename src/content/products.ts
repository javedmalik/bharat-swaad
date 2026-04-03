// export const productsContent = {
//   eyebrow: "Our Products",
//   title: "Signature Spice Collection",
//   description:
//     "Discover our premium range of everyday essentials and specialty blends designed to bring authentic Indian flavour to every meal.",
//   items: [
//     {
//       name: "Turmeric Powder",
//       description: "Bright colour, earthy aroma, and natural purity.",
//       image: "/images/products/p1.avif"
//     },
//     {
//       name: "Red Chilli Powder",
//       description: "Bold heat and vibrant taste for every recipe.",
//       image: "/images/products/p2.avif"
//     },
//     {
//       name: "Coriander Powder",
//       description: "Fresh, citrusy, and perfectly balanced.",
//       image: "/images/products/p3.avif"
//     },
//     {
//       name: "Garam Masala",
//       description: "A rich aromatic blend for classic Indian dishes.",
//       image: "/images/products/p4.jpg"
//     },
//     {
//       name: "Kitchen King Masala",
//       description: "A versatile mix for everyday sabzi and curries.",
//       image: "/images/products/p5.png"
//     },
//     {
//       name: "Cumin Powder",
//       description: "Warm, nutty flavour with deep aroma.",
//       image: "/images/products/p6.avif"
//     }
//   ]
// };


// content/products.ts

// content/products.ts

import { type LucideIcon } from "lucide-react";

export type ProductItem = {
  name: string;
  description: string;
  image: string;
  icon?: LucideIcon;
  features?: string[];
  isNew?: boolean;
  isBestseller?: boolean;
};

export type ProductsContent = {
  eyebrow: string;
  title: string;
  description: string;
  items: ProductItem[];
};

export const productsContent: ProductsContent = {
  eyebrow: "Our Products",
  title: "Signature Spice Collection",
  description:
    "Discover our premium range of everyday essentials and specialty blends designed to bring authentic Indian flavour to every meal.",
  items: [
    // Premium Spices
    {
      name: "Turmeric Powder",
      description: "Bright colour, earthy aroma, and natural purity. Rich in curcumin for health benefits.",
      image: "/images/products/p1.avif",
      features: ["100% Pure", "No Additives"],
      isBestseller: true
    },
    {
      name: "Red Chilli Powder",
      description: "Bold heat and vibrant taste for every recipe. Made from premium Guntur chillies.",
      image: "/images/products/p2.avif",
      features: ["Extra Hot", "Preservative Free"],
      isNew: true
    },
    {
      name: "Coriander Powder",
      description: "Fresh, citrusy, and perfectly balanced. Enhances the natural flavour of dishes.",
      image: "/images/products/p3.avif",
      features: ["Aromatic", "Freshly Ground"]
    },
    {
      name: "Cumin Powder",
      description: "Warm, nutty flavour with deep aroma. Essential for authentic Indian cooking.",
      image: "/images/products/p6.avif",
      features: ["Premium Quality", "Strong Aroma"],
      isBestseller: true
    },
    {
      name: "Kashmiri Red Chilli",
      description: "Mild heat with vibrant red colour. Perfect for tandoori and gravies.",
      image: "/images/products/17.jpg",
      features: ["Vibrant Color", "Mild Heat"]
    },
    {
      name: "Black Pepper Powder",
      description: "Freshly ground Tellicherry peppercorns with sharp, pungent aroma.",
      image: "/images/products/black-pepperr.png",
      features: ["Tellicherry", "Sharp Aroma"],
      isBestseller: true
    },
    {
      name: "Cardamom Powder",
      description: "Sweet, floral aroma from premium green cardamom pods. Perfect for desserts.",
      image: "/images/products/cardamom.png",
      features: ["Sweet Aroma", "For Desserts"]
    },
    {
      name: "Cinnamon Powder",
      description: "Sweet and woody flavour from Ceylon cinnamon sticks.",
      image: "/images/products/cinnamon.png",
      features: ["Ceylon", "Sweet Flavor"]
    },
    
    // Masala Blends
    {
      name: "Garam Masala",
      description: "A rich aromatic blend of 12 premium spices for classic Indian dishes.",
      image: "/images/products/garam-masala.png",
      features: ["12 Spice Blend", "Authentic"],
      isBestseller: true
    },
    {
      name: "Kitchen King Masala",
      description: "A versatile mix for everyday sabzi and curries. One spice for all dishes.",
      image: "/images/products/kitchen-king.png",
      features: ["All-in-One", "Versatile"]
    },
    {
      name: "Meat Masala",
      description: "Special blend of robust spices for mouth-watering mutton and chicken curries.",
      image: "/images/products/meat-masala.png",
      features: ["For Non-Veg", "Strong Flavor"],
      isNew: true
    },
    {
      name: "Chole Masala",
      description: "Authentic blend for delicious chickpea curry. Perfect for street-style chole.",
      image: "/images/products/chole-masala.png",
      features: ["Punjabi Style", "Street Food"]
    },
    {
      name: "Chicken Masala",
      description: "Perfectly balanced spices for tender, flavourful chicken preparations.",
      image: "/images/products/kitchen-king.png",
      features: ["Balanced Heat", "Restaurant Style"]
    },
    {
      name: "Paneer Masala",
      description: "Creamy and aromatic blend for rich, restaurant-style paneer dishes.",
      image: "/images/products/kitchen-king.png",
      features: ["Creamy Texture", "Mild Spice"],
      isNew: true
    },
    {
      name: "Tandoori Chicken Masala",
      description: "Special blend for authentic tandoori and tikka preparations.",
      image: "/images/products/kitchen-king.png",
      features: ["Red Color", "Smoky Flavor"]
    },
    {
      name: "Sambar Powder",
      description: "South Indian style blend for delicious sambar and rasam.",
      image: "/images/products/kitchen-king.png",
      features: ["South Indian", "Authentic"],
      isNew: true
    },
    
    // Whole Spices
    {
      name: "Whole Cloves",
      description: "Intense aroma and warm flavour. Essential for rice and spice blends.",
      image: "/images/products/14.jpg",
      features: ["Premium Grade", "Intense Aroma"]
    },
    {
      name: "Green Cardamom",
      description: "Premium green cardamom pods with intense sweet aroma.",
      image: "/images/products/10.jpg",
      features: ["Premium Grade", "Sweet Aroma"],
      isNew: true
    },
    {
      name: "Black Cardamom",
      description: "Smoky, camphor-like aroma. Essential for authentic meat dishes.",
      image: "/images/products/14.jpg",
      features: ["Smoky Flavor", "For Meat Dishes"]
    },
    {
      name: "Star Anise",
      description: "Distinct liquorice-like flavour. Key ingredient for garam masala.",
      image: "/images/products/5.jpg",
      features: ["Liquorice Flavor", "For Masala"]
    },
    
    // Value Packs
    {
      name: "Spice Gift Box",
      description: "Complete collection of 8 essential spices in elegant wooden box.",
      image: "/images/products/w2.jpg",
      features: ["Perfect Gift", "8 Spices"],
      isNew: true
    },
    {
      name: "Everyday Masala Pack",
      description: "6 essential masalas for daily cooking. Great value combo pack.",
      image: "/images/products/w3.jpg",
      features: ["Great Value", "6 Items"],
      isBestseller: true
    }
  ]
};