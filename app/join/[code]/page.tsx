import { fetchGroupByInviteCode, fetchGroupMemberCount } from "@/lib/queries";
import { AppStoreButtons } from "@/components/AppStoreButtons";
import type { Metadata } from "next";

export const revalidate = 600;

type Props = { params: Promise<{ code: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params;
  const group = await fetchGroupByInviteCode(code);
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
  const group = await fetchGroupByInviteCode(code);

  if (!group) {
    return (
      <main className="min-h-screen bg-bg-primary flex flex-col items-center justify-center px-md">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-lg inline-flex h-14 w-14 items-center justify-center rounded-xl bg-surface-elevated text-xl">
            ❌
          </div>
          <h1 className="text-[20px] font-semibold leading-[26px] text-text-primary mb-sm">
            Invalid Invite Code
          </h1>
          <p className="text-[15px] text-text-secondary mb-xl leading-[22px]">
            This invite link is invalid or has expired.
          </p>
          <AppStoreButtons />
        </div>
      </main>
    );
  }

  const memberCount = await fetchGroupMemberCount(group.id);

  return (
    <main className="min-h-screen bg-bg-primary flex flex-col items-center justify-center px-md">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-lg inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent-primary text-xl">
          🃏
        </div>
        <h1 className="text-[20px] font-semibold leading-[26px] text-text-primary mb-xs">
          Join {group.name}
        </h1>
        <p className="text-[13px] text-text-secondary mb-sm">
          {memberCount} member{memberCount !== 1 ? "s" : ""}
        </p>
        <p className="text-[15px] text-text-secondary mb-xl leading-[22px]">
          You&apos;ve been invited to join this poker group on Semi Bluff.
        </p>

        {/* Deep link button */}
        <a
          href={`https://semibluff.app/join/${code}`}
          className="block w-full max-w-xs mx-auto bg-accent-primary rounded-lg px-md py-md font-semibold text-[15px] text-text-primary text-center transition hover:opacity-90 mb-lg"
        >
          Open in Semi Bluff
        </a>

        <div>
          <p className="text-[11px] font-medium tracking-[0.5px] text-text-tertiary uppercase mb-md">
            Don&apos;t have the app?
          </p>
          <AppStoreButtons />
        </div>
      </div>
    </main>
  );
}
