export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'agent' | 'artist';
}

export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  result: string;
  imagePrompt: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
}
