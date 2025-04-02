import { IssuesContainer, StyledNavLink } from "./styles";
import { Issue } from "../../../../types";

interface IssuesProps {
  issue: Issue
}

export function Issues({ issue }: IssuesProps) {
  return (
    <IssuesContainer style={{ marginTop: "20px" }}>
      <StyledNavLink to={"/issue/${issue.number}"}>
        <div>
          <h2>{issue.title}</h2>
          <span>{new Date(issue.created_at).toLocaleDateString()}</span>
        </div>
        <p>{issue.body}</p>
      </StyledNavLink>
    </IssuesContainer>
  );
}
