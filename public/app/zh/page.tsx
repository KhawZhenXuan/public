import type { Metadata } from "next";
import { ThemeToggle } from "../ThemeToggle";

export const metadata: Metadata = {
  title: "DrunKitten â€” éŸ³é¢‘æœåŠ¡ä¸ŽéŸ³ä¹åˆ›ä½œ",
  description: "DrunKitten æ˜¯ Darren Khaw çš„ç‹¬ç«‹åˆ›æ„ç©ºé—´ï¼ŒåŒ…å« S&E LAB éŸ³é¢‘æœåŠ¡åŠæ­£åœ¨å‘å±•çš„ DrunKitten Productionã€‚",
  icons: { icon: "/favicon-drunkitten-v3.png?v=3", shortcut: "/favicon-drunkitten-v3.png?v=3" },
};

const Arrow = () => <span aria-hidden="true">â†—</span>;

function ThemeLogo({ className = "" }: { className?: string }) {
  return <span className={`themeLogo ${className}`} aria-hidden="true"><img className="logoLight" src="/drunkitten-black-mark.png" alt=""/><img className="logoDark" src="/drunkitten-white-mark.png" alt=""/></span>;
}

function ThemeWord({ person = false, className = "" }: { person?: boolean; className?: string }) {
  const name = person ? "darren-khaw" : "drunkitten-word";
  return <span className={`themeWord ${person ? "wordDarren" : "wordDrunkitten"} ${className}`} aria-hidden="true"><img className="logoLight" src={`/${name}-black.png`} alt=""/><img className="logoDark" src={`/${name}-white.png`} alt=""/></span>;
}

export default function ChineseHome() {
  return <main lang="zh-CN">
    <nav className="nav" aria-label="ä¸»å¯¼èˆª"><a className="wordmark brandLockup" href="#top" aria-label="DrunKitten é¦–é¡µ"><ThemeLogo/><ThemeWord/></a><div className="navLinks"><a href="/zh/se-lab">S&amp;E LAB</a><a href="/zh/production">éŸ³ä¹åˆ¶ä½œ</a><a href="https://darrenk.drunkitten.com/zh">Darren</a><ThemeToggle/><a className="languageSwitch" href="/" lang="en">EN</a></div></nav>

    <section className="hero" id="top"><div className="heroBackdrop" aria-hidden="true"><i/><i/><i/></div><div className="heroContent"><p className="eyebrow"><span/> ç‹¬ç«‹åˆ›æ„å·¥ä½œå®¤ Â· ç”± Darren Khaw åˆ›ç«‹</p><h1>å£°éŸ³ï¼Œæ¸…æ™°åˆ†ç¦»ã€‚<br/><em>åˆ›æ„ï¼Œæ— é™æ”¾å¤§ã€‚</em></h1><p className="heroCopy">DrunKitten æ˜¯æ±‡é›†éŸ³é¢‘æœåŠ¡ã€åˆ›æ„å®žéªŒä¸Žæœªæ¥éŸ³ä¹ä½œå“çš„åˆ›æ„ç©ºé—´ã€‚</p><div className="heroActions"><a className="button primary" href="/zh/se-lab">æŽ¢ç´¢ S&amp;E LAB <Arrow/></a><a className="button secondary" href="#family">è®¤è¯†æˆ‘ä»¬çš„åˆ›æ„ä½“ç³»</a></div></div><div className="heroLogoPanel"><ThemeLogo className="heroLogo"/><div className="nowPlaying"><span className="pulse"/><div><small>åˆ›æ„çŠ¶æ€</small><strong>è®©æ¯ä¸€æ®µå£°éŸ³å˜å¾—æ›´å¥½</strong></div></div></div></section>

    <section className="family section" id="family"><div className="sectionIntro"><p className="kicker">01 Â· åˆ›æ„ä½“ç³»</p><h2>ä¸€ä¸ªä¸»å“ç‰Œã€‚<br/>ä¸¤ä¸ªåˆ›æ„åˆ†æ”¯ã€‚</h2></div><div className="tree"><article className="parentCard"><div className="cardTop"><ThemeLogo className="cardLogo"/><span className="status active"><i/> ä¸»å“ç‰Œ</span></div><div><h3>DrunKitten</h3><p>æˆ‘ä»¬æ‰€æœ‰åˆ›æ„é¡¹ç›®çš„æ ¸å¿ƒå½¢è±¡ã€‚</p></div><small>ç”± Darren Khaw åˆ›ç«‹å¹¶æ‹¥æœ‰</small></article><div className="connector" aria-hidden="true"/><div className="branches"><article className="branchCard activeBranch"><img className="seBranchLogo" src="/s-and-e-lab-mark.png" alt="S&E LAB"/><div><p className="status active"><i/> çŽ°å·²å¼€æ”¾</p><h3>S&amp;E LAB</h3><p>å£°éŸ³ä¸Žç¼–è¾‘å®žéªŒå®¤</p></div><a href="/zh/se-lab">æŽ¢ç´¢å®žéªŒå®¤ <Arrow/></a></article><article className="branchCard comingBranch"><ThemeLogo className="branchLogo"/><div><p className="status soon"><i/> å¼€å‘ä¸­</p><h3>DrunKitten Production</h3><p>DrunKitten çš„éŸ³ä¹åˆ¶ä½œåˆ†æ”¯ã€‚</p></div><a href="/zh/production">çœ‹çœ‹æœªæ¥è®¡åˆ’ <Arrow/></a></article></div></div></section>

    <section className="services section" id="services"><div className="servicesCopy"><img className="seServiceLogo" src="/s-and-e-lab-logo.png" alt="S&E LAB â€” å£°éŸ³ä¸Žç¼–è¾‘"/><p className="kicker">02 Â· S&amp;E LAB</p><h2>ä¸ºä½ éœ€è¦çš„å£°éŸ³<br/>è…¾å‡ºæ›´å¤šç©ºé—´ã€‚</h2><p>S&amp;E LAB æ˜¯ DrunKitten çš„çº¿ä¸ŠéŸ³é¢‘æœåŠ¡ï¼Œä¸“æ³¨äºŽä¸ºåˆ›ä½œè€…ã€ç»ƒä¹ ã€å‰ªè¾‘åŠæ–°åˆ›æ„åˆ†ç¦»æ­Œæ›²ä¸­çš„äººå£°ä¸Žä¼´å¥ã€‚</p><div className="serviceTags"><span>ç§»é™¤äººå£°</span><span>æå–ä¼´å¥</span><span>çº¿ä¸Šäº¤ä»˜</span></div></div><div className="beforeAfter" aria-label="äººå£°åˆ†ç¦»ç¤ºæ„å›¾"><div className="panelHeader"><span className="panelDots"><i/><i/><i/></span><small>S&amp;E LAB Â· éŸ³é¢‘åˆ†ç¦»å™¨</small></div><div className="audioPanel"><span>åŽŸå§‹æ··éŸ³</span><strong className="audioFileLabel">æºéŸ³é¢‘</strong><small>äººå£° + éŸ³ä¹</small></div><div className="process"><span>åˆ†ç¦»</span><i>â†“</i></div><div className="audioPanel output"><span>S&amp;E è¾“å‡º</span><strong className="audioFileLabel">å·²åˆ†ç¦»æ–‡ä»¶</strong><small>çº¯ä¼´å¥</small></div></div></section>

    <section className="production section"><div className="prodVisual"><span className="orbit orbitOne"/><span className="orbit orbitTwo"/><ThemeLogo className="prodLogo"/><span className="prodLabel">DrunKitten Production</span></div><div className="prodCopy"><p className="kicker">03 Â· ä¸‹ä¸€æ­¥</p><span className="comingPill">å³å°†æŽ¨å‡º</span><h2>å…¬å¼€å­¦ä¹ ã€‚<br/>ç”¨å¿ƒåˆ¶ä½œã€‚</h2><p>DrunKitten Production æ˜¯ä¸‹ä¸€ç« èŠ‚â€”â€”Darren åœ¨å­¦ä¹ æ¼”å”±ä¸ŽéŸ³ä¹åˆ¶ä½œçš„è¿‡ç¨‹ä¸­ï¼Œä¸ºæœªæ¥åŽŸåˆ›éŸ³ä¹å»ºç«‹çš„ç©ºé—´ã€‚</p><div className="creditCard"><div><span>æ¼”å”±</span><strong>Darren Khaw</strong></div><div><span>åˆ¶ä½œ</span><strong>DrunKitten Production<br/>&amp; Darren Khaw</strong></div></div></div></section>

    <section className="about section" id="about"><div className="profileCard"><div className="profileBanner"/><img className="profilePhoto" src="/darren-khaw-profile.png" alt="Darren Khaw æ¼”å”±"/><span className="onlineDot"/><ThemeWord person className="darrenSignature"/><small>åˆ›åŠžäºº Â· åˆ›ä½œè€… Â· éŸ³ä¹åˆ¶ä½œå­¦ä¹ è€…</small><p>ä»Šå¤©å»ºç«‹å®žç”¨çš„éŸ³é¢‘æœåŠ¡ï¼ŒåŒæ—¶å­¦ä¹ åˆ›é€ æ˜Žå¤©çš„éŸ³ä¹ã€‚</p></div><div className="aboutCopy"><p className="kicker">04 Â· å“ç‰ŒèƒŒåŽ</p><h2>ä½ å¥½ï¼Œæˆ‘æ˜¯ Darrenã€‚</h2><p className="lead">æˆ‘æ˜¯ DrunKitten èƒŒåŽçš„åˆ›åŠžäººâ€”â€”å»ºç«‹å®žç”¨çš„éŸ³é¢‘æœåŠ¡ï¼ŒåŒæ—¶å­¦ä¹ åˆ¶ä½œæœªæ¥çš„éŸ³ä¹ã€‚</p><a className="button secondary profileLink" href="https://darrenk.drunkitten.com/zh">è®¤è¯† Darren Khaw <Arrow/></a></div></section>

    <footer><a className="footerBrand brandLockup" href="#top" aria-label="DrunKitten é¦–é¡µ"><ThemeLogo/><ThemeWord/></a><div className="brandFooterCopy"><p>éŸ³é¢‘æœåŠ¡ä¸Žæ­£åœ¨æˆé•¿çš„éŸ³ä¹åˆ›ä½œã€‚</p><nav className="brandContactLinks" aria-label="è”ç³» DrunKitten"><a href="mailto:darrenkhaw@drunkitten.com">ç”µå­é‚®ä»¶</a><a href="https://discord.gg/QxKMNTXUke" target="_blank" rel="noreferrer">Discord â†—</a></nav></div><a href="#top">è¿”å›žé¡¶éƒ¨ â†‘</a><small>Â© {new Date().getFullYear()} Darren Khaw Â· ç‹¬ç«‹åˆ›æ„é¡¹ç›®</small></footer>
  </main>;
}
