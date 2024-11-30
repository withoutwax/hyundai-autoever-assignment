import ProcessInfo from "@/components/ProcessInfo";
import ServiceInquiry from "@/components/ServiceInquiry";

export default function Faq() {
  return (
    <div className="px-[48px]">
      <div className="max-w-[1240px] mx-auto">
        <h1 className="flex flex-col justify-center items-center h-[222px]">
          자주 묻는 질문
          <em className="text-[18px] leading-[1.6rem] text-center break-keep mt-[0.4em] not-italic font-normal">
            궁금하신 내용을 빠르게 찾아보세요.
          </em>
        </h1>
        <ServiceInquiry />
        <ProcessInfo />
      </div>
    </div>
  );
}
