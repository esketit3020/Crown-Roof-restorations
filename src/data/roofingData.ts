import { ServiceItem, FAQItem, IdealCustomerCategory, ProjectShowcase } from '../types';

export const BUSINESS_INFO = {
  name: 'Crown Roof Restorations',
  shortName: 'Crown',
  slogan: 'The Crown Treatment. Every Roof. Every Time.',
  phone: '(03) 9000 2769', // CROWN vanity / direct hotline
  emergencyPhone: '1300 276 969',
  email: 'quotes@crownroofrestorations.com.au',
  address: 'Melbourne & Surrounding Suburbs, VIC',
  warrantyYears: '10-Year',
  warrantyText: '10-Year Workmanship Warranty',
  rating: '4.9',
  reviewCount: '180+',
  coreValueProposition:
    'We don’t just restore roofs — we restore them like they’re our own. With hands-on experience from a younger age, quality products, attention to detail and pride in every job, Crown Roof Restorations is built around doing the job properly and putting our name behind the work.',
  whyCrownSummary:
    'Whether your roof is tile or tin, Crown Roof Restorations provides complete roofing solutions from repairs and maintenance through to full restorations. We use quality products, take pride in our workmanship and treat every roof as if it were our own.',
  materialsStatement:
    'At Crown Roof Restorations, we work across a wide range of roofing materials and restoration systems, with a focus on quality products and long-lasting results.',
};

export const TOP_PRIORITY_SERVICES: ServiceItem[] = [
  {
    id: 'full-roof-restoration',
    name: 'Full Roof Restorations & Painting / Cleaning',
    category: 'tile-tin',
    isPriority: true,
    badge: 'Top Priority #1',
    tagline: 'Save thousands compared to replacement with a full multi-coat rejuvenation.',
    description:
      'Complete end-to-end roof transformation including deep high-pressure wash, ridge capping re-bedding, premium flexible re-pointing, broken tile replacement, and multi-tier UV-protective membrane painting.',
    details: [
      'High-pressure rotary wash removing all moss, lichen, and oxidised grime',
      'Structural re-bedding with cement mortar & re-pointing with flexible compound',
      'Anti-fungal primer coat + 2 heavy-duty coats of heat-reflective roof membrane',
      'Full 10-year workmanship warranty and post-job clean-up guarantee',
    ],
    materials: 'Tile (Terracotta & Concrete) & Metal/Tin Corrugated Roofs',
    iconName: 'ShieldCheck',
  },
  {
    id: 'roof-repairs',
    name: 'Comprehensive Roof Repairs',
    category: 'tile-tin',
    isPriority: true,
    badge: 'Top Priority #2',
    tagline: 'Permanent, precision fixes for cracked tiles, valleys, flashings and ridgelines.',
    description:
      'Targeted structural restoration addressing broken tiles, damaged valley irons, rusted tin sheets, loose ridge caps, perished lead flashings, and deteriorated storm seals.',
    details: [
      'Pinpoint detection of hidden tile cracks, slippage, and mortar erosion',
      'Heavy-gauge valley iron replacement with storm seals and weep holes',
      'Flexible pointing designed to expand and contract with Australian climate extremes',
      'Re-securing loose tin sheets, screws, and timber batten reinforcement',
    ],
    materials: 'All Tile & Tin Profiles',
    iconName: 'Wrench',
  },
  {
    id: '24-7-leak-detection',
    name: '24/7 Leak Detection & Emergency Repairs',
    category: 'tile-tin',
    isPriority: true,
    badge: '24/7 Rapid Response',
    tagline: 'Emergency storm call-outs and advanced moisture detection day or night.',
    description:
      'Rapid emergency dispatch across local suburbs to locate elusive water entry points, halt internal ceiling damage, and deliver immediate weatherproofing followed by permanent restoration.',
    details: [
      'Round-the-clock emergency team on standby for storms and sudden leaks',
      'Advanced tracing of flashing faults, wind-driven moisture, and capillary action',
      'Immediate emergency tarping, temporary seals, and structural containment',
      'Full insurance report assistance and permanent repairs backed by our warranty',
    ],
    materials: 'Tile, Tin, Flashings & Penetrations',
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
    name: 'Leak Detection & Repairs — 24/7',
    category: 'tile-tin',
    isPriority: true,
    tagline: '24/7 emergency dispatch and tracing.',
    description:
      'Round-the-clock emergency leak tracing using thermal and optical methods to pinpoint hard-to-find entry points.',
    details: ['24/7 emergency callout', 'Ceiling protection', 'Permanent certified repair'],
    iconName: 'Clock',
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
      'Every roof is different, so we provide a free inspection and quote based on the size, condition and work required. Our quotes are upfront and clearly outline what is included, including labour and materials.',
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
    id: 'emergency',
    title: '24/7 Emergency Repairs',
    subtitle: 'Storm damage, ceiling breaches & sudden leaks',
    description:
      'When storms hit and water enters your living spaces or inventory, our emergency response crew arrives rapidly with containment gear and permanent solutions.',
    benefits: ['Rapid local dispatch', 'Immediate tarping & leak sealing', 'Direct insurance claim reports'],
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
    id: 'proj-1',
    title: 'Full Terracotta Tile Restoration & Ridge Re-bedding',
    category: 'Full Roof Restoration',
    location: 'Residential Home',
    roofType: 'Terracotta Tile',
    problem: '30+ years of heavy moss buildup, fractured tiles, and crumbled ridge capping causing ceiling water spots.',
    solution: 'High-pressure rotary wash, replaced 42 broken tiles, full re-bed and flexible re-point, followed by UV gloss glaze.',
    beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    warranty: '10-Year Workmanship Warranty',
  },
  {
    id: 'proj-2',
    title: 'Colorbond Tin Roof Rejuvenation & Thermal Coat',
    category: 'Roof Painting & Sealing',
    location: 'Modern Residence',
    roofType: 'Colorbond / Tin',
    problem: 'Faded and oxidized metal sheeting, corroded screws, and internal heat buildup during hot summer days.',
    solution: 'Pressure washed, treated surface rust with etching primer, replaced 800+ roof screws, applied 2 coats of heat-reflective Monument membrane.',
    beforeImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    warranty: '10-Year Workmanship Warranty',
  },
  {
    id: 'proj-3',
    title: 'Emergency Storm Leak Detection & Valley Replacement',
    category: 'Emergency Leak Detection & Repair',
    location: 'Double Storey Property',
    roofType: 'Concrete Tile',
    problem: 'Sudden gale-force storm cracked hidden valley iron, leaking into upstairs master bedroom ceiling.',
    solution: '24/7 emergency dispatch within 90 minutes, temporary storm seal applied, followed by new heavy-gauge Colorbond valley iron and weep hole installation.',
    beforeImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f3?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    warranty: '10-Year Workmanship Warranty',
  },
];
