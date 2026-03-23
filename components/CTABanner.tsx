import { AppStoreButtons } from "./AppStoreButtons";

export const CTABanner = () => {
  return (
    <section className="bg-surface-primary border border-border rounded-lg p-lg text-center">
      <p className="font-semibold text-[17px] text-text-primary mb-xs">
        Track your poker games.
      </p>
      <p className="text-[13px] text-text-secondary mb-md">
        Buy-ins, results, settlements — all in one app.
      </p>
      <div className="flex justify-center">
        <AppStoreButtons />
      </div>
    </section>
  );
};
