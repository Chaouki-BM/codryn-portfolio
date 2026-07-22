import { company } from '../data/company'
import Logo from './Logo'

/** Simple social / contact icon links for the footer */
function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
      <path d="M6.5 4.5h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A14.5 14.5 0 0 1 4.5 6.5a2 2 0 0 1 2-2z" />
    </svg>
  )
}

/**
 * Site footer — logo, copyright, contact icons.
 */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-codryn-border bg-codryn-surface/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-3">
          <Logo className="h-8 w-auto" alt="" />
          <div>
            <p className="font-display font-semibold text-codryn-text">{company.name}</p>
            <p className="text-xs text-codryn-muted">
              © {year} {company.name}. All rights reserved.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={company.socials.email}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-codryn-border text-codryn-muted transition hover:border-codryn-accent/50 hover:text-codryn-accent"
            aria-label="Email Codryn"
          >
            <MailIcon className="h-5 w-5" />
          </a>
          <a
            href={company.phoneHref}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-codryn-border text-codryn-muted transition hover:border-codryn-accent/50 hover:text-codryn-accent"
            aria-label="Call Codryn"
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
          {company.socials.github && (
            <a
              href={company.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-codryn-muted hover:text-codryn-accent"
            >
              GitHub
            </a>
          )}
          {company.socials.linkedin && (
            <a
              href={company.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-codryn-muted hover:text-codryn-accent"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}
