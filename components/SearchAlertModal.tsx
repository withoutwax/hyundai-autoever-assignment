"use client";

import { Dispatch, SetStateAction } from "react";

export default function SearchAlertModal({
  modalOpen,
  toggleModal,
}: {
  modalOpen: boolean;
  toggleModal: (state: boolean) => void;
}) {
  return (
    <div
      className={`fixed w-screen h-screen flex justify-center items-center p-[24px] lg:px-0 lg:py-[48px] inset-0 bg-black/30 z-[60] m-0 transition-all ${
        modalOpen ? "" : "-translate-y-2 opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative bg-white text-black px-[40px] w-[425px]">
        <div className="flex flex-col items-center py-[40px] gap-[24px]">
          <p className="text-[18px]">검색어는 2글자 이상 입력해주세요.</p>
          <button
            type="button"
            onClick={() => toggleModal(false)}
            className="border border-black w-[135px] px-[18px] h-[50px] flex items-center justify-center text-[18px] font-bold"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
