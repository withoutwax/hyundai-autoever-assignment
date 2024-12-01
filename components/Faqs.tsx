"use client";

import { useState } from "react";
import Link from "next/link";
import FaqContent from "./FaqContent";

const TEST_DATA = [
  {
    tab: "서비스 도입",
    faq: [
      {
        category: "서비스 상품",
        question: "위블 비즈에서는 어떤 상품을 이용할 수 있나요?",
        answer: `소속회사가 위블 비즈 이용 계약이 되어 있는 경우 업무 시간에는 이용 건별 별도 결제 없이 편리하게 업무용 차량을 이용할 수 있고(대여 요금은 소속 회사에서 부담), 비업무 시간에는 출퇴근 및 주말 여가 개인용 차량을 이용할 수 있습니다.\n자세한 상품 안내는 메뉴 > 하단의 '이용가이드' > 상품 안내 탭을 통해 확인하실 수 있습니다.`,
      },
      {
        category: "도입 상담",
        question: "비즈니스 상품 도입 기간은 얼마나 걸리나요?",
        answer: `위블 비즈 도입 상담을 신청하신 경우, 빠른 시일 내에 기재해주신 연락처로 연락드릴 예정입니다.\n담당자와의 1:1 상담 후 최대한 원하시는 시기에 맞춰 서비스가 도입될 수 있도록 도와드리고 있으나, 도입하시는 상품에 따라 소요되는 기간은 다소 상이할 수 있습니다.`,
      },
      {
        category: "계약",
        question: "비즈니스 상품 도입 절차가 어떻게 되나요?",
        answer: `위블 비즈 비즈니스 상품 도입 절차는 아래와 같습니다.\n① 상담 문의 등록 후 1:1 맞춤 상담 진행\n② 서비스 도입 상품 및 세부 조건 협의 후 계약 진행\n③ 관리자 Web 계정 생성 후 회사 정보 설정\n④ 임직원 회원가입 진행\n⑤ 전용 위블존에서 차량 대여 및 이용`,
      },
    ],
  },
  {
    tab: "서비스 이용",
    faq: [
      {
        category: "가입문의",
        subCategory: "가입",
        question: "가입 및 이용 조건은 어떻게 되나요?",
        answer: `아래의 조건 충족 시 위블 비즈 가입 및 이용이 가능합니다.\n① 만 21세 이상 *단, 일부 차종에 따라 나이 기준 상이하므로 이용 전 확인 필요\n② 취득일로부터 1년 이상 경과한 대한민국 운전면허 보유\n③ 본인 명의의 휴대폰 보유 (가족, 타인 명의 휴대폰 불가)\n④ 본인 명의의 신용/체크 카드 보유 (타인 명의 카드 등록 불가)\n⑤ 가입/이용 필수 약관 동의`,
      },
      {
        category: "가입문의",
        subCategory: "로그인",
        question: "아이디/비밀번호를 분실했어요.",
        answer: `아이디/비밀번호를 분실하신 경우, 로그인 화면의 ‘아이디 찾기’ 혹은 ‘비밀번호 찾기’를 통해 해결 가능합니다.\n① 아이디 분실 시 : 아이디 찾기 > 휴대폰 본인 인증 > 아이디 확인\n② 비밀번호 분실 시 : 비밀번호 초기화 > 휴대폰 본인 인증 > 새로운 비밀번호 설정\n위의 방법으로도 해결이 어려우신 경우, 위블 비즈 고객센터로 문의해주시면 도움을 드리겠습니다.`,
      },
      {
        category: "가입문의",
        subCategory: "면허",
        question: "위블 비즈를 이용하려면 면허증이 반드시 필요한가요?",
        answer: `위블 비즈 차량 이용을 위해서는 반드시 취득일이 1년 이상 경과한 대한민국 운전면허증(실물)이 필요합니다.\n운전면허증을 분실하였을 경우 운전면허 재발급을 받으신 후 이용이 가능합니다.`,
      },
      {
        category: "비즈니스(업무용)",
        subCategory: "상품",
        question: "위블 비즈 비즈니스용 상품이란 무엇인가요?",
        answer: `위블 비즈의 비즈니스 상품은, 이용 계약을 한 회사의 임직원들이 위블 비즈의 차량을 업무용으로 이용할 수 있는 서비스를 말합니다.\n위블 비즈 이용 계약이 되어 있는 회사의 임직원께서는 위블 비즈 앱에서 비즈니스 프로필 생성 후, 비즈니스 프로필 상태에서 회사가 계약한 위블 비즈 상품을 이용할 수 있습니다.\n▶ 비즈니스 프로필 생성 : 위블 비즈 앱 - 왼쪽 상단 메뉴 - 사용자 정보 상단 [비즈니스 전환] 터치\n자세한 방법은 메뉴 > 하단의 '이용 가이드' > 비즈니스 프로필 안내 탭을 참고해주세요.\n* 비즈니스 프로필 생성 시, 회사 이메일 인증이 되지 않을 경우 고객센터로 문의해주시면 안내해드리겠습니다.\n* 재직 중인 회사의 위블 비즈 차량 이용과 관련한 자세한 내용은 사내 위블 비즈 담당자에게 문의하시기 바랍니다.`,
      },
      {
        category: "비즈니스(업무용)",
        subCategory: "프로필",
        question: "비즈니스 프로필이란 무엇인가요?",
        answer: `위블 비즈 이용 계약이 되어 있는 회사의 임직원께서는 위블 비즈 앱에서 비즈니스 프로필 생성 후, 비즈니스 프로필 상태에서 회사가 계약한 위블 비즈 상품을 이용할 수 있습니다.\n▶ 비즈니스 프로필 생성 : 위블 비즈 앱 - 왼쪽 상단 메뉴 - 사용자 정보 상단 [비즈니스 전환] 터치\n▶ 비즈니스 프로필 상태인지 확인 : 위블 비즈 앱 - 왼쪽 상단 메뉴 - 상단 사용자 정보에 회사명 및 팀명이 보이면 비즈니스 프로필 상태\n*개인 프로필 상태인 경우 [비즈니스 전환] 버튼을 눌러 비즈니스 프로필 상태로 전환할 수 있습니다.`,
      },
    ],
  },
];

export default function Faqs() {
  const [tab, setTab] = useState("서비스 도입");
  const [search, setSearch] = useState("");

  return (
    <div>
      <ul className="flex mb-[48px]">
        <li
          className={`w-full h-[56px] ${
            tab === "서비스 도입"
              ? "bg-midnight text-white font-semibold"
              : "bg-white text-midnight border border-[#cdd0d2]"
          }`}
        >
          <Link
            href={``}
            onClick={() => setTab("서비스 도입")}
            className="text-[20px] flex justify-center items-center p-[8px] h-full"
          >
            <span>서비스 도입</span>
          </Link>
        </li>
        <li
          className={`w-full h-[56px] ${
            tab === "서비스 이용"
              ? "bg-midnight text-white font-semibold"
              : "bg-white text-midnight border border-[#cdd0d2]"
          }`}
        >
          <Link
            href={``}
            onClick={() => setTab("서비스 이용")}
            className="text-[20px] flex justify-center items-center p-[8px] h-full"
          >
            <span>서비스 이용</span>
          </Link>
        </li>
      </ul>
      <form className="mb-[24px]">
        <div className="bg-[#f8f8f8] p-[24px] flex justify-center items-center">
          <div className="relative flex justify-end items-center border border-midnight bg-white">
            <input
              type="search"
              placeholder="찾으시는 내용을 입력해 주세요"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              className="w-full h-[56px] pl-[16px] pr-[94px] focus:outline-none placeholder:text-[18px] text-[18px] appearance-none"
            ></input>
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute inset-y-0 right-[55px] h-full w-[40px] text-[0px] before:m-auto before:block before:content-[''] before:bg-[url('/ic_clear.svg')] before:h-[24px] before:w-[24px] before:aspect-square before:bg-[auto_100%] before:bg-no-repeat"
              >
                다시입력
              </button>
            )}
            <button
              type="button"
              className="absolute inset-y-0 aspect-square right-0 h-full text-[0px] before:m-auto before:block before:content-[''] before:bg-[url('/ic_search.svg')] before:h-[32px] before:w-[32px] before:aspect-square before:bg-[auto_100%] before:bg-no-repeat"
            >
              검색
            </button>
          </div>
        </div>
      </form>
      {TEST_DATA.map((data, i) => {
        if (data.tab === "서비스 도입" && tab === "서비스 도입") {
          return <FaqContent data={data} key={String(i) + data.tab} />;
        } else if (data.tab === "서비스 이용" && tab === "서비스 이용") {
          return <FaqContent data={data} key={String(i) + data.tab} />;
        }
      })}
    </div>
  );
}
