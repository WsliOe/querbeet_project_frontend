import styled from "styled-components";

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const PaginationButton = styled.button`
  background-color: ${(props) =>
    props.$active ? " var(--color-lime-600)" : "var(--color-slate-50)"};
  color: ${(props) => (props.$active ? " var(--color-lime-50)" : "inherit")};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-lime-600);
    color: var(--color-lime-50);
  }

  @media (max-width: 400px) {
    font-weight: 300;
    font-size: 1.2rem;
    padding: 0.3rem 0.6rem;
  }
`;

export { StyledPagination, Buttons, PaginationButton };
