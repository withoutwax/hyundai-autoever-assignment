import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

const kiaSignatureFix = localFont({
  src: [
    {
      path: "./fonts/KiaSignatureFixRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/KiaSignatureFixBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--kia-signature-fix",
});

export const metadata: Metadata = {
  title: "서비스 도입 FAQ | 위블 비즈(Wible Biz) - 친환경 모빌리티 서비스",
  description:
    "위블 비즈는 기업을 위한 친환경 모빌리티 서비스로 차량부터 전용 App/Web까지 업무차량 토탈 솔루션을 제공합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body
        className={`${kiaSignatureFix.variable} min-h-screen flex flex-col`}
      >
        <ReactQueryProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <ScrollToTopButton />
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
