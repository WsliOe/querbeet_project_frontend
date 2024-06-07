import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;

  @media (max-width: 569px) {
    font-size: 1.1rem;
    padding: 0.4rem 0.6rem;
  }

  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-slate-100)"
        : "var(--color-slate-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-slate-50);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;

function SelectFunction({ options, value, onChange, name, ...props }) {
  return (
    <StyledSelect name={name} value={value} onChange={onChange} {...props}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

const Select = React.memo(SelectFunction);

export default Select;
