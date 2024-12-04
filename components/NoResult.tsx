export default function NoResult() {
  return (
    <div
      className="py-[160px] flex flex-col justify-center items-center text-[18px] text-[#697278]
        before:content-[''] before:bg-[url('/ic_nodata.svg')] before:bg-[auto_100%] before:block before:bg-no-repeat before:w-[64px] before:h-[64px] before:mb-[16px]"
    >
      결과가 없습니다.
    </div>
  );
}
