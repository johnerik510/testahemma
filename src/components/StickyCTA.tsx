'use client'

import { useEffect, useState } from 'react'

interface StickyCTAProps {
  product: string
  price: string
  url: string
  text?: string
  label?: string
}

export default function StickyCTA({ product, price, url, text = 'Best\u00e4ll nu', label = 'B\u00e4st i test' }: StickyCTAProps) {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (dismissed) return
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [dismissed])

  if (dismissed || !visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden animate-in slide-in-from-bottom">
      <div className="bg-white border-t border-gray-200 shadow-2xl px-4 py-3 flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-xs text-gray-500 leading-none mb-0.5">{label}</p>
          <p className="text-sm font-bold text-gray-900 truncate">{product}</p>
          <p className="text-xs text-gray-500">{price}</p>
        </div>
        <a
          href={url}
          rel="noopener noreferrer sponsored"
          target="_blank"
          className="flex-shrink-0 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
        >
          {text}
        </a>
        <button onClick={() => setDismissed(true)} className="flex-shrink-0 text-gray-400 hover:text-gray-500 p-1" aria-label="St\u00e4ng">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
        </button>
      </div>
    </div>
  )
}
