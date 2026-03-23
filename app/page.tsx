import { AppStoreButtons } from "@/components/AppStoreButtons";

export default function Home() {
  return (
    <main className="bg-grid flex min-h-screen flex-col items-center justify-center px-6">
      <div className="mx-auto max-w-lg text-center">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-600 text-2xl">
          🃏
        </div>
        <h1 className="mb-3 text-4xl font-bold tracking-tight">Semi Bluff</h1>
        <p className="mb-8 text-lg text-white/50">
          Poker night, settled. Track buy-ins, results, and who owes whom.
        </p>
        <AppStoreButtons />
      </div>
    </main>
  );
}
