import type { Metadata } from "next";
import { ThemeToggle } from "../../ThemeToggle";

export const metadata: Metadata = {
  title: "æˆå°± â€” Darren Khaw",
  description: "Darren Khaw çš„æ­Œå”±æ¯”èµ›æˆå°±ä¸Žèˆžå°é‡Œç¨‹ç¢‘ã€‚",
};

function DarrenLogo() {
  return <span className="themeWord wordDarren" aria-hidden="true"><img className="logoLight" src="/darren-khaw-black.png" alt=""/><img className="logoDark" src="/darren-khaw-white.png" alt=""/></span>;
}

export default function ChineseAchievementsPage() {
  return <main className="darrenPage achievementsArchivePage" lang="zh-CN">
    <nav className="nav darrenStandaloneNav" aria-label="Darren Khaw å¯¼èˆª"><a className="darrenNavBrand" href="/zh" aria-label="Darren Khaw é¦–é¡µ"><DarrenLogo/></a><div className="navLinks"><ThemeToggle/><a className="languageSwitch" href="/achievements" lang="en">EN</a></div></nav>
    <header className="achievementsArchiveHero" id="top"><a className="archiveBack" href="/zh">â† è¿”å›žä¸ªäººä½œå“é›†</a><p className="kicker">Darren Khaw Â· æˆå°±</p><h1>æ­Œå”±æ¯”èµ›<br/>æˆå°±</h1><p>è®°å½•æˆ‘åœ¨èˆžå°ä¸Šçš„æ¯”èµ›ç»åŽ†ã€è¡¨æ¼”ä¸Žæˆç»©ã€‚</p></header>
    <section className="achievementsArchiveContent" aria-label="æˆå°±åˆ—è¡¨"><article className="featuredAchievement"><div className="achievementYear">2025</div><div className="achievementCopy"><p className="achievementType">å›½é™…ä¸­æ–‡æ­Œæ›²å¤§èµ›</p><h3>2025å¹´æ–‡åŒ–ä¸­å›½Â·æ°´ç«‹æ–¹æ¯ä¸­æ–‡æ­Œæ›²å¤§èµ›</h3><p>å‚åŠ 2025å¹´æ–‡åŒ–ä¸­å›½Â·æ°´ç«‹æ–¹æ¯ä¸­æ–‡æ­Œæ›²å¤§èµ›ï¼Œè£èŽ·<strong>å…¨çƒç¬¬19å</strong>åŠ<strong>é“œå¥–</strong>ã€‚</p><div className="achievementResults"><span><small>å…¨çƒæŽ’å</small><b>ç¬¬19å</b></span><span><small>å¥–é¡¹</small><b>é“œå¥–</b></span></div></div><div className="achievementGallery"><figure><img src="/water-cube-2025-stage.jpeg" alt="Darren Khaw å‚ä¸Ž2025å¹´æ–‡åŒ–ä¸­å›½Â·æ°´ç«‹æ–¹æ¯ä¸­æ–‡æ­Œæ›²å¤§èµ›"/></figure><figure><img src="/water-cube-2025-trophy.jpeg" alt="2025å¹´æ–‡åŒ–ä¸­å›½Â·æ°´ç«‹æ–¹æ¯ä¸­æ–‡æ­Œæ›²å¤§èµ›é“œå¥–å¥–æ¯"/></figure><figure><img src="/water-cube-2025-winner.jpeg" alt="Darren Khaw æ‰‹æŒé“œå¥–å¥–æ¯"/></figure></div></article></section>
    <footer className="darrenFooter standaloneFooter"><a href="/zh"><DarrenLogo/></a><nav className="darrenSiteLinks" aria-label="DrunKitten ç½‘ç«™ç½‘ç»œ"><a href="https://drunkitten.com/zh">DrunKitten</a><a href="https://drunkitten.com/zh/se-lab">S&amp;E LAB</a><a href="https://drunkitten.com/zh/production">éŸ³ä¹åˆ¶ä½œ</a></nav><a href="#top">è¿”å›žé¡¶éƒ¨ â†‘</a><small>Â© {new Date().getFullYear()} Darren Khaw Â· å­¦ç”Ÿ</small></footer>
  </main>;
}
