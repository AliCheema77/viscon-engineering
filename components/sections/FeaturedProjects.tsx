import FeaturedProjectsSlider from "@/components/sections/FeaturedProjectsSlider";
import { getProjects } from "@/sanity/lib/queries";

export default async function FeaturedProjects() {
  const projects = await getProjects();

  const featuredProjects = projects
    .filter((project) => project.featured)
    .sort((a, b) => a.order - b.order);

  return <FeaturedProjectsSlider projects={featuredProjects} />;
}