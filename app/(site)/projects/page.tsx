import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ProjectCard from "@/components/ProjectCard";
import ProjectsSidebar, { type StatusBucket } from "@/components/ProjectsSidebar";
import { projects, type ProjectCategory } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects | Viscon Engineering",
  description:
    "Browse Viscon Engineering's completed and ongoing projects across commercial, residential, farmhouse, MEP, chemical proofing, and civil works.",
};

function isStatusBucket(value: string | undefined): value is StatusBucket {
  return value === "ongoing" || value === "completed";
}

function isProjectCategory(value: string | undefined): value is ProjectCategory {
  return (
    value === "commercial" ||
    value === "farmhouse" ||
    value === "residential" ||
    value === "mep" ||
    value === "chemical-proofing" ||
    value === "civil-works"
  );
}

export default async function ProjectsPage({
  searchParams,
}: PageProps<"/projects">) {
  const params = await searchParams;
  const statusParam =
    typeof params.status === "string" ? params.status : undefined;
  const categoryParam =
    typeof params.category === "string" ? params.category : undefined;

  const activeStatus = isStatusBucket(statusParam) ? statusParam : undefined;
  const activeCategory = isProjectCategory(categoryParam)
    ? categoryParam
    : undefined;

  const filteredProjects = projects
    .filter((project) => {
      if (activeStatus === "ongoing" && project.status === "completed") {
        return false;
      }
      if (activeStatus === "completed" && project.status !== "completed") {
        return false;
      }
      if (activeCategory && project.category !== activeCategory) {
        return false;
      }
      return true;
    })
    .sort((a, b) => a.order - b.order);

  return (
    <main className="flex-1 py-16">
      <Container className="flex flex-col gap-10 lg:flex-row lg:items-start">
        <ProjectsSidebar
          activeStatus={activeStatus}
          activeCategory={activeCategory}
        />

        <div className="flex flex-1 flex-col gap-8">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-brand-primary">
              Our Work
            </p>
            <h1 className="mt-2 font-display text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
              Projects
            </h1>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <p className="font-sans text-base text-foreground/60">
              No projects match this filter yet.
            </p>
          )}
        </div>
      </Container>
    </main>
  );
}
