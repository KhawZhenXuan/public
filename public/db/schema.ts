import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const achievements = sqliteTable("achievements", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  titleEn: text("title_en").notNull(),
  titleZh: text("title_zh").notNull(),
  detailsEn: text("details_en").notNull(),
  detailsZh: text("details_zh").notNull(),
  rankingKind: text("ranking_kind", { enum: ["ranking", "global_ranking"] }).notNull(),
  rankingValue: text("ranking_value").notNull(),
  awardEn: text("award_en").notNull(),
  awardZh: text("award_zh").notNull(),
  imageUrls: text("image_urls").notNull().default("[]"),
  featured: integer("featured", { mode: "boolean" }).notNull().default(false),
  createdAt: text("created_at").notNull().default("CURRENT_TIMESTAMP"),
});

export const originalSongs = sqliteTable("original_songs", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  vocalists: text("vocalists").notNull(),
  lyricists: text("lyricists").notNull(),
  composers: text("composers").notNull(),
  featured: integer("featured", { mode: "boolean" }).notNull().default(false),
  createdAt: text("created_at").notNull().default("CURRENT_TIMESTAMP"),
});
