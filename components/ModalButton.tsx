"use client";

import { useState } from "react";

export default function ModalButton({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = (state: boolean) => {
    if (state) {
      setIsOpen(true);

      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      setIsOpen(false);

      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => toggleModal(true)}
        className="hover:underline"
      >
        {title}
      </button>
      <Modal content={content} isOpen={isOpen} toggleModal={toggleModal} />
    </>
  );
}

const Modal = ({
  content,
  isOpen,
  toggleModal,
}: {
  content: string;
  isOpen: boolean;
  toggleModal: (state: boolean) => void;
}) => {
  return (
    <div
      className={`fixed w-screen h-screen flex justify-center items-center p-[24px] lg:px-0 lg:py-[48px] inset-0 bg-black/30 z-[60] m-0 transition-all ${
        isOpen ? "" : "-translate-y-2 opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative bg-white text-black w-full max-w-[960px] h-full px-[40px] flex flex-col">
        <div className="flex justify-between pt-[16px] h-[82px] items-center border-b-2 border-black">
          <h2>개인정보 처리방침</h2>
          <button
            type="button"
            onClick={() => toggleModal(false)}
            className="text-[0px] 
                      bg-[url('/ic_close.svg')] bg-no-repeat bg-[auto_100%] p-[16px] w-[32px] h-[32px]"
          >
            닫기
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center">{content}</div>
      </div>
    </div>
  );
};
