import * as Styled from "./StyledTag";
import { FaFolder } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

export const Tag = ({ tag, selected, onTagSelectionChange }) => {
  return (
    <Styled.TagContainer>
      <Styled.Tag>
        <Styled.Left>
          <Styled.Icon>
            {!tag.isFolder ? (
              <input
                type="checkbox"
                name="checkbox-tag"
                id={tag._id}
                onChange={onTagSelectionChange}
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
    </Styled.TagContainer>
  );
};
