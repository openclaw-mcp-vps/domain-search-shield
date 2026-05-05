import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Domain Search Shield — Protect Your Domain Searches",
  description: "Proxy service that prevents registrars from seeing and squatting your domain searches. Rotating proxies, masked identity, real-time availability."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="16a1cd43-12b1-4a12-a1c8-d9d934a981e4"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
