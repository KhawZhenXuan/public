import { env } from "cloudflare:workers";
import { getChatGPTUser, type ChatGPTUser } from "../chatgpt-auth";

function allowedEmails() {
  return (env.ADMIN_EMAILS ?? "").split(",").map((email) => email.trim().toLowerCase()).filter(Boolean);
}

export async function getManager(): Promise<ChatGPTUser | null> {
  const user = await getChatGPTUser();
  if (!user) return null;
  return allowedEmails().includes(user.email.toLowerCase()) ? user : null;
}

export async function requireManager() {
  const manager = await getManager();
  if (!manager) throw new Error("You are not authorized to manage this site.");
  return manager;
}
