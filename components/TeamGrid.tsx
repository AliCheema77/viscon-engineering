import TeamMemberCard from "@/components/TeamMemberCard";
import type { TeamGroup } from "@/content/team";
import { getTeamMembers } from "@/sanity/lib/queries";

const groupOrder: { key: TeamGroup; label: string }[] = [
  { key: "executive", label: "Executive" },
  { key: "management", label: "Management" },
  { key: "architecture", label: "Architecture" },
  { key: "civil-structure", label: "Civil & Structure" },
  { key: "site-staff", label: "Site Staff" },
];

export default async function TeamGrid() {
  const team = await getTeamMembers();

  return (
    <div className="flex flex-col gap-12">
      {groupOrder.map(({ key, label }) => {
        const members = team
          .filter((member) => member.group === key)
          .sort((a, b) => a.order - b.order);

        if (members.length === 0) {
          return null;
        }

        return (
          <div key={key} className="flex flex-col gap-6">
            <h3 className="font-mono text-sm uppercase tracking-[0.3em] text-brand-primary">
              {label}
            </h3>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
              {members.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
