import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { company } from "@/content/company";

export default function Certifications() {
  return (
    <section className="bg-brand-tint/40 py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          align="center"
        />

        <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {company.affiliations.map((affiliation) => (
            <div
              key={affiliation}
              className="flex flex-col items-center gap-3 rounded-2xl border border-brand-primary/20 bg-white p-8 text-center shadow-sm"
            >
              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary/10 font-display text-xl font-bold text-brand-primary"
              >
                &#10003;
              </span>
              <p className="font-sans text-base font-semibold text-foreground">
                {affiliation}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
