import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const display = Space_Grotesk({ variable: "--font-display", subsets: ["latin"] });
const body = Manrope({ variable: "--font-body", subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: "DrunKitten — Audio Services & Music in the Making",
    description: "DrunKitten is Darren Khaw's independent creative home for S&E LAB audio services and the upcoming DrunKitten Production.",
    icons: { icon: "/favicon-drunkitten-v3.png?v=3", shortcut: "/favicon-drunkitten-v3.png?v=3" },
    openGraph: {
      title: "DrunKitten — Sound, separated. Ideas, amplified.",
      description: "Audio services and music in the making, by Darren Khaw.",
      type: "website",
      images: [{ url: `${origin}/og.png`, width: 1734, height: 907, alt: "DrunKitten — Sound, separated. Ideas, amplified." }],
    },
    twitter: { card: "summary_large_image", images: [`${origin}/og.png`] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const themeScript = `(function(){try{var t=localStorage.getItem('drunkitten-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t;}catch(e){}})()`;
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head><body className={`${display.variable} ${body.variable}`}>{children}</body></html>;
}
