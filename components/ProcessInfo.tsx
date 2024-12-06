import { v4 as uuidv4 } from "uuid";

const PROCESS_INFO = [
  {
    icon: "bg-[url('/ic_process01.svg')]",
    title: "1. 문의 등록",
    description:
      "상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.",
  },
  {
    icon: "bg-[url('/ic_process02.svg')]",
    title: "2. 관리자 설정",
    description: "관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다.",
  },
  {
    icon: "bg-[url('/ic_process03.svg')]",
    title: "3. 임직원 가입",
    description: "사용자 App에서 회원가입 후 소속 회사 인증을 진행합니다.",
  },
  {
    icon: "bg-[url('/ic_process04.svg')]",
    title: "4. 서비스 이용",
    description: "사용자 App에서 차량 예약을 하고 위블존에서 바로 이용하세요!",
  },
];

export default function ProcessInfo() {
  return (
    <>
      <h2 className="mt-[64px] mb-[24px]">이용 프로세스 안내</h2>
      <ol className="flex flex-col lg:flex-row space-y-[24px] lg:space-y-0">
        {PROCESS_INFO.map(({ icon, title, description }, i) => {
          return (
            <li
              className="mx-[16px] lg:px-[24px] w-full flex lg:flex-col relative space-x-[16px] lg:space-x-0"
              key={uuidv4()}
            >
              <i
                className={`${icon} w-[48px] lg:w-[56px] h-[48px] lg:h-[56px] aspect-square bg-no-repeat bg-contain lg:mb-[8px]`}
              ></i>
              <span
                className={`flex flex-col text-[18px] lg:text-[16px] ${
                  i === 0 ? "before:hidden" : ""
                } before:hidden before:lg:inline-block before:content-[''] before:absolute before:bg-[url('/ic_step_arrow.svg')] before:bg-no-repeat before:bg-contain before:h-[24px] before:w-[24px] before:-left-4`}
              >
                <strong>{title}</strong>
                <em className="text-[16px] leading-[22.4px] lg:leading-[24px] not-italic font-normal text-[#36434c] mt-[8px]">
                  {description}
                </em>
              </span>
            </li>
          );
        })}
      </ol>
    </>
  );
}
