import { motion, useReducedMotion } from 'framer-motion'
import { company } from '../data/company'
import Logo from './Logo'

/**
 * Hero — brand-first first viewport: logo, name, tagline, CTAs.
 */
export default function Hero() {
  const reduceMotion = useReducedMotion()

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.12 },
    },
  }

  const item = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-radial-glow pt-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-codryn-accent/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div variants={item} className="mb-8 flex items-center gap-4">
            <Logo className="h-14 w-auto sm:h-16" alt="" />
            <p className="font-display text-sm font-medium uppercase tracking-[0.2em] text-codryn-accent">
              Software studio
            </p>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-bold tracking-tight text-codryn-text sm:text-6xl md:text-7xl"
          >
            {company.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-codryn-muted sm:text-xl"
          >
            {company.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-codryn-accent px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Get in touch
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-md border border-codryn-border bg-codryn-elevated/50 px-6 py-3 text-sm font-semibold text-codryn-text transition hover:border-codryn-accent/50 hover:bg-codryn-elevated"
            >
              View work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
