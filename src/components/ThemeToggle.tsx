'use client'

import { useEffect, useState } from 'react'

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle('dark', dark)
  window.localStorage.setItem('theme', dark ? 'dark' : 'light')
}

export function ThemeToggle({ invert = false }: { invert?: boolean }) {
  const [isDark, setIsDark] = useState<boolean | null>(null)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggle = () => {
    const next = !(isDark ?? true)
    applyTheme(next)
    setIsDark(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={
        invert
          ? 'group flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-white/10'
          : 'group flex h-10 w-10 items-center justify-center rounded-full bg-raised-2 transition hover:bg-edge-strong'
      }
    >
      {/* Sun — shown in dark mode (click for light) */}
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={`hidden h-5 w-5 dark:block ${
          invert
            ? 'fill-white group-hover:fill-zinc-200'
            : 'fill-ink-muted group-hover:fill-ink'
        }`}
      >
        <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-14a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1Zm0 16a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Zm9-7a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1ZM5 12a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm13.66 6.66a1 1 0 0 1-1.41 0l-.71-.71a1 1 0 0 1 1.41-1.41l.71.7a1 1 0 0 1 0 1.42ZM7.46 7.46a1 1 0 0 1-1.42 0l-.7-.71a1 1 0 0 1 1.41-1.41l.71.7a1 1 0 0 1 0 1.42Zm11.2-2.12a1 1 0 0 1 0 1.41l-.7.71a1 1 0 1 1-1.42-1.42l.71-.7a1 1 0 0 1 1.41 0ZM7.46 16.54a1 1 0 0 1 0 1.41l-.71.71a1 1 0 0 1-1.41-1.41l.7-.71a1 1 0 0 1 1.42 0Z" />
      </svg>
      {/* Moon — shown in light mode (click for dark) */}
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={`h-5 w-5 dark:hidden ${
          invert
            ? 'fill-white group-hover:fill-zinc-200'
            : 'fill-ink-muted group-hover:fill-ink'
        }`}
      >
        <path d="M21.53 15.93a.75.75 0 0 0-.9-.99 7.5 7.5 0 0 1-9.57-9.57.75.75 0 0 0-.99-.9 9 9 0 1 0 11.46 11.46Z" />
      </svg>
    </button>
  )
}
