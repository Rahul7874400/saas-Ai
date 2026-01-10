export default function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <p className="text-sm text-gray-600">
        Welcome back 👋
      </p>

      <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
        Generate AI
      </button>
    </header>
  );
}
