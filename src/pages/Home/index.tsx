
import { Summary } from "./components/Summary";
import { HomeContainer, IssuesAside } from "./styles";
import { useEffect, useState } from "react";
import { Issues } from "./components/Issues";
import { searchIssues } from "../../../src/lib/api"
import { Issue } from "../../types";

export function Home() {
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    async function fetchIssues() {
      try {
        const data = await searchIssues("italoglhrm", "BlogProfileGitHub");
        setIssues(data);
      } catch (error) {
        console.log("Busca de Issues falhou:", error)
      }
    }

    fetchIssues();
  }, []);

  return (
    <HomeContainer>
      <Summary />

      <IssuesAside>
        {issues.length > 0 ? (
          issues.map((issue) => <Issues key={issue.number} issue={issue} />)
        ) : (
          <p>Issues não encontrados.</p>
        )}
      </IssuesAside>
  
    </HomeContainer>
  );
}
