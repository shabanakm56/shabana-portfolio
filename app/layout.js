import "./globals.css";
import { Bricolage_Grotesque } from "next/font/google";
import { profile } from "../data/content";

const font = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-main" });

export const metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: profile.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={font.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
