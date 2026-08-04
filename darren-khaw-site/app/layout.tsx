import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({ variable: "--font-display", subsets: ["latin"] });
const body = Manrope({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Darren Khaw — Student Portfolio",
  description: "The personal portfolio of Darren Khaw, an 18-year-old Malaysian student.",
  icons: { icon: "/favicon-darren-v4.png?v=4", shortcut: "/favicon-darren-v4.png?v=4" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const themeScript = `(function(){try{var t=localStorage.getItem('drunkitten-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t;}catch(e){}})()`;
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head><body className={`${display.variable} ${body.variable}`}>{children}</body></html>;
}
