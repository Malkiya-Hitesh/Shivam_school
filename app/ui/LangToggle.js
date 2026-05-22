'use client'
import { useLanguage } from '@/app/context/LanguageContext'

export default function LangToggle() {
  const { lang, toggle } = useLanguage()
  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[var(--primary)] text-[var(--primary)] text-sm font-semibold hover:bg-[var(--primary)] hover:text-white transition-all duration-200"
      aria-label="Toggle language"
    >
      <span>{lang === 'en' ? 'ગુ' : 'EN'}</span>
    </button>
  )
}