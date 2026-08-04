import { ThemeToggle } from "./ThemeToggle";

const Arrow = () => <span aria-hidden="true">↗</span>;

function ThemeLogo({ wordmark = false, className = "" }: { wordmark?: boolean; className?: string }) {
  const suffix = wordmark ? "wordmark" : "mark";
  return (
    <span className={`themeLogo ${className}`} aria-hidden="true">
      <img className="logoLight" src={`/drunkitten-black-${suffix}.png`} alt="" />
      <img className="logoDark" src={`/drunkitten-white-${suffix}.png`} alt="" />
    </span>
  );
}

function ThemeWord({ person = false, className = "" }: { person?: boolean; className?: string }) {
  const name = person ? "darren-khaw" : "drunkitten-word";
  return (
    <span className={`themeWord ${person ? "wordDarren" : "wordDrunkitten"} ${className}`} aria-hidden="true">
      <img className="logoLight" src={`/${name}-black.png`} alt="" />
      <img className="logoDark" src={`/${name}-white.png`} alt="" />
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="wordmark brandLockup" href="#top" aria-label="DrunKitten home"><ThemeLogo /><ThemeWord /></a>
        <div className="navLinks">
          <a href="/se-lab">S&amp;E LAB</a>
          <a href="/production">Production</a>
          <a href="https://darrenk.drunkitten.xyz">Darren</a>
          <ThemeToggle />
          <a className="languageSwitch" href="/zh" lang="zh-CN">中文</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="heroBackdrop" aria-hidden="true"><i /><i /><i /></div>
        <div className="heroContent">
          <p className="eyebrow"><span /> Independent creative studio · by Darren Khaw</p>
          <h1>Sound, separated.<br /><em>Ideas, amplified.</em></h1>
          <p className="heroCopy">DrunKitten is the creative home for audio services, experiments, and music in the making.</p>
          <div className="heroActions">
            <a className="button primary" href="/se-lab">Discover S&amp;E LAB <Arrow /></a>
            <a className="button secondary" href="#family">Meet the family</a>
          </div>
        </div>
        <div className="heroLogoPanel">
          <ThemeLogo className="heroLogo" />
          <div className="nowPlaying"><span className="pulse" /><div><small>CREATIVE STATUS</small><strong>Making things that sound better</strong></div></div>
        </div>
      </section>

      <section className="family section" id="family">
        <div className="sectionIntro"><p className="kicker">01 · The family</p><h2>One identity.<br />Two creative branches.</h2></div>
        <div className="tree">
          <article className="parentCard">
            <div className="cardTop"><ThemeLogo className="cardLogo" /><span className="status active"><i /> Main identity</span></div>
            <div><h3>DrunKitten</h3><p>The face of everything we create.</p></div>
            <small>Founded &amp; owned by Darren Khaw</small>
          </article>
          <div className="connector" aria-hidden="true" />
          <div className="branches">
            <article className="branchCard activeBranch">
              <img className="seBranchLogo" src="/s-and-e-lab-mark.png" alt="S&E LAB" />
              <div><p className="status active"><i /> Available now</p><h3>S&amp;E LAB</h3><p>Sound &amp; Editing LAB</p></div>
              <a href="/se-lab">Explore the lab <Arrow /></a>
            </article>
            <article className="branchCard comingBranch">
              <ThemeLogo className="branchLogo" />
              <div><p className="status soon"><i /> In development</p><h3>DrunKitten Production</h3><p>The producing face of DrunKitten.</p></div>
              <a href="/production">See what&apos;s next <Arrow /></a>
            </article>
          </div>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="servicesCopy">
          <img className="seServiceLogo" src="/s-and-e-lab-logo.png" alt="S&E LAB — Sound & Editing" />
          <p className="kicker">02 · S&amp;E LAB</p><h2>Make space<br />for the sound<br /><em>you need.</em></h2>
          <p>S&amp;E LAB is DrunKitten&apos;s online audio service, focused on separating vocals from songs for creators, practice, edits, and new ideas.</p>
          <div className="serviceTags"><span>Vocal removal</span><span>Instrumental extraction</span><span>Online delivery</span></div>
        </div>
        <div className="beforeAfter" aria-label="Vocal removal illustration">
          <div className="panelHeader"><span className="panelDots"><i/><i/><i/></span><small>S&amp;E LAB · AUDIO SEPARATOR</small></div>
          <div className="audioPanel"><span>Original mix</span><strong className="audioFileLabel">Source audio</strong><small>Vocals + Music</small></div>
          <div className="process"><span>Separate</span><i>↓</i></div>
          <div className="audioPanel output"><span>S&amp;E output</span><strong className="audioFileLabel">Separated file</strong><small>Instrumental</small></div>
        </div>
      </section>

      <section className="production section">
        <div className="prodVisual"><span className="orbit orbitOne"/><span className="orbit orbitTwo"/><ThemeLogo className="prodLogo" /><span className="prodLabel">DrunKitten Production</span></div>
        <div className="prodCopy">
          <p className="kicker">03 · What&apos;s next</p><span className="comingPill">Coming soon</span>
          <h2>Learning in public.<br />Producing with purpose.</h2>
          <p>DrunKitten Production is the next chapter—a space for original music as Darren grows as a vocalist and producer.</p>
          <div className="creditCard"><div><span>Vocals</span><strong>Darren Khaw</strong></div><div><span>Producer</span><strong>DrunKitten Production<br />&amp; Darren Khaw</strong></div></div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="profileCard"><div className="profileBanner"/><img className="profilePhoto" src="/darren-khaw-profile.png" alt="Darren Khaw singing"/><span className="onlineDot"/><ThemeWord person className="darrenSignature" /><small>Owner · Creator · Learning Producer</small><p>Building useful audio services today and the music of tomorrow.</p></div>
        <div className="aboutCopy"><p className="kicker">04 · Behind the name</p><h2>Hi, I&apos;m Darren.</h2><p className="lead">I&apos;m the person behind DrunKitten—building useful audio services today while learning to produce the music of tomorrow.</p><a className="button secondary profileLink" href="https://darrenk.drunkitten.xyz">Meet Darren Khaw <Arrow /></a></div>
      </section>

      <footer>
        <a className="footerBrand brandLockup" href="#top" aria-label="DrunKitten home"><ThemeLogo /><ThemeWord /></a>
        <div className="brandFooterCopy"><p>Audio services &amp; music in the making.</p><nav className="brandContactLinks" aria-label="Contact DrunKitten"><a href="mailto:darrenkhaw@drunkitten.xyz">Email</a><a href="https://discord.gg/QxKMNTXUke" target="_blank" rel="noreferrer">Discord ↗</a></nav></div><a href="#top">Back to top ↑</a>
        <small>© {new Date().getFullYear()} Darren Khaw · Independent creative project</small>
      </footer>
    </main>
  );
}
