// Mock data for courses' data

import type { CourseType } from '@/types';

const courses: CourseType[] = [
  {
    id: 1,
    title: 'Intro to Sonic Smart Contracts',
    description: 'Dive into the intricate details of Sonic.',
    image: '/images/sonic-banner.svg',
    level: 'ADVANCED',
    duration: '67 Hours',
    lectures: '34 Lectures',
  },
  {
    id: 2,
    title: 'Mastering Solidity for EVM Chains',
    description:
      'Learn how to build scalable smart contracts on Ethereum-compatible networks.',
    image: '/images/sonic-banner.svg',
    level: 'INTERMEDIATE',
    duration: '45 Hours',
    lectures: '28 Lectures',
  },
  {
    id: 3,
    title: 'Solana Smart Contracts with Rust',
    description: 'Hands-on approach to building dApps on Solana.',
    image: '/images/sonic-banner.svg',
    level: 'ADVANCED',
    duration: '72 Hours',
    lectures: '40 Lectures',
  },
  {
    id: 4,
    title: 'Blockchain Basics & Web3 Foundations',
    description: 'Understand the core principles behind blockchains.',
    image: '/images/sonic-banner.svg',
    level: 'BEGINNER',
    duration: '20 Hours',
    lectures: '15 Lectures',
  },
  {
    id: 5,
    title: 'Sui Move Programming Essentials',
    description: 'A practical guide to writing contracts in Move for Sui.',
    image: '/images/sonic-banner.svg',
    level: 'INTERMEDIATE',
    duration: '38 Hours',
    lectures: '22 Lectures',
  },
  {
    id: 6,
    title: 'TON Blockchain Smart Contracts',
    description: 'Learn FunC and Tact to deploy on The Open Network.',
    image: '/images/sonic-banner.svg',
    level: 'ADVANCED',
    duration: '60 Hours',
    lectures: '33 Lectures',
  },
  {
    id: 7,
    title: 'DeFi Protocol Design & Security',
    description: 'Build and secure decentralized finance protocols.',
    image: '/images/sonic-banner.svg',
    level: 'ADVANCED',
    duration: '80 Hours',
    lectures: '45 Lectures',
  },
  {
    id: 8,
    title: 'Frontend for Web3: React + Wagmi',
    description: 'Integrating smart contracts with modern React apps.',
    image: '/images/sonic-banner.svg',
    level: 'INTERMEDIATE',
    duration: '25 Hours',
    lectures: '18 Lectures',
  },
  {
    id: 9,
    title: 'NFTs & ERC-721 Deep Dive',
    description: 'From concept to launch: build your first NFT collection.',
    image: '/images/sonic-banner.svg',
    level: 'BEGINNER',
    duration: '15 Hours',
    lectures: '12 Lectures',
  },
  {
    id: 10,
    title: 'Cross-Chain Bridges Explained',
    description: 'Learn the architecture of cross-chain bridges.',
    image: '/images/sonic-banner.svg',
    level: 'INTERMEDIATE',
    duration: '30 Hours',
    lectures: '20 Lectures',
  },
  {
    id: 11,
    title: 'Zero Knowledge Proofs & zk-SNARKs',
    description: 'Master privacy-preserving cryptography.',
    image: '/images/sonic-banner.svg',
    level: 'ADVANCED',
    duration: '55 Hours',
    lectures: '31 Lectures',
  },
  {
    id: 12,
    title: 'Building DAOs with Governance Tokens',
    description: 'Practical guide to deploying decentralized organizations.',
    image: '/images/sonic-banner.svg',
    level: 'INTERMEDIATE',
    duration: '35 Hours',
    lectures: '24 Lectures',
  },
];

export const CourseService = {
  getCourses() {
    return courses;
  },
};
