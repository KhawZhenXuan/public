import type { Metadata } from "next";
import { ThemeToggle } from "../../ThemeToggle";

export const metadata: Metadata = { title: "DrunKitten Production â€” éŸ³ä¹åˆ›ä½œä¹‹æ—…", description: "DrunKitten çš„éŸ³ä¹åˆ¶ä½œåˆ†æ”¯ï¼Œç”± Darren Khaw å»ºç«‹ã€‚", icons: { icon: "/favicon-production-v3.png?v=3", shortcut: "/favicon-production-v3.png?v=3" } };

function ProductionLogo({ className = "" }: { className?: string }) { return <span className={`themeWord wordProduction ${className}`} aria-hidden="true"><img className="logoLight" src="/dkp-word-black.png" alt=""/><img className="logoDark" src="/dkp-word-white.png" alt=""/></span>; }

export default function ChineseProductionPage() {
  return <main className="productionPage" lang="zh-CN">
    <nav className="nav" aria-label="DrunKitten Production å¯¼èˆª"><a className="productionNavBrand" href="/zh/production" aria-label="DrunKitten Production é¦–é¡µ"><ProductionLogo/></a><div className="navLinks"><a href="/zh">DrunKitten</a><a href="/zh/se-lab">S&amp;E LAB</a><a href="https://darrenk.drunkitten.com/zh">Darren</a><ThemeToggle/><a className="languageSwitch" href="/production" lang="en">EN</a></div></nav>

    <section className="productionHero" id="top"><div className="productionRings" aria-hidden="true"><i/><i/><i/></div><div className="productionHeroCopy"><p className="eyebrow"><span/> DrunKitten çš„éŸ³ä¹åˆ¶ä½œåˆ†æ”¯</p><ProductionLogo className="productionHeroLogo"/><h1>éŸ³ä¹çš„èµ·ç‚¹ï¼Œ<br/><em>æ—©äºŽå‡†å¤‡å®Œæˆçš„é‚£ä¸€åˆ»ã€‚</em></h1><p>è¿™æ˜¯ Darren Khaw å­¦ä¹ ã€å®žéªŒå¹¶å¡‘é€ åŽŸåˆ›å£°éŸ³çš„ç©ºé—´ã€‚</p><div className="heroActions"><a className="button primary" href="#vision">äº†è§£æ„¿æ™¯ â†—</a><a className="button secondary" href="https://darrenk.drunkitten.com/zh">è®¤è¯† Darren</a></div></div><div className="productionDeck"><div className="deckTop"><span><i/> å­¦ä¹ é˜¶æ®µ</span></div><div className="deckDisc"><span>DK</span></div><div className="deckMeta"><strong>åŽŸåˆ›éŸ³ä¹</strong><span>å³å°†æŽ¨å‡º</span></div></div></section>

    <section className="productionVision section" id="vision"><div><p className="kicker">01 Â· æ„¿æ™¯</p><h2>å­¦ä¹ åˆ›ä½œæŠ€å·§ã€‚<br/>å»ºç«‹è‡ªå·±çš„å£°éŸ³ã€‚</h2></div><div className="visionCopy"><p>DrunKitten Production æ˜¯ DrunKitten çš„éŸ³ä¹åˆ¶ä½œåˆ†æ”¯ï¼Œè®°å½• Darren å­¦ä¹ æ­Œæ›²åˆ›ä½œã€ç¼–æ›²ã€å½•éŸ³ä¸Žåˆ¶ä½œçš„æˆé•¿è¿‡ç¨‹ã€‚</p><div className="visionGrid"><article><b>01</b><h3>å­¦ä¹ </h3><p>é€šè¿‡æŒç»­ç»ƒä¹ åŸ¹å…»éŸ³ä¹åˆ¶ä½œèƒ½åŠ›ã€‚</p></article><article><b>02</b><h3>å®žéªŒ</h3><p>æŽ¢ç´¢äººå£°ã€ç¼–æ›²ä¸Žå„ç§æ–°æƒ³æ³•ã€‚</p></article><article><b>03</b><h3>å‘å¸ƒ</h3><p>åœ¨ä½œå“å‡†å¤‡å¥½æ—¶åˆ†äº«åŽŸåˆ›éŸ³ä¹ã€‚</p></article></div></div></section>

    <section className="productionCredits section" id="credits"><div className="creditHeadline"><p className="kicker">02 Â· æœªæ¥ç½²å</p><h2>ä¸¤ä¸ªåå­—ã€‚<br/>ä¸€ä¸ªä¸æ–­æˆé•¿çš„å£°éŸ³ã€‚</h2><span>å³å°†æŽ¨å‡º</span></div><div className="largeCredits"><article><small>æ¼”å”±</small><a href="https://darrenk.drunkitten.com/zh">Darren Khaw â†—</a></article><article><small>åˆ¶ä½œ</small><strong>DrunKitten Production<br/>&amp; Darren Khaw</strong></article></div></section>

    <section className="productionNote section"><ProductionLogo/><div><p className="kicker">03 Â· å½“å‰çŠ¶æ€</p><h2>ä»åœ¨å­¦ä¹ â€”â€”è€Œè¿™æ­£æ˜¯æ•…äº‹çš„ä¸€éƒ¨åˆ†ã€‚</h2><p>ç›®å‰è¿˜ä¸ä¼šæ‰¿è¯ºä»»ä½•å‘å¸ƒæ—¥æœŸã€‚è¿™ä¸ªé¡µé¢è®°å½• DrunKitten Production éšç€ Darren çš„æŠ€å·§ä¸Žå£°éŸ³ä¸æ–­æˆé•¿ï¼Œé€æ­¥æˆä¸ºæœªæ¥çš„æ¨¡æ ·ã€‚</p></div></section>

    <footer className="productionFooter"><a href="/zh" aria-label="DrunKitten é¦–é¡µ"><ProductionLogo/></a><div className="brandFooterCopy"><p>DrunKitten Production Â· æ­£åœ¨æˆé•¿çš„éŸ³ä¹åˆ›ä½œ</p><nav className="brandContactLinks" aria-label="è”ç³» DrunKitten Production"><a href="mailto:darrenkhaw@drunkitten.com">ç”µå­é‚®ä»¶</a><a href="https://discord.gg/QxKMNTXUke" target="_blank" rel="noreferrer">Discord â†—</a></nav></div><a href="#top">è¿”å›žé¡¶éƒ¨ â†‘</a><small>Â© {new Date().getFullYear()} Darren Khaw Â· ç‹¬ç«‹åˆ›æ„é¡¹ç›®</small></footer>
  </main>;
}
