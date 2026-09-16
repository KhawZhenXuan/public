import type { Metadata } from "next";
import { getManager } from "./auth";
import { listAchievements, listOriginalSongs } from "../../db/content";
import { ManageClient } from "./ManageClient";

export const metadata: Metadata = {
  title: "Manage Webpages - DrunKitten",
  description: "Manage Darren Khaw achievements and DrunKitten Production original songs.",
};

export default async function ManagePage() {
  const manager = await getManager();

  if (!manager) {
    return <main className="managePage">
      <section className="manageHero">
        <p className="kicker">Private manager</p>
        <h1>Sign in with an approved account.</h1>
        <p>This page manages DarrenK achievements and DrunKitten Production original songs.</p>
      </section>
    </main>;
  }

  const [achievements, songs] = await Promise.all([listAchievements(), listOriginalSongs()]);

  return <main className="managePage">
    <section className="manageHero">
      <p className="kicker">Content manager</p>
      <h1>Manage all webpages.</h1>
      <p>Signed in as {manager.email}. Add bilingual Darren achievements and Production original-song credits from one place.</p>
    </section>
    <ManageClient achievements={achievements} songs={songs}/>
  </main>;
}
