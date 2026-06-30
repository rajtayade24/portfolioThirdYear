import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function TechTag({ tag = "Tech", index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -4, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="group relative overflow-hidden rounded-full p-[1px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 opacity-0 blur-md transition duration-300 group-hover:opacity-25" />

      <span className="relative flex items-center gap-2 rounded-full border border-white/10 bg-[var(--card)]/90 px-4 py-2 text-sm font-medium text-[var(--fg)] backdrop-blur-xl transition-all duration-300 group-hover:border-transparent group-hover:bg-[var(--card)] group-hover:shadow-[0_16px_40px_rgba(59,130,246,0.12)]">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/15 to-cyan-400/10 text-blue-500 ring-1 ring-blue-500/15 transition duration-300 group-hover:scale-110 group-hover:rotate-6">
          <Sparkles className="h-3 w-3" />
        </span>
        <span>{tag}</span>
      </span>
    </motion.div>
  )
}
