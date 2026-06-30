import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const themeStorageKey = 'jacky-portfolio-theme'

function isTheme(value: string | null): value is Theme {
  return value === 'light' || value === 'dark'
}

function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getStoredTheme(): Theme | null {
  const storedTheme = localStorage.getItem(themeStorageKey)

  return isTheme(storedTheme) ? storedTheme : null
}

function getPreferredTheme(): Theme {
  return getStoredTheme() ?? getSystemTheme()
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getPreferredTheme)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
      if (!getStoredTheme()) {
        setTheme(event.matches ? 'dark' : 'light')
      }
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange)

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange)
    }
  }, [])

  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={theme === 'dark'}
      onClick={() => {
        localStorage.setItem(themeStorageKey, nextTheme)
        setTheme(nextTheme)
      }}
    >
      <span className="theme-toggle__knob" aria-hidden="true">
        <span className="theme-toggle__icon">{theme === 'dark' ? 'D' : 'L'}</span>
      </span>
    </button>
  )
}
