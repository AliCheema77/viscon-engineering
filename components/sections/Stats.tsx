import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/content/services";
import { getProjects, getTeamMembers } from "@/sanity/lib/queries";

const OFFICE_COUNT = 2;

const pad = (value: number) => value.toString().padStart(2, "0");

export default async function Stats() {
  const [projects, team] = await Promise.all([
    getProjects(),
    getTeamMembers(),
  ]);

  const stats = [
    { label: "Projects", value: pad(projects.length) },
    { label: "Service Lines", value: pad(services.length) },
    { label: "Offices", value: pad(OFFICE_COUNT) },
    { label: "Team Members", value: pad(team.length) },
  ];

  return (
    <section className="bg-white py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="By The Numbers"
          title="Our Track Record"
          align="center"
        />

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 text-center"
            >
              <span className="font-display text-5xl font-bold text-brand-primary sm:text-6xl">
                {stat.value}
              </span>
              <span className="font-mono text-sm uppercase tracking-[0.2em] text-foreground/60">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
