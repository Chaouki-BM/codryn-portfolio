import ScrollReveal from './ScrollReveal'
import { services } from '../data/services'

/**
 * Services — what Codryn offers.
 */
export default function Services() {
  return (
    <section id="services" className="border-t border-codryn-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <ScrollReveal>
          <p className="font-display text-sm font-medium uppercase tracking-[0.18em] text-codryn-accent">
            Services
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-codryn-text sm:text-4xl">
            What we build
          </h2>
        </ScrollReveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.06} className="h-full">
              <li className="h-full border-l-2 border-codryn-accent/70 bg-codryn-surface/60 py-6 pl-5 pr-4 transition hover:bg-codryn-elevated/40 sm:pl-6">
                <h3 className="font-display text-xl font-semibold text-codryn-text">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-codryn-muted">
                  {service.description}
                </p>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
