import type { Metadata } from "next";
import { ThemeToggle } from "../ThemeToggle";

export const metadata: Metadata = {
  title: "Darren Khaw — 学生个人作品集",
  description: "Darren Khaw 的个人作品集，一名来自马来西亚的 18 岁学生。",
  icons: { icon: "/favicon-darren-v4.png?v=4", shortcut: "/favicon-darren-v4.png?v=4" },
};

function DarrenLogo({ className = "" }: { className?: string }) { return <span className={`themeWord wordDarren ${className}`} aria-hidden="true"><img className="logoLight" src="/darren-khaw-black.png" alt=""/><img className="logoDark" src="/darren-khaw-white.png" alt=""/></span>; }

export default function DarrenChinesePage(){return <main className="darrenPage" lang="zh-CN">
  <nav className="nav darrenStandaloneNav" aria-label="Darren Khaw 导航"><a className="darrenNavBrand" href="/zh" aria-label="Darren Khaw 首页"><DarrenLogo/></a><div className="navLinks"><ThemeToggle/><a className="languageSwitch" href="/" lang="en">EN</a></div></nav>

  <section className="darrenHero" id="top"><div className="darrenGrid" aria-hidden="true"/><div className="darrenHeroCopy"><p className="eyebrow"><span/> 学生</p><DarrenLogo className="darrenHeroLogo"/><h1>寻找自己的声音。<br/><em>一步一步，走上每个舞台。</em></h1><p>我是 Darren Khaw，一名来自马来西亚的 18 岁学生。我参加歌唱比赛，并在每一次表演中继续成长。</p><div className="heroActions"><a className="button primary" href="#achievements">查看我的成就 ↓</a></div></div><div className="darrenIdentityCard"><img className="identityPhoto" src="/darren-khaw-profile.png" alt="Darren Khaw 在舞台上演唱"/><h2>Darren Khaw</h2><div className="identityNames"><p><span>全名</span>Khaw Zhen Xuan</p><p><span>中文姓名</span>许振轩</p></div><p>马来西亚 · 18 岁 · 学生</p><div className="identityStatus"><i/> 不断学习与成长</div></div></section>

  <section className="darrenAchievements section" id="achievements"><div className="achievementIntro"><p className="kicker">01 · 成就</p><h2>歌唱比赛<br/>成就</h2><p>记录我在舞台上的比赛经历、表演与成绩。</p><a className="button primary achievementArchiveButton" href="/zh/achievements">查看所有成就 →</a></div><article className="featuredAchievement"><div className="achievementYear">2025</div><div className="achievementCopy"><p className="achievementType">国际中文歌曲大赛</p><h3>2025年文化中国·水立方杯中文歌曲大赛</h3><p>参加2025年文化中国·水立方杯中文歌曲大赛，荣获<strong>全球第19名</strong>及<strong>铜奖</strong>。</p><div className="achievementResults"><span><small>全球排名</small><b>第19名</b></span><span><small>奖项</small><b>铜奖</b></span></div></div><div className="achievementGallery"><figure className="achievementWide"><img src="/water-cube-2025-stage.jpeg" alt="Darren Khaw 参与2025年文化中国·水立方杯中文歌曲大赛"/></figure><figure><img src="/water-cube-2025-trophy.jpeg" alt="2025年文化中国·水立方杯中文歌曲大赛铜奖奖杯"/></figure><figure><img src="/water-cube-2025-winner.jpeg" alt="Darren Khaw 手持铜奖奖杯"/></figure></div></article></section>

  <section className="darrenAbout section" id="about-darren"><div><p className="kicker">02 · 关于我</p><h2>从音乐中学习。<br/>在表演中成长。</h2></div><div><p className="darrenLead">唱歌是我生活中重要的一部分。我参加比赛来挑战自己、累积舞台经验，并持续提升自己。这个作品集记录了我的成长过程与沿途的每个里程碑。</p></div></section>

  <section className="darrenRoles section" id="roles"><div className="sectionIntro"><p className="kicker">03 · 创意项目</p><h2>舞台之外。</h2></div><div className="roleGrid"><article><span>创意品牌</span><h3>DrunKitten</h3><p>汇集我所有创作的主品牌与创意空间。</p></article><article><span>线上服务</span><h3>S&amp;E LAB</h3><p>我提供人声移除与音频分离的现有服务。</p></article><article><span>发展中的音乐项目</span><h3>DrunKitten Production</h3><p>随着我继续学习音乐制作，为未来原创音乐建立的空间。</p></article></div></section>

  <section className="darrenCredits section"><DarrenLogo/><div><p className="kicker">04 · 未来署名方式</p><div className="darrenCreditRows"><p><span>演唱</span><strong>Darren Khaw</strong></p><p><span>制作</span><strong>DrunKitten Production &amp; Darren Khaw</strong></p></div></div></section>

  <section className="darrenContact section" id="contact"><div className="contactIntro"><p className="kicker">05 · 联系方式</p><h2>与我联系</h2><p>您可以直接联系我，或通过社交媒体与我交流。</p></div><div className="contactGrid"><a href="mailto:darrenkhaw@drunkitten.xyz"><span>电子邮件</span><strong>darrenkhaw@drunkitten.xyz</strong><i>↗</i></a><a href="https://wa.me/601111909196" target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>发送信息</strong><i>↗</i></a><a href="https://www.instagram.com/darrenkhaw0920/" target="_blank" rel="noreferrer"><span>Instagram</span><strong>@darrenkhaw0920</strong><i>↗</i></a><a href="https://www.facebook.com/darren.khaw.2025" target="_blank" rel="noreferrer"><span>Facebook</span><strong>Darren Khaw</strong><i>↗</i></a></div></section>

  <footer className="darrenFooter standaloneFooter"><a href="#top"><DarrenLogo/></a><nav className="darrenSiteLinks" aria-label="DrunKitten 网站网络"><a href="https://drunkitten.xyz/zh">DrunKitten</a><a href="https://drunkitten.xyz/zh/se-lab">S&amp;E LAB</a><a href="https://drunkitten.xyz/zh/production">音乐制作</a></nav><a href="#top">返回顶部 ↑</a><small>© {new Date().getFullYear()} Darren Khaw · 学生</small></footer>
</main>}
