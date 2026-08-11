import { Category, Product } from "@/types";

export const categories: Category[] = [
  {
    id: "1",
    name: "Camera Rentals",
    slug: "camera-rentals",
    description: "Professional Sony, Canon, Nikon & more",
    image_url:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc58?auto=format&fit=crop&w=600&q=75",
  },
  {
    id: "2",
    name: "Camera Accessories",
    slug: "camera-accessories",
    description: "Lenses, gimbals, tripods & monitors",
    image_url:
      "https://images.unsplash.com/photo-1606986628035-b1774eb9a6ee?auto=format&fit=crop&w=600&q=75",
  },
  {
    id: "3",
    name: "Lighting",
    slug: "lighting",
    description: "Godox, Aputure, Nanlite & RGB lights",
    image_url:
      "https://images.unsplash.com/photo-1598484609097-2a7d0b0a0b0a?auto=format&fit=crop&w=600&q=75",
  },
  {
    id: "4",
    name: "Event Equipment",
    slug: "event-equipment",
    description: "LED walls, photo booths & stage lights",
    image_url:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=600&q=75",
  },
  {
    id: "5",
    name: "Event Services",
    slug: "event-services",
    description: "Photography, videography & live streaming",
    image_url:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=75",
  },
];

export const products: Product[] = [
  {
    id: "1",
    category_id: "1",
    name: "Sony FX3 Cinema Camera",
    slug: "sony-fx3-cinema-camera",
    description:
      "Professional full-frame cinema camera with 4K 120fps, S-Cinetone color science, and compact body perfect for run-and-gun filmmaking.",
    specifications: [
      "12.1MP Full-Frame Exmor R CMOS Sensor",
      "4K 120fps Recording",
      "S-Cinetone & S-Log3",
      "Dual Base ISO",
      "Active SteadyShot Stabilization",
    ],
    included_accessories: [
      "Original Battery x2",
      "128GB CFexpress Card",
      "XLR Handle Unit",
      "Camera Strap",
      "Protective Case",
    ],
    rental_price: 2500,
    security_deposit: 50000,
    stock: 3,
    status: "active",
    product_images: [
      {
        id: "1",
        product_id: "1",
        image_url:
          "https://images.unsplash.com/photo-1516035069371-29a1b244cc58?w=1200&q=80",
        is_primary: true,
      },
    ],
  },
  {
    id: "2",
    category_id: "1",
    name: "Canon EOS R5 C",
    slug: "canon-eos-r5c",
    description:
      "Hybrid cinema camera combining Canon's renowned color science with 8K RAW recording capabilities for professional productions.",
    specifications: [
      "45MP Full-Frame CMOS Sensor",
      "8K 60fps RAW Internal Recording",
      "Dual Pixel CMOS AF II",
      "Canon Log 3 & Cinema Gamut",
      "Active Cooling System",
    ],
    included_accessories: [
      "LP-E6NH Battery x2",
      "256GB CFexpress Card",
      "Top Handle",
      "Lens Cap",
      "Hard Case",
    ],
    rental_price: 3500,
    security_deposit: 75000,
    stock: 2,
    status: "active",
    product_images: [
      {
        id: "2",
        product_id: "2",
        image_url:
          "https://images.unsplash.com/photo-1502927717964-4310427f9f99?w=1200&q=80",
        is_primary: true,
      },
    ],
  },
  {
    id: "3",
    category_id: "2",
    name: "DJI RS 4 Pro Gimbal",
    slug: "dji-rs4-pro-gimbal",
    description:
      "Professional 3-axis gimbal stabilizer with automated axis locks, 4.5kg payload capacity, and intelligent tracking features.",
    specifications: [
      "4.5kg Tested Payload",
      "Automated Axis Locks",
      "LiDAR Focus System Compatible",
      "Bluetooth Shutter Control",
      "Carbon Fiber Construction",
    ],
    included_accessories: [
      "Focus Motor",
      "Briefcase Handle",
      "Extended Grip/Tripod",
      "USB-C Cable",
      "Carrying Case",
    ],
    rental_price: 1200,
    security_deposit: 25000,
    stock: 5,
    status: "active",
    product_images: [
      {
        id: "3",
        product_id: "3",
        image_url:
          "https://images.unsplash.com/photo-1606986628035-b1774eb9a6ee?w=1200&q=80",
        is_primary: true,
      },
    ],
  },
  {
    id: "4",
    category_id: "3",
    name: "Aputure 600d Pro",
    slug: "aputure-600d-pro",
    description:
      "Daylight-balanced LED fixture delivering 600W output with Bowens mount, perfect for studio and location lighting.",
    specifications: [
      "600W Daylight Output",
      "5600K Color Temperature",
      "Bowens Mount Compatible",
      "Sidus Link App Control",
      "Silent Fan Mode",
    ],
    included_accessories: [
      "Control Box",
      "Power Cable",
      "Carrying Case",
      "Safety Cable",
    ],
    rental_price: 1800,
    security_deposit: 40000,
    stock: 4,
    status: "active",
    product_images: [
      {
        id: "4",
        product_id: "4",
        image_url:
          "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&q=80",
        is_primary: true,
      },
    ],
  },
  {
    id: "5",
    category_id: "4",
    name: "P3.9 LED Wall Panel",
    slug: "p39-led-wall-panel",
    description:
      "High-resolution indoor LED wall panels for events, concerts, and corporate presentations with seamless tiling.",
    specifications: [
      "P3.9 Pixel Pitch",
      "500x500mm Panel Size",
      "High Brightness 1000 nits",
      "Front Service Access",
      "Novastar Processor Compatible",
    ],
    included_accessories: [
      "Flight Cases",
      "Power Distribution",
      "Data Cables",
      "Mounting Hardware",
    ],
    rental_price: 500,
    security_deposit: 15000,
    stock: 50,
    status: "active",
    product_images: [
      {
        id: "5",
        product_id: "5",
        image_url:
          "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80",
        is_primary: true,
      },
    ],
  },
  {
    id: "6",
    category_id: "5",
    name: "Professional Photography Package",
    slug: "professional-photography-package",
    description:
      "Complete event photography service with professional photographer, backup equipment, and edited deliverables.",
    specifications: [
      "8 Hours Coverage",
      "2 Professional Photographers",
      "500+ Edited Photos",
      "Same-Day Preview",
      "Online Gallery Delivery",
    ],
    included_accessories: [
      "Backup Camera Body",
      "Multiple Lens Options",
      "Off-Camera Flash Setup",
      "Photo Booth Add-on Available",
    ],
    rental_price: 15000,
    security_deposit: 5000,
    stock: 10,
    status: "active",
    product_images: [
      {
        id: "6",
        product_id: "6",
        image_url:
          "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80",
        is_primary: true,
      },
    ],
  },
];

export const eventServices = [
  {
    title: "Photography",
    description: "Capture every moment with professional event photography",
    icon: "Camera",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
  },
  {
    title: "Videography",
    description: "Cinematic event films and highlight reels",
    icon: "Video",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80",
  },
  {
    title: "Drone Shoot",
    description: "Aerial perspectives for stunning event coverage",
    icon: "Plane",
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80",
  },
  {
    title: "Live Streaming",
    description: "Multi-camera live streaming for global audiences",
    icon: "Radio",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&q=80",
  },
];

export const reviews = [
  {
    name: "Arjun Mehta",
    role: "Film Director",
    content:
      "AKStudioz provided flawless equipment for our indie film shoot. The Sony FX3 was in pristine condition and their team was incredibly supportive.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Event Planner",
    content:
      "We've rented LED walls and lighting from AKStudioz for multiple corporate events. Always reliable, always premium quality.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Content Creator",
    content:
      "Best camera rental service in the city. Transparent pricing, easy booking process, and top-notch gear every time.",
    rating: 5,
  },
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1516035069371-29a1b244cc58?w=800&q=80",
  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
  "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80",
  "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
  "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80",
];

export const faqs = [
  {
    question: "How do I book equipment?",
    answer:
      "Browse our products, select your rental dates, choose quantity, accept the rental agreement, upload required documents, and confirm your booking. Our team will verify your documents and approve the booking.",
  },
  {
    question: "What documents are required?",
    answer:
      "Aadhaar Card and a Government ID Proof are mandatory. Driving License and Company ID are optional but recommended for faster verification.",
  },
  {
    question: "When do I pay?",
    answer:
      "Full rental amount and security deposit must be paid before equipment pickup. The security deposit is fully refundable upon safe return of equipment.",
  },
  {
    question: "Can I extend my rental period?",
    answer:
      "Yes, subject to availability. Contact us at least 24 hours before your return date to request an extension.",
  },
  {
    question: "What happens if equipment is damaged?",
    answer:
      "Any damage or missing accessories will be assessed and charged accordingly. We recommend inspecting equipment during pickup and reporting any existing issues immediately.",
  },
];
