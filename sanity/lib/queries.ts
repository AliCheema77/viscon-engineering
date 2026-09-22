import { cache } from "react";
import { client } from "./client";
import type { Project } from "@/content/projects";
import type { TeamMember } from "@/content/team";

const PROJECTS_QUERY = `*[_type == "project"] | order(order asc) {
  "slug": slug.current,
  title,
  category,
  client,
  status,
  contractValue,
  projectValue,
  location,
  description,
  "images": images[].asset->url,
  featured,
  order
}`;

export const getProjects = cache(async (): Promise<Project[]> => {
  const projects = await client.fetch<Project[]>(PROJECTS_QUERY);
  return projects.map((project) => ({
    ...project,
    images: project.images ?? [],
    contractValue: project.contractValue ?? undefined,
    projectValue: project.projectValue ?? undefined,
    description: project.description ?? undefined,
  }));
});

const TEAM_MEMBERS_QUERY = `*[_type == "teamMember"] | order(order asc) {
  name,
  role,
  group,
  "photo": photo.asset->url,
  order
}`;

export const getTeamMembers = cache(async (): Promise<TeamMember[]> => {
  const teamMembers = await client.fetch<TeamMember[]>(TEAM_MEMBERS_QUERY);
  return teamMembers.map((member) => ({
    ...member,
    photo: member.photo ?? undefined,
  }));
});