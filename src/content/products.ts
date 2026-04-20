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
    {
      name: "Dry Garlic Powder",
      description: "Intense garlic flavour with long shelf life. Perfect for marinades and spice blends.",
      image: "/images/products/dry_garlic_powder.png",
    },
    {
      name: "Dry Ginger Powder",
      description: "Warm, zesty flavour with natural pungency. Ideal for teas, desserts, and spice blends.",
      image: "/images/products/dry_ginger_powder.png",
    },
    {
      name: "Dry Onion Powder",
      description: "Rich onion flavour with long shelf life. Perfect for seasoning and spice blends.",
      image: "/images/products/dry_onion_powder.png",
    },  
    {
      name: "Yellow Chilli Powder",
      description: "Mild heat with bright yellow colour. Ideal for dals, curries, and snacks.",
      image: "/images/products/yellow-chilli.png",
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
      features: ["For Non-Veg", "Strong Flavor", "Authentic"],
      isBestseller: true
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
      image: "/images/products/chicken-masala-powder.jpg",
      features: ["Balanced Heat", "Restaurant Style"]
    },
    {
      name: "Paneer Masala",
      description: "Creamy and aromatic blend for rich, restaurant-style paneer dishes.",
      image: "/images/products/paneer-masala.avif",
      features: ["Creamy Texture", "Mild Spice"],
      isNew: true
    },
    {
      name: "Tandoori Chicken Masala",
      description: "Special blend for authentic tandoori and tikka preparations.",
      image: "/images/products/tandoori-chicken-masala.png",
      features: ["Red Color", "Smoky Flavor"]
    },
    {
      name: "Sambar Masala",
      description: "South Indian style blend for delicious sambar and rasam.",
      image: "/images/products/sambhar-masala.png",
      features: ["South Indian", "Authentic"],
      isNew: true
    },
    {
      name: "Chaat Masala",
      description: "Tangy and spicy blend for fruits, snacks, and street food. Perfect for sprinkling on chaats.",
      image: "/images/products/chaat-masala.png",
      features: ["Tangy Flavor", "Street Food", "Versatile"],
      isNew: true
    },
    {
      name: "Rajma Masala",
      description: "Authentic Punjabi spice blend for creamy, flavorful kidney bean curry.",
      image: "/images/products/rajma-masala.jpg",
      features: ["Punjabi Style", "Creamy Texture", "Authentic"]
    },
    {
      name: "Dal Makhni Masala",
      description: "Special blend for rich, buttery black lentil curry. Restaurant-style taste at home.",
      image: "/images/products/dal-makhni-masala.avif",
      features: ["Creamy", "Buttery Flavor", "Restaurant Style"],
      isNew: true
    },
    {
      name: "Soya Chaap Masala",
      description: "Perfect spice blend for marinating and cooking soya chaap. Ideal for tandoori and gravies.",
      image: "/images/products/soya-chaap-masala.jpg",
      features: ["For Soya Chaap", "Tandoori Style", "Bold Flavor"],
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
    {
      name: "Whole Cumin",
      description: "Earthy, warm seeds with distinctive aroma. Essential for tadka and spice blends.",
      image: "/images/products/cumin-whole.png",
      features: ["Premium Quality", "Strong Aroma", "For Tadka"]
    },
    {
      name: "Black Pepper (Whole)",
      description: "Premium Tellicherry peppercorns with sharp, pungent aroma. Freshly harvested.",
      image: "/images/products/black-pepper-whole.png",
      features: ["Tellicherry", "Sharp Aroma", "Fresh"],
      isBestseller: true
    },
    {
      name: "White Pepper",
      description: "Milder, earthier flavour than black pepper. Perfect for light-coloured dishes.",
      image: "/images/products/white-pepper.webp",
      features: ["Mild Flavor", "For Light Dishes", "Premium Grade"]
    },
    {
      name: "Javitri (Mace)",
      description: "Delicate, aromatic spice with warm, nutty flavour. Derived from nutmeg outer covering.",
      image: "/images/products/javitri.avif",
      features: ["Aromatic", "Premium Quality", "For Rich Dishes"],
      isNew: true
    },
    {
      name: "Cinnamon (Whole)",
      description: "Premium Ceylon cinnamon sticks with sweet, woody flavour.",
      image: "/images/products/cinnamon-whole.png",
      features: ["Ceylon", "Sweet Flavor", "Premium Grade"]
    },
    {
      name: "Nutmeg (Jaiphal)",
      description: "Warm, sweet, and nutty flavour. Grate fresh for desserts and rich curries.",
      image: "/images/products/nutmeg.png",
      features: ["Warm Flavor", "For Desserts", "Fresh"]
    },
    {
      name: "Fennel Seeds (Saunf)",
      description: "Sweet, liquorice-like seeds. Used as mouth freshener and in spice blends.",
      image: "/images/products/fennel.jpg",
      features: ["Sweet Flavor", "Mouth Freshener", "Digestive"]
    },
    {
      name: "Fenugreek Seeds (Methi)",
      description: "Slightly bitter, nutty seeds. Essential for pickles, dals, and spice blends.",
      image: "/images/products/fenugreek.png",
      features: ["Slightly Bitter", "For Pickles", "Aromatic"]
    },
    {
      name: "Bay Leaves (Tej Patta)",
      description: "Fragrant leaves with subtle cinnamon-like aroma. Essential for biryani and curries.",
      image: "/images/products/bay-leaves.jpg",
      features: ["Fragrant", "For Biryani", "Essential Spice"]
    },
    {
      name: "Kasuri Methi (Dried Fenugreek)",
      description: "Dried fenugreek leaves with unique, earthy aroma. Finish for butter chicken and dals.",
      image: "/images/products/kasuri-methi.jpg",
      features: ["Earthy Aroma", "For Butter Chicken", "Flavor Enhancer"],
      isBestseller: true
    },
    {
      name: "Ajwain (Carom Seeds)",
      description: "Thyme-like, pungent seeds with digestive properties. Perfect for parathas and pakoras.",
      image: "/images/products/ajwain.jpg",
      features: ["Pungent Flavor", "Digestive", "For Indian Breads"]
    },
    {
      name: "Kalonji (Nigella Seeds)",
      description: "Black seeds with slightly bitter, peppery flavour. Essential for naan and pickles.",
      image: "/images/products/kalonji.jpg",
      features: ["Peppery Flavor", "For Naan", "For Pickles"]
    },
    
    // Value Packs
    {
      name: "Spice Gift Box (For Non-Veg)",
      description: "Turmeric Powder, Coriander Powder, Red Chilli Powder, Kashmiri Red Chilli Powder, Meat Masala, Chicken Masala. Perfect for gifting.",
      image: "/images/products/w2.jpg",
      features: ["Perfect Gift", "6 Spices"],
      isNew: true
    },
    {
      name: "Spice Gift Box (For Veg)",
      description: "Turmeric Powder, Coriander Powder, Red Chilli Powder, Kashmiri Red Chilli Powder, Paneer Masala, Rajma Masala. Perfect for gifting.",
      image: "/images/products/w2.jpg",
      features: ["Perfect Gift", "6 Spices"],
      isNew: true
    },
    {
      name: "Everyday Masala Pack",
      description: "Turmeric Powder, Coriander Powder, Red Chilli Powder, Kashmiri Red Chilli Powder, Garam Masala. All essential blends for everyday cooking.",
      image: "/images/products/w3.jpg",
      features: ["Great Value", "5 Items"],
      isBestseller: true
    }
  ]
};