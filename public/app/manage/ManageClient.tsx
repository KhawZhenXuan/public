"use client";

import { useState } from "react";
import type { Achievement, OriginalSong } from "../../db/content";

type Props = {
  achievements: Achievement[];
  songs: OriginalSong[];
};

type Status = { kind: "idle" | "success" | "error"; message: string };

function lines(value: FormDataEntryValue | null) {
  return String(value ?? "").split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
}

async function submitJson(url: string, data: Record<string, unknown>, method = "POST") {
  const response = await fetch(url, { method, headers: { "content-type": "application/json" }, body: method === "POST" ? JSON.stringify(data) : undefined });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.error ?? "Unable to save.");
}

export function ManageClient({ achievements, songs }: Props) {
  const [status, setStatus] = useState<Status>({ kind: "idle", message: "" });

  async function handleAchievement(formData: FormData) {
    setStatus({ kind: "idle", message: "Saving achievement..." });
    try {
      await submitJson("/api/manage/achievements", {
        titleEn: formData.get("titleEn"),
        titleZh: formData.get("titleZh"),
        detailsEn: formData.get("detailsEn"),
        detailsZh: formData.get("detailsZh"),
        rankingKind: formData.get("rankingKind"),
        rankingValue: formData.get("rankingValue"),
        awardEn: formData.get("awardEn"),
        awardZh: formData.get("awardZh"),
        imageUrls: lines(formData.get("imageUrls")),
        featured: formData.get("featured") === "on",
      });
      setStatus({ kind: "success", message: "Achievement saved. Refreshing..." });
      window.location.reload();
    } catch (error) {
      setStatus({ kind: "error", message: error instanceof Error ? error.message : "Unable to save achievement." });
    }
  }

  async function handleSong(formData: FormData) {
    setStatus({ kind: "idle", message: "Saving song..." });
    try {
      await submitJson("/api/manage/songs", {
        title: formData.get("title"),
        vocalists: formData.get("vocalists"),
        lyricists: formData.get("lyricists"),
        composers: formData.get("composers"),
        featured: formData.get("featured") === "on",
      });
      setStatus({ kind: "success", message: "Song saved. Refreshing..." });
      window.location.reload();
    } catch (error) {
      setStatus({ kind: "error", message: error instanceof Error ? error.message : "Unable to save song." });
    }
  }

  async function removeItem(path: string, id: number) {
    setStatus({ kind: "idle", message: "Deleting..." });
    try {
      const response = await fetch(`${path}?id=${id}`, { method: "DELETE" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.error ?? "Unable to delete.");
      setStatus({ kind: "success", message: "Deleted. Refreshing..." });
      window.location.reload();
    } catch (error) {
      setStatus({ kind: "error", message: error instanceof Error ? error.message : "Unable to delete." });
    }
  }

  return <div className="manageShell">
    <div className="manageStatus" data-kind={status.kind}>{status.message || "Ready to manage DrunKitten and Darren Khaw content."}</div>
    <section className="manageGrid">
      <form className="managePanel" action={handleAchievement}>
        <div className="managePanelIntro"><p className="kicker">DarrenK Page</p><h2>Add achievement</h2><p>Fill both English and Chinese fields for accurate bilingual pages.</p></div>
        <label>Title in English<input name="titleEn" required/></label>
        <label>中文标题<input name="titleZh" required/></label>
        <label>Details in English<textarea name="detailsEn" required rows={4}/></label>
        <label>中文详情<textarea name="detailsZh" required rows={4}/></label>
        <div className="manageTwo">
          <label>Ranking label<select name="rankingKind" defaultValue="global_ranking"><option value="ranking">Ranking</option><option value="global_ranking">Global Ranking</option></select></label>
          <label>Ranking value<input name="rankingValue" required placeholder="19th"/></label>
        </div>
        <div className="manageTwo">
          <label>Award in English<input name="awardEn" required placeholder="Bronze Award"/></label>
          <label>中文奖项<input name="awardZh" required placeholder="铜奖"/></label>
        </div>
        <label>Pictures<textarea name="imageUrls" rows={4} placeholder="/water-cube-2025-stage.jpeg&#10;/water-cube-2025-trophy.jpeg"/></label>
        <label className="manageCheck"><input type="checkbox" name="featured"/> Feature upfront</label>
        <button className="button primary" type="submit">Save achievement</button>
      </form>

      <form className="managePanel" action={handleSong}>
        <div className="managePanelIntro"><p className="kicker">DrunKitten Production</p><h2>Add original song</h2><p>Song credits stay in English or the song&apos;s original language on both pages.</p></div>
        <label>Song Title / 歌曲名称<input name="title" required/></label>
        <label>Vocalists / 演唱<input name="vocalists" required/></label>
        <label>Lyrics / 填词<input name="lyricists" required/></label>
        <label>Composer / 作曲<input name="composers" required/></label>
        <label className="manageCheck"><input type="checkbox" name="featured"/> Feature upfront</label>
        <button className="button primary" type="submit">Save song</button>
      </form>
    </section>

    <section className="manageLists">
      <div className="managePanel"><h2>Achievements</h2>{achievements.map((item) => <article className="manageItem" key={item.id}><div><strong>{item.titleEn}</strong><span>{item.rankingValue} · {item.awardEn}</span></div>{item.id > 0 && <button type="button" onClick={() => removeItem("/api/manage/achievements", item.id)}>Delete</button>}</article>)}</div>
      <div className="managePanel"><h2>Original Songs</h2>{songs.length ? songs.map((song) => <article className="manageItem" key={song.id}><div><strong>{song.title}</strong><span>{song.vocalists}</span></div><button type="button" onClick={() => removeItem("/api/manage/songs", song.id)}>Delete</button></article>) : <p className="manageEmpty">No songs yet. Production will show Coming Soon.</p>}</div>
    </section>
  </div>;
}
