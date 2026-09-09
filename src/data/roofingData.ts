import { ServiceItem, FAQItem, IdealCustomerCategory, ProjectShowcase, CustomerReview } from '../types';
import { PRIORITY_SERVICE_IMAGES } from './priorityImages';

export const BUSINESS_INFO = {
  name: 'Crown Roof Restorations',
  shortName: 'Crown',
  slogan: 'The Crown Treatment. Every Roof. Every Time.',
  phone: '0480 213 977',
  email: 'crownroofrestorationsvic@gmail.com',
  address: 'Melbourne & Surrounding Suburbs, VIC',
  warrantyYears: '10-Year',
  warrantyText: '10-Year Workmanship Warranty',
  rating: '5.0',
  reviewCount: '5 Google Reviews',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61591616468916',
  coreValueProposition:
    'We don’t just restore roofs — we restore them like they’re our own. With hands-on experience, quality products, attention to detail and pride in every job, Crown Roof Restorations is built around doing the job properly and putting our name behind the work.',
  whyCrownSummary:
    'Whether your roof is tile or tin, Crown Roof Restorations provides complete roofing solutions from repairs and maintenance through to full restorations. We use quality products, take pride in our workmanship and treat every roof as if it were our own.',
  materialsStatement:
    'At Crown Roof Restorations, we work across a wide range of roofing materials and restoration systems, with a focus on quality products and long-lasting results.',
};

export const TOP_PRIORITY_SERVICES: ServiceItem[] = [
  {
    id: 'full-roof-restoration',
    name: 'Full Roof Restoration & Painting',
    category: 'tile-tin',
    isPriority: true,
    imageUrl: PRIORITY_SERVICE_IMAGES['full-roof-restoration'] || '/priority-restoration.jpg',
    tagline: 'Look brand new for a fraction of replacement cost.',
    description:
      'Complete roof restoration to clean, repair, and seal your roof with durable weatherproof paint.',
    details: [
      'High-pressure wash removing all dirt and moss',
      'Replace broken tiles and re-point ridge caps',
      'Primer + 2 thick coats of UV-resistant paint',
      '10-year workmanship warranty included',
    ],
    materials: 'Concrete tile, terracotta & tin roofs',
    iconName: 'ShieldCheck',
  },
  {
    id: 'roof-repairs',
    name: 'Roof Repairs & Maintenance',
    category: 'tile-tin',
    isPriority: true,
    imageUrl: PRIORITY_SERVICE_IMAGES['roof-repairs'] || '/priority-repairs.jpg',
    tagline: 'Fast fixes for cracked tiles, mortar & storm wear.',
    description:
      'Stop minor roof issues before they turn into costly ceiling leaks or structural damage.',
    details: [
      'Find and replace cracked or shifted tiles',
      'Replace rusted valley irons and seals',
      'Re-bed and point loose ridge capping',
      'Fasten loose tin sheets and check battens',
    ],
    materials: 'All tile, metal & tin roofs',
    iconName: 'Wrench',
  },
  {
    id: 'leak-detection-repairs',
    name: 'Leak Detection & Fast Repairs',
    category: 'tile-tin',
    isPriority: true,
    imageUrl: PRIORITY_SERVICE_IMAGES['leak-detection-repairs'] || '/priority-leak.jpg',
    tagline: 'Find and stop roof leaks before damage spreads.',
    description:
      'We track down tricky water entry points, patch leaks fast, and complete lasting repairs.',
    details: [
      'Pinpoint the exact source of water leaks',
      'Fix damaged flashings, valleys & penetrations',
      'Fast emergency weatherproofing for storms',
      'Permanent, guaranteed fix with honest pricing',
    ],
    materials: 'Tiles, tin sheets & flashings',
    iconName: 'AlertTriangle',
  },
];

export const ALL_SERVICES: ServiceItem[] = [
  // --- Tile & Tin Roofing ---
  {
    id: 'service-1',
    name: 'Full Roof Restorations',
    category: 'tile-tin',
    isPriority: true,
    tagline: 'Complete top-to-bottom roof transformation.',
    description:
      'Complete multi-stage restoration including cleaning, re-bedding, flexible pointing, primer, and high-build protective coating.',
    details: ['Tile replacement', 'De-mossing & chemical treatment', 'High-build membrane', '10-Year guarantee'],
    iconName: 'Crown',
  },
  {
    id: 'service-2',
    name: 'Roof Repairs',
    category: 'tile-tin',
    isPriority: true,
    tagline: 'Precision structural & surface repairs.',
    description:
      'Fast, reliable repair work for broken tiles, damaged mortar, rusted sheets, and loose fasteners on any roof.',
    details: ['Tile alignment', 'Batten checks', 'Tin screw tightening', 'Flashings check'],
    iconName: 'Hammer',
  },
  {
    id: 'service-3',
    name: 'Roof Cleaning',
    category: 'tile-tin',
    isPriority: false,
    tagline: 'Commercial-grade high pressure de-mossing.',
    description:
      'Non-abrasive yet thorough high-pressure wash removing decades of stubborn dirt, black mould, and lichen.',
    details: ['Rotary surface cleaning', 'Eco-friendly treatment', 'Gutter flush included'],
    iconName: 'Droplets',
  },
  {
    id: 'service-4',
    name: 'Roof Painting',
    category: 'tile-tin',
    isPriority: false,
    tagline: 'Superior heat-reflective acrylic roof membranes.',
    description:
      'Multi-coat membrane paint application in a wide spectrum of contemporary Colorbond colors that deflect radiant heat.',
    details: ['Primer basecoat', 'Two thick membrane topcoats', '100% UV resistant', 'Gloss & satin options'],
    iconName: 'Paintbrush',
  },
  {
    id: 'service-5',
    name: 'Re-bedding & Re-pointing',
    category: 'tile-tin',
    isPriority: false,
    tagline: 'Reinforcing ridge lines against wind and water.',
    description:
      'Removing old cracked cement bedding, laying fresh high-strength sand-and-cement mortar, and sealing with flexible polymer pointing.',
    details: ['Ridge cap alignment', 'Flexible pointing compound', 'Color-matched finish', 'Weatherproof seal'],
    iconName: 'Layers',
  },
  {
    id: 'service-6',
    name: 'Ridge Capping Repairs',
    category: 'tile-tin',
    isPriority: false,
    tagline: 'Securing the most critical structural apex of your roof.',
    description:
      'Re-aligning displaced ridge caps, replacing broken end-caps, and ensuring solid, watertight ridge lines.',
    details: ['Hip & gable ridge repairs', 'Apex capping alignment', 'Storm-proof bonding'],
    iconName: 'Shield',
  },
  {
    id: 'service-7',
    name: 'Broken Tile Replacement',
    category: 'tile-tin',
    isPriority: false,
    tagline: 'Direct profile and color-matched tile replacements.',
    description:
      'Careful inspection and replacement of fractured, porous, or chipped tiles to prevent silent underlay leaks.',
    details: ['Terracotta and concrete tiles', 'Exact profile match', 'Underlayment inspection'],
    iconName: 'Grid',
  },
  {
    id: 'service-8',
    name: 'Valley Iron Replacement',
    category: 'tile-tin',
    isPriority: false,
    tagline: 'Heavy-gauge galvanized and Colorbond valley trays.',
    description:
      'Replacing rusted or perforated roof valleys with premium corrosion-resistant valley irons, complete with storm seals.',
    details: ['Corrosion-proof materials', 'Valley seal installation', 'Tile cut alignment'],
    iconName: 'Zap',
  },
  {
    id: 'service-9',
    name: 'Lead Flashing Replacement',
    category: 'tile-tin',
    isPriority: false,
    tagline: 'Custom lead and flexible flashing around chimneys & parapets.',
    description:
      'Dressing custom lead and modern polymer flashings into brickwork joints to stop water entry around parapets and chimneys.',
    details: ['Chimney aprons', 'Step flashing', 'Parapet capping', 'High-temp sealant'],
    iconName: 'Flame',
  },
  {
    id: 'service-10',
    name: 'Storm Seal',
    category: 'tile-tin',
    isPriority: false,
    tagline: 'Engineered foam seals blocking wind-driven rain and vermin.',
    description:
      'Installing heavy-duty contoured foam storm seals along valleys and gables to block torrential horizontal rain and ember attack.',
    details: ['Gale-force water barrier', 'Pest and bird proofing', 'Bushfire ember defense'],
    iconName: 'Wind',
  },
  {
    id: 'service-11',
    name: 'Weep Hole Installation',
    category: 'tile-tin',
    isPriority: false,
    tagline: 'Essential drainage paths in ridge pointing.',
    description:
      'Installing weep holes through mortar bedding so trapped condensation and wind-driven water drains safely out to roof tiles.',
    details: ['Prevents internal water buildup', 'Compliant with Australian roofing codes', 'Protects roof battens'],
    iconName: 'Compass',
  },
  {
    id: 'service-12',
    name: 'Re-roofing & Roof Extensions',
    category: 'tile-tin',
    isPriority: false,
    tagline: 'Seamless roof extensions and complete conversions.',
    description:
      'Expertly tying new home extensions, alfresco roofs, and garages into existing roof structures with seamless water junctions.',
    details: ['Tile-to-tin conversions', 'Home extensions tie-ins', 'New structural battens'],
    iconName: 'Home',
  },
  {
    id: 'service-13',
    name: 'Insurance Roofing Work',
    category: 'tile-tin',
    isPriority: false,
    tagline: 'Detailed assessments and reports for insurance claims.',
    description:
      'Comprehensive storm and hail damage assessments, high-resolution photographic evidence, and certified insurance repair execution.',
    details: ['Itemised insurer quotes', 'Hail & wind damage proof', 'Rapid claim turnarounds'],
    iconName: 'FileCheck',
  },
  {
    id: 'service-14',
    name: 'Leak Detection & Roof Repairs',
    category: 'tile-tin',
    isPriority: true,
    tagline: 'Specialist leak tracing and structural sealing.',
    description:
      'Targeted leak tracing using optical and moisture methods to pinpoint hard-to-find entry points.',
    details: ['Precision leak tracing', 'Ceiling protection', 'Permanent certified repair'],
    iconName: 'Droplets',
  },
  {
    id: 'service-15',
    name: 'Fascia & Scotia Replacement',
    category: 'tile-tin',
    isPriority: false,
    tagline: 'Repairing rotted timber or dented metal roof trim.',
    description:
      'Removing decayed fascia boards, installing timber or Colorbond metal fascia covers, and fitting durable scotia mouldings.',
    details: ['Rot-resistant timber', 'Colorbond fascia capping', 'Clean perimeter finish'],
    iconName: 'Layout',
  },
  {
    id: 'service-16',
    name: 'Whirlybird Installation',
    category: 'tile-tin',
    isPriority: false,
    tagline: 'Substantially reduce roof cavity heat and moisture.',
    description:
      'Installing premium wind-driven rotary roof ventilators (whirlybirds) to lower summer attic temperatures and prevent winter mold.',
    details: ['Commercial bearing durability', 'Color-matched to roof', 'Leak-proof custom flashing base'],
    iconName: 'RotateCw',
  },

  // --- Exterior Cleaning & Maintenance ---
  {
    id: 'service-17',
    name: 'Gutter Cleaning',
    category: 'exterior',
    isPriority: false,
    tagline: 'Unclogging eaves, valleys, and concealed box gutters.',
    description:
      'Complete manual and vacuum debris removal from gutters and downpipes to prevent overflow into house eaves and foundations.',
    details: ['Mess-free cleanup', 'Downpipe flow checks', 'Bushfire season safety'],
    iconName: 'Waves',
  },
  {
    id: 'service-18',
    name: 'Downpipe Cleaning',
    category: 'exterior',
    isPriority: false,
    tagline: 'High-pressure flushing of choked stormwater downpipes.',
    description:
      'Flushing out compacted leaves, silt, and tennis balls from downpipes to ensure stormwater drains unrestricted away from the home.',
    details: ['Hydro-jet clearing', 'Joint and collar inspections', 'Roof runoff testing'],
    iconName: 'ArrowDownCircle',
  },
  {
    id: 'service-19',
    name: 'Solar Panel Cleaning',
    category: 'exterior',
    isPriority: false,
    tagline: 'Restore peak photovoltaic power output.',
    description:
      'Gentle pure-water cleaning of solar panels, removing bird droppings, dust, and pollen to restore up to 25% lost energy efficiency.',
    details: ['De-ionised spot-free water', 'No harsh chemicals', 'Photovoltaic glass safe'],
    iconName: 'Sun',
  },
  {
    id: 'service-20',
    name: 'Skylight Cleaning',
    category: 'exterior',
    isPriority: false,
    tagline: 'Crystal-clear natural sunlight and flashing inspection.',
    description:
      'Polishing exterior skylight glass and domes, plus checking surrounding flashings and seals to prevent covert leaks.',
    details: ['Dome and glass wash', 'Seal integrity check', 'Moss removal from edges'],
    iconName: 'Sparkles',
  },
  {
    id: 'service-21',
    name: 'Pressure Cleaning',
    category: 'exterior',
    isPriority: false,
    tagline: 'Commercial heavy-duty high-pressure wash.',
    description:
      'High-PSI pressure washing for eaves, brickwork, retaining walls, paths, and building exteriors.',
    details: ['Adjustable PSI regulators', 'Mould & grease elimination', 'Surface brightening'],
    iconName: 'Gauge',
  },
  {
    id: 'service-22',
    name: 'Driveway Cleaning',
    category: 'exterior',
    isPriority: false,
    tagline: 'Eliminate oil stains, moss, and tyre marks.',
    description:
      'Industrial rotary surface washer treatment for concrete, aggregate, and paved driveways, lifting embedded dirt safely.',
    details: ['Degreasing treatments', 'Aggregate restoration', 'Weed removal in joints'],
    iconName: 'Truck',
  },
  {
    id: 'service-23',
    name: 'Driveway Painting',
    category: 'exterior',
    isPriority: false,
    tagline: 'Durable anti-slip protective driveway sealers.',
    description:
      'Applying high-performance epoxy and urethane driveway coatings with slip-resistant grit, creating curb appeal that matches your fresh roof.',
    details: ['Sealer and tint coats', 'Slip-resistant additive', 'Resistant to hot tyre pick-up'],
    iconName: 'CheckCircle2',
  },
];

export const TOP_CUSTOMER_QUESTIONS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How much will my roof restoration cost?',
    answer:
      'Every roof is different, so we provide a free quote based on the size, condition and work required. Our quotes are upfront and clearly outline what is included, including labour and materials.',
    tip: 'No hidden surprise fees. We walk the roof and provide transparent pricing before any work starts.',
  },
  {
    id: 'faq-2',
    question: 'Do I need a full roof replacement, or can my roof be restored?',
    answer:
      'In many cases, an older or tired-looking roof can be restored rather than completely replaced, saving you thousands of dollars. We inspect the roof and explain what work is actually required, so you can make an informed decision.',
    tip: 'Restoration delivers an as-new look and structural weatherproofing at a fraction of full re-roofing cost.',
  },
  {
    id: 'faq-3',
    question: 'How long will the restoration last?',
    answer:
      'A properly prepared and restored roof can provide many years of protection. We focus heavily on preparation and use quality roofing products and systems suited to the roof. Our workmanship is also backed by our 10-year workmanship warranty where applicable.',
    tip: 'Our multi-coat polymer systems are tested against Australian UV, hail, and torrential rainfall.',
  },
];

export const IDEAL_CUSTOMERS: IdealCustomerCategory[] = [
  {
    id: 'residential',
    title: 'Residential Homeowners',
    subtitle: 'Family homes, character properties & extensions',
    description:
      'Whether you are refreshing street appeal before selling or safeguarding your family home for decades to come, we treat your property with meticulous cleanliness and care.',
    benefits: ['Full 10-year workmanship warranty', 'Direct builder communication', 'Zero mess guarantee'],
    iconName: 'Home',
  },
  {
    id: 'commercial',
    title: 'Commercial Property Managers',
    subtitle: 'Warehouses, strata, retail & office complexes',
    description:
      'Scalable roofing maintenance, scheduled inspections, preventative leak repair, and compliant safety documentation for facility managers.',
    benefits: ['Detailed compliance reports', 'Minimum business disruption', 'Preventative maintenance schedules'],
    iconName: 'Building2',
  },
  {
    id: 'repairs',
    title: 'Urgent Roof Repairs',
    subtitle: 'Storm damage, ceiling breaches & sudden leaks',
    description:
      'When storms hit and water enters your living spaces or inventory, our prompt response crew arrives with containment gear and permanent solutions.',
    benefits: ['Prompt local dispatch', 'Immediate tarping & leak sealing', 'Direct insurance claim reports'],
    iconName: 'AlertOctagon',
  },
  {
    id: 'high-end',
    title: 'High-End Architectural Builds',
    subtitle: 'Bespoke residences & heritage restorations',
    description:
      'Specialized craftsmanship for architectural profiles, terracotta tiles, intricate valley junctions, custom lead flashings, and precision Colorbond finishes.',
    benefits: ['Master craftsmanship & detailing', 'Specialty terracotta & tin matching', 'Uncompromising aesthetics'],
    iconName: 'Sparkles',
  },
];

export const MATERIAL_SPECIALTIES = [
  {
    title: 'Terracotta & Concrete Tiles',
    desc: 'Deep de-mossing, replacing fractured tiles with exact profile molds, and resealing with breathable anti-efflorescence membranes.',
    points: ['Terracotta re-glaze & sealing', 'Concrete tile point & paint', 'Ridge cap bedding mortar'],
  },
  {
    title: 'Colorbond & Tin / Corrugated',
    desc: 'Corrosion conversion, specialized rust primers, screw replacements, and high-adhesion metal roof coatings that resist peeling.',
    points: ['Rust-inhibiting primers', 'Thermal barrier roof paints', 'Flashing & sheet re-fastening'],
  },
  {
    title: 'Valley Irons & Flashings',
    desc: 'Replacing rusted tin valleys with heavy-duty galvanized or Colorbond valley trays engineered for torrential storm drainage.',
    points: ['Heavy-gauge valley iron', 'Lead chimney aprons', 'Continuous polymer storm seal'],
  },
  {
    title: 'Ridge Pointing Systems',
    desc: 'Utilizing premium flexible pointing that naturally flexes with house movement and thermal expansion, preventing future cracks.',
    points: ['Flexible polymer compounds', 'Engineered weep holes', 'Wind-driven rain resilience'],
  },
];

export const BEFORE_AFTER_PROJECTS: ProjectShowcase[] = [
  {
    id: 'proj-full-restoration',
    title: 'Full Roof Restoration: Tile & Tin Rejuvenation',
    category: 'Full Roof Restoration',
    location: 'Melbourne Residential Property',
    roofType: 'Concrete Tile & Tin',
    problem: 'Decades of severe UV fading, weathered porous tiles, deteriorated ridge pointing, and oxidized adjoining tin sheets.',
    solution: 'High-pressure rotary wash, precision flexible repointing, fractured tile replacements, and multi-coat high-gloss Charcoal Monument protective membrane application.',
    beforeImage: '/roof-before.jpg',
    afterImage: '/roof-after.jpg',
    warranty: '10-Year Workmanship Warranty',
  },
];

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-riley',
    author: 'Riley Mckay',
    reviewCount: '1 review',
    date: 'a month ago',
    rating: 5,
    serviceMentioned: 'Full Roof Restoration',
    content:
      'I got a full roof restoration done by Mason from Crown Roof Restorations and I couldn’t be happier with the result. Mason was professional, reliable and did an amazing job from start to finish.\n\nThe roof looks brand new again and the quality of the workmanship is excellent. I would definitely recommend Mason and Crown Roof Restorations to anyone needing a roof repair or full restoration. I’ll definitely be using him again in the future.',
    likesCount: 1,
    badge: 'Verified Customer',
  },
  {
    id: 'rev-adrian',
    author: 'Adrian Seconnino',
    reviewCount: '11 reviews',
    date: 'a month ago',
    rating: 5,
    serviceMentioned: 'Roof Restoration',
    content:
      'Mason did a great job restoring my roof. He went over and beyond what was discussed and made sure I was happy before leaving. Highly recommended Mason and will definitely use him again.',
    likesCount: 1,
    badge: 'Local Guide',
  },
  {
    id: 'rev-leeanne',
    author: 'Leeanne Young',
    reviewCount: '4 reviews · 1 photo',
    date: 'a month ago',
    rating: 5,
    highlight: 'Great price',
    serviceMentioned: 'Gutter Cleaning & Guard Removal',
    content:
      'I had my gutters cleaned by Crown Roof Restoration, and they did an awesome, professional job. It was a big job because grass was growing throughout the gutters due to the old gutter guard, which they removed. I definitely won’t be putting gutter guard back on.',
    hasPhoto: true,
    likesCount: 1,
    badge: 'Verified Customer',
  },
  {
    id: 'rev-kathi',
    author: 'Kathi Hunt',
    reviewCount: '1 review',
    date: '4 weeks ago',
    rating: 5,
    highlight: 'Great price',
    serviceMentioned: 'Two-Storey Gutter Cleaning',
    content:
      'Mason did a great job cleaning our difficult two storey gutters and left everything clean and tidy. Would highly recommend very professional and reliable.',
    badge: 'Verified Customer',
  },
  {
    id: 'rev-dylan',
    author: 'Dylan P',
    reviewCount: '1 review',
    date: 'a month ago',
    rating: 5,
    highlight: 'Great price',
    serviceMentioned: 'Roof Restoration',
    content:
      'Great experience with Crown Roof Restoration. Roof looks brand new. Thanks Mason!',
    likesCount: 1,
    badge: 'Verified Customer',
  },
];
