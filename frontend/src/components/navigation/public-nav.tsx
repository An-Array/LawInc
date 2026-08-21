import Link from "next/link";

export default function PublicNav() {
  return (
    <nav className="flex items-center gap-6 border-b border-slate-800 px-6 py-4">
      <Link
        href="/"
        className="font-semibold text-black"
      >
        LawInc
      </Link>

      <Link
        href="/search"
        className="text-sm text-black-300 hover:text-gray-400"
      >
        Search
      </Link>

      <Link
        href="/ask"
        className="text-sm text-black-300 hover:text-gray-400"
      >
        Ask
      </Link>

      <Link
        href="/admin"
        className="text-sm text-black-300 hover:text-gray-400"
      >
        Admin
      </Link>
    </nav>
  );
}