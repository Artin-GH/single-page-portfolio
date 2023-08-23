import "tailwindcss/tailwind.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const spaceGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/static/SpaceGrotesk-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/static/SpaceGrotesk-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: "Single Page Developer Portfolio",
  description: "A frontend mentor challenge",
  icons: {
    icon: '/favicon-32x32.png'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} bg-veryDark text-body`}>
        {children}
      </body>
    </html>
  );
}
