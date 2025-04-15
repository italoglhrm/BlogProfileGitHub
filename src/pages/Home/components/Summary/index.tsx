import { SummaryAnchors, SummaryContainer, SummaryHeader } from "./styles";

import { ArrowUpRight, Buildings, GithubLogo, Users } from "phosphor-react";

import { api } from './../../../../lib/api.ts';

import { useState, useEffect } from 'react';

import { Loading } from './../Loading.tsx';

export function Summary() {

  interface UserProfile {
    avatar_url: string;
    name: string;
    bio: string;
    login: string;
    company?: string;
    followers: number;
  }

  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const request = await api.get('/users/italoglhrm');
        const delay = new Promise((resolve) => setTimeout(resolve, 900));

        const [response] = await Promise.all([request, delay]);

        console.log('response.data:', response.data);

        setUser(response.data);
        setLoading(false)

      } catch (error) {
        console.log('Erro: ', error);
      }
    }
    fetchUserData();
  }, [])

  if (loading) {
    return <Loading />
  }
  
  if (!user) {
    return <h2>Usuário não encontrado.</h2>
  }

  return (
    <SummaryContainer>
      <img src={user.avatar_url} alt="User avatar" />

        <section>

          <SummaryHeader>
            <h1>{user.name}</h1>
            <a href={`https://github.com/${user.login}`} target="_blank" rel="noreferrer">
              GITHUB
              <ArrowUpRight size={12} />
            </a>
          </SummaryHeader>

          <p>{user.bio}</p>

          <SummaryAnchors>
            <div>
              <GithubLogo size={18} />
              <span>{user.login}</span>
            </div>
            <div>
              <Buildings size={18} />
              <span>{user.company ?? "s/d"}</span>
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
