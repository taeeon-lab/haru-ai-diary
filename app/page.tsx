import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">
        HARU
      </h1>

      <p className="text-xl text-gray-700 mb-10">
        AI 손글씨 일기 플랫폼
      </p>

      <div className="flex flex-col gap-4 w-full max-w-sm">
        <Link href="/login">
          <button className="bg-blue-600 text-white py-3 rounded-xl text-lg w-full hover:bg-blue-700 transition">
            학생 로그인
          </button>
        </Link>

        <Link href="/teacher">
          <button className="bg-green-600 text-white py-3 rounded-xl text-lg w-full hover:bg-green-700 transition">
            교사 로그인
          </button>
        </Link>

        <Link href="/signup">
          <button className="bg-gray-800 text-white py-3 rounded-xl text-lg w-full hover:bg-gray-900 transition">
            회원가입
          </button>
        </Link>
      </div>

      <p className="mt-10 text-gray-500 text-sm">
        © 2026 HARU. All rights reserved.
      </p>
    </main>
  );
}