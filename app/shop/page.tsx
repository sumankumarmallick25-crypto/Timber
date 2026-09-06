const products = [
  ["Core Heavy Tee", "₹1,299", "T-Shirts"],
  ["Relaxed Oxford", "₹1,899", "Shirts"],
  ["Everyday Cargo", "₹2,299", "Cargos"],
  ["Straight Denim", "₹2,499", "Jeans"],
  ["Utility Trouser", "₹2,099", "Trousers"],
  ["Relaxed Co-ord", "₹2,799", "Co-ords"],
];

export default function ShopPage() {
  return <main className="container py-12 md:py-20"><p className="eyebrow mb-3">Collection</p><div className="flex items-end justify-between border-b border-[var(--line)] pb-8"><h1 className="text-5xl font-bold tracking-tight md:text-7xl">Shop all</h1><span className="text-sm text-[var(--muted)]">{products.length} pieces</span></div><div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-3 md:gap-x-5">{products.map(([name, price, category], i) => <article key={name}><div className="mb-4 flex aspect-[4/5] items-end justify-between bg-[var(--surface)] p-4"><span className="eyebrow">0{i + 1}</span><span className="text-xs">{category}</span></div><h2 className="font-semibold">{name}</h2><p className="mt-1 text-sm text-[var(--muted)]">{price}</p></article>)}</div></main>;
}
