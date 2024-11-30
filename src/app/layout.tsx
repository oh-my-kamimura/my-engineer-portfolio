import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const jetBrainsMono = localFont({
  src: "./fonts/JetBrainsMono-VariableFont_wght.ttf",
  variable: "--font-jet-brains-mono",
  weight: "100 900",
});
const notoSans = localFont({
  src: "./fonts/NotoSans-VariableFont_wdth,wght.ttf",
  variable: "--font-noto-sans",
  weight: "100 900",
})
const notoSansJP = localFont({
  src: "./fonts/NotoSansJP-VariableFont_wght.ttf",
  variable: "--font-noto-sans-jp",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Yohei Kamimura's Portfolio",
  description: "Yohei Kamimura's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable}  ${notoSans.variable}  ${notoSansJP.variable}`}>
        {children}
      </body>
    </html>
  );
}
