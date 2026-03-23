import { AppStoreButtons } from "@/components/AppStoreButtons";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-bg-primary flex flex-col items-center justify-center px-md">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-lg text-6xl">🃏</div>
        <h1 className="text-[20px] font-semibold leading-[26px] text-text-primary mb-sm">
          Page Not Found
        </h1>
        <p className="text-[15px] text-text-secondary mb-xl leading-[22px]">
          This page doesn&apos;t exist or the link may have expired.
        </p>
        <AppStoreButtons />
      </div>
    </main>
  );
}
