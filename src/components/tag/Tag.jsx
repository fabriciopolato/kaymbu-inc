import { FaFolder } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

import * as Styled from "./StyledTag";

export const Tag = ({ tag, selected, onTagSelectionChange }) => {
  return (
    <Styled.Tag
      id={tag._id}
      onClick={() => onTagSelectionChange(tag._id)}
      data-testid="tag-item"
    >
      <Styled.Left>
        <Styled.Icon>
          {!tag.isFolder ? (
            <input
              type="checkbox"
              name="checkbox-tag"
              id={tag._id}
              onChange={() => onTagSelectionChange(tag._id)}
              checked={selected}
            />
          ) : (
            <FaFolder color="#323232" />
          )}
        </Styled.Icon>
        <label htmlFor={tag._id}>{tag.name}</label>
      </Styled.Left>
      {tag.isFolder && (
        <Styled.Right>
          <MdKeyboardArrowRight size={25} color="#323232" />
        </Styled.Right>
      )}
    </Styled.Tag>
  );
};
