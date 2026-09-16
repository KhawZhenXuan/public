CREATE TABLE `achievements` (
  `id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
  `title_en` text NOT NULL,
  `title_zh` text NOT NULL,
  `details_en` text NOT NULL,
  `details_zh` text NOT NULL,
  `ranking_kind` text NOT NULL,
  `ranking_value` text NOT NULL,
  `award_en` text NOT NULL,
  `award_zh` text NOT NULL,
  `image_urls` text DEFAULT '[]' NOT NULL,
  `featured` integer DEFAULT false NOT NULL,
  `created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE `original_songs` (
  `id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
  `title` text NOT NULL,
  `vocalists` text NOT NULL,
  `lyricists` text NOT NULL,
  `composers` text NOT NULL,
  `featured` integer DEFAULT false NOT NULL,
  `created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
INSERT INTO `achievements` (`title_en`, `title_zh`, `details_en`, `details_zh`, `ranking_kind`, `ranking_value`, `award_en`, `award_zh`, `image_urls`, `featured`)
VALUES (
  '2025 Cultures of China Water Cube Cup Chinese Songs Contest',
  '2025年文化中国·水立方杯中文歌曲大赛',
  'Participated in the 2025 competition, placed 19th globally, and received the Bronze Award.',
  '参加2025年文化中国·水立方杯中文歌曲大赛，荣获全球第19名及铜奖。',
  'global_ranking', '19th', 'Bronze Award', '铜奖',
  '["/water-cube-2025-stage.jpeg","/water-cube-2025-trophy.jpeg","/water-cube-2025-winner.jpeg"]', true
);
