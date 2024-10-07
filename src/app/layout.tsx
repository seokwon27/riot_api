import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "LOL 백과사전",
  description: "League Of Legends 챔피언 및 아이템 상세정보 사이트",
  icons: {
    icon: "/lollogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav className="flex flex-row gap-20 justify-around bg-slate-700 p-5 fixed w-[100%] shadow shadow-black ">
          <Link className="link-style" href={"/"}>
            홈
          </Link>
          <Link className="link-style" href={"/champions"}>
            챔피언
          </Link>
          <Link className="link-style" href={"/items"}>
            아이템
          </Link>
          <Link className="link-style" href={"/rotation"}>
            로테이션
          </Link>
        </nav>
        <div className="pt-[64px] flex flex-col justify-center">{children}</div>
      </body>
    </html>
  );
}
