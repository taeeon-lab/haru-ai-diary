export default function MyDiaryPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-8">
        내 일기
      </h1>

      <div className="bg-white rounded-xl shadow p-6 mb-4">
        <h2 className="font-bold">2026.07.10</h2>
        <p className="text-gray-600">
          오늘은 학교에서 친구들과 즐겁게 놀았다.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="font-bold">2026.07.09</h2>
        <p className="text-gray-600">
          시험공부를 열심히 했다.
        </p>
      </div>
    </main>
  );
}