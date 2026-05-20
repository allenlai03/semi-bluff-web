import type { Metadata } from "next";
import Link from "next/link";
import {
  fetchGroupByInviteCode,
  fetchGroupMemberCount,
} from "@/lib/queries";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/Card";
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
        <main className="flex min-h-screen flex-col items-center justify-center bg-bg-primary px-md pt-xxxl text-center">
          <span className="eyebrow">Invalid Invite</span>
          <h1 className="mt-md font-display text-[40px] font-bold leading-[1.05] text-text-primary">
            Invite expired.
          </h1>
          <p className="mt-md max-w-[420px] text-[15px] leading-[24px] text-text-secondary">
            This invite link is invalid or has expired. Ask whoever sent it to
            generate a new one from inside the app.
          </p>
          <div className="mt-xl">
            <AppStoreBadge />
          </div>
          <Link
            href="/"
            className="mt-md text-[12px] uppercase tracking-caps text-text-tertiary transition hover:text-gold"
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
      <main className="flex min-h-screen flex-col items-center justify-center bg-bg-primary px-md pt-xxxl">
        <Card className="w-full max-w-[480px] p-xl text-center md:p-xxl">
          <div className="mx-auto inline-flex">
            <BrandMark size={56} />
          </div>
          <span className="mt-lg block text-[11px] uppercase tracking-caps text-text-tertiary">
            You&apos;ve been invited to
          </span>
          <h1 className="mt-xs font-display text-[32px] font-semibold leading-[1.1] text-text-primary">
            {group.name}
          </h1>
          <p className="mt-sm text-[13px] text-text-secondary">
            {memberCount} member{memberCount !== 1 ? "s" : ""}
          </p>

          <div className="mt-xl flex flex-col gap-sm">
            <a
              href={`straddled://join/${code}`}
              className="rounded-xl bg-gold px-lg py-md font-display text-[16px] font-semibold text-text-inverse transition hover:bg-gold-light"
            >
              Open in Straddled
            </a>
            <AppStoreBadge />
          </div>

          <p className="mt-lg text-[12px] uppercase tracking-caps text-text-tertiary">
            New here? Install Straddled — your invite stays valid.
          </p>
        </Card>

        <Link
          href="/"
          className="mt-lg text-[12px] uppercase tracking-caps text-text-tertiary transition hover:text-gold"
        >
          What is Straddled? →
        </Link>
      </main>
      <Footer />
    </>
  );
}
