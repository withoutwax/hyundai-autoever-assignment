"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

export default function Navbar() {
  const pathname = usePathname();
  const [navMenu, setNavMenu] = useState(false);
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      const { scrollY } = window;
      if (scrollY > 10) {
        setTop(false);
      } else {
        setTop(true);
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const toggleMobileNav = (state: boolean) => {
    if (state) {
      setNavMenu(true);
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      setNavMenu(false);
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 bg-white z-50 w-full ${
          top ? "" : "shadow-[0_4px_32px_0_rgba(0,0,0,.08)]"
        }`}
      >
        <div className="max-w-[1775px] mx-auto w-full h-[56px] lg:h-[80px] flex items-center justify-between px-[48px]">
          <Link
            href="/"
            className="bg-[url('/logo_wible_lg.svg')] w-[120px] lg:w-[160px] h-full bg-no-repeat bg-center bg-contain text-[0px]"
          >
            Wible Biz
          </Link>
          <ul className="hidden flex-1 lg:flex justify-end items-center">
            {[
              ["서비스 소개", "/guide"],
              ["자주 묻는 질문", "/faq"],
              ["새소식", "/news"],
              ["상담문의", "/counsel"],
            ].map(([title, url]) => (
              <li className="mx-[16px] h-[80px]" key={uuidv4()}>
                <Link
                  href={url}
                  className={`relative text-[18px] font-semibold leading-[18px] px-[4px] h-full flex items-center after:content-[''] after:bg-mint after:absolute after:bottom-0 after:left-0  after:h-[4px] after:duration-[400ms] after:transition-[width] after:ease-custom hover:after:w-full ${
                    url === pathname
                      ? "after:w-full"
                      : "after:w-0 after:opacity-40"
                  } `}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => toggleMobileNav(!navMenu)}
            className={`
            relative text-[0px] w-[20px] h-[20px] aspect-square lg:hidden flex items-center justify-center overflow-hidden
            before:content-[''] before:block before:bg-black before:w-[20px] before:absolute before:top-[3px] before:h-[2px] before:transition-all before:duration-[600ms] before:ease-custom before:transform before:origin-top-right ${
              navMenu
                ? "before:-rotate-45 before:translate-x-[-4.5px] before:translate-y-[-1px]"
                : ""
            }
            after:content-[''] after:block after:bg-black after:w-[20px] after:absolute after:bottom-[3px] after:h-[2px] after:transition-all after:duration-[600ms] after:ease-custom after:transform after:origin-top-right ${
              navMenu
                ? "after:rotate-45 after:translate-x-[-3px] after:translate-y-[1px]"
                : ""
            }
            `}
          >
            <span
              className={`w-[20px] h-[2px] bg-black transition-all duration-[600ms] ease-custom ${
                navMenu ? "translate-x-[20px]" : ""
              }`}
            ></span>
            메뉴 열기/닫기
          </button>
        </div>
      </header>
      <nav
        className={`lg:hidden bg-white fixed inset-0 flex-1 w-screen z-40 transition-all duration-[700ms] ease-custom ${
          navMenu ? "" : "-translate-x-full"
        }`}
      >
        <ul className="mt-[136px]">
          {[
            ["서비스 소개", "/guide"],
            ["자주 묻는 질문", "/faq"],
            ["새소식", "/news"],
            ["상담문의", "/counsel"],
          ].map(([title, url]) => (
            <li
              className="mx-[16px] mb-[8px] w-full justify-center"
              key={uuidv4()}
            >
              <Link
                href={url}
                onClick={() => toggleMobileNav(false)}
                className={`relative text-[24px] text-center font-semibold leading-[56px] px-[4px] h-full flex justify-center items-center ${
                  url === pathname ? "text-mint" : ""
                } `}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
