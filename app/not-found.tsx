import { AppStoreButtons } from "@/components/AppStoreButtons";

export default function NotFound() {
  return (
    <main className="bg-grid flex min-h-screen flex-col items-center justify-center px-6">
      <div className="mx-auto max-w-md text-center">
        <div className="mb-6 text-6xl">🃏</div>
        <h1 className="mb-2 text-2xl font-bold">Page Not Found</h1>
        <p className="mb-8 text-white/40">
          This page doesn&apos;t exist or the link may have expired.
        </p>
        <AppStoreButtons />
      </div>
    </main>
  );
}
