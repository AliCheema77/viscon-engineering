import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import ProjectsSidebar, { categories } from "@/components/ProjectsSidebar";
import ProjectGallery from "@/components/ProjectGallery";
import ProjectCard, {
  categoryFallbackImage,
  statusLabel,
} from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Viscon Engineering`,
    description:
      project.description ??
      `${project.title} — a Viscon Engineering project in ${project.location}.`,
  };
}

export default async function ProjectDetailPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const galleryImages =
    project.images.length > 0
      ? project.images
      : [categoryFallbackImage[project.category]];

  const categoryLabel =
    categories.find((category) => category.slug === project.category)
      ?.title ?? project.category;

  const relatedProjects = projects
    .filter(
      (item) =>
        item.category === project.category && item.slug !== project.slug
    )
    .sort((a, b) => a.order - b.order)
    .slice(0, 3);

  const specs: { label: string; value: string }[] = [
    { label: "Client", value: project.client },
    { label: "Location", value: project.location },
    { label: "Category", value: categoryLabel },
    { label: "Status", value: statusLabel[project.status] },
  ];

  if (project.contractValue) {
    specs.push({
      label: "Contract Value",
      value: `PKR ${project.contractValue}M`,
    });
  }
  if (project.projectValue) {
    specs.push({
      label: "Project Value",
      value: `PKR ${project.projectValue}M`,
    });
  }

  return (
    <main className="flex-1 py-16">
      <Container className="flex flex-col gap-10 lg:flex-row lg:items-start">
        <ProjectsSidebar />

        <div className="flex flex-1 flex-col gap-10">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-brand-primary">
              {categoryLabel}
            </p>
            <h1 className="mt-2 font-display text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
              {project.title}
            </h1>
          </div>

          <ProjectGallery images={galleryImages} title={project.title} />

          {project.description ? (
            <p className="max-w-3xl font-sans text-base text-foreground/70">
              {project.description}
            </p>
          ) : null}

          <div className="grid grid-cols-1 gap-x-8 gap-y-4 rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:grid-cols-2">
            {specs.map((spec) => (
              <div key={spec.label} className="flex flex-col gap-1">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50">
                  {spec.label}
                </span>
                <span className="font-sans text-base text-foreground">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>

          {relatedProjects.length > 0 ? (
            <div className="flex flex-col gap-6">
              <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground">
                Related Projects
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedProjects.map((related) => (
                  <ProjectCard key={related.slug} project={related} />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </main>
  );
}
