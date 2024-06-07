import React from "react";
import { createContext, useContext } from "react";
import styled from "styled-components";

const StyledTable = styled.div`
  border: 1px solid var(--color-slate-200);
  font-size: 1.4rem;
  background-color: var(--color-slate-50);
  border-radius: 7px;
  overflow: hidden;
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 1rem;
  align-items: center;
  text-align: left;
  transition: none;

  @media (max-width: 768px) {
    display: block;
    padding: 1rem;
  }
`;

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 1rem;
  align-items: center;
  text-align: left;
  transition: none;

  padding: 1.6rem 2.4rem;
  background-color: var(--color-slate-50);
  border-bottom: 1px solid var(--color-slate-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 800;
  color: var(--color-slate-600);

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledRow = styled(CommonRow)`
  padding: 1.6rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-slate-100);
  }

  @media (max-width: 768px) {
    border: 1px solid var(--color-slate-200);
    text-transform: uppercase;
    border-radius: 5px;
    margin: 0;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;

    & > div::before {
      content: attr(data-label);
      font-weight: bold;
      display: inline-block;
      width: 50%;
      color: var(--color-slate-600);
    }
  }
`;

const StyledBody = styled.section`
  margin: 0;
`;

const Footer = styled.footer`
  background-color: var(--color-slate-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  &:not(:has(*)) {
    display: none;
  }
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;

  @media (max-width: 350px) {
    font-size: 1.2rem;
  }
`;

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
  );
}

function HeaderFunction({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledHeader role="row" columns={columns}>
      {children}
    </StyledHeader>
  );
}
function RowFunction({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledRow role="row" columns={columns}>
      {children}
    </StyledRow>
  );
}

function BodyFunction({ data, render }) {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <Empty>Noch keine Stunden erfasst.</Empty>;
  }

  return <StyledBody>{data.map(render)}</StyledBody>;
}

const Header = React.memo(HeaderFunction);
const Body = React.memo(BodyFunction);
const Row = React.memo(RowFunction);

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
