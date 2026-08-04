import type { Metadata } from "next";
import { ThemeToggle } from "../../ThemeToggle";

export const metadata: Metadata = {
  title: "成就 — Darren Khaw",
  description: "Darren Khaw 的歌唱比赛成就与舞台里程碑。",
};

function DarrenLogo() {
  return <span className="themeWord wordDarren" aria-hidden="true"><img className="logoLight" src="/darren-khaw-black.png" alt=""/><img className="logoDark" src="/darren-khaw-white.png" alt=""/></span>;
}

export default function ChineseAchievementsPage() {
  return <main className="darrenPage achievementsArchivePage" lang="zh-CN">
    <nav className="nav darrenStandaloneNav" aria-label="Darren Khaw 导航"><a className="darrenNavBrand" href="/zh" aria-label="Darren Khaw 首页"><DarrenLogo/></a><div className="navLinks"><ThemeToggle/><a className="languageSwitch" href="/achievements" lang="en">EN</a></div></nav>
    <header className="achievementsArchiveHero" id="top"><a className="archiveBack" href="/zh">← 返回个人作品集</a><p className="kicker">Darren Khaw · 成就</p><h1>歌唱比赛<br/>成就</h1><p>记录我在舞台上的比赛经历、表演与成绩。</p></header>
    <section className="achievementsArchiveContent" aria-label="成就列表"><article className="featuredAchievement"><div className="achievementYear">2025</div><div className="achievementCopy"><p className="achievementType">国际中文歌曲大赛</p><h3>2025年文化中国·水立方杯中文歌曲大赛</h3><p>参加2025年文化中国·水立方杯中文歌曲大赛，荣获<strong>全球第19名</strong>及<strong>铜奖</strong>。</p><div className="achievementResults"><span><small>全球排名</small><b>第19名</b></span><span><small>奖项</small><b>铜奖</b></span></div></div><div className="achievementGallery"><figure><img src="/water-cube-2025-stage.jpeg" alt="Darren Khaw 参与2025年文化中国·水立方杯中文歌曲大赛"/></figure><figure><img src="/water-cube-2025-trophy.jpeg" alt="2025年文化中国·水立方杯中文歌曲大赛铜奖奖杯"/></figure><figure><img src="/water-cube-2025-winner.jpeg" alt="Darren Khaw 手持铜奖奖杯"/></figure></div></article></section>
    <footer className="darrenFooter standaloneFooter"><a href="/zh"><DarrenLogo/></a><nav className="darrenSiteLinks" aria-label="DrunKitten 网站网络"><a href="https://drunkitten.xyz/zh">DrunKitten</a><a href="https://drunkitten.xyz/zh/se-lab">S&amp;E LAB</a><a href="https://drunkitten.xyz/zh/production">音乐制作</a></nav><a href="#top">返回顶部 ↑</a><small>© {new Date().getFullYear()} Darren Khaw · 学生</small></footer>
  </main>;
}
