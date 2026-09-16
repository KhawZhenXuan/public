import type { Metadata } from "next";
import { AchievementCard } from "../AchievementCard";
import { ThemeToggle } from "../ThemeToggle";
import { listAchievements } from "../../db/content";

export const metadata: Metadata = {
  title: "Achievements â€” Darren Khaw",
  description: "Singing competition achievements and stage milestones from Darren Khaw.",
};

function DarrenLogo() {
  return <span className="themeWord wordDarren" aria-hidden="true"><img className="logoLight" src="/darren-khaw-black.png" alt=""/><img className="logoDark" src="/darren-khaw-white.png" alt=""/></span>;
}

export default async function AchievementsPage() {
  const achievements = await listAchievements();

  return <main className="darrenPage achievementsArchivePage">
    <nav className="nav darrenStandaloneNav" aria-label="Darren Khaw navigation"><a className="darrenNavBrand" href="/" aria-label="Darren Khaw home"><DarrenLogo/></a><div className="navLinks"><ThemeToggle/><a className="languageSwitch" href="/zh/achievements" lang="zh-CN">ä¸­æ–‡</a></div></nav>
    <header className="achievementsArchiveHero" id="top"><a className="archiveBack" href="/">â† Back to portfolio</a><p className="kicker">Darren Khaw Â· Achievements</p><h1>Singing competition<br/>achievements.</h1><p>Competition experiences, performances, and results from my journey on stage.</p></header>
    <section className="achievementsArchiveContent" aria-label="Achievement list">{achievements.map((achievement) => <AchievementCard achievement={achievement} key={achievement.id}/>)}</section>
    <footer className="darrenFooter standaloneFooter"><a href="/"><DarrenLogo/></a><nav className="darrenSiteLinks" aria-label="DrunKitten network"><a href="https://drunkitten.com">DrunKitten</a><a href="https://drunkitten.com/se-lab">S&amp;E LAB</a><a href="https://drunkitten.com/production">Production</a></nav><a href="#top">Back to top â†‘</a><small>Â© {new Date().getFullYear()} Darren Khaw Â· Student</small></footer>
  </main>;
}
