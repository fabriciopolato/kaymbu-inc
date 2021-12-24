import styled from "styled-components";

export const ArrowLeft = styled.div.attrs({
  className: "arrow-left",
})`
  width: 0;
  height: 0;
  border-top: ${(props) =>
    `${props.size ? props.size : "10"}px solid transparent`};
  border-bottom: ${(props) =>
    `${props.size ? props.size : "10"}px solid transparent`};

  border-right: ${(props) =>
    `${props.size ? props.size : "10"}px solid ${
      props.color ? props.color : "#000"
    }`};
  margin: 0 4px 2px 0;
`;
