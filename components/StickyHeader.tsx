export const StickyHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-bg-primary/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-2xl mx-auto flex items-center justify-between px-md py-sm">
        <a href="/" className="flex items-center gap-sm">
          <div className="w-8 h-8 rounded-md bg-accent-primary flex items-center justify-center text-[14px]">
            🃏
          </div>
          <span className="font-semibold text-[17px] text-text-primary">
            Semi Bluff
          </span>
        </a>
        <a
          href="https://apps.apple.com/app/semi-bluff/id0000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent-primary rounded-sm px-md py-xs font-semibold text-[13px] text-text-primary transition hover:opacity-90"
        >
          Get App
        </a>
      </div>
    </header>
  );
};
