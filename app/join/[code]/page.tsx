import { notFound } from "next/navigation";
import { getGroupByInviteCode, getGroupMemberCount } from "@/lib/queries";
import { AppStoreButtons } from "@/components/AppStoreButtons";
import type { Metadata } from "next";

export const revalidate = 600; // ISR: 10 minutes

type Props = { params: Promise<{ code: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params;
  const group = await getGroupByInviteCode(code);
  if (!group) return { title: "Invite — Semi Bluff" };

  return {
    title: `Join ${group.name} — Semi Bluff`,
    description: `You've been invited to join ${group.name} on Semi Bluff`,
    openGraph: {
      title: `Join ${group.name} on Semi Bluff`,
      description: `You've been invited to join ${group.name}`,
    },
  };
}

export default async function InvitePage({ params }: Props) {
  const { code } = await params;
  const group = await getGroupByInviteCode(code);

  if (!group) {
    return (
      <main className="bg-grid flex min-h-screen flex-col items-center justify-center px-6">
        <div className="mx-auto max-w-md text-center">
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-xl">
            ❌
          </div>
          <h1 className="mb-2 text-2xl font-bold">Group Not Found</h1>
          <p className="mb-8 text-white/40">
            This invite link is invalid or has expired.
          </p>
          <AppStoreButtons />
        </div>
      </main>
    );
  }

  const memberCount = await getGroupMemberCount(group.id);

  return (
    <main className="bg-grid flex min-h-screen flex-col items-center justify-center px-6">
      <div className="mx-auto max-w-md text-center">
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600 text-xl">
          🃏
        </div>
        <h1 className="mb-2 text-2xl font-bold">Join {group.name}</h1>
        <p className="mb-2 text-white/40">
          {memberCount} member{memberCount !== 1 ? "s" : ""}
        </p>
        <p className="mb-8 text-sm text-white/30">
          You&apos;ve been invited to join this poker group on Semi Bluff.
        </p>

        {/* Deep link button — Universal Links intercept if app installed */}
        <a
          href={`https://semibluff.app/join/${code}`}
          className="mb-4 inline-flex w-full max-w-xs items-center justify-center rounded-xl bg-violet-600 px-6 py-3.5 font-semibold text-white transition hover:bg-violet-500"
        >
          Open in Semi Bluff
        </a>

        <div className="mt-6">
          <p className="mb-4 text-xs text-white/30 uppercase tracking-wider">
            Don&apos;t have the app?
          </p>
          <AppStoreButtons />
        </div>
      </div>
    </main>
  );
}
