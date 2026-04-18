export const waitForFonts = async () => {
  if (typeof document === "undefined") return

  if (document.fonts && document.fonts.ready) {
    await document.fonts.ready
  }
}