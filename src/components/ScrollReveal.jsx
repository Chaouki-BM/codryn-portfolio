import { motion, useReducedMotion } from 'framer-motion'

/**
 * Reusable scroll reveal — fades and slides content up when it enters the viewport.
 */
export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  y = 28,
}) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
