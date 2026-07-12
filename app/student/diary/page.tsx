export default function DiaryPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-8">
        오늘의 일기
      </h1>

      <textarea
        className="w-full h-80 border rounded-xl p-5"
        placeholder="오늘 있었던 일을 자유롭게 작성해보세요."
      />

      <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-xl">
        저장하기
      </button>
    </main>
  );
}