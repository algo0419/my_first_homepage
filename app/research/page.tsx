import { DisciplinePage } from "@/components/discipline-page";
import { disciplines } from "@/lib/site-content";

export default function ResearchPage() {
  return <DisciplinePage page={disciplines.find((item) => item.key === "research")!} />;
}
