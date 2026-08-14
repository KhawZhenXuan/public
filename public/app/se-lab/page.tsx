import type { Metadata } from "next";
import { ThemeToggle } from "../ThemeToggle";

export const metadata: Metadata = {
  title: "S&E LAB â€” Vocal Removal & Audio Separation",
  description: "S&E LAB is DrunKitten's online audio service for vocal removal and instrumental extraction.",
  icons: { icon: "/favicon-se-lab-v3.png?v=3", shortcut: "/favicon-se-lab-v3.png?v=3" },
};

const Arrow = () => <span aria-hidden="true">â†—</span>;

function DrunKittenWordmark() {
  return (
    <span className="themeWord wordDrunkitten seParentLogo" aria-hidden="true">
      <img className="logoLight" src="/drunkitten-word-black.png" alt="" />
      <img className="logoDark" src="/drunkitten-word-white.png" alt="" />
    </span>
  );
}

function SELabWordmark() {
  return (
    <span className="themeWord wordSELab seFooterWord" aria-hidden="true">
      <img className="logoLight" src="/se-lab-word-black.png" alt="" />
      <img className="logoDark" src="/se-lab-word-white.png" alt="" />
    </span>
  );
}

export default function SELabPage() {
  return (
    <main className="sePage">
      <nav className="nav" aria-label="S&E LAB navigation">
        <a className="seNavBrand" href="/se-lab" aria-label="S&E LAB home"><img src="/s-and-e-lab-mark.png" alt="" /><SELabWordmark /></a>
        <div className="navLinks">
          <a href="/">DrunKitten</a><a href="/production">Production</a><a href="https://darrenk.drunkitten.com">Darren</a><ThemeToggle /><a className="languageSwitch" href="/zh/se-lab" lang="zh-CN">ä¸­æ–‡</a>
        </div>
      </nav>

      <section className="seHero" id="top">
        <div className="seHeroGlow" aria-hidden="true"><i/><i/></div>
        <div className="seHeroCopy">
          <p className="eyebrow"><span /> A DrunKitten creative service</p>
          <h1>Hear what was<br /><em>hiding inside.</em></h1>
          <p>Vocal removal and instrumental extraction for creators, practice, edits, and ideas that need room to breathe.</p>
          <div className="heroActions"><a className="button primary" href="#services">Explore services <Arrow /></a><a className="button secondary" href="#process">How it works</a></div>
        </div>
        <div className="seHeroCard">
          <span className="seStatus"><i/> LAB ONLINE</span>
          <img src="/s-and-e-lab-logo.png" alt="S&E LAB â€” Sound & Edit" />
        </div>
      </section>

      <section className="seServices section" id="services">
        <div className="sectionIntro"><p className="kicker">01 Â· Services</p><h2>Separate the mix.<br />Keep the possibilities.</h2></div>
        <div className="seServiceGrid">
          <article><span className="seServiceIcon">V</span><small>01</small><h3>Vocal removal</h3><p>Reduce or remove the lead vocal to create an instrumental-style version for practice, performance, or edits.</p><span className="seTag">Instrumental output</span></article>
          <article><span className="seServiceIcon">M</span><small>02</small><h3>Instrumental extraction</h3><p>Separate the music bed from the vocal so you can focus on the arrangement, study the track, or build something new.</p><span className="seTag">Music-only output</span></article>
          <article className="seServiceNote"><span className="seServiceIcon">â†—</span><small>03</small><h3>Online delivery</h3><p>Send the song digitally and receive the separated result onlineâ€”simple, focused, and made for individual projects.</p><span className="seTag">Available now</span></article>
        </div>
      </section>

      <section className="seProcess section" id="process">
        <div className="seProcessCopy"><p className="kicker">02 Â· The process</p><h2>From one track<br />to two new paths.</h2><p>S&amp;E LAB takes a finished song and separates its main vocal content from the music underneath.</p></div>
        <div className="seSteps">
          <article><span>1</span><div><h3>Send your song</h3><p>Provide the audio you want separated.</p></div></article>
          <article><span>2</span><div><h3>The LAB separates it</h3><p>The vocal and musical elements are processed into distinct outputs.</p></div></article>
          <article><span>3</span><div><h3>Receive your files</h3><p>Get the results online, ready for your next use.</p></div></article>
        </div>
      </section>

      <section className="seUseCases section">
        <p className="kicker">03 Â· Made for</p>
        <div className="seMarquee"><span>Practice</span><i/> <span>Performance</span><i/> <span>Remixes</span><i/> <span>Edits</span><i/> <span>Study</span></div>
      </section>

      <section className="seAbout section" id="about-lab">
        <div className="seAboutLogo"><img src="/s-and-e-lab-mark.png" alt="S&E LAB" /></div>
        <div><p className="kicker">04 Â· Part of the family</p><h2>Built inside DrunKitten.</h2><p>S&amp;E LAB is the active audio-service branch of DrunKitten, created and operated by Darren Khaw.</p><a className="button secondary" href="/">Meet DrunKitten <Arrow /></a></div>
      </section>

      <footer className="seFooter"><div className="seFooterIdentity"><a className="seFooterBrand" href="/se-lab" aria-label="S&E LAB home"><img src="/s-and-e-lab-mark.png" alt=""/><SELabWordmark /></a><a className="seFooterBy" href="/" aria-label="DrunKitten home"><span>by</span><DrunKittenWordmark /></a></div><div className="brandFooterCopy"><p>Sound &amp; Editing LAB Â· Online audio services</p><nav className="brandContactLinks" aria-label="Contact S&E LAB"><a href="mailto:darrenkhaw@drunkitten.com">Email</a><a href="https://discord.gg/QxKMNTXUke" target="_blank" rel="noreferrer">Discord â†—</a></nav></div><a href="#top">Back to top â†‘</a><small>Â© {new Date().getFullYear()} Darren Khaw Â· Independent creative project</small></footer>
    </main>
  );
}
