import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 9996;
  width: 100%;
  height: 5rem;
  margin: 0 auto;
  padding: 2rem 10% 2rem 10%;
  display: flex;

  background: var(--black);
  justify-content: space-between;
  align-items: center;
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    margin-right: 2rem;
  }

  a {
    font-weight: bold;
    color: var(--gray);
    font-size: 1rem;
    margin-right: 2rem;
  }
  a:hover {
    color: var(--success);
  }
  :last-child {
    margin-right: 0;
  }
`;
export const ActiveLink = styled.div``;

export const Widgets = styled.div``;
