export interface ServiceItem {
  id: string;
  name: string;
  category: 'tile-tin' | 'exterior';
  isPriority?: boolean;
  tagline?: string;
  description: string;
  details: string[];
  materials?: string;
  iconName: string;
  badge?: string;
  imageUrl?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  tip?: string;
}

export interface IdealCustomerCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  iconName: string;
}

export interface ProjectShowcase {
  id: string;
  title: string;
  category: string;
  location: string;
  problem: string;
  solution: string;
  roofType: 'Concrete Tile' | 'Terracotta Tile' | 'Colorbond / Tin' | 'Concrete Tile & Tin';
  beforeImage: string;
  afterImage: string;
  warranty: string;
}

export interface QuoteRequestFormData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  roofType: string;
  servicesNeeded: string[];
  propertyType: string;
  urgency: string;
  notes: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  reviewCount: string;
  date: string;
  rating: number;
  highlight?: string;
  content: string;
  serviceMentioned?: string;
  hasPhoto?: boolean;
  likesCount?: number;
  badge?: string;
}
