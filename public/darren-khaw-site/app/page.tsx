import type { Metadata } from "next";
import { AchievementCard } from "./AchievementCard";
import { ThemeToggle } from "./ThemeToggle";
import { listAchievements } from "../db/content";

export const metadata: Metadata = {
  title: "Darren Khaw â€” Student Portfolio",
  description: "The personal portfolio of Darren Khaw, an 18-year-old Malaysian student.",
};

function DarrenLogo({ className = "" }: { className?: string }) {
  return <span className={`themeWord wordDarren ${className}`} aria-hidden="true"><img className="logoLight" src="/darren-khaw-black.png" alt=""/><img className="logoDark" src="/darren-khaw-white.png" alt=""/></span>;
}

export default async function DarrenPage() {
  const [featuredAchievement] = await listAchievements();

  return <main className="darrenPage">
    <nav className="nav darrenStandaloneNav" aria-label="Darren Khaw navigation"><a className="darrenNavBrand" href="/" aria-label="Darren Khaw home"><DarrenLogo/></a><div className="navLinks"><ThemeToggle/><a className="languageSwitch" href="/zh" lang="zh-CN">ä¸­æ–‡</a></div></nav>

    <section className="darrenHero" id="top"><div className="darrenGrid" aria-hidden="true"/><div className="darrenHeroCopy"><p className="eyebrow"><span/> Student</p><DarrenLogo className="darrenHeroLogo"/><h1>Finding my voice.<br/><em>One stage at a time.</em></h1><p>I&apos;m Darren Khaw, an 18-year-old Malaysian student who takes part in singing competitions and continues to grow through every performance.</p><div className="heroActions"><a className="button primary" href="#achievements">View my achievements â†“</a></div></div><div className="darrenIdentityCard"><img className="identityPhoto" src="/darren-khaw-profile.png" alt="Darren Khaw singing on stage"/><h2>Darren Khaw</h2><div className="identityNames"><p><span>Full name</span>Khaw Zhen Xuan</p><p><span>Chinese name</span>è®¸æŒ¯è½©</p></div><p>Malaysia Â· 18 years old Â· Student</p><div className="identityStatus"><i/> Learning and growing</div></div></section>

    <section className="darrenAchievements section" id="achievements"><div className="achievementIntro"><p className="kicker">01 Â· Achievements</p><h2>Singing competition<br/>achievements.</h2><p>Competition experiences, performances, and results from my journey on stage.</p><a className="button primary achievementArchiveButton" href="/achievements">View all achievements â†’</a></div>{featuredAchievement && <AchievementCard achievement={featuredAchievement} wideFirstImage/>}</section>

    <section className="darrenAbout section" id="about-darren"><div><p className="kicker">02 Â· About me</p><h2>Learning through music.<br/>Growing through performance.</h2></div><div><p className="darrenLead">Singing is an important part of who I am. I take part in competitions to challenge myself, gain experience on stage, and keep developing my voice. This portfolio records that journey and the milestones along the way.</p></div></section>

    <section className="darrenRoles section" id="roles"><div className="sectionIntro"><p className="kicker">03 Â· Creative projects</p><h2>Beyond the stage.</h2></div><div className="roleGrid"><article><span>CREATIVE IDENTITY</span><h3>DrunKitten</h3><p>The main identity and creative home for everything I build.</p></article><article><span>ONLINE SERVICE</span><h3>S&amp;E LAB</h3><p>My active service for vocal removal and audio separation.</p></article><article><span>MUSIC IN DEVELOPMENT</span><h3>DrunKitten Production</h3><p>The future home for original music as I continue learning production.</p></article></div></section>

    <section className="darrenCredits section"><DarrenLogo/><div><p className="kicker">04 Â· How I will be credited</p><div className="darrenCreditRows"><p><span>Vocals</span><strong>Darren Khaw</strong></p><p><span>Producer</span><strong>DrunKitten Production &amp; Darren Khaw</strong></p></div></div></section>

    <section className="darrenContact section" id="contact"><div className="contactIntro"><p className="kicker">05 Â· Contact</p><h2>Let&apos;s get in touch.</h2><p>You can contact me directly or connect with me through social media.</p></div><div className="contactGrid"><a href="mailto:darrenkhaw@drunkitten.com"><span>Email</span><strong>darrenkhaw@drunkitten.com</strong><i>â†—</i></a><a href="https://wa.me/601111909196" target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>Send a message</strong><i>â†—</i></a><a href="https://www.instagram.com/darrenkhaw0920/" target="_blank" rel="noreferrer"><span>Instagram</span><strong>@darrenkhaw0920</strong><i>â†—</i></a><a href="https://www.facebook.com/darren.khaw.2025" target="_blank" rel="noreferrer"><span>Facebook</span><strong>Darren Khaw</strong><i>â†—</i></a></div></section>

    <footer className="darrenFooter standaloneFooter"><a href="#top"><DarrenLogo/></a><nav className="darrenSiteLinks" aria-label="DrunKitten network"><a href="https://drunkitten.com">DrunKitten</a><a href="https://drunkitten.com/se-lab">S&amp;E LAB</a><a href="https://drunkitten.com/production">Production</a></nav><a href="#top">Back to top â†‘</a><small>Â© {new Date().getFullYear()} Darren Khaw Â· Student</small></footer>
  </main>;
}
