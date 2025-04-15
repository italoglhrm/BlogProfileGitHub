import { dateFormatter } from "../../../../utils/formatter";
import { IssuesContainer, StyledNavLink } from "./styles";
import { Issue } from "./../../../../types.ts";

interface IssuesProps {
  issue: Issue;
}

export function Issues({ issue }: IssuesProps) {
  return (
    <IssuesContainer>
      <StyledNavLink to={`/post/${issue.number}`}>
        <div>
          <h2>{issue.title}</h2>
          <span>{dateFormatter.format(new Date(issue.created_at))}</span>
        </div>
        <p>{issue.body?.length > 200 ? `${issue.body?.slice(0, 200)}...` : issue.body}</p>
      </StyledNavLink>
    </IssuesContainer>
  );
}
