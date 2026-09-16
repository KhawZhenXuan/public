import { desc, eq } from "drizzle-orm";
import { getDb } from "./index";
import { achievements, originalSongs } from "./schema";

export type Achievement = typeof achievements.$inferSelect;
export type OriginalSong = typeof originalSongs.$inferSelect;

export async function listAchievements(): Promise<Achievement[]> {
  try {
    return await getDb().select().from(achievements).orderBy(desc(achievements.featured), desc(achievements.id));
  } catch {
    return [];
  }
}

export async function listOriginalSongs(limit?: number): Promise<OriginalSong[]> {
  try {
    const query = getDb().select().from(originalSongs).orderBy(desc(originalSongs.featured), desc(originalSongs.id));
    return limit ? await query.limit(limit) : await query;
  } catch {
    return [];
  }
}

export async function getAchievement(id: number): Promise<Achievement | undefined> {
  try {
    return (await getDb().select().from(achievements).where(eq(achievements.id, id)).limit(1))[0];
  } catch {
    return undefined;
  }
}
