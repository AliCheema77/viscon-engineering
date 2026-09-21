import Image from "next/image";
import Link from "next/link";
import type { Project, ProjectCategory, ProjectStatus } from "@/content/projects";

export const categoryFallbackImage: Record<ProjectCategory, string> = {
  commercial: "/images/expertise/commercial.jpg",
  farmhouse: "/images/expertise/farmhouse.jpg",
  residential: "/images/expertise/residential.jpg",
  mep: "/images/expertise/mep.jpg",
  "chemical-proofing": "/images/expertise/chemical-proofing.jpg",
  "civil-works": "/images/expertise/civil-works.jpg",
};

export const statusLabel: Record<ProjectStatus, string> = {
  completed: "Completed",
  ongoing: "Ongoing",
  "in-progress": "In Progress",
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const image = project.images[0] ?? categoryFallbackImage[project.category];
  const value = project.projectValue ?? project.contractValue;

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
      <div className="relative aspect-4/3 w-full">
        <Image
          src={image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <span className="absolute top-3 right-3 rounded-full bg-brand-deep/90 px-3 py-1 font-mono text-xs uppercase tracking-wide text-white">
          {statusLabel[project.status]}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-sans text-lg font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="font-sans text-sm text-foreground/60">{project.location}</p>
        <p className="font-sans text-sm text-foreground/60">
          Client: {project.client}
        </p>
        {value ? (
          <p className="font-mono text-sm text-brand-primary">
            Project Value: PKR {value}M
          </p>
        ) : null}

        <Link
          href={`/projects/${project.slug}`}
          className="mt-auto inline-flex w-fit items-center gap-1 pt-2 font-sans text-sm font-semibold text-brand-primary hover:underline"
        >
          See More <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
