import Link from "next/link";

export default function AppInfo() {
  return (
    <div className="mt-[64px] bg-[#f8f8f8] rounded-[16px] p-[40px] flex flex-col items-center justify-center">
      <h2 className="mb-[32px] text-[32px]">
        <em className="not-italic text-mint">위블 비즈 App</em>
        {` `}지금 만나보세요!
      </h2>
      <div className="flex">
        <Link
          href="https://play.google.com/store/apps/details?id=kor.mop.user.app"
          target="_blank"
          rel="noreferrer"
          className="bg-white rounded-[18px] mx-[16px] w-[392px] h-[64px] flex justify-center items-center font-bold text-[18px] before:bg-[url('/logo_googleplay.svg')] before:bg-no-repeat before:bg-contain before:w-[32px] before:h-[32px] before:mr-[4px]"
        >
          Google Play
        </Link>
        <Link
          href="https://apps.apple.com/kr/app/%EC%9C%84%EB%B8%94-%EB%B9%84%EC%A6%88/id1598065794"
          target="_blank"
          rel="noreferrer"
          className="bg-white rounded-[18px] mx-[16px] w-[392px] h-[64px] flex justify-center items-center font-bold text-[18px] before:bg-[url('/logo_appstore.svg')] before:bg-no-repeat before:bg-contain before:w-[32px] before:h-[32px] before:mr-[4px]"
        >
          App Store
        </Link>
      </div>
    </div>
  );
}
