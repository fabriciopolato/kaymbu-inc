import styled from "styled-components";

export const Button = styled.button.attrs({
  className: "styled-button",
})`
  font-size: 0.9rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  background-image: linear-gradient(#fcfcfc, #e7e7e7);
  padding: 0.5rem 0.8rem;

  display: flex;
  align-items: center;
`;
