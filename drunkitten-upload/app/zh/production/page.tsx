import type { Metadata } from "next";
import { ThemeToggle } from "../../ThemeToggle";

export const metadata: Metadata = { title: "DrunKitten Production — 音乐创作之旅", description: "DrunKitten 的音乐制作分支，由 Darren Khaw 建立。", icons: { icon: "/favicon-production-v3.png?v=3", shortcut: "/favicon-production-v3.png?v=3" } };

function ProductionLogo({ className = "" }: { className?: string }) { return <span className={`themeWord wordProduction ${className}`} aria-hidden="true"><img className="logoLight" src="/dkp-word-black.png" alt=""/><img className="logoDark" src="/dkp-word-white.png" alt=""/></span>; }

export default function ChineseProductionPage() {
  return <main className="productionPage" lang="zh-CN">
    <nav className="nav" aria-label="DrunKitten Production 导航"><a className="productionNavBrand" href="/zh/production" aria-label="DrunKitten Production 首页"><ProductionLogo/></a><div className="navLinks"><a href="/zh">DrunKitten</a><a href="/zh/se-lab">S&amp;E LAB</a><a href="https://darrenk.drunkitten.xyz/zh">Darren</a><ThemeToggle/><a className="languageSwitch" href="/production" lang="en">EN</a></div></nav>

    <section className="productionHero" id="top"><div className="productionRings" aria-hidden="true"><i/><i/><i/></div><div className="productionHeroCopy"><p className="eyebrow"><span/> DrunKitten 的音乐制作分支</p><ProductionLogo className="productionHeroLogo"/><h1>音乐的起点，<br/><em>早于准备完成的那一刻。</em></h1><p>这是 Darren Khaw 学习、实验并塑造原创声音的空间。</p><div className="heroActions"><a className="button primary" href="#vision">了解愿景 ↗</a><a className="button secondary" href="https://darrenk.drunkitten.xyz/zh">认识 Darren</a></div></div><div className="productionDeck"><div className="deckTop"><span><i/> 学习阶段</span></div><div className="deckDisc"><span>DK</span></div><div className="deckMeta"><strong>原创音乐</strong><span>即将推出</span></div></div></section>

    <section className="productionVision section" id="vision"><div><p className="kicker">01 · 愿景</p><h2>学习创作技巧。<br/>建立自己的声音。</h2></div><div className="visionCopy"><p>DrunKitten Production 是 DrunKitten 的音乐制作分支，记录 Darren 学习歌曲创作、编曲、录音与制作的成长过程。</p><div className="visionGrid"><article><b>01</b><h3>学习</h3><p>通过持续练习培养音乐制作能力。</p></article><article><b>02</b><h3>实验</h3><p>探索人声、编曲与各种新想法。</p></article><article><b>03</b><h3>发布</h3><p>在作品准备好时分享原创音乐。</p></article></div></div></section>

    <section className="productionCredits section" id="credits"><div className="creditHeadline"><p className="kicker">02 · 未来署名</p><h2>两个名字。<br/>一个不断成长的声音。</h2><span>即将推出</span></div><div className="largeCredits"><article><small>演唱</small><a href="https://darrenk.drunkitten.xyz/zh">Darren Khaw ↗</a></article><article><small>制作</small><strong>DrunKitten Production<br/>&amp; Darren Khaw</strong></article></div></section>

    <section className="productionNote section"><ProductionLogo/><div><p className="kicker">03 · 当前状态</p><h2>仍在学习——而这正是故事的一部分。</h2><p>目前还不会承诺任何发布日期。这个页面记录 DrunKitten Production 随着 Darren 的技巧与声音不断成长，逐步成为未来的模样。</p></div></section>

    <footer className="productionFooter"><a href="/zh" aria-label="DrunKitten 首页"><ProductionLogo/></a><div className="brandFooterCopy"><p>DrunKitten Production · 正在成长的音乐创作</p><nav className="brandContactLinks" aria-label="联系 DrunKitten Production"><a href="mailto:darrenkhaw@drunkitten.xyz">电子邮件</a><a href="https://discord.gg/QxKMNTXUke" target="_blank" rel="noreferrer">Discord ↗</a></nav></div><a href="#top">返回顶部 ↑</a><small>© {new Date().getFullYear()} Darren Khaw · 独立创意项目</small></footer>
  </main>;
}
