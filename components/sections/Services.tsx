import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import type { ProjectCategory } from "@/content/projects";

const categories: { slug: ProjectCategory; title: string; image: string }[] = [
  {
    slug: "commercial",
    title: "Commercial",
    image: "/images/expertise/commercial.jpg",
  },
  {
    slug: "farmhouse",
    title: "Farmhouse",
    image: "/images/expertise/farmhouse.jpg",
  },
  {
    slug: "residential",
    title: "Residential",
    image: "/images/expertise/residential.jpg",
  },
  {
    slug: "mep",
    title: "MEP",
    image: "/images/expertise/mep.jpg",
  },
  {
    slug: "chemical-proofing",
    title: "Chemical Proofing",
    image: "/images/expertise/chemical-proofing.jpg",
  },
  {
    slug: "civil-works",
    title: "Civil Works",
    image: "/images/expertise/civil-works.jpg",
  },
];

export default function Services() {
  return (
    <section id="expertise" className="scroll-mt-20 py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="What We Do"
          title="Our Expertise"
          description="Six categories of work, one integrated team — from first drawing to final handover."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <ServiceCard
              key={category.slug}
              categorySlug={category.slug}
              title={category.title}
              image={category.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
