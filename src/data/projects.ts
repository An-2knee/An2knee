import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    name: 'Neural Style Transfer Engine',
    description:
      'Real-time artistic style transfer using deep neural networks. Converts photos into artwork in under 2 seconds.',
    tags: ['Python', 'TensorFlow', 'CUDA'],
    color: '#3b82f6',
  },
  {
    id: 2,
    name: 'Distributed Task Scheduler',
    description:
      'Fault-tolerant distributed system for scheduling and executing millions of tasks across node clusters.',
    tags: ['Go', 'Redis', 'Docker'],
    color: '#10b981',
  },
  {
    id: 3,
    name: '3D Visualization Dashboard',
    description:
      'Interactive WebGL-powered dashboard for visualizing complex multi-dimensional datasets.',
    tags: ['React', 'Three.js', 'WebGL'],
    color: '#f59e0b',
  },
  {
    id: 4,
    name: 'Smart Contract Auditor',
    description:
      'Automated vulnerability scanner for Ethereum smart contracts with pattern-based threat detection.',
    tags: ['Solidity', 'Rust', 'ML'],
    color: '#8b5cf6',
  },
  {
    id: 5,
    name: 'Real-time Collaboration Platform',
    description:
      'Multi-user document editing with CRDT-based conflict resolution and presence indicators.',
    tags: ['TypeScript', 'WebSocket', 'Y.js'],
    color: '#4f46e5',
  },
  {
    id: 6,
    name: 'Quantum Circuit Simulator',
    description:
      'Browser-based quantum computing simulator with gate visualization and state tracking.',
    tags: ['JavaScript', 'Qiskit', 'WebGL'],
    color: '#06b6d4',
  },
];
