import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { requireManager } from "../../../manage/auth";
import { getDb } from "../../../../db";
import { achievements } from "../../../../db/schema";

const required = ["titleEn", "titleZh", "detailsEn", "detailsZh", "rankingValue", "awardEn", "awardZh"] as const;

function value(input: unknown) { return typeof input === "string" ? input.trim() : ""; }

export async function POST(request: Request) {
  try {
    await requireManager();
    const body = await request.json() as Record<string, unknown>;
    if (required.some((field) => !value(body[field]))) return Response.json({ error: "Complete every required achievement field." }, { status: 400 });
    const rankingKind = body.rankingKind === "global_ranking" ? "global_ranking" : "ranking";
    const imageUrls = Array.isArray(body.imageUrls) ? body.imageUrls.filter((url): url is string => typeof url === "string" && /^https?:\/\/|^\//.test(url)).slice(0, 6) : [];
    await getDb().insert(achievements).values({
      titleEn: value(body.titleEn), titleZh: value(body.titleZh), detailsEn: value(body.detailsEn), detailsZh: value(body.detailsZh),
      rankingKind, rankingValue: value(body.rankingValue), awardEn: value(body.awardEn), awardZh: value(body.awardZh), imageUrls: JSON.stringify(imageUrls), featured: Boolean(body.featured),
    });
    ["/", "/zh", "/production", "/zh/production", "/manage"].forEach(revalidatePath);
    return Response.json({ ok: true }, { status: 201 });
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : "Unable to save achievement." }, { status: 403 });
  }
}

export async function DELETE(request: Request) {
  try {
    await requireManager();
    const id = Number(new URL(request.url).searchParams.get("id"));
    if (!Number.isInteger(id)) return Response.json({ error: "Invalid achievement." }, { status: 400 });
    await getDb().delete(achievements).where(eq(achievements.id, id));
    return Response.json({ ok: true });
  } catch (error) { return Response.json({ error: error instanceof Error ? error.message : "Unable to delete achievement." }, { status: 403 }); }
}
