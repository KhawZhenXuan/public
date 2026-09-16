import type { OriginalSong } from "../../db/content";

export function SongCard({ song }: { song: OriginalSong }) {
  return <article className="songCard">
    <div className="songCardHeader">
      <small>Original song</small>
      {song.featured && <span>Featured</span>}
    </div>
    <h3>{song.title}</h3>
    <dl>
      <div><dt>Vocalists / 演唱</dt><dd>{song.vocalists}</dd></div>
      <div><dt>Lyrics / 填词</dt><dd>{song.lyricists}</dd></div>
      <div><dt>Composer / 作曲</dt><dd>{song.composers}</dd></div>
    </dl>
  </article>;
}
