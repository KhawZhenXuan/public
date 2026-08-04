import type { Metadata } from "next";
import { ThemeToggle } from "../ThemeToggle";

export const metadata: Metadata = {
  title: "DrunKitten — 音频服务与音乐创作",
  description: "DrunKitten 是 Darren Khaw 的独立创意空间，包含 S&E LAB 音频服务及正在发展的 DrunKitten Production。",
  icons: { icon: "/favicon-drunkitten-v3.png?v=3", shortcut: "/favicon-drunkitten-v3.png?v=3" },
};

const Arrow = () => <span aria-hidden="true">↗</span>;

function ThemeLogo({ className = "" }: { className?: string }) {
  return <span className={`themeLogo ${className}`} aria-hidden="true"><img className="logoLight" src="/drunkitten-black-mark.png" alt=""/><img className="logoDark" src="/drunkitten-white-mark.png" alt=""/></span>;
}

function ThemeWord({ person = false, className = "" }: { person?: boolean; className?: string }) {
  const name = person ? "darren-khaw" : "drunkitten-word";
  return <span className={`themeWord ${person ? "wordDarren" : "wordDrunkitten"} ${className}`} aria-hidden="true"><img className="logoLight" src={`/${name}-black.png`} alt=""/><img className="logoDark" src={`/${name}-white.png`} alt=""/></span>;
}

export default function ChineseHome() {
  return <main lang="zh-CN">
    <nav className="nav" aria-label="主导航"><a className="wordmark brandLockup" href="#top" aria-label="DrunKitten 首页"><ThemeLogo/><ThemeWord/></a><div className="navLinks"><a href="/zh/se-lab">S&amp;E LAB</a><a href="/zh/production">音乐制作</a><a href="https://darrenk.drunkitten.xyz/zh">Darren</a><ThemeToggle/><a className="languageSwitch" href="/" lang="en">EN</a></div></nav>

    <section className="hero" id="top"><div className="heroBackdrop" aria-hidden="true"><i/><i/><i/></div><div className="heroContent"><p className="eyebrow"><span/> 独立创意工作室 · 由 Darren Khaw 创立</p><h1>声音，清晰分离。<br/><em>创意，无限放大。</em></h1><p className="heroCopy">DrunKitten 是汇集音频服务、创意实验与未来音乐作品的创意空间。</p><div className="heroActions"><a className="button primary" href="/zh/se-lab">探索 S&amp;E LAB <Arrow/></a><a className="button secondary" href="#family">认识我们的创意体系</a></div></div><div className="heroLogoPanel"><ThemeLogo className="heroLogo"/><div className="nowPlaying"><span className="pulse"/><div><small>创意状态</small><strong>让每一段声音变得更好</strong></div></div></div></section>

    <section className="family section" id="family"><div className="sectionIntro"><p className="kicker">01 · 创意体系</p><h2>一个主品牌。<br/>两个创意分支。</h2></div><div className="tree"><article className="parentCard"><div className="cardTop"><ThemeLogo className="cardLogo"/><span className="status active"><i/> 主品牌</span></div><div><h3>DrunKitten</h3><p>我们所有创意项目的核心形象。</p></div><small>由 Darren Khaw 创立并拥有</small></article><div className="connector" aria-hidden="true"/><div className="branches"><article className="branchCard activeBranch"><img className="seBranchLogo" src="/s-and-e-lab-mark.png" alt="S&E LAB"/><div><p className="status active"><i/> 现已开放</p><h3>S&amp;E LAB</h3><p>声音与编辑实验室</p></div><a href="/zh/se-lab">探索实验室 <Arrow/></a></article><article className="branchCard comingBranch"><ThemeLogo className="branchLogo"/><div><p className="status soon"><i/> 开发中</p><h3>DrunKitten Production</h3><p>DrunKitten 的音乐制作分支。</p></div><a href="/zh/production">看看未来计划 <Arrow/></a></article></div></div></section>

    <section className="services section" id="services"><div className="servicesCopy"><img className="seServiceLogo" src="/s-and-e-lab-logo.png" alt="S&E LAB — 声音与编辑"/><p className="kicker">02 · S&amp;E LAB</p><h2>为你需要的声音<br/>腾出更多空间。</h2><p>S&amp;E LAB 是 DrunKitten 的线上音频服务，专注于为创作者、练习、剪辑及新创意分离歌曲中的人声与伴奏。</p><div className="serviceTags"><span>移除人声</span><span>提取伴奏</span><span>线上交付</span></div></div><div className="beforeAfter" aria-label="人声分离示意图"><div className="panelHeader"><span className="panelDots"><i/><i/><i/></span><small>S&amp;E LAB · 音频分离器</small></div><div className="audioPanel"><span>原始混音</span><strong className="audioFileLabel">源音频</strong><small>人声 + 音乐</small></div><div className="process"><span>分离</span><i>↓</i></div><div className="audioPanel output"><span>S&amp;E 输出</span><strong className="audioFileLabel">已分离文件</strong><small>纯伴奏</small></div></div></section>

    <section className="production section"><div className="prodVisual"><span className="orbit orbitOne"/><span className="orbit orbitTwo"/><ThemeLogo className="prodLogo"/><span className="prodLabel">DrunKitten Production</span></div><div className="prodCopy"><p className="kicker">03 · 下一步</p><span className="comingPill">即将推出</span><h2>公开学习。<br/>用心制作。</h2><p>DrunKitten Production 是下一章节——Darren 在学习演唱与音乐制作的过程中，为未来原创音乐建立的空间。</p><div className="creditCard"><div><span>演唱</span><strong>Darren Khaw</strong></div><div><span>制作</span><strong>DrunKitten Production<br/>&amp; Darren Khaw</strong></div></div></div></section>

    <section className="about section" id="about"><div className="profileCard"><div className="profileBanner"/><img className="profilePhoto" src="/darren-khaw-profile.png" alt="Darren Khaw 演唱"/><span className="onlineDot"/><ThemeWord person className="darrenSignature"/><small>创办人 · 创作者 · 音乐制作学习者</small><p>今天建立实用的音频服务，同时学习创造明天的音乐。</p></div><div className="aboutCopy"><p className="kicker">04 · 品牌背后</p><h2>你好，我是 Darren。</h2><p className="lead">我是 DrunKitten 背后的创办人——建立实用的音频服务，同时学习制作未来的音乐。</p><a className="button secondary profileLink" href="https://darrenk.drunkitten.xyz/zh">认识 Darren Khaw <Arrow/></a></div></section>

    <footer><a className="footerBrand brandLockup" href="#top" aria-label="DrunKitten 首页"><ThemeLogo/><ThemeWord/></a><div className="brandFooterCopy"><p>音频服务与正在成长的音乐创作。</p><nav className="brandContactLinks" aria-label="联系 DrunKitten"><a href="mailto:darrenkhaw@drunkitten.xyz">电子邮件</a><a href="https://discord.gg/QxKMNTXUke" target="_blank" rel="noreferrer">Discord ↗</a></nav></div><a href="#top">返回顶部 ↑</a><small>© {new Date().getFullYear()} Darren Khaw · 独立创意项目</small></footer>
  </main>;
}
