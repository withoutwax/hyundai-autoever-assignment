"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="px-[48px] flex justify-between h-[80px]">
      <Link
        href="/"
        className="bg-[url('/logo_wible_lg.svg')] w-[160px] h-full bg-no-repeat bg-center bg-contain text-[0px]"
      >
        Wible Biz
      </Link>
      <ul className="flex-1 flex justify-end items-cneter">
        {[
          ["서비스 소개", "/guide"],
          ["자주 묻는 질문", "/faq"],
          ["새소식", "/news"],
          ["상담문의", "/counsel"],
        ].map(([title, url], i) => (
          <li className="mx-[16px]" key={uuidv4()}>
            <Link
              href={url}
              className={`relative text-[18px] font-semibold leading-[18px] px-[4px] h-full flex items-center after:content-[''] after:bg-mint after:absolute after:bottom-0 after:left-0  after:h-[4px] after:duration-[400ms] after:transition-[width] after:ease-custom hover:after:w-full ${
                url === pathname ? "after:w-full" : "after:w-0 after:opacity-40"
              } `}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
