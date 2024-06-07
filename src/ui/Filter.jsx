import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  border: 1px solid var(--color-slate-100);
  background-color: var(--color-slate-50);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-slate-50);
  border: none;

  ${(props) =>
    props.$active &&
    css`
      background-color: var(--color-lime-600);
      color: var(--color-lime-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  @media (max-width: 569px) {
    font-size: 1.1rem;
    padding: 0.2rem 0.4rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-lime-600);
    color: var(--color-lime-50);
  }
`;

function FilterFunction({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const memoizedOptions = useMemo(() => options, [options]);
  const currentFilter =
    searchParams.get(filterField) || memoizedOptions.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      {memoizedOptions.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          $active={option.value === currentFilter}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

const Filter = React.memo(FilterFunction);

export default Filter;
