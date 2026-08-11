import { Category, Product } from "@/types";

export const categories: Category[] = [
  {
    id: "1",
    name: "Camera Rentals",
    slug: "camera-rentals",
    description: "Cinema, Mirrorless & Full-Frame Cameras",
    image_url:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc58?auto=format&fit=crop&w=600&q=75",
  },
  {
    id: "2",
    name: "Lenses & Accessories",
    slug: "camera-accessories",
    description: "Cinema Lenses, Gimbals, Monitors & Focus Systems",
    image_url:
      "https://images.unsplash.com/photo-1606986628035-b1774eb9a6ee?auto=format&fit=crop&w=600&q=75",
  },
  {
    id: "3",
    name: "Lighting Equipment",
    slug: "lighting",
    description: "LED Spotlights, Tube Lights, Softboxes & RGB Panels",
    image_url:
      "https://images.unsplash.com/photo-1598484609097-2a7d0b0a0b0a?auto=format&fit=crop&w=600&q=75",
  },
  {
    id: "4",
    name: "Event & Audio Gears",
    slug: "event-equipment",
    description: "LED Walls, Wireless Audio Mics & PA Speakers",
    image_url:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=600&q=75",
  },
  {
    id: "5",
    name: "Event & Production Services",
    slug: "event-services",
    description: "Live Streaming, 4K Photography & Drone Services",
    image_url:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=75",
  },
];

export const products: Product[] = [
  // CATEGORY 1: CAMERAS (6 Products)
  {
    id: "1",
    category_id: "1",
    name: "Sony FX3 Cinema Camera",
    slug: "sony-fx3-cinema-camera",
    description:
      "Professional full-frame cinema camera with 4K 120fps, S-Cinetone color science, and active cooling for non-stop filmmaking.",
    specifications: [
      "12.1MP Full-Frame Exmor R CMOS Sensor",
      "4K 120fps Recording",
      "S-Cinetone & S-Log3",
      "Dual Base ISO 800/12800",
      "Active SteadyShot Stabilization",
    ],
    included_accessories: [
      "Original Battery x2",
      "128GB CFexpress Card",
      "XLR Handle Unit",
      "Camera Strap",
      "Protective Hard Case",
    ],
    rental_price: 2500,
    security_deposit: 50000,
    stock: 3,
    status: "active",
    product_images: [
      {
        id: "101",
        product_id: "1",
        image_url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc58?auto=format&fit=crop&w=600&q=75",
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
      "Hybrid cinema camera combining Canon's legendary color science with 8K RAW recording for high-end feature productions.",
    specifications: [
      "45MP Full-Frame CMOS Sensor",
      "8K 60fps RAW Internal Recording",
      "Dual Pixel CMOS AF II",
      "Canon Log 3 & Cinema Gamut",
      "Active Cooling Fan System",
    ],
    included_accessories: [
      "LP-E6NH Battery x2",
      "256GB CFexpress Card",
      "Top Handle",
      "Rig Cage",
    ],
    rental_price: 3500,
    security_deposit: 75000,
    stock: 2,
    status: "active",
    product_images: [
      {
        id: "102",
        product_id: "2",
        image_url: "https://images.unsplash.com/photo-1502927717964-4310427f9f99?auto=format&fit=crop&w=600&q=75",
        is_primary: true,
      },
    ],
  },
  {
    id: "3",
    category_id: "1",
    name: "RED Komodo 6K Cinema Camera",
    slug: "red-komodo-6k",
    description:
      "Compact 6K Super35 cinema camera with global shutter sensor, REDCODE RAW recording, and ultra-crisp motion blur-free capture.",
    specifications: [
      "19.9MP Super35 Global Shutter CMOS",
      "6K at 40 fps / 4K at 60 fps REDCODE RAW",
      "Integrated Touchscreen LCD",
      "RF Mount with Canon EF Adapter",
    ],
    included_accessories: [
      "Canon EF to RF Adapter with ND",
      "RED CFAST 2.0 512GB Card x2",
      "V-Mount Battery Plate & 2x Batteries",
    ],
    rental_price: 5500,
    security_deposit: 120000,
    stock: 2,
    status: "active",
    product_images: [
      {
        id: "103",
        product_id: "3",
        image_url: "https://images.unsplash.com/photo-1589872746196-5654153050f1?auto=format&fit=crop&w=600&q=75",
        is_primary: true,
      },
    ],
  },
  {
    id: "4",
    category_id: "1",
    name: "Sony A7S III Mirrorless",
    slug: "sony-a7s-iii",
    description:
      "Low-light monster full-frame mirrorless camera with 4K 120p 10-bit 4:2:2 internal video recording and legendary autofocus.",
    specifications: [
      "12.1MP Exmor R BSI Sensor",
      "4K 120p Video 10-Bit 4:2:2",
      "759-Point Fast Hybrid AF",
      "5-Axis SteadyShot Image Stabilization",
    ],
    included_accessories: ["NP-FZ100 Battery x3", "128GB SD Card", "Dual Battery Charger"],
    rental_price: 2000,
    security_deposit: 40000,
    stock: 4,
    status: "active",
    product_images: [
      {
        id: "104",
        product_id: "4",
        image_url: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=600&q=75",
        is_primary: true,
      },
    ],
  },
  {
    id: "5",
    category_id: "1",
    name: "Blackmagic Pocket 6K G2",
    slug: "blackmagic-pocket-6k-g2",
    description:
      "Super35 6K digital film camera with adjustable touchscreen display, dual native ISO, and Blackmagic RAW format.",
    specifications: [
      "Super35 6144 x 3456 HDR Sensor",
      "Dual Native ISO up to 25600",
      "Generation 5 Color Science",
      "Built-in ND Filters Option",
    ],
    included_accessories: ["NP-F570 Battery x4", "1TB Portable SSD Drive", "Cage & Top Handle"],
    rental_price: 1800,
    security_deposit: 35000,
    stock: 3,
    status: "active",
    product_images: [
      {
        id: "105",
        product_id: "5",
        image_url: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=600&q=75",
        is_primary: true,
      },
    ],
  },
  {
    id: "6",
    category_id: "1",
    name: "Canon EOS C300 Mark III",
    slug: "canon-c300-mark-iii",
    description:
      "Broadcast cinema camera featuring DGO Super 35mm Sensor with 16+ stops dynamic range and internal Cinema RAW Light.",
    specifications: [
      "Super 35mm Dual Gain Output (DGO) Sensor",
      "4K 120p / 2K 180p Recording",
      "Internal Cinema RAW Light & XF-AVC",
      "Dual Pixel CMOS AF",
    ],
    included_accessories: ["BPA60 Battery x2", "512GB CFexpress Card", "Monitor & Grip"],
    rental_price: 4200,
    security_deposit: 95000,
    stock: 1,
    status: "active",
    product_images: [
      {
        id: "106",
        product_id: "6",
        image_url: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&w=600&q=75",
        is_primary: true,
      },
    ],
  },

  // CATEGORY 2: LENSES & ACCESSORIES (6 Products)
  {
    id: "7",
    category_id: "2",
    name: "DJI RS 4 Pro Gimbal",
    slug: "dji-rs4-pro-gimbal",
    description:
      "Professional 3-axis carbon fiber gimbal stabilizer with 4.5kg payload capacity and automated axis locks.",
    specifications: [
      "4.5kg Payload Capacity",
      "Carbon Fiber Construction",
      "2nd Gen Automated Axis Locks",
      "LiDAR Focus System Support",
    ],
    included_accessories: ["Focus Motor", "Briefcase Handle", "Extended Grip", "Carry Case"],
    rental_price: 1200,
    security_deposit: 25000,
    stock: 5,
    status: "active",
    product_images: [
      {
        id: "107",
        product_id: "7",
        image_url: "https://images.unsplash.com/photo-1606986628035-b1774eb9a6ee?auto=format&fit=crop&w=600&q=75",
        is_primary: true,
      },
    ],
  },
  {
    id: "8",
    category_id: "2",
    name: "Sony FE 24-70mm f/2.8 GM II",
    slug: "sony-24-70-gm-ii",
    description:
      "G Master standard zoom lens with f/2.8 aperture, incredible edge-to-edge sharpness, and lightweight design.",
    specifications: ["Constant f/2.8 Aperture", "Extreme Aspherical Elements", "Four XD Linear AF Motors", "Nano AR II Coating"],
    included_accessories: ["Lens Hood", "Front & Rear Caps", "Padded Pouch"],
    rental_price: 1000,
    security_deposit: 30000,
    stock: 4,
    status: "active",
    product_images: [
      {
        id: "108",
        product_id: "8",
        image_url: "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=600&q=75",
        is_primary: true,
      },
    ],
  },
  {
    id: "9",
    category_id: "2",
    name: "Canon RF 50mm f/1.2L USM",
    slug: "canon-rf-50mm-f12",
    description:
      "Ultra-fast prime lens for Canon mirrorless systems delivering cinematic bokeh and unbelievable low-light detail.",
    specifications: ["f/1.2 Maximum Aperture", "Ring-type USM AF System", "Air Sphere Coating (ASC)", "Weather-Sealed L-Series"],
    included_accessories: ["Lens Hood", "UV Filter", "Soft Case"],
    rental_price: 900,
    security_deposit: 28000,
    stock: 3,
    status: "active",
    product_images: [
      {
        id: "109",
        product_id: "9",
        image_url: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?auto=format&fit=crop&w=600&q=75",
        is_primary: true,
      },
    ],
  },
  {
    id: "10",
    category_id: "2",
    name: "Atomos Ninja V+ 8K Monitor",
    slug: "atomos-ninja-v-plus",
    description:
      "5.2-inch 1000nits HDR monitor-recorder capable of 8K30p and 4K120p RAW recording to SSD.",
    specifications: ["1000 nits Brightness", "8K 30p & 4K 120p ProRes RAW", "ProRes & DNxHR codecs", "HDR Monitoring"],
    included_accessories: ["Master Caddy with 1TB SSD", "2x NPF Batteries", "Sunhood", "HDMI Cable"],
    rental_price: 850,
    security_deposit: 20000,
    stock: 3,
    status: "active",
    product_images: [
      {
        id: "110",
        product_id: "10",
        image_url: "https://images.unsplash.com/photo-1589872746196-5654153050f1?auto=format&fit=crop&w=600&q=75",
        is_primary: true,
      },
    ],
  },
  {
    id: "11",
    category_id: "2",
    name: "Tilta Nucleus-M Follow Focus",
    slug: "tilta-nucleus-m",
    description:
      "Wireless 3-channel focus, iris, and zoom control system with 1000ft range for professional camera focus pullers.",
    specifications: ["3-Channel Motor System", "1000ft Line of Sight Range", "Vibration Hand Grips", "OLED Controller Screen"],
    included_accessories: ["FIZ Hand Unit", "2x Motors", "Hand Grips", "Power Cables & Case"],
    rental_price: 950,
    security_deposit: 22000,
    stock: 2,
    status: "active",
    product_images: [
      {
        id: "111",
        product_id: "11",
        image_url: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=600&q=75",
        is_primary: true,
      },
    ],
  },
  {
    id: "12",
    category_id: "2",
    name: "Teradek Bolt 4K LT Wireless Video",
    slug: "teradek-bolt-4k-lt",
    description:
      "Zero-delay 4K wireless video transmitter and receiver pair for director and focus monitoring.",
    specifications: ["Zero Delay (<0.001sec)", "750ft Wireless Range", "4K HDR 10-Bit Color", "HDMI & SDI Inputs"],
    included_accessories: ["Transmitter", "Receiver", "Antennas", "D-Tap Power Cables", "Pelican Case"],
    rental_price: 1500,
    security_deposit: 45000,
    stock: 2,
    status: "active",
    product_images: [
      {
        id: "112",
        product_id: "12",
        image_url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc58?auto=format&fit=crop&w=600&q=75",
        is_primary: true,
      },
    ],
  },

  // CATEGORY 3: LIGHTING (4 Products)
  {
    id: "13",
    category_id: "3",
    name: "Aputure 600d Pro LED Light",
    slug: "aputure-600d-pro",
    description:
      "Weather-resistant 600W daylight LED spotlight delivering massive output comparable to a 1200W HMI.",
    specifications: ["600W Daylight Balanced (5600K)", "Bowens Mount", "0-100% Stepless Dimming", "Sidus Link App Control"],
    included_accessories: ["Control Box", "Hyper Reflector", "Rolling Case", "Softbox Modifiers"],
    rental_price: 1800,
    security_deposit: 40000,
    stock: 4,
    status: "active",
    product_images: [
      {
        id: "113",
        product_id: "13",
        image_url: "https://images.unsplash.com/photo-1598484609097-2a7d0b0a0b0a?auto=format&fit=crop&w=600&q=75",
        is_primary: true,
      },
    ],
  },
  {
    id: "14",
    category_id: "3",
    name: "Godox Knowled M600D Daylight",
    slug: "godox-m600d",
    description:
      "Powerful 600W LED light with ultra-silent cooling, Bowens mount compatibility, and precision color fidelity.",
    specifications: ["600W Power Output", "5600K Color Temp", "CRI/TLCI 96+/97+", "FX Light Effects Built-in"],
    included_accessories: ["Reflector", "Controller Box", "Heavy Duty C-Stand", "Carrying Bag"],
    rental_price: 1400,
    security_deposit: 30000,
    stock: 3,
    status: "active",
    product_images: [
      {
        id: "114",
        product_id: "14",
        image_url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc58?auto=format&fit=crop&w=600&q=75",
        is_primary: true,
      },
    ],
  },
  {
    id: "15",
    category_id: "3",
    name: "Nanlite PavoTube II 30C 4-Kit",
    slug: "nanlite-pavotube-30c-4kit",
    description:
      "4-foot RGBWW LED tube light 4-kit with internal batteries, full hue control, and special pixel effects.",
    specifications: ["2700K-7500K CCT Range", "Full 360 RGB Color", "Built-in Battery (2.5hr run time)", "Wireless App Control"],
    included_accessories: ["4x Tubes", "Power Cables", "Clips & Mounting Eyebolts", "Quad Bag"],
    rental_price: 1100,
    security_deposit: 22000,
    stock: 3,
    status: "active",
    product_images: [
      {
        id: "115",
        product_id: "15",
        image_url: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=600&q=75",
        is_primary: true,
      },
    ],
  },
  {
    id: "16",
    category_id: "3",
    name: "Aputure Amaran F22c Flexible RGB",
    slug: "amaran-f22c-rgb",
    description:
      "Ultra-lightweight 2x2ft 200W RGBWW flexible LED mat light perfect for tight cars, locations, and soft overhead light.",
    specifications: ["200W RGBWW Flexible Mat", "2500K-7500K Color Range", "Included Grid & Diffusion", "Sidus Mesh App"],
    included_accessories: ["X-Frame Mount", "Control Box", "Softbox & Grid", "Case"],
    rental_price: 950,
    security_deposit: 18000,
    stock: 4,
    status: "active",
    product_images: [
      {
        id: "116",
        product_id: "16",
        image_url: "https://images.unsplash.com/photo-1598484609097-2a7d0b0a0b0a?auto=format&fit=crop&w=600&q=75",
        is_primary: true,
      },
    ],
  },

  // CATEGORY 4: EVENT & AUDIO (4 Products)
  {
    id: "17",
    category_id: "4",
    name: "P3.9 Indoor LED Wall Panel",
    slug: "p39-led-wall-panel",
    description:
      "Modular high-brightness indoor/outdoor P3.9 LED screen panel for stage backgrounds, weddings, and corporate events.",
    specifications: ["P3.9 Pixel Pitch", "500x500mm Panel Size", "1200 nits High Brightness", "Novastar Video Processor Compatible"],
    included_accessories: ["Flight Case per 6 panels", "PowerCon & Data Cables", "Hanging Beams"],
    rental_price: 500,
    security_deposit: 10000,
    stock: 40,
    status: "active",
    product_images: [
      {
        id: "117",
        product_id: "17",
        image_url: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=600&q=75",
        is_primary: true,
      },
    ],
  },
  {
    id: "18",
    category_id: "4",
    name: "Sennheiser EW-DP Wireless Mic",
    slug: "sennheiser-ew-dp-mic",
    description:
      "All-digital UHF wireless lavalier microphone system with magnetic stacking receiver for clear event audio.",
    specifications: ["Digital UHF Transmission", "134 dB Dynamic Range", "OLED Display", "Smart Assist App Setup"],
    included_accessories: ["Transmitter", "Receiver", "ME 2 Omni Lavalier Mic", "Cold Shoe Mount"],
    rental_price: 700,
    security_deposit: 15000,
    stock: 6,
    status: "active",
    product_images: [
      {
        id: "118",
        product_id: "18",
        image_url: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=75",
        is_primary: true,
      },
    ],
  },
  {
    id: "19",
    category_id: "4",
    name: "Sound Devices MixPre-6 II Recorder",
    slug: "sound-devices-mixpre-6-ii",
    description:
      "Field audio recorder with 32-bit float recording, Kashmir ultra-low noise preamps, and 8-track recording capability.",
    specifications: ["32-Bit Float Recording", "4 Kashmir Mic Preamps", "Timecode Generator", "USB Audio Interface Mode"],
    included_accessories: ["64GB SD Card", "Battery Sled & AC Adapter", "Custom Bag"],
    rental_price: 1250,
    security_deposit: 30000,
    stock: 2,
    status: "active",
    product_images: [
      {
        id: "119",
        product_id: "19",
        image_url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=75",
        is_primary: true,
      },
    ],
  },
  {
    id: "20",
    category_id: "4",
    name: "JBL EON715 Powered Speaker Pair",
    slug: "jbl-eon715-speaker-pair",
    description:
      "15-inch 1300W portable PA speaker pair with Bluetooth control and DBX DSP processing for crisp venue audio.",
    specifications: ["1300W Peak Power Each", "15-inch Woofer", "Built-in 3-channel Mixer", "Bluetooth Audio Streaming"],
    included_accessories: ["2x Speaker Stands", "Power Cables", "XLR Signal Cables"],
    rental_price: 1600,
    security_deposit: 25000,
    stock: 3,
    status: "active",
    product_images: [
      {
        id: "120",
        product_id: "20",
        image_url: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=600&q=75",
        is_primary: true,
      },
    ],
  },

  // CATEGORY 5: SERVICES (4 Products)
  {
    id: "21",
    category_id: "5",
    name: "Professional Photography Package",
    slug: "professional-photography-package",
    description:
      "Complete event photography service with 2 senior photographers, high-res edited photos, and online gallery.",
    specifications: [
      "8 Hours Event Coverage",
      "2 Senior Photographers",
      "500+ High-Res Edited Photos",
      "Online Private Gallery",
    ],
    included_accessories: ["Full Backup Cameras & Lenses", "Off-Camera Lighting Setup"],
    rental_price: 15000,
    security_deposit: 5000,
    stock: 5,
    status: "active",
    product_images: [
      {
        id: "121",
        product_id: "21",
        image_url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=75",
        is_primary: true,
      },
    ],
  },
  {
    id: "22",
    category_id: "5",
    name: "4K Multi-Cam Live Stream Setup",
    slug: "live-stream-setup",
    description:
      "Full live streaming production with 3 cinema cameras, video switcher, audio mixer, and stream operator for YouTube/Zoom.",
    specifications: ["3 Camera Setup", "ATEM Mini Extreme ISO Switcher", "Bonded Cellular Internet Unit", "Dedicated Stream Engineer"],
    included_accessories: ["Graphics Overlay Setup", "Full Audio Monitoring", "Raw ISO Recordings"],
    rental_price: 22000,
    security_deposit: 10000,
    stock: 3,
    status: "active",
    product_images: [
      {
        id: "122",
        product_id: "22",
        image_url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc58?auto=format&fit=crop&w=600&q=75",
        is_primary: true,
      },
    ],
  },
  {
    id: "23",
    category_id: "5",
    name: "Drone Aerial Cinematography",
    slug: "drone-aerial-cinematography",
    description:
      "Certified DGCA drone pilot service capturing 4K 60fps cinematic aerial shots for real estate, films, and grand events.",
    specifications: ["DGCA Certified Pilot", "DJI Mavic 3 Cine Drone", "ProRes 422 HQ Recording", "Up to 5 Flight Hours"],
    included_accessories: ["ND Filters", "Multiple Batteries", "High-Gain Controller"],
    rental_price: 12500,
    security_deposit: 5000,
    stock: 4,
    status: "active",
    product_images: [
      {
        id: "123",
        product_id: "23",
        image_url: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=600&q=75",
        is_primary: true,
      },
    ],
  },
  {
    id: "24",
    category_id: "5",
    name: "360 Spinner Photo Booth Station",
    slug: "360-photo-booth-station",
    description:
      "Interactive 360-degree slow motion video booth with LED lighting, instant QR download, and custom overlay logo design.",
    specifications: ["Automatic 360 Motorized Arm", "Slow-Motion Video FX", "Instant QR/SMS Sharing Station", "Attendant Included"],
    included_accessories: ["RGB Ring Light", "Ring Stanchions", "Custom Video Overlay"],
    rental_price: 18000,
    security_deposit: 8000,
    stock: 2,
    status: "active",
    product_images: [
      {
        id: "124",
        product_id: "24",
        image_url: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=600&q=75",
        is_primary: true,
      },
    ],
  },
];

export const eventServices = [
  {
    title: "Photography",
    description: "Capture every detail with high-resolution full-frame cameras",
    icon: "Camera",
  },
  {
    title: "Videography",
    description: "Cinematic 4K 120fps recording & multi-cam production",
    icon: "Video",
  },
  {
    title: "Live Streaming",
    description: "Broadcast your event live to YouTube, Facebook or Zoom",
    icon: "Radio",
  },
  {
    title: "LED Walls & Stage",
    description: "Ultra-bright P3.9 LED displays & stage lighting setups",
    icon: "Monitor",
  },
];

export const faqs = [
  {
    question: "What documents are required to rent equipment?",
    answer: "You need a valid government-issued photo ID (Aadhar/PAN/Passport), proof of address, and a refundable security deposit. For high-value items, we may require additional verification.",
  },
  {
    question: "How does the security deposit work?",
    answer: "A refundable security deposit is collected at the time of booking. It is fully returned within 2-3 business days after equipment is returned in the same condition.",
  },
  {
    question: "Can I extend my rental period?",
    answer: "Yes! Contact us at least 24 hours before your return date to extend. Extensions are subject to availability and will be charged at the daily rental rate.",
  },
  {
    question: "Do you deliver equipment?",
    answer: "Yes, we offer doorstep delivery and pickup within Chennai city limits. Delivery charges may apply based on distance and equipment size.",
  },
  {
    question: "What happens if equipment is damaged?",
    answer: "Minor wear and tear is expected and covered. For significant damage, repair costs will be deducted from the security deposit. We recommend rental insurance for high-value gear.",
  },
  {
    question: "Do you provide technical support during my rental?",
    answer: "Absolutely! Our team provides 24/7 phone support, and we can arrange on-site technical assistance for events and productions at an additional cost.",
  },
];

export const galleryImages = [
  { src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc58?auto=format&fit=crop&w=600&q=75", alt: "Cinema camera setup" },
  { src: "https://images.unsplash.com/photo-1502927717964-4310427f9f99?auto=format&fit=crop&w=600&q=75", alt: "Film production" },
  { src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=75", alt: "Event setup" },
  { src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=600&q=75", alt: "Studio lighting" },
  { src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=600&q=75", alt: "Concert stage" },
  { src: "https://images.unsplash.com/photo-1606986628035-b1774eb9a6ee?auto=format&fit=crop&w=600&q=75", alt: "Camera accessories" },
  { src: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=600&q=75", alt: "Drone shot" },
  { src: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=600&q=75", alt: "Mirrorless camera" },
];

export const reviews = [
  {
    name: "Rajesh Subramanian",
    role: "Wedding Filmmaker",
    content: "AKStudioz provided pristine Sony FX3 cameras and Aputure lights for our 3-day wedding shoot. Equipment was spotless and support was phenomenal.",
    rating: 5,
  },
  {
    name: "Priya Venkatesh",
    role: "Content Creator",
    content: "Rented the Canon R5 C for a brand campaign. The image quality and color science were incredible. Will definitely rent again!",
    rating: 5,
  },
  {
    name: "Arun Prakash",
    role: "Event Manager",
    content: "The LED wall panels and JBL speakers transformed our corporate event. AKStudioz handled setup and teardown seamlessly.",
    rating: 5,
  },
  {
    name: "Deepika Rajan",
    role: "Short Film Director",
    content: "RED Komodo rental was a game-changer for our indie film. The global shutter footage looked absolutely cinematic.",
    rating: 4,
  },
];

