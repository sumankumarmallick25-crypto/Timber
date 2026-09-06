const categories = ["T-Shirts", "Shirts", "Trousers", "Jeans", "Cargos", "Co-ords"];
const products = [
  { name: "Core Heavy Tee", price: "₹1,299", tone: "Charcoal" },
  { name: "Relaxed Oxford", price: "₹1,899", tone: "Stone" },
  { name: "Everyday Cargo", price: "₹2,299", tone: "Olive" },
  { name: "Straight Denim", price: "₹2,499", tone: "Raw Indigo" },
];

function Header() {
  return (
    <header className="border-b border-[var(--line)] bg-[var(--background)]">
      <div className="container flex h-16 items-center justify-between gap-6">
        <a href="#" className="text-xl font-black tracking-[0.22em]">TIMBER</a>
        <nav className="hidden items-center gap-7 text-sm md:flex" aria-label="Primary">
          {categories.slice(0, 4).map((item) => <a key={item} href="#shop" className="hover:opacity-60">{item}</a>)}
        </nav>
        <div className="flex items-center gap-4 text-sm">
          <a href="#shop" aria-label="Search">Search</a>
          <a href="#shop" className="hidden sm:inline">Account</a>
          <a href="#shop">Bag (0)</a>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <main>
      <Header />

      <section className="container grid min-h-[620px] items-end py-10 md:grid-cols-[1.2fr_.8fr] md:py-16">
        <div className="max-w-3xl pb-4">
          <p className="eyebrow mb-5">New season · 01 / 26</p>
          <h1 className="text-[clamp(4rem,11vw,9rem)] font-black leading-[.82] tracking-[-.07em]">BUILT<br />FOR<br /><span className="italic font-normal">EVERYDAY.</span></h1>
        </div>
        <div className="flex max-w-sm flex-col gap-6 border-l border-[var(--line)] pl-6 md:mb-6">
          <p className="text-lg leading-7">Modern menswear with a sharper point of view. Essential silhouettes, considered fabrics and no unnecessary noise.</p>
          <a href="#shop" className="w-fit border-b border-current pb-1 text-sm font-bold uppercase tracking-[.12em]">Shop new arrivals →</a>
        </div>
      </section>

      <section className="bg-[var(--accent)] py-20 text-[var(--background)]" id="shop">
        <div className="container">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div><p className="eyebrow mb-3 opacity-60">The edit</p><h2 className="text-4xl font-bold tracking-tight md:text-6xl">New arrivals</h2></div>
            <a href="#products" className="hidden text-sm uppercase tracking-[.12em] md:block">View all →</a>
          </div>
          <div id="products" className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-4 md:gap-x-5">
            {products.map((product, index) => (
              <article key={product.name}>
                <div className="mb-4 flex aspect-[4/5] items-end justify-between bg-[var(--surface)] p-4 text-[var(--foreground)]">
                  <span className="eyebrow">0{index + 1}</span><span className="text-xs">{product.tone}</span>
                </div>
                <h3 className="font-semibold">{product.name}</h3>
                <p className="mt-1 text-sm opacity-65">{product.price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-24">
        <p className="eyebrow mb-6">Shop by category</p>
        <div className="grid border-t border-[var(--line)] md:grid-cols-3">
          {categories.map((category, i) => <a key={category} href="#shop" className="flex items-center justify-between border-b border-[var(--line)] py-5 text-2xl font-semibold hover:pl-2 md:text-3xl"><span>0{i + 1}</span><span>{category}</span><span>↗</span></a>)}
        </div>
      </section>

      <section className="bg-[var(--surface)] py-24">
        <div className="container grid gap-10 md:grid-cols-2 md:items-end">
          <p className="eyebrow">The TIMBER standard</p>
          <div><h2 className="text-4xl font-bold leading-tight md:text-6xl">Less trend.<br />More character.</h2><p className="mt-6 max-w-lg text-base leading-7 text-[var(--muted)]">Pieces made to stay in rotation — easy to wear, hard to forget.</p></div>
        </div>
      </section>

      <footer className="border-t border-[var(--line)] py-10">
        <div className="container flex flex-col justify-between gap-6 text-sm md:flex-row"><span className="font-black tracking-[.22em]">TIMBER</span><span>© 2026 TIMBER. Made for the everyday.</span><div className="flex gap-5"><a href="#">Instagram</a><a href="#">Contact</a><a href="#">Policies</a></div></div>
      </footer>
    </main>
  );
}
