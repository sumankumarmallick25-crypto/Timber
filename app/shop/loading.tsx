export default function Loading() {
  return <main className="container py-20"><div className="h-8 w-40 animate-pulse bg-[var(--surface)]" /><div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">{Array.from({ length: 6 }).map((_, i) => <div key={i} className="aspect-[4/5] animate-pulse bg-[var(--surface)]" />)}</div></main>;
}
