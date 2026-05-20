export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

export interface StatCard {
  value: string;
  label: string;
  change?: string;
  trend?: "up" | "down";
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  rating: number;
  source?: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  href: string;
  tags?: string[];
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}
