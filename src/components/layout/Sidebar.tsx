import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Overview" },
  { href: "/usage", label: "API Usage" },
  { href: "/projects", label: "Projects" },
  { href: "/sessions", label: "Sessions" },
];

export function Sidebar() {
  return (
    <aside className="flex w-56 flex-col border-r border-slate-800 bg-slate-900 p-4">
      <div className="mb-8">
        <h1 className="text-lg font-bold text-slate-100">Claude Dashboard</h1>
        <p className="text-xs text-slate-500">API Monitor</p>
      </div>
      <nav className="flex flex-col gap-1">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-lg px-3 py-2 text-sm text-slate-400 transition-colors hover:bg-slate-800 hover:text-slate-100"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
