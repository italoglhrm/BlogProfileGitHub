
import { Summary } from "./components/Summary";
import { Issues } from "./components/Issues";
import { IssuesAside } from "./styles";
import { HomeContainer } from "./styles";
import { useState, useEffect } from 'react';
import { searchIssues } from "../../lib/api";
import { Issue } from './../../types.ts';
import { Loading } from './../../pages/Home/components/Loading.tsx';

export function Home() {

  const [issues, setissues] = useState<Issue[]>([])

  useEffect(() => {
    async function fetchIssues() {
      try {
        const data = await searchIssues("italoglhrm", "BlogProfileGitHub");
        setissues(data);
      } catch (error) {
        console.log('Erro: ', error);
      }
    }
    fetchIssues();
  }, [])

  return (
    <HomeContainer>
      <Summary />
      <IssuesAside>
        {issues.length > 0 ? (
          issues.map((issue) => 
            <Issues key={issue.number} issue={issue}/>)
        ) : (
          <Loading />
        )}
      </IssuesAside>
    </HomeContainer>
  );
}
