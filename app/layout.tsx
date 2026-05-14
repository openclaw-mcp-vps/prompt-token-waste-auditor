import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prompt Token Waste Auditor – Find Expensive Tokens in AI Prompts",
  description: "Scan AI prompts to identify redundant tokens, verbose phrases, and expensive words that inflate costs without improving output quality."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="94723918-3165-40c0-98be-2254e5809033"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
