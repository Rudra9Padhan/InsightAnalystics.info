// FIX: Import React to provide the 'React' namespace for types like React.ReactNode.
import React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string[];
}

export interface PortfolioItem {
  id: number;
  category: 'Analytics' | 'Development' | 'Marketing' | '3D Elevation';
  imageUrl: string;
  title: string;
  description: string;
  result: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

export interface TeamMember {
  imageUrl?: string;
  logoText?: string;
  name: string;
  role: string;
  bio: string;
}