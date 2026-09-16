import { achievementImages, type Achievement } from "../db/content";

type Props = {
  achievement: Achievement;
  locale?: "en" | "zh";
  wideFirstImage?: boolean;
};

export function AchievementCard({ achievement, locale = "en", wideFirstImage = false }: Props) {
  const isZh = locale === "zh";
  const title = isZh ? achievement.titleZh : achievement.titleEn;
  const details = isZh ? achievement.detailsZh : achievement.detailsEn;
  const award = isZh ? achievement.awardZh : achievement.awardEn;
  const rankingLabel = achievement.rankingKind === "global_ranking"
    ? isZh ? "全球排名" : "Global ranking"
    : isZh ? "排名" : "Ranking";
  const awardLabel = isZh ? "奖项" : "Award";
  const type = isZh ? "歌唱比赛成就" : "Singing competition achievement";
  const year = /^\d{4}/.exec(title)?.[0] ?? /^\d{4}/.exec(achievement.createdAt)?.[0] ?? "Now";
  const images = achievementImages(achievement);

  return <article className="featuredAchievement">
    <div className="achievementYear">{year}</div>
    <div className="achievementCopy">
      <p className="achievementType">{type}</p>
      <h3>{title}</h3>
      <p>{details}</p>
      <div className="achievementResults">
        <span><small>{rankingLabel}</small><b>{achievement.rankingValue}</b></span>
        <span><small>{awardLabel}</small><b>{award}</b></span>
      </div>
    </div>
    {images.length > 0 && <div className="achievementGallery">
      {images.slice(0, 6).map((url, index) => <figure className={wideFirstImage && index === 0 ? "achievementWide" : undefined} key={url}>
        <img src={url} alt={title}/>
      </figure>)}
    </div>}
  </article>;
}
