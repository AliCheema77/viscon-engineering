import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TeamGrid from "@/components/TeamGrid";
import { company } from "@/content/company";

export default function About() {
  return (
    <section className="bg-white py-20">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Who We Are"
            title="About & Team"
            align="center"
          />

          <blockquote className="mx-auto max-w-3xl border-l-4 border-brand-primary pl-6 text-center font-display text-2xl italic text-foreground sm:text-3xl">
            &ldquo;{company.mission}&rdquo;
          </blockquote>
        </div>

        <TeamGrid />
      </Container>
    </section>
  );
}
