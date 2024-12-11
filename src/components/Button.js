import styled, { css, keyframes } from "styled-components";

const rotateAnomation = keyframes`
    0% {
        transform: rotateZ(0);
    }
    100% {
        transform: rotateZ(360deg);
    }
`;

const StyledButton = styled.button`
  border: none;
  padding: 18px 15px;
  font-size: 18px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    animation: ${rotateAnomation} 1s infinite linear;
  }
  align-self: ${(props) => props.align || "stretch"};

  ${(props) =>
    props.primary &&
    css`
      color: ${(props) => props.color || "white"};
      background: ${(props) => props.background || "white"};
    `}
  ${(props) =>
    props.outlined &&
    css`
      color: ${(props) => props.color || "white"};
      background: transparent;
      border: 1px solid ${(props) => props.color || "white"};
    `}
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
