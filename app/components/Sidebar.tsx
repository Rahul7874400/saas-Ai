import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-white p-6">
      <h2 className="mb-8 text-xl font-bold text-indigo-600">
        AI SaaS
      </h2>

      <nav className="space-y-2">
        <Link
          href="/dashboard"
          className="block rounded px-3 py-2 text-gray-700 hover:bg-gray-100"
        >
          Dashboard
        </Link>

        <Link
          href="/dashboard/generate"
          className="block rounded px-3 py-2 text-gray-700 hover:bg-gray-100"
        >
          Generate
        </Link>

        <Link
          href="/dashboard/billing"
          className="block rounded px-3 py-2 text-gray-700 hover:bg-gray-100"
        >
          Billing
        </Link>
      </nav>
    </aside>
  );
}
