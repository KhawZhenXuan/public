import type { Metadata } from "next";
import { ThemeToggle } from "../../ThemeToggle";

export const metadata: Metadata = { title: "S&E LAB — 人声移除与音频分离", description: "S&E LAB 是 DrunKitten 提供人声移除与伴奏提取的线上音频服务。", icons: { icon: "/favicon-se-lab-v3.png?v=3", shortcut: "/favicon-se-lab-v3.png?v=3" } };
const Arrow = () => <span aria-hidden="true">↗</span>;
function DrunKittenWordmark(){return <span className="themeWord wordDrunkitten seParentLogo" aria-hidden="true"><img className="logoLight" src="/drunkitten-word-black.png" alt=""/><img className="logoDark" src="/drunkitten-word-white.png" alt=""/></span>}
function SELabWordmark(){return <span className="themeWord wordSELab seFooterWord" aria-hidden="true"><img className="logoLight" src="/se-lab-word-black.png" alt=""/><img className="logoDark" src="/se-lab-word-white.png" alt=""/></span>}

export default function ChineseSELabPage(){return <main className="sePage" lang="zh-CN">
  <nav className="nav" aria-label="S&E LAB 导航"><a className="seNavBrand" href="/zh/se-lab" aria-label="S&E LAB 首页"><img src="/s-and-e-lab-mark.png" alt=""/><SELabWordmark/></a><div className="navLinks"><a href="/zh">DrunKitten</a><a href="/zh/production">音乐制作</a><a href="https://darrenk.drunkitten.xyz/zh">Darren</a><ThemeToggle/><a className="languageSwitch" href="/se-lab" lang="en">EN</a></div></nav>

  <section className="seHero" id="top"><div className="seHeroGlow" aria-hidden="true"><i/><i/></div><div className="seHeroCopy"><p className="eyebrow"><span/> DrunKitten 创意服务</p><h1>听见曾经<br/><em>隐藏其中的声音。</em></h1><p>为创作者、练习、剪辑与新创意提供人声移除及伴奏提取服务，让声音拥有更多空间。</p><div className="heroActions"><a className="button primary" href="#services">探索服务 <Arrow/></a><a className="button secondary" href="#process">运作方式</a></div></div><div className="seHeroCard"><span className="seStatus"><i/> 实验室在线</span><img src="/s-and-e-lab-logo.png" alt="S&E LAB — 声音与编辑"/></div></section>

  <section className="seServices section" id="services"><div className="sectionIntro"><p className="kicker">01 · 服务</p><h2>分离混音。<br/>保留无限可能。</h2></div><div className="seServiceGrid"><article><span className="seServiceIcon">V</span><small>01</small><h3>移除人声</h3><p>降低或移除主要人声，制作适合练习、表演或剪辑使用的伴奏版本。</p><span className="seTag">伴奏输出</span></article><article><span className="seServiceIcon">M</span><small>02</small><h3>提取伴奏</h3><p>将音乐与人声分开，让你专注于编曲、研究歌曲或发展新的创意。</p><span className="seTag">纯音乐输出</span></article><article className="seServiceNote"><span className="seServiceIcon">↗</span><small>03</small><h3>线上交付</h3><p>在线提交歌曲并接收分离结果——简单、专注，并适合个人项目。</p><span className="seTag">现已开放</span></article></div></section>

  <section className="seProcess section" id="process"><div className="seProcessCopy"><p className="kicker">02 · 流程</p><h2>从一条音轨<br/>走向两个新方向。</h2><p>S&amp;E LAB 会将完成的歌曲分离成主要人声与底层音乐。</p></div><div className="seSteps"><article><span>1</span><div><h3>发送歌曲</h3><p>提供你希望分离的音频。</p></div></article><article><span>2</span><div><h3>实验室进行分离</h3><p>人声与音乐元素会被处理成不同的输出文件。</p></div></article><article><span>3</span><div><h3>接收文件</h3><p>在线取得结果，为下一次使用做好准备。</p></div></article></div></section>

  <section className="seUseCases section"><p className="kicker">03 · 适合用途</p><div className="seMarquee"><span>练习</span><i/><span>表演</span><i/><span>混音</span><i/><span>剪辑</span><i/><span>研究</span></div></section>

  <section className="seAbout section" id="about-lab"><div className="seAboutLogo"><img src="/s-and-e-lab-mark.png" alt="S&E LAB"/></div><div><p className="kicker">04 · 创意体系的一部分</p><h2>诞生于 DrunKitten。</h2><p>S&amp;E LAB 是 DrunKitten 目前活跃的音频服务分支，由 Darren Khaw 创立并运营。</p><a className="button secondary" href="/zh">认识 DrunKitten <Arrow/></a></div></section>

  <footer className="seFooter"><div className="seFooterIdentity"><a className="seFooterBrand" href="/zh/se-lab" aria-label="S&E LAB 首页"><img src="/s-and-e-lab-mark.png" alt=""/><SELabWordmark/></a><a className="seFooterBy" href="/zh" aria-label="DrunKitten 首页"><span>by</span><DrunKittenWordmark/></a></div><div className="brandFooterCopy"><p>声音与编辑实验室 · 线上音频服务</p><nav className="brandContactLinks" aria-label="联系 S&E LAB"><a href="mailto:darrenkhaw@drunkitten.xyz">电子邮件</a><a href="https://discord.gg/QxKMNTXUke" target="_blank" rel="noreferrer">Discord ↗</a></nav></div><a href="#top">返回顶部 ↑</a><small>© {new Date().getFullYear()} Darren Khaw · 独立创意项目</small></footer>
</main>}
