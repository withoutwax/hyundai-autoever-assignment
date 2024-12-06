import Link from "next/link";

export default async function Guide() {
  return (
    <div className="flex flex-col text-center justify-center items-center min-h-screen space-y-10">
      <h1 className="text-4xl">페이지가 비어있습니다</h1>
      <Link href="/faq">돌아가기</Link>
    </div>
  );
}
