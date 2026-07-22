/**
 * Single project card — thumbnail placeholder, title, description, tech tags, links.
 */
export default function ProjectCard({ project }) {
  const { title, description, tech, liveUrl, demoUrl, githubUrl, accent } = project

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-codryn-border bg-codryn-surface transition hover:border-codryn-accent/40">
      {/* Placeholder thumbnail — replace with real images later via project.image */}
      <div
        className="relative aspect-[16/10] overflow-hidden"
        style={{
          background: `linear-gradient(145deg, ${accent}33 0%, #111113 55%, #0a0a0b 100%)`,
        }}
      >
        <div
          className="absolute inset-0 opacity-40 transition duration-500 group-hover:scale-105"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 40%, ${accent}55, transparent 55%)`,
          }}
        />
        <div className="absolute inset-0 flex items-end p-5">
          <span className="font-display text-2xl font-semibold tracking-tight text-white/90">
            {title}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="flex-1 text-sm leading-relaxed text-codryn-muted">{description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {tech.map((tag) => (
            <li
              key={tag}
              className="rounded border border-codryn-border bg-codryn-elevated px-2 py-0.5 text-xs font-medium text-codryn-muted"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-3 border-t border-codryn-border pt-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-codryn-accent transition hover:brightness-125"
            >
              Live demo →
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-codryn-muted transition hover:text-codryn-text"
            >
              Watch demo →
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-codryn-muted transition hover:text-codryn-text"
            >
              GitHub →
            </a>
          )}
          {!liveUrl && !demoUrl && !githubUrl && (
            <span className="text-sm text-codryn-muted/70">Case study on request</span>
          )}
        </div>
      </div>
    </article>
  )
}
