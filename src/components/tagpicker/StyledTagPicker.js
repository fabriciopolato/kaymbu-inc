import styled from "styled-components";

export const TagPickerContainer = styled.div.attrs({
  className: "tag-picker-container",
})`
  border-radius: 4px;
  border: 1px solid #ddd;
  max-width: 1680px;
  margin: 1.5rem;
`;

export const TagPickerHeader = styled.h1.attrs({
  className: "tag-picker-header",
})`
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  margin: 0;
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
  padding: 1rem 0 0.75rem 0;
  border-radius: 4px;
`;

export const BadgeContainer = styled.div.attrs({
  className: "badge-container",
})`
  width: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Badge = styled.span.attrs({
  className: "tag-badge",
})`
  font-size: 0.8rem;
  border-radius: 4px;
  margin: 0.25rem 0.25rem 0 0;
  color: white;
  padding: 0.25rem 0.5rem;
  background-color: #323232;
`;
