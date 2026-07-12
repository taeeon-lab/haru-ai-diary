
import Navbar from "@/components/Navbar";
import Link from "next/link";
export default function StudentPage() {
  return (
    <main className="min-h-screen bg-gray-100">
        <Navbar />
      <header className="bg-blue-600 text-white p-5">
        <h1 className="text-3xl font-bold">학생 대시보드</h1>
      </header>

      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6">
          안녕하세요!
        </h2>

        <div className="grid grid-cols-2 gap-6">

         <Link href="/student/diary">
  <button className="bg-white shadow rounded-xl p-8 text-xl hover:shadow-lg w-full">
    📝 일기 작성
  </button>
</Link>

      
          <Link href="/student/mydiary">
    <button className="bg-white shadow rounded-xl p-8 text-xl hover:shadow-lg w-full">
      📖 내 일기
    </button>
  </Link>

            

      
            <Link href="/student/analysis">
    <button className="bg-white shadow rounded-xl p-8 text-xl hover:shadow-lg w-full">
      🤖 AI 분석
    </button>
  </Link>

         <Link href="/student/report">
    <button className="bg-white shadow rounded-xl p-8 text-xl hover:shadow-lg w-full">
      📈 성장 리포트
    </button>
  </Link>


        </div>
      </div>
    </main>
  );
}