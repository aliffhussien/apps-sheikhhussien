import React from 'react'
import { motion } from 'framer-motion'
import { APPS } from '../config/apps'

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-slate to-navy text-white overflow-hidden">
      {/* Background blur elements */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-emerald/10 rounded-full blur-3xl opacity-20" />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-emerald/10 rounded-full blur-3xl opacity-20" />

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-white/10 backdrop-blur-glass">
          <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald to-white bg-clip-text text-transparent">
              Sheikh Hussien Apps
            </h1>
            <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition border border-white/20">
              🌙 Dark
            </button>
          </div>
        </header>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-5xl font-bold mb-6">Ecosystem of Modern Apps</h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl">
              Innovative applications designed for clinical excellence, culinary automation, and creative content generation.
            </p>
          </motion.div>
        </section>

        {/* Apps Grid */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {APPS.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Glassmorphic Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
                
                <div className="relative bg-white/5 backdrop-blur-glass border border-white/10 rounded-2xl p-8 hover:border-emerald/50 transition cursor-pointer overflow-hidden group">
                  {/* Gradient accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-300" />

                  <div className="relative z-10">
                    <div className="text-5xl mb-4">{app.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{app.name}</h3>
                    <p className="text-white/70 mb-6 text-sm leading-relaxed">{app.description}</p>

                    {/* Status badge */}
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        app.status === 'live' 
                          ? 'bg-emerald/20 text-emerald border border-emerald/50'
                          : 'bg-white/10 text-white/70 border border-white/20'
                      }`}>
                        {app.status === 'live' ? '✓ Live' : app.status === 'beta' ? 'β Beta' : 'Coming Soon'}
                      </span>
                      <span className="text-xs text-white/50">v{app.version}</span>
                    </div>

                    {/* CTA Button */}
                    <motion.a
                      href={app.status === 'live' ? app.path : '#'}
                      whileHover={{ scale: 1.05 }}
                      className={`inline-block mt-6 px-4 py-2 rounded-lg font-semibold transition ${
                        app.status === 'live'
                          ? 'bg-emerald text-navy hover:bg-emerald/90'
                          : 'bg-white/10 text-white/50 cursor-not-allowed'
                      }`}
                    >
                      {app.status === 'live' ? 'Launch App →' : 'Coming Soon'}
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 backdrop-blur-glass">
          <div className="max-w-7xl mx-auto px-6 py-8 text-center text-white/50 text-sm">
            <p>© 2026 Sheikh Hussien. All applications designed for excellence.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
