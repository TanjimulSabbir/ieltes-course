import { AllSections } from "@/types/types";

export function mapSectionsByType(sections: AllSections[]) {
  const sectionMap = {} as {
    [K in AllSections["type"]]?: Extract<AllSections, { type: K }>;
  };
  for (const section of sections) {
    sectionMap[section.type as AllSections["type"]] = section as any;
  }
  return sectionMap;
}
