import type { Metadata } from "next";
import { ThemeToggle } from "../ThemeToggle";

export const metadata: Metadata = {
  title: "DrunKitten Production — Music in the Making",
  description: "The producing face of DrunKitten, built by Darren Khaw.",
  icons: { icon: "/favicon-production-v3.png?v=3", shortcut: "/favicon-production-v3.png?v=3" },
};

function ProductionLogo({ className = "" }: { className?: string }) {
  return <span className={`themeWord wordProduction ${className}`} aria-hidden="true"><img className="logoLight" src="/dkp-word-black.png" alt=""/><img className="logoDark" src="/dkp-word-white.png" alt=""/></span>;
}

export default function ProductionPage() {
  return <main className="productionPage">
    <nav className="nav" aria-label="DrunKitten Production navigation">
      <a className="productionNavBrand" href="/production" aria-label="DrunKitten Production home"><ProductionLogo/></a>
      <div className="navLinks"><a href="/">DrunKitten</a><a href="/se-lab">S&amp;E LAB</a><a href="https://darrenk.drunkitten.xyz">Darren</a><ThemeToggle/><a className="languageSwitch" href="/zh/production" lang="zh-CN">中文</a></div>
    </nav>

    <section className="productionHero" id="top">
      <div className="productionRings" aria-hidden="true"><i/><i/><i/></div>
      <div className="productionHeroCopy"><p className="eyebrow"><span/> The producing face of DrunKitten</p><ProductionLogo className="productionHeroLogo"/><h1>Music begins<br/><em>before it is ready.</em></h1><p>A space for learning, experimenting, and shaping original sound with Darren Khaw.</p><div className="heroActions"><a className="button primary" href="#vision">See the vision ↗</a><a className="button secondary" href="https://darrenk.drunkitten.xyz">Meet Darren</a></div></div>
      <div className="productionDeck"><div className="deckTop"><span><i/> LEARNING SESSION</span></div><div className="deckDisc"><span>DK</span></div><div className="deckMeta"><strong>Original music</strong><span>Coming soon</span></div></div>
    </section>

    <section className="productionVision section" id="vision"><div><p className="kicker">01 · The vision</p><h2>Learning the craft.<br/>Building a sound.</h2></div><div className="visionCopy"><p>DrunKitten Production is the music-production branch of DrunKitten. It documents Darren&apos;s progress as he learns how songs are written, arranged, recorded, and produced.</p><div className="visionGrid"><article><b>01</b><h3>Learn</h3><p>Develop production skills through practice.</p></article><article><b>02</b><h3>Experiment</h3><p>Explore vocals, arrangements, and new ideas.</p></article><article><b>03</b><h3>Release</h3><p>Share original music when it is ready.</p></article></div></div></section>

    <section className="productionCredits section" id="credits"><div className="creditHeadline"><p className="kicker">02 · Future credits</p><h2>Two names.<br/>One growing sound.</h2><span>COMING SOON</span></div><div className="largeCredits"><article><small>VOCALS</small><a href="https://darrenk.drunkitten.xyz">Darren Khaw ↗</a></article><article><small>PRODUCER</small><strong>DrunKitten Production<br/>&amp; Darren Khaw</strong></article></div></section>

    <section className="productionNote section"><ProductionLogo/><div><p className="kicker">03 · Current status</p><h2>Still learning—and that is part of the story.</h2><p>No releases are being promised yet. This page is a home for what DrunKitten Production will become as Darren&apos;s skills and sound develop.</p></div></section>

    <footer className="productionFooter"><a href="/" aria-label="DrunKitten home"><ProductionLogo/></a><div className="brandFooterCopy"><p>DrunKitten Production · Music in the making</p><nav className="brandContactLinks" aria-label="Contact DrunKitten Production"><a href="mailto:darrenkhaw@drunkitten.xyz">Email</a><a href="https://discord.gg/QxKMNTXUke" target="_blank" rel="noreferrer">Discord ↗</a></nav></div><a href="#top">Back to top ↑</a><small>© {new Date().getFullYear()} Darren Khaw · Independent creative project</small></footer>
  </main>;
}
