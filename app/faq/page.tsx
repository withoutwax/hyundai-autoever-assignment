import AppInfo from "@/components/AppInfo";
import ProcessInfo from "@/components/ProcessInfo";
import ServiceInquiry from "@/components/ServiceInquiry";
import Faqs from "@/components/Faqs";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { fetchPageData, fetchFaqData } from "@/app/actions";

export default async function Faq() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["page"],
    queryFn: fetchPageData,
  });
  await queryClient.prefetchQuery({
    queryKey: ["faq"],
    queryFn: fetchFaqData,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="px-[48px] pb-[80px] lg:pb-[96px]">
        <div className="max-w-[1240px] mx-auto">
          <h1 className="flex flex-col justify-center items-center h-[222px]">
            자주 묻는 질문
            <em className="text-[18px] leading-[1.6rem] text-center break-keep mt-[0.4em] not-italic font-normal">
              궁금하신 내용을 빠르게 찾아보세요.
            </em>
          </h1>
          <Faqs />
          <ServiceInquiry />
          <ProcessInfo />
          <AppInfo />
        </div>
      </div>
    </HydrationBoundary>
  );
}
