import styled from "styled-components";

export const SummaryContainer = styled.aside`
  padding: 2rem;
  background-color: ${(props) => props.theme["blue-700"]};
  box-shadow: 0 0 15px ${(props) => props.theme["blue-900"]};

  display: flex;
  align-items: center;
  gap: 2rem;

  margin-top: -6.25rem;
  margin-bottom: 2rem;

  & > img {
    max-width: 9.25rem;
    width: 100%;
    border-radius: 8px;
  }

  & > section {
    flex: 1;
  }
`;

export const SummaryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 0.5rem;

  & > h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["gray-100"]};
  }

  & > a {
    text-decoration: none;
    color: ${(props) => props.theme["blue-400"]};
    font-size: 0.75rem;
    font-weight: bold;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const SummaryAnchors = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  margin-top: 1.5rem;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${(props) => props.theme["gray-500"]};

    & > span {
      color: ${(props) => props.theme["gray-200"]};
    }
  }
`;
