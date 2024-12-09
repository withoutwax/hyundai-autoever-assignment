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
  title: "서비스 이용 FAQ | 위블 비즈(Wible Biz) - 친환경 모빌리티 서비스",
  description:
    "위블 비즈는 기업을 위한 친환경 모빌리티 서비스로 차량부터 전용 App/Web까지 업무차량 토탈 솔루션을 제공합니다.",
  metadataBase: new URL("https://wiblebiz.kia.com"),
  keywords:
    "위블비즈,위블 비즈,모빌리티,구독서비스,차량구독,차량관리,업무용차량,법인차,관용차,전기차,FMS,스마트솔루션",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://wiblebiz.kia.com",
    title: "위블 비즈(Wible Biz)",
    description:
      "위블 비즈는 기업을 위한 친환경 모빌리티 서비스로 차량부터 전용 App/Web까지 업무차량 토탈 솔루션을 제공합니다.",
    siteName: "위블 비즈(Wible Biz)",
    images: [
      {
        url: "/wb_sns_default.jpg",
      },
    ],
  },
  twitter: {
    card: "summary",
    images: "/wb_sns_default.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body
        className={`${kiaSignatureFix.variable} min-h-screen flex flex-col break-keep`}
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
