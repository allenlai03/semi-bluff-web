import { AppStoreButtons } from "@/components/AppStoreButtons";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary flex flex-col items-center justify-center px-md">
      <div className="max-w-lg mx-auto text-center">
        <div className="mb-lg inline-flex h-16 w-16 items-center justify-center rounded-xl bg-accent-primary text-2xl">
          🃏
        </div>
        <h1 className="text-[28px] font-bold leading-[34px] text-text-primary mb-sm">
          Semi Bluff
        </h1>
        <p className="text-[15px] text-text-secondary mb-xl leading-[22px]">
          Poker night, settled. Track buy-ins, results, and who owes whom.
        </p>
        <AppStoreButtons />
      </div>
    </main>
  );
}
