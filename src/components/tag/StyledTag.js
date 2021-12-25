import styled from "styled-components";

export const Tag = styled.div.attrs({
  className: "tag",
})`
  border: 1px solid #ddd;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div.attrs({
  className: "tag-left",
})`
  display: flex;
  align-items: center;

  label {
    cursor: pointer;
  }

  input[type="checkbox"] {
    cursor: pointer;
    margin: 0 1.8px;
  }
`;

export const Icon = styled.div.attrs({
  className: "tag-icon",
})`
  margin: 0.8rem;
`;

export const Right = styled.div.attrs({
  className: "tag-right",
})`
  margin: 0 1rem;
`;
