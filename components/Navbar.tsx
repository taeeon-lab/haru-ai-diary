export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">HARU</h1>

      <div className="space-x-4">
        <button>학생</button>
        <button>교사</button>
      </div>
    </nav>
  );
}