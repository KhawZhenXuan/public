import type { Metadata } from "next";
import { ThemeToggle } from "./ThemeToggle";

export const metadata: Metadata = {
  title: "Darren Khaw — Student Portfolio",
  description: "The personal portfolio of Darren Khaw, an 18-year-old Malaysian student.",
};

function DarrenLogo({ className = "" }: { className?: string }) {
  return <span className={`themeWord wordDarren ${className}`} aria-hidden="true"><img className="logoLight" src="/darren-khaw-black.png" alt=""/><img className="logoDark" src="/darren-khaw-white.png" alt=""/></span>;
}

export default function DarrenPage() {
  return <main className="darrenPage">
    <nav className="nav darrenStandaloneNav" aria-label="Darren Khaw navigation"><a className="darrenNavBrand" href="/" aria-label="Darren Khaw home"><DarrenLogo/></a><div className="navLinks"><ThemeToggle/><a className="languageSwitch" href="/zh" lang="zh-CN">中文</a></div></nav>

    <section className="darrenHero" id="top"><div className="darrenGrid" aria-hidden="true"/><div className="darrenHeroCopy"><p className="eyebrow"><span/> Student</p><DarrenLogo className="darrenHeroLogo"/><h1>Finding my voice.<br/><em>One stage at a time.</em></h1><p>I&apos;m Darren Khaw, an 18-year-old Malaysian student who takes part in singing competitions and continues to grow through every performance.</p><div className="heroActions"><a className="button primary" href="#achievements">View my achievements ↓</a></div></div><div className="darrenIdentityCard"><img className="identityPhoto" src="/darren-khaw-profile.png" alt="Darren Khaw singing on stage"/><h2>Darren Khaw</h2><div className="identityNames"><p><span>Full name</span>Khaw Zhen Xuan</p><p><span>Chinese name</span>许振轩</p></div><p>Malaysia · 18 years old · Student</p><div className="identityStatus"><i/> Learning and growing</div></div></section>

    <section className="darrenAchievements section" id="achievements"><div className="achievementIntro"><p className="kicker">01 · Achievements</p><h2>Singing competition<br/>achievements.</h2><p>Competition experiences, performances, and results from my journey on stage.</p><a className="button primary achievementArchiveButton" href="/achievements">View all achievements →</a></div><article className="featuredAchievement"><div className="achievementYear">2025</div><div className="achievementCopy"><p className="achievementType">International Chinese singing competition</p><h3>2025 Cultures of China Water Cube Cup Chinese Songs Contest</h3><p>Participated in the 2025 competition, placed <strong>19th globally</strong>, and received the <strong>Bronze Award</strong>.</p><div className="achievementResults"><span><small>Global ranking</small><b>19th</b></span><span><small>Award</small><b>Bronze</b></span></div></div><div className="achievementGallery"><figure className="achievementWide"><img src="/water-cube-2025-stage.jpeg" alt="Darren Khaw featured at the 2025 Water Cube Cup Chinese Songs Contest"/></figure><figure><img src="/water-cube-2025-trophy.jpeg" alt="2025 Water Cube Cup Bronze Award trophy"/></figure><figure><img src="/water-cube-2025-winner.jpeg" alt="Darren Khaw holding his Bronze Award trophy"/></figure></div></article></section>

    <section className="darrenAbout section" id="about-darren"><div><p className="kicker">02 · About me</p><h2>Learning through music.<br/>Growing through performance.</h2></div><div><p className="darrenLead">Singing is an important part of who I am. I take part in competitions to challenge myself, gain experience on stage, and keep developing my voice. This portfolio records that journey and the milestones along the way.</p></div></section>

    <section className="darrenRoles section" id="roles"><div className="sectionIntro"><p className="kicker">03 · Creative projects</p><h2>Beyond the stage.</h2></div><div className="roleGrid"><article><span>CREATIVE IDENTITY</span><h3>DrunKitten</h3><p>The main identity and creative home for everything I build.</p></article><article><span>ONLINE SERVICE</span><h3>S&amp;E LAB</h3><p>My active service for vocal removal and audio separation.</p></article><article><span>MUSIC IN DEVELOPMENT</span><h3>DrunKitten Production</h3><p>The future home for original music as I continue learning production.</p></article></div></section>

    <section className="darrenCredits section"><DarrenLogo/><div><p className="kicker">04 · How I will be credited</p><div className="darrenCreditRows"><p><span>Vocals</span><strong>Darren Khaw</strong></p><p><span>Producer</span><strong>DrunKitten Production &amp; Darren Khaw</strong></p></div></div></section>

    <section className="darrenContact section" id="contact"><div className="contactIntro"><p className="kicker">05 · Contact</p><h2>Let&apos;s get in touch.</h2><p>You can contact me directly or connect with me through social media.</p></div><div className="contactGrid"><a href="mailto:darrenkhaw@drunkitten.xyz"><span>Email</span><strong>darrenkhaw@drunkitten.xyz</strong><i>↗</i></a><a href="https://wa.me/601111909196" target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>Send a message</strong><i>↗</i></a><a href="https://www.instagram.com/darrenkhaw0920/" target="_blank" rel="noreferrer"><span>Instagram</span><strong>@darrenkhaw0920</strong><i>↗</i></a><a href="https://www.facebook.com/darren.khaw.2025" target="_blank" rel="noreferrer"><span>Facebook</span><strong>Darren Khaw</strong><i>↗</i></a></div></section>

    <footer className="darrenFooter standaloneFooter"><a href="#top"><DarrenLogo/></a><nav className="darrenSiteLinks" aria-label="DrunKitten network"><a href="https://drunkitten.xyz">DrunKitten</a><a href="https://drunkitten.xyz/se-lab">S&amp;E LAB</a><a href="https://drunkitten.xyz/production">Production</a></nav><a href="#top">Back to top ↑</a><small>© {new Date().getFullYear()} Darren Khaw · Student</small></footer>
  </main>;
}
