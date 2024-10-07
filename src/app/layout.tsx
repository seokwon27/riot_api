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
        <nav className="flex justify-around bg-slate-700 p-5 sticky top-0 w-[100%]  max-w-[1920px] m-auto shadow shadow-black ">
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
        <div className="pt-[64px] flex flex-col justify-center ">{children}</div>
        <footer className="p-5 w-[100%] max-w-[1920px] m-auto bg-slate-800 text-xs text-slate-400 ">
          <div>
            <p>스파르타 내일배움 캠프 | 주특기 플러스주차 개인과제</p>
          </div>
          <div className="flex gap-1">
            <p>개발자: 이석원 |</p>
            <div>
              Git주소:{" "}
              <Link href={`https://github.com/seokwon27`}>https://github.com/seokwon27</Link> |
            </div>
            <div>
              Blog주소:{" "}
              <Link href={`https://record165.tistory.com/`}>https://record165.tistory.com/</Link>
            </div>
          </div>
          <div>개발기간: 2024.09.27 ~ 2024.10.07</div>
        </footer>
      </body>
    </html>
  );
}
