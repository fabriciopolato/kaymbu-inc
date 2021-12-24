import styled from "styled-components";

export const TagPickerContainer = styled.div.attrs({
  className: "tag-picker-container",
})`
  border-radius: 4px;
  border: 1px solid #ddd;
  max-width: 1680px;
  margin: 1.5rem auto;
`;

export const TagPickerHeader = styled.div.attrs({
  className: "tag-picker-header",
})`
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  background-image: linear-gradient(#f5f4f5, #e7e7e7);
  border-bottom: 1px solid #ddd;
`;

export const TagPickerBody = styled.div.attrs({
  className: "tag-picker-body",
})`
  padding: 1rem;
`;

export const TagPickerContent = styled.div.attrs({
  className: "tag-picker-content",
})`
  padding: 1rem 0;
  border-radius: 4px;
`;
