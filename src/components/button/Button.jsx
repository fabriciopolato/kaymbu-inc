import * as Styled from "./StyledButton";

export const Button = ({ children, onClick, ...props }) => {
  return (
    <Styled.Button onClick={onClick} {...props}>
      {children}
    </Styled.Button>
  );
};
