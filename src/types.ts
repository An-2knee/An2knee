import type { LucideIcon } from 'lucide-react';

export type Page = 'hero' | 'programming' | 'design' | 'gundam';
export type Theme = 'light' | 'dark';
export type NavPage = Exclude<Page, 'hero'>;

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: LucideIcon;
  color: string;
}

export interface NavItem {
  id: NavPage;
  label: string;
  icon: LucideIcon;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  tags: string[];
  color: string;
}

export interface DesignWork {
  id: number;
  title: string;
  type: string;
  year: string;
  color: string;
  description: string;
}

export interface GundamKit {
  id: number;
  designation: string;
  name: string;
  grade: string;
  scale: string;
  series: string;
  description: string;
  accentColor: string;
  status: 'Completed' | 'WIP';
  color: string;
}
