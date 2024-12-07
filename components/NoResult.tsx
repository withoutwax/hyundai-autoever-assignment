export default function NoResult() {
  return (
    <div
      className="py-[160px] flex flex-col justify-center items-center text-[14px] md:text-[16px] lg:text-[18px] text-[#697278]
        before:content-[''] before:bg-[url('/ic_nodata.svg')] before:bg-[auto_100%] before:block before:bg-no-repeat before:w-[32px] before:h-[32px] before:md:w-[48px] before:md:h-[48px] before:lg:w-[64px] before:lg:h-[64px] before:mb-[8px] before:md:mb-[12px] before:lg:mb-[16px]"
    >
      결과가 없습니다.
    </div>
  );
}
