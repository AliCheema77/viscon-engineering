import Link from "next/link";
import type { ProjectCategory } from "@/content/projects";

const categories: { slug: ProjectCategory; title: string }[] = [
  { slug: "commercial", title: "Commercial" },
  { slug: "farmhouse", title: "Farmhouse" },
  { slug: "residential", title: "Residential" },
  { slug: "mep", title: "MEP" },
  { slug: "chemical-proofing", title: "Chemical Proofing" },
  { slug: "civil-works", title: "Civil Works" },
];

export type StatusBucket = "ongoing" | "completed";

type ProjectsSidebarProps = {
  activeStatus?: StatusBucket;
  activeCategory?: ProjectCategory;
};

function buildHref(status: StatusBucket, category: ProjectCategory) {
  const params = new URLSearchParams({ status, category });
  return `/projects?${params.toString()}`;
}

function CategoryLink({
  status,
  category,
  isActive,
}: {
  status: StatusBucket;
  category: { slug: ProjectCategory; title: string };
  isActive: boolean;
}) {
  return (
    <Link
      href={buildHref(status, category.slug)}
      className={`block rounded-lg px-3 py-2 font-sans text-sm transition-colors ${
        isActive
          ? "bg-brand-primary text-white"
          : "text-foreground/70 hover:bg-brand-primary/10 hover:text-brand-primary"
      }`}
    >
      {category.title}
    </Link>
  );
}

export default function ProjectsSidebar({
  activeStatus,
  activeCategory,
}: ProjectsSidebarProps) {
  return (
    <aside className="flex w-full flex-col gap-8 lg:w-64 lg:shrink-0">
      <Link
        href="/projects"
        className={`inline-flex items-center gap-2 font-sans text-sm font-semibold transition-colors ${
          !activeStatus && !activeCategory
            ? "text-brand-primary"
            : "text-foreground/70 hover:text-brand-primary"
        }`}
      >
        <span aria-hidden="true">&#8634;</span> All Projects
      </Link>

      <div className="flex flex-col gap-3">
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50">
          On-going Projects
        </h3>
        <nav className="flex flex-col gap-1">
          {categories.map((category) => (
            <CategoryLink
              key={`ongoing-${category.slug}`}
              status="ongoing"
              category={category}
              isActive={
                activeStatus === "ongoing" && activeCategory === category.slug
              }
            />
          ))}
        </nav>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50">
          Completed Projects
        </h3>
        <nav className="flex flex-col gap-1">
          {categories.map((category) => (
            <CategoryLink
              key={`completed-${category.slug}`}
              status="completed"
              category={category}
              isActive={
                activeStatus === "completed" &&
                activeCategory === category.slug
              }
            />
          ))}
        </nav>
      </div>
    </aside>
  );
}
