import { desc } from "drizzle-orm";
import { getDb } from "./index";
import { achievements } from "./schema";

export type Achievement = typeof achievements.$inferSelect;

export const fallbackAchievements: Achievement[] = [{
  id: 0,
  titleEn: "2025 Cultures of China Water Cube Cup Chinese Songs Contest",
  titleZh: "2025年文化中国·水立方杯中文歌曲大赛",
  detailsEn: "Participated in the 2025 competition, placed 19th globally, and received the Bronze Award.",
  detailsZh: "参加2025年文化中国·水立方杯中文歌曲大赛，荣获全球第19名及铜奖。",
  rankingKind: "global_ranking",
  rankingValue: "19th",
  awardEn: "Bronze Award",
  awardZh: "铜奖",
  imageUrls: JSON.stringify(["/water-cube-2025-stage.jpeg", "/water-cube-2025-trophy.jpeg", "/water-cube-2025-winner.jpeg"]),
  featured: true,
  createdAt: "2025",
}];

export async function listAchievements(): Promise<Achievement[]> {
  try {
    const rows = await getDb().select().from(achievements).orderBy(desc(achievements.featured), desc(achievements.id));
    return rows.length ? rows : fallbackAchievements;
  } catch {
    return fallbackAchievements;
  }
}

export function achievementImages(achievement: Achievement) {
  try {
    const urls = JSON.parse(achievement.imageUrls);
    return Array.isArray(urls) ? urls.filter((url): url is string => typeof url === "string") : [];
  } catch {
    return [];
  }
}
