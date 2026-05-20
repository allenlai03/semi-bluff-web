import type { Metadata } from "next";
import Link from "next/link";
import {
  fetchGroupByInviteCode,
  fetchGroupMemberCount,
} from "@/lib/queries";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppStoreBadge } from "@/components/AppStoreBadge";
import { BrandMark } from "@/components/BrandMark";

export const revalidate = 600;

type Props = { params: Promise<{ code: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params;
  const group = await fetchGroupByInviteCode(code);
  if (!group) return { title: "Invite" };

  return {
    title: `Join ${group.name}`,
    description: `You've been invited to join ${group.name} on Straddled.`,
    openGraph: {
      title: `Join ${group.name} on Straddled`,
      description: `You've been invited to join ${group.name}.`,
    },
  };
}

export default async function InvitePage({ params }: Props) {
  const { code } = await params;
  const group = await fetchGroupByInviteCode(code);

  if (!group) {
    return (
      <>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 pt-32 text-center md:px-10">
          <span className="eyebrow">Invalid invite</span>
          <h1
            className="font-display mt-6 text-white"
            style={{
              fontSize: "clamp(2.25rem, 6vw, 4rem)",
              fontWeight: 500,
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            Invite expired.
          </h1>
          <p className="mt-6 max-w-[440px] text-[15px] leading-[1.6] text-white/60">
            This invite link is invalid or has expired. Ask whoever sent it to
            generate a new one from inside the app.
          </p>
          <div className="mt-10">
            <AppStoreBadge size="lg" />
          </div>
          <Link
            href="/"
            className="mt-6 text-[11px] uppercase tracking-[0.18em] text-white/40 transition-colors hover:text-[#D4B370]"
          >
            ← Straddled home
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const memberCount = await fetchGroupMemberCount(group.id);

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 pt-32 md:px-10">
        <div className="w-full max-w-[480px] rounded-3xl border border-[#D4B370]/[0.12] bg-[#0E0E0E] p-10 text-center md:p-12">
          <div className="mx-auto inline-flex">
            <BrandMark size={56} />
          </div>
          <p className="mt-8 text-[11px] uppercase tracking-[0.18em] text-white/40">
            You&apos;ve been invited to
          </p>
          <h1
            className="font-display mt-3 text-white"
            style={{
              fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: "-0.015em",
            }}
          >
            {group.name}
          </h1>
          <p className="mt-3 text-[13px] text-white/55">
            {memberCount} member{memberCount !== 1 ? "s" : ""}
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={`straddled://join/${code}`}
              className="rounded-full bg-[#D4B370] px-7 py-3.5 text-[15px] font-semibold text-black transition-colors hover:bg-[#E8C988]"
            >
              Open in Straddled
            </a>
            <AppStoreBadge variant="secondary" />
          </div>

          <p className="mt-8 text-[11px] uppercase tracking-[0.18em] text-white/40">
            New here? Install Straddled — your invite stays valid.
          </p>
        </div>

        <Link
          href="/"
          className="mt-8 text-[11px] uppercase tracking-[0.18em] text-white/40 transition-colors hover:text-[#D4B370]"
        >
          What is Straddled? →
        </Link>
      </main>
      <Footer />
    </>
  );
}
