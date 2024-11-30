import Link from "next/link";

export default function ServiceInquiry() {
  return (
    <div className="font-sans">
      <>
        <h2 className="mt-[64px] mb-[24px]">서비스 문의</h2>
        <div className="flex">
          <Link
            href={`/proposal.pdf`}
            target="_blank"
            className="border border-black px-[1.4em] flex items-center justify-center h-[80px] mx-[16px] w-full"
            download="위블비즈 상품제안서"
          >
            <i className="bg-[url('/ic_download.svg')] w-[48px] h-[48px] bg-contain bg-no-repeat bg-center mr-[8px]"></i>
            <span className="text-[18px] font-semibold">
              상품제안서 다운로드
            </span>
          </Link>
          <Link
            href={`/Counsel`}
            className="border border-black px-[1.4em] flex items-center justify-center h-[80px] mx-[16px] w-full"
          >
            <i className="bg-[url('/ic_write.svg')] w-[48px] h-[48px] bg-contain bg-no-repeat bg-center mr-[8px]"></i>
            <span className="text-[18px] font-semibold">상담문의 등록하기</span>
          </Link>
          <Link
            href={`https://pf.kakao.com/_xfLxjdb`}
            target="_blank"
            rel="noreferrer"
            className="border border-black px-[1.4em] flex items-center justify-center h-[80px] mx-[16px] w-full"
          >
            <i className="bg-[url('/ic_talk.svg')] w-[48px] h-[48px] bg-contain bg-no-repeat bg-center mr-[8px]"></i>
            <span className="text-[18px] font-semibold flex flex-col">
              카톡으로 문의하기
              <em className="text-[14px] not-italic font-normal">
                ID: Wible Biz (위블 비즈)
              </em>
            </span>
          </Link>
        </div>
      </>
    </div>
  );
}
