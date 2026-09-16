import type { Metadata } from "next";
import { ThemeToggle } from "../../ThemeToggle";
import { listOriginalSongs } from "../../../db/content";
import { SongCard } from "../SongCard";

export const metadata: Metadata = {
  title: "Original Songs - DrunKitten Production",
  description: "Original songs and credits from DrunKitten Production.",
};

function ProductionLogo({ className = "" }: { className?: string }) {
  return <span className={`themeWord wordProduction ${className}`} aria-hidden="true"><img className="logoLight" src="/dkp-word-black.png" alt=""/><img className="logoDark" src="/dkp-word-white.png" alt=""/></span>;
}

export default async function OriginalSongsPage() {
  const songs = await listOriginalSongs();

  return <main className="productionPage songsArchivePage">
    <nav className="nav" aria-label="DrunKitten Production navigation"><a className="productionNavBrand" href="/production" aria-label="DrunKitten Production home"><ProductionLogo/></a><div className="navLinks"><a href="/">DrunKitten</a><a href="/production">Production</a><ThemeToggle/><a className="languageSwitch" href="/zh/production/songs" lang="zh-CN">中文</a></div></nav>
    <header className="songsArchiveHero" id="top"><a className="archiveBack" href="/production">← Back to Production</a><p className="kicker">DrunKitten Production · Original Songs</p><h1>Original songs.</h1><p>Song titles and core credits for released or prepared DrunKitten Production originals.</p></header>
    <section className="songsArchiveContent" aria-label="Original songs list">
      {songs.length ? songs.map((song) => <SongCard song={song} key={song.id}/>) : <div className="songComingSoon"><span>COMING SOON</span><h2>No original songs yet.</h2><p>This archive will open when the first DrunKitten Production original is ready.</p></div>}
    </section>
    <footer className="productionFooter"><a href="/production" aria-label="DrunKitten Production home"><ProductionLogo/></a><div className="brandFooterCopy"><p>DrunKitten Production · Original songs</p></div><a href="#top">Back to top ↑</a><small>© {new Date().getFullYear()} Darren Khaw · Independent creative project</small></footer>
  </main>;
}
