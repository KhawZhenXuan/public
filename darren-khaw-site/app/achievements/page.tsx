import type { Metadata } from "next";
import { ThemeToggle } from "../ThemeToggle";

export const metadata: Metadata = {
  title: "Achievements — Darren Khaw",
  description: "Singing competition achievements and stage milestones from Darren Khaw.",
};

function DarrenLogo() {
  return <span className="themeWord wordDarren" aria-hidden="true"><img className="logoLight" src="/darren-khaw-black.png" alt=""/><img className="logoDark" src="/darren-khaw-white.png" alt=""/></span>;
}

export default function AchievementsPage() {
  return <main className="darrenPage achievementsArchivePage">
    <nav className="nav darrenStandaloneNav" aria-label="Darren Khaw navigation"><a className="darrenNavBrand" href="/" aria-label="Darren Khaw home"><DarrenLogo/></a><div className="navLinks"><ThemeToggle/><a className="languageSwitch" href="/zh/achievements" lang="zh-CN">中文</a></div></nav>
    <header className="achievementsArchiveHero" id="top"><a className="archiveBack" href="/">← Back to portfolio</a><p className="kicker">Darren Khaw · Achievements</p><h1>Singing competition<br/>achievements.</h1><p>Competition experiences, performances, and results from my journey on stage.</p></header>
    <section className="achievementsArchiveContent" aria-label="Achievement list"><article className="featuredAchievement"><div className="achievementYear">2025</div><div className="achievementCopy"><p className="achievementType">International Chinese singing competition</p><h3>2025 Cultures of China Water Cube Cup Chinese Songs Contest</h3><p>Participated in the 2025 competition, placed <strong>19th globally</strong>, and received the <strong>Bronze Award</strong>.</p><div className="achievementResults"><span><small>Global ranking</small><b>19th</b></span><span><small>Award</small><b>Bronze</b></span></div></div><div className="achievementGallery"><figure><img src="/water-cube-2025-stage.jpeg" alt="Darren Khaw featured at the 2025 Water Cube Cup Chinese Songs Contest"/></figure><figure><img src="/water-cube-2025-trophy.jpeg" alt="2025 Water Cube Cup Bronze Award trophy"/></figure><figure><img src="/water-cube-2025-winner.jpeg" alt="Darren Khaw holding his Bronze Award trophy"/></figure></div></article></section>
    <footer className="darrenFooter standaloneFooter"><a href="/"><DarrenLogo/></a><nav className="darrenSiteLinks" aria-label="DrunKitten network"><a href="https://drunkitten.xyz">DrunKitten</a><a href="https://drunkitten.xyz/se-lab">S&amp;E LAB</a><a href="https://drunkitten.xyz/production">Production</a></nav><a href="#top">Back to top ↑</a><small>© {new Date().getFullYear()} Darren Khaw · Student</small></footer>
  </main>;
}
