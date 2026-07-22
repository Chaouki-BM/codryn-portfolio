import ScrollReveal from './ScrollReveal'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

/**
 * Projects grid — sourced from data/projects.js for easy updates.
 */
export default function Projects() {
  return (
    <section id="work" className="border-t border-codryn-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <ScrollReveal>
          <p className="font-display text-sm font-medium uppercase tracking-[0.18em] text-codryn-accent">
            Work
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-codryn-text sm:text-4xl">
            Selected projects
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-codryn-muted">
            Real products across web, mobile, and AI — from learning and recruitment to fitness
            and project management.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={Math.min(index * 0.06, 0.3)}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
