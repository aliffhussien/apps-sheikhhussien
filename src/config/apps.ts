export interface AppConfig {
  id: string
  name: string
  title: string
  description: string
  icon: string
  path: string
  color: string
  status: 'live' | 'beta' | 'coming-soon'
  version: string
}

export const APPS: AppConfig[] = [
  {
    id: 'norhan',
    name: 'Norhan Therapy',
    title: '🧠 Norhan Therapy',
    description: 'Clinical speech development app for autistic children. Personalized games, speech recognition, and progress tracking.',
    icon: '🧠',
    path: '/norhan',
    color: '#10B981',
    status: 'live',
    version: '6.0'
  },
  {
    id: 'cwc-commerce',
    name: 'CWC Recipes',
    title: '🍳 CWC Recipes',
    description: 'Recipe automation platform with WhatsApp bot integration and Ebook sales.',
    icon: '🍳',
    path: '/cwc',
    color: '#F59E0B',
    status: 'coming-soon',
    version: '1.0'
  },
  {
    id: 'mien-studio',
    name: 'Mien Video Studio',
    title: '🎬 Mien Studio',
    description: 'Automated video generation platform for TikTok, Instagram Reels, and YouTube Shorts.',
    icon: '🎬',
    path: '/mien',
    color: '#8B5CF6',
    status: 'coming-soon',
    version: '1.0'
  }
]

const getNorhanURL = () => {
  if (import.meta.env.VITE_NORHAN_URL) {
    return import.meta.env.VITE_NORHAN_URL
  }
  // Production: Cloudflare Tunnel
  if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
    return 'https://61be13ad-7d10-4541-b770-a42e4284694d.cfargotunnel.com'
  }
  // Development: Local server
  return 'http://localhost:8888'
}

export const API_ENDPOINTS = {
  norhan: {
    base: getNorhanURL(),
    tts: '/api/tts',
    log: '/api/log',
    stats: '/api/stats'
  },
  cwc: {
    base: 'https://api.cwc.plus',
    search: '/search',
    recipes: '/recipes',
    checkout: '/checkout'
  }
}
