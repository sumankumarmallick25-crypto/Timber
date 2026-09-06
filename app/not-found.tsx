import Link from "next/link";

export default function NotFound() {
  return <main className="container flex min-h-[70vh] flex-col justify-center"><p className="eyebrow mb-4">404</p><h1 className="max-w-2xl text-5xl font-bold tracking-tight md:text-7xl">That page doesn't exist.</h1><p className="mt-6 max-w-md text-[var(--muted)]">The page may have moved, or the link may be wrong.</p><Link href="/" className="mt-8 w-fit border-b border-current pb-1 text-sm font-bold uppercase tracking-[.12em]">Back home →</Link></main>;
}
