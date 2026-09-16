import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { requireManager } from "../../../manage/auth";
import { getDb } from "../../../../db";
import { originalSongs } from "../../../../db/schema";

function value(input: unknown) { return typeof input === "string" ? input.trim() : ""; }

export async function POST(request: Request) {
  try {
    await requireManager();
    const body = await request.json() as Record<string, unknown>;
    const fields = ["title", "vocalists", "lyricists", "composers"] as const;
    if (fields.some((field) => !value(body[field]))) return Response.json({ error: "Complete every song credit." }, { status: 400 });
    await getDb().insert(originalSongs).values({ title: value(body.title), vocalists: value(body.vocalists), lyricists: value(body.lyricists), composers: value(body.composers), featured: Boolean(body.featured) });
    ["/production", "/zh/production", "/manage"].forEach(revalidatePath);
    return Response.json({ ok: true }, { status: 201 });
  } catch (error) { return Response.json({ error: error instanceof Error ? error.message : "Unable to save song." }, { status: 403 }); }
}

export async function DELETE(request: Request) {
  try {
    await requireManager();
    const id = Number(new URL(request.url).searchParams.get("id"));
    if (!Number.isInteger(id)) return Response.json({ error: "Invalid song." }, { status: 400 });
    await getDb().delete(originalSongs).where(eq(originalSongs.id, id));
    return Response.json({ ok: true });
  } catch (error) { return Response.json({ error: error instanceof Error ? error.message : "Unable to delete song." }, { status: 403 }); }
}
