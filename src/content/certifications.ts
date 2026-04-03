export type CertificationItem = {
  id: string;
  name: string;
  subtitle: string;
  certificateNumber: string;
  issuedOn: string;
  validTill: string;
  pdf: string;
  category:
    | "Food Safety"
    | "Quality Management"
    | "Export Compliance"
    | "Religious & Organic";
  highlight?: string;
};

export const certificationsContent = {
  eyebrow: "Certifications",
  title: "Quality, Safety & Global Compliance",
  description:
    "Bharat Swaad is backed by recognized certifications that reflect our commitment to food safety, quality assurance, export readiness, and trusted manufacturing standards.",
  items: [
    {
      id: "halal",
      name: "HALAL",
      subtitle: "Lawful for Muslim consumption",
      certificateNumber: "QCCI/26H/BWD/8208",
      issuedOn: "12-03-2026",
      validTill: "11-03-2029",
      pdf: "/documents/certifications/halal.pdf",
      category: "Religious & Organic",
      highlight: "Trusted compliance",
    },
    {
      id: "brc",
      name: "BRC",
      subtitle: "British Retail Consortium compliance",
      certificateNumber: "QCCI/26B/BWD/8211",
      issuedOn: "12-03-2026",
      validTill: "11-03-2029",
      pdf: "/documents/certifications/brc.pdf",
      category: "Quality Management",
      highlight: "Retail standard",
    },
    {
      id: "haccp",
      name: "HACCP",
      subtitle: "Hazard Analysis and Critical Control Point",
      certificateNumber: "QCCI/26H/BWD/8210",
      issuedOn: "12-03-2026",
      validTill: "11-03-2029",
      pdf: "/documents/certifications/haccp.pdf",
      category: "Food Safety",
      highlight: "Food safety control",
    },
    {
      id: "gmp",
      name: "GMP",
      subtitle: "Good Manufacturing Practices",
      certificateNumber: "QCCI/26G/BWD/8209",
      issuedOn: "12-03-2026",
      validTill: "11-03-2029",
      pdf: "/documents/certifications/gmp.pdf",
      category: "Quality Management",
      highlight: "Manufacturing excellence",
    },
    {
      id: "iso-22000",
      name: "ISO 22000:2018",
      subtitle: "Food Safety Management System",
      certificateNumber: "305026031482F",
      issuedOn: "14-03-2026",
      validTill: "13-03-2029",
      pdf: "/documents/certifications/iso-22000-2018.pdf",
      category: "Food Safety",
      highlight: "Global food safety",
    },
    {
      id: "iso-9001",
      name: "ISO 9001:2015",
      subtitle: "Quality Management System",
      certificateNumber: "305026031480Q",
      issuedOn: "14-03-2026",
      validTill: "13-03-2029",
      pdf: "/documents/certifications/iso-9001-2015.pdf",
      category: "Quality Management",
      highlight: "Process excellence",
    },
    {
      id: "usda-organic",
      name: "USDA Organic",
      subtitle: "Organic compliance certification",
      certificateNumber: "QCCI/26U/BWD/8248",
      issuedOn: "18-03-2026",
      validTill: "17-03-2029",
      pdf: "/documents/certifications/usda-organic.pdf",
      category: "Religious & Organic",
      highlight: "Organic certified",
    },
    {
      id: "fssc-22000",
      name: "FSSC 22000",
      subtitle: "Food Safety System Certification",
      certificateNumber: "QCCI/26F/BWD/8246",
      issuedOn: "18-03-2026",
      validTill: "17-03-2029",
      pdf: "/documents/certifications/fssc-22000.pdf",
      category: "Food Safety",
      highlight: "Advanced food safety",
    },
    {
      id: "us-fda",
      name: "U.S. FDA",
      subtitle: "Compliance for export and regulatory confidence",
      certificateNumber: "QCCI/26U/BWD/8247",
      issuedOn: "18-03-2026",
      validTill: "17-03-2029",
      pdf: "/documents/certifications/us-fda.pdf",
      category: "Export Compliance",
      highlight: "Export ready",
    },
  ],
};