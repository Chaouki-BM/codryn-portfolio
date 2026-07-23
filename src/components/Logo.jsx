/**
 * Codryn logo mark.
 * Uses the recolored asset (charcoal/white + electric blue #0078F8 like the original PNG).
 *
 * @param {'dark' | 'light'} variant - dark = light mark for dark backgrounds (default)
 */
export default function Logo({
  variant = 'dark',
  className = 'h-8 w-auto',
  alt = 'Codryn',
}) {
  // Respect Vite `base` (e.g. /REPO_NAME/ on GitHub Pages)
  const base = import.meta.env.BASE_URL
  const src =
    variant === 'light' ? `${base}logo.png` : `${base}logo-on-dark.png`

  return (
    <img
      src={src}
      alt={alt}
      className={`object-contain ${className}`}
      width={120}
      height={138}
      decoding="async"
    />
  )
}
