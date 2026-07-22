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
  const src = variant === 'light' ? '/logo.png' : '/logo-on-dark.png'

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
