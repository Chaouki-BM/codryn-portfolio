import ScrollReveal from './ScrollReveal'
import { company } from '../data/company'

/**
 * About section — company description (edit copy in data/company.js).
 */
export default function About() {
  return (
    <section id="about" className="border-t border-codryn-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <ScrollReveal>
          <p className="font-display text-sm font-medium uppercase tracking-[0.18em] text-codryn-accent">
            About
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-codryn-text sm:text-4xl">
            Building products that ship
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid gap-10 md:grid-cols-12 md:gap-12">
          <ScrollReveal className="md:col-span-7" delay={0.08}>
            <p className="text-lg leading-relaxed text-codryn-muted">{company.about}</p>
            <p className="mt-5 text-lg leading-relaxed text-codryn-muted">
              {company.aboutExtra}
            </p>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-5" delay={0.16}>
            <dl className="space-y-6 border-l border-codryn-border pl-6">
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-codryn-muted">
                  Focus
                </dt>
                <dd className="mt-1 font-display text-lg font-medium text-codryn-text">
                  Web · Mobile · AI
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-codryn-muted">
                  Based in
                </dt>
                <dd className="mt-1 font-display text-lg font-medium text-codryn-text">
                  {company.location}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-codryn-muted">
                  Contact
                </dt>
                <dd className="mt-1">
                  <a
                    href={company.socials.email}
                    className="font-display text-lg font-medium text-codryn-accent transition hover:brightness-125"
                  >
                    {company.email}
                  </a>
                </dd>
              </div>
            </dl>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
