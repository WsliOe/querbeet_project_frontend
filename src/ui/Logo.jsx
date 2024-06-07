import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledLogo = styled.div`
  text-align: left;
`;

const Img = styled.img`
  max-height: 7rem;
  width: auto;
  display: block;
  margin: auto 0;

  @media (max-width: 809px) {
    max-height: 5rem;
    width: auto;
  }
`;

function Logo() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/hours");
  };

  return (
    <StyledLogo onClick={handleClick}>
      <Img src="/logo.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
