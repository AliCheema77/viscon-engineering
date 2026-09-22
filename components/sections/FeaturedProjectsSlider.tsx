"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Project } from "@/content/projects";

const PROJECTS_PER_PAGE = 3;

type FeaturedProjectsSliderProps = {
  projects: Project[];
};

export default function FeaturedProjectsSlider({
  projects,
}: FeaturedProjectsSliderProps) {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const start = page * PROJECTS_PER_PAGE;
  const visibleProjects = projects.slice(start, start + PROJECTS_PER_PAGE);

  return (
    <section className="bg-brand-tint/40 py-20">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Our Work"
            title="Featured Projects"
            description="A selection of completed and ongoing work across our project categories."
          />

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setPage((current) => Math.max(current - 1, 0))}
              disabled={page === 0}
              aria-label="Previous projects"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-primary/30 text-brand-primary transition-colors hover:bg-brand-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-brand-primary"
            >
              <span aria-hidden="true">&larr;</span>
            </button>
            <button
              type="button"
              onClick={() =>
                setPage((current) => Math.min(current + 1, totalPages - 1))
              }
              disabled={page === totalPages - 1}
              aria-label="Next projects"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-primary/30 text-brand-primary transition-colors hover:bg-brand-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-brand-primary"
            >
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}