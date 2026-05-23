export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-3xl animate-pulse">
        <div className="h-10 w-64 rounded bg-zinc-200" />
        <div className="mt-4 h-6 w-full rounded bg-zinc-200" />
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="overflow-hidden rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
            <div className="aspect-[3/4] animate-pulse rounded-xl bg-zinc-100" />
            <div className="mt-6 space-y-3">
              <div className="h-3 w-20 animate-pulse rounded bg-zinc-200" />
              <div className="h-6 w-full animate-pulse rounded bg-zinc-200" />
              <div className="h-4 w-full animate-pulse rounded bg-zinc-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
