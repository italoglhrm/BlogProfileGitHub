import {
  ArrowUpRight,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from "phosphor-react";
import {
  PostAnchors,
  PostContainer,
  PostContent,
  PostHeader,
  PostTitle,
} from "./styles";

import { NavLink, useParams } from "react-router-dom";
import { dateFormatter } from "../../utils/formatter";
import { useEffect, useState } from "react";
import axios from "axios";

interface Issue {
  title: string;
  body: string;
  comments: number;
  html_url: string;
  created_at: string;
  user: {
    login: string;
  };
}

export function Post() {
  const { number } = useParams(); 
  const [issue, setIssue] = useState<Issue | null>(null);

  useEffect(() => {
    async function fetchIssue() {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME/issues/${number}`
        );
        setIssue(response.data);
      } catch (error) {
        console.error("Failed to fetch issue:", error);
      }
    }
    fetchIssue();
  }, [number]);

  if (!issue) {
    return <p>Carregando detalhes do issue...</p>;
  }

  return (
    <PostContainer>
      <PostHeader>
        <PostTitle>
          <div>
            <p>
              <NavLink to="/">
                <a href="">
                  <CaretLeft size={16} />
                  VOLTAR
                </a>
              </NavLink>
            </p>
          </div>
          <div>
            <a href={issue.html_url} target="_blank">
              VER NO GITHUB
              <ArrowUpRight size={16} />
            </a>
          </div>
        </PostTitle>
        <h1>{issue.title}</h1>
        <PostAnchors>
          <div>
            <GithubLogo size={18} />
            <span>{issue.user.login}</span>
          </div>

          <div>
            <Calendar size={18} />
            <span>{dateFormatter.format(new Date(issue.created_at))}</span>
          </div>

          <div>
            <ChatCircle size={18} />
            <span>{issue.comments} comentários</span>
          </div>
        </PostAnchors>
      </PostHeader>

      <PostContent>
        <p>{issue.body}</p>
      </PostContent>
    </PostContainer>
  );
}
