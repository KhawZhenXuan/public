import type { Metadata } from "next";
import { ThemeToggle } from "../../../ThemeToggle";
import { listOriginalSongs } from "../../../../db/content";
import { SongCard } from "../../../production/SongCard";

export const metadata: Metadata = {
  title: "Original Songs - DrunKitten Production",
  description: "DrunKitten Production original songs and credits.",
};

function ProductionLogo({ className = "" }: { className?: string }) {
  return <span className={`themeWord wordProduction ${className}`} aria-hidden="true"><img className="logoLight" src="/dkp-word-black.png" alt=""/><img className="logoDark" src="/dkp-word-white.png" alt=""/></span>;
}

export default async function ChineseOriginalSongsPage() {
  const songs = await listOriginalSongs();

  return <main className="productionPage songsArchivePage" lang="zh-CN">
    <nav className="nav" aria-label="DrunKitten Production 导航"><a className="productionNavBrand" href="/zh/production" aria-label="DrunKitten Production 首页"><ProductionLogo/></a><div className="navLinks"><a href="/zh">DrunKitten</a><a href="/zh/production">Production</a><ThemeToggle/><a className="languageSwitch" href="/production/songs" lang="en">EN</a></div></nav>
    <header className="songsArchiveHero" id="top"><a className="archiveBack" href="/zh/production">← 返回 Production</a><p className="kicker">DrunKitten Production · Original Songs</p><h1>Original songs.</h1><p>歌曲资料将保留英文或歌曲原本语言，方便中英文页面一致显示。</p></header>
    <section className="songsArchiveContent" aria-label="Original songs list">
      {songs.length ? songs.map((song) => <SongCard song={song} key={song.id}/>) : <div className="songComingSoon"><span>COMING SOON</span><h2>No original songs yet.</h2><p>第一首 DrunKitten Production 原创歌曲准备好后，这里会自动显示。</p></div>}
    </section>
    <footer className="productionFooter"><a href="/zh/production" aria-label="DrunKitten Production 首页"><ProductionLogo/></a><div className="brandFooterCopy"><p>DrunKitten Production · Original songs</p></div><a href="#top">返回顶部 ↑</a><small>© {new Date().getFullYear()} Darren Khaw · Independent creative project</small></footer>
  </main>;
}
