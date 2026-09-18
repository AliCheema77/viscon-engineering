export type TeamGroup =
  | "executive"
  | "management"
  | "architecture"
  | "civil-structure"
  | "site-staff";

export type TeamMember = {
  name: string;
  role: string;
  group: TeamGroup;
  photo?: string;
  order: number;
};

export const team: TeamMember[] = [
  { name: "Zain Rasool", role: "Director", group: "executive", order: 1 },
  {
    name: "Yousaf Shah",
    role: "Director, MEP & IBMS",
    group: "executive",
    order: 2,
  },
  {
    name: "M. Arsalan Aman",
    role: "Project Manager",
    group: "management",
    order: 3,
  },
  {
    name: "M. Ikhtyar",
    role: "B.Sc Architect",
    group: "architecture",
    order: 4,
  },
  {
    name: "Ali Rehman",
    role: "M.Sc (Civil)",
    group: "civil-structure",
    order: 5,
  },
  { name: "Dilshad Rehman", role: "Manager", group: "management", order: 6 },
  {
    name: "M. Adnan",
    role: "M.Sc Structural Engineer",
    group: "civil-structure",
    order: 7,
  },
  {
    name: "M. Fida",
    role: "Site Supervisor",
    group: "site-staff",
    order: 8,
  },
  {
    name: "Saqib Tufail",
    role: "Construction Manager",
    group: "management",
    order: 9,
  },
];
