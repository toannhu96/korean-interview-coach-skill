import Image from "next/image";
import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardList,
  Download,
  Mail,
  MessageSquareText,
  Mic,
  ShieldCheck,
  Speech,
  UsersRound,
} from "lucide-react";

import { LanguageSwitcher } from "./LanguageSwitcher";
import { Locale, dictionary } from "./i18n";

import { InstallCommand, SkillUsageGuide } from "./InstallCommand";
import { ScrollReveal } from "./ScrollReveal";

type IconName =
  | "kickoff"
  | "building"
  | "practice"
  | "feedback"
  | "shield"
  | "team"
  | "ownership"
  | "person"
  | "chat"
  | "mic"
  | "checklist";

function Icon({ name }: { name: IconName }) {
  const iconProps = { className: "icon", strokeWidth: 2, "aria-hidden": true as const };

  if (name === "kickoff") return <Speech {...iconProps} />;
  if (name === "building") return <Building2 {...iconProps} />;
  if (name === "practice") return <Mic {...iconProps} />;
  if (name === "feedback") return <ClipboardList {...iconProps} />;
  if (name === "shield") return <ShieldCheck {...iconProps} />;
  if (name === "team") return <UsersRound {...iconProps} />;
  if (name === "ownership") return <BadgeCheck {...iconProps} />;
  if (name === "person") return <BadgeCheck {...iconProps} />;
  if (name === "chat") return <MessageSquareText {...iconProps} />;
  return <CheckCircle2 {...iconProps} />;
}

function Logo() {
  return (
    <div className="brand-mark" aria-hidden="true">
      <span />
      <strong>K</strong>
    </div>
  );
}

function LinkedInIcon() {
  return (
    <svg className="brand-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M5.3 7.8H1.9v14h3.4v-14ZM3.6 1.9a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm18.5 12.1c0-4.2-2.2-6.1-5.2-6.1a4.5 4.5 0 0 0-4.1 2.2h-.1V7.8H9.5v14h3.4v-6.9c0-1.8.3-3.6 2.6-3.6 2.2 0 2.2 2.1 2.2 3.7v6.8h3.4v-7.8Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="brand-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 1.8a10.2 10.2 0 0 0-3.2 19.9c.5.1.7-.2.7-.5v-2c-2.9.6-3.5-1.2-3.5-1.2-.4-1.1-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 2.9.8.1-.7.4-1.1.7-1.4-2.3-.3-4.7-1.2-4.7-5.1 0-1.1.4-2.1 1.1-2.8-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 2.8 1.1a9.7 9.7 0 0 1 5.1 0c1.9-1.3 2.8-1.1 2.8-1.1.6 1.4.2 2.5.1 2.8.7.8 1.1 1.7 1.1 2.8 0 4-2.4 4.8-4.7 5.1.4.3.7 1 .7 2v2.8c0 .3.2.6.7.5A10.2 10.2 0 0 0 12 1.8Z" />
    </svg>
  );
}

export function LandingPage({ locale }: { locale: Locale }) {
  const copy = dictionary[locale];

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#coach" aria-label={copy.header.homeLabel}>
          <Logo />
          <span>Korean Interview Coach</span>
        </a>
        <nav className="nav" aria-label={copy.header.navLabel}>
          {copy.header.nav.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a
            className="header-repo-link"
            href="https://github.com/toannhu96/korean-interview-coach-skill"
            target="_blank"
            rel="noreferrer"
            aria-label={copy.footer.githubLabel}
            title={copy.footer.githubLabel}
          >
            <GitHubIcon />
          </a>
          <LanguageSwitcher activeLocale={locale} label={copy.header.languageLabel} />
        </div>
      </header>

      <ScrollReveal>
        <section className="hero section-shell" id="coach">
          <div className="hero-copy">
            <h1>{copy.hero.title}</h1>
            <p>{copy.hero.body}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#install">
                <Download aria-hidden="true" className="button-icon" strokeWidth={2.2} />
                {copy.hero.primaryCta}
              </a>
              <a className="button button-secondary" href="#how-to-use">
                {copy.hero.secondaryCta}
              </a>
            </div>
            <div className="language-support">
              <span aria-hidden="true">✓</span>
              {copy.hero.support}
            </div>
          </div>

          <div className="session-card" aria-label={copy.preview.ariaLabel}>
            <aside className="session-sidebar">
              <div className="sidebar-brand">
                <Logo />
                <span>
                  {copy.preview.brandLines[0]}
                  <br />
                  {copy.preview.brandLines[1]}
                  <br />
                  {copy.preview.brandLines[2]}
                </span>
              </div>
              {copy.preview.sidebar.map((item, index) => (
                <div className={`side-item ${index === 1 ? "active" : ""}`} key={item.label}>
                  <Icon name={item.icon} />
                  <span>{item.label}</span>
                </div>
              ))}
            </aside>

            <div className="session-main">
              <div className="session-top">
                <strong>{copy.preview.sessionTitle}</strong>
                <div>
                  <span>{copy.preview.sessionId}</span>
                  <div className="session-avatar" aria-hidden="true">
                    <Image
                      src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-icon-svg-download-png-456324.png"
                      alt=""
                      width={30}
                      height={30}
                      className="session-avatar-image"
                    />
                  </div>
                </div>
              </div>
              <div className="progress-line" aria-label="Session progress">
                {copy.preview.progress.map((item, index) => (
                  <div className="progress-step" key={item.label}>
                    <span className={index < 2 ? "done" : ""}>{index + 1}</span>
                    <strong>{item.label}</strong>
                    <small>{item.detail}</small>
                  </div>
                ))}
              </div>
              <div className="next-step">
                <div>
                  <span>{copy.preview.nextStepLabel}</span>
                  <h2>{copy.preview.nextStepTitle}</h2>
                  <p>{copy.preview.nextStepBody}</p>
                  <a href="#company-prep">{copy.preview.continueCta}</a>
                </div>
                <div className="company-brief">
                  <strong>{copy.preview.companyBriefTitle}</strong>
                  <ul>
                    {copy.preview.companyBriefItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="logo-tile">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/hyundai.svg`}
                      alt="Hyundai"
                      className="logo-tile-image"
                      width={58}
                      height={30}
                      sizes="76px"
                    />
                  </div>
                </div>
              </div>
              <div className="tip">
                <b>{copy.preview.tipLabel}</b>
                {copy.preview.tipBody}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={60}>
        <section className="fit-strip section-shell" aria-labelledby="fit-title">
          <div className="fit-intro">
            <h2 id="fit-title">{copy.fit.title}</h2>
            <p>{copy.fit.body}</p>
          </div>
          <div className="fit-list">
            {copy.fit.signals.map((signal) => (
              <article className="fit-item" key={signal.title}>
                <Icon name={signal.icon} />
                <div>
                  <h3>{signal.title}</h3>
                  <p>{signal.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={90}>
        <section className="company-prep section-shell" id="company-prep">
          <div className="section-lead">
            <h2>{copy.companyPrep.title}</h2>
            <p>{copy.companyPrep.body}</p>
          </div>
          <dl>
            {copy.companyPrep.items.map((item) => (
              <div key={item.term}>
                <dt>{item.term}</dt>
                <dd>{item.description}</dd>
              </div>
            ))}
          </dl>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={120}>
        <section className="workflow section-shell" id="workflow">
          <div className="section-lead">
            <h2>{copy.workflow.title}</h2>
            <p>{copy.workflow.body}</p>
          </div>
          <div className="workflow-track">
            {copy.workflow.steps.map((item, index) => (
              <article className="workflow-step" key={item.title}>
                <span className={`step-number step-${index + 1}`}>{item.step}</span>
                <div className="workflow-icon">
                  <Icon name={item.icon} />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <strong>{item.label}</strong>
                  <ul>
                    {item.items.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <section className="rubric section-shell" id="rubric">
          <div className="section-lead">
            <h2>{copy.rubric.title}</h2>
            <p>{copy.rubric.body}</p>
          </div>
          <div className="feedback-board">
            <div className="scorecard">
              <span>{copy.rubric.scorecardLabel}</span>
              <div className="overall">
                <strong>87</strong>
                <small>/100</small>
              </div>
              {copy.rubric.metrics.map(([label, value, score]) => (
                <div className="metric" key={label}>
                  <div>
                    <span>{label}</span>
                    <small>{value}</small>
                  </div>
                  <i style={{ width: `${score}%` }} />
                </div>
              ))}
            </div>
            <div className="answer before">
              <span>{copy.rubric.beforeLabel}</span>
              <p>{copy.rubric.beforeAnswer}</p>
              <div className="note">
                <b>{copy.rubric.improvementLabel}</b>
                {copy.rubric.improvementPoints.map((point) => (
                  <span key={point}>{point}</span>
                ))}
              </div>
            </div>
            <div className="answer after">
              <span>{copy.rubric.afterLabel}</span>
              <p>{copy.rubric.afterAnswer}</p>
              <div className="chips">
                <strong>{copy.rubric.feedbackLabel}</strong>
                {copy.rubric.chips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={180}>
        <section className="integrations section-shell" id="install">
          <div className="section-lead">
            <h2>{copy.install.title}</h2>
            <p>{copy.install.body}</p>
          </div>
          <div className="integrations-inner">
            <div className="integration-badges">
              {copy.install.badges.map((agent) => (
                <span className="integration-badge" key={agent}>
                  {agent}
                </span>
              ))}
            </div>
            <InstallCommand
              commandLabel={copy.install.commandLabel}
              command={copy.install.command}
              copyLabel={copy.install.copyLabel}
              copiedLabel={copy.install.copiedLabel}
              footnote={copy.install.footnote}
            />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={205}>
        <section className="skill-usage section-shell" id="how-to-use">
          <div className="section-lead">
            <h2>{copy.install.guideTitle}</h2>
            <p>{copy.install.guideBody}</p>
          </div>
          <SkillUsageGuide
            copiedLabel={copy.install.copiedLabel}
            copyLabel={copy.install.copyLabel}
            steps={copy.install.steps}
          />
        </section>
      </ScrollReveal>

      <ScrollReveal delay={230}>
        <section className="closing">
          <div className="section-shell closing-inner">
            <div>
              <h2>{copy.closing.title}</h2>
              <p>{copy.closing.body}</p>
            </div>
            <div className="closing-actions">
              <a className="button button-primary" href="#install">
                <Download aria-hidden="true" className="button-icon" strokeWidth={2.2} />
                {copy.closing.primaryCta}
              </a>
            </div>
            <div className="proof">
              {copy.closing.proof.map((item) => (
                <span key={item.label}>
                  <b>{item.value}</b>
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <div className="footer-brand">
            <Logo />
            <div>
              <strong>Korean Interview Coach</strong>
              <p>{copy.footer.line1}</p>
            </div>
          </div>
          <div className="footer-meta">
            <span className="footer-contacts-label">{copy.footer.contactsLabel}</span>
            <a href="mailto:toanbk21096@gmail.com">
              <Mail size={14} aria-hidden="true" />
              {copy.footer.emailLabel}
            </a>
            <a
              href="https://linkedin.com/in/toannhu"
              target="_blank"
              rel="noreferrer"
              aria-label={copy.footer.linkedinLabel}
              title={copy.footer.linkedinLabel}
            >
              <LinkedInIcon />
              {copy.footer.linkedinLabel}
            </a>
            <a
              href="https://github.com/toannhu96"
              target="_blank"
              rel="noreferrer"
              aria-label={copy.footer.githubLabel}
              title={copy.footer.githubLabel}
            >
              <GitHubIcon />
              {copy.footer.githubLabel}
            </a>
          </div>
          <p className="footer-copyright">{copy.footer.copyright}</p>
        </div>
      </footer>
    </main>
  );
}
