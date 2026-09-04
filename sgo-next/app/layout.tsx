import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SGO Market Atlas",
  robots: { index: false, follow: false },
};

// Set the theme before first paint to avoid a flash (ported from index.php).
const themeScript = `(function(){try{var t=localStorage.getItem('sgo-theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light dark" />
        <link rel="stylesheet" href="/vendor/leaflet.css" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
