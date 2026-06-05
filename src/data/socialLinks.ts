import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
} from 'lucide-react';

import type { SocialLink } from '../types';

export const socialLinks: SocialLink[] = [
  {
    id: 'email',
    label: 'Email',
    url: 'mailto:jananthonyalejo@gmail.com',
    icon: Mail,
    color: '#ea4335',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    url: 'https://www.facebook.com/jan.an2knee',
    icon: Facebook,
    color: '#1877f2',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jan-anthony-alejo-2a117936a/',
    icon: Linkedin,
    color: '#0a66c2',
  },
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/An-2knee',
    icon: Github,
    color: '#333',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    url: 'https://www.instagram.com/jan2knee_/',
    icon: Instagram,
    color: '#e4405f',
  },
];
