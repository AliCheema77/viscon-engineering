import Image from "next/image";
import type { TeamMember } from "@/content/team";

type TeamMemberCardProps = {
  member: TeamMember;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-brand-primary/10">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="96px"
            className="object-cover"
          />
        ) : (
          <span className="font-display text-2xl font-bold text-brand-primary">
            {getInitials(member.name)}
          </span>
        )}
      </div>

      <div>
        <p className="font-sans text-base font-semibold text-foreground">
          {member.name}
        </p>
        <p className="font-sans text-sm text-foreground/60">{member.role}</p>
      </div>
    </div>
  );
}
