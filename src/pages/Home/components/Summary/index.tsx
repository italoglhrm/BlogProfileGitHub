import { useEffect, useState } from "react";

import { SummaryAnchors, SummaryContainer, SummaryHeader } from "./styles";

import { ArrowUpRight, Buildings, GithubLogo, Users } from "phosphor-react";

import axios from "axios";

import { api } from "../../../../lib/api";

export function Summary() {

  interface UserProfile {
    avatar_url: string;
    name: string;
    bio: string;
    login: string;
    company?: string;
    followers: number;
    html_url: string;
  }

  const [user, setUser] = useState<UserProfile | null>(null);
  
  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await api.get("/users/italoglhrm");
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    fetchUserData();
  }, []);
  
  if (!user) {
    return <p>Aguarde, carregando os dados do GitHub...</p>;
  }
 
  return (
    <SummaryContainer>
      <img src={user.avatar_url} alt="User Avatar" />
      <section>
        <SummaryHeader>
          <h1>{user.name}</h1>
          <a href={user.html_url} target="_blank">
            GITHUB
            <ArrowUpRight size={12} />
          </a>
        </SummaryHeader>
        <p>{user.bio}</p>
        <SummaryAnchors>
          <div>
            <GithubLogo size={18} />
            <span>`{user.login}`</span>
          </div>

          <div>
            <Buildings size={18} />
            <span>{user.company}</span>
          </div>

          <div>
            <Users size={18} />
            <span>{user.followers}</span>
          </div>
        </SummaryAnchors>
      </section>
    </SummaryContainer>
  );
}
