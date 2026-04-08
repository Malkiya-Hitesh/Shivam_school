'use client'

export function waitForFontsReady() {
  if (typeof document === 'undefined') {
    return Promise.resolve()
  }

  if (document.fonts && typeof document.fonts.ready?.then === 'function') {
    return document.fonts.ready
  }

  return Promise.resolve()
}
