import styled from "styled-components";

export const TagContainer = styled.div.attrs({
  className: "tag-container",
})`
  border: 1px solid #ddd;
`;

export const Tag = styled.div.attrs({
  className: "tag",
})`
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
