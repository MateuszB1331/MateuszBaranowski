export type Lang = "pl" | "en";

export type LocalizedText = Record<Lang, string>;

export interface Project {
  id: string;
  title: string;
  status?: LocalizedText;
  problem: LocalizedText;
  build: LocalizedText;
  result: LocalizedText;
  stack: string[];
  link?: { label: string; href: string };
}
