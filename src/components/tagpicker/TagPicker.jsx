import { Tag } from "../tag/Tag";
import { Button } from "../button/Button";
import { ArrowLeft } from "../arrowleft/StyledArrowLeft";

import { useState } from "react";

import * as Styled from "./StyledTagPicker";

export const TagPicker = ({ tags, selectedTags, onTagSelectionChange }) => {
  const selectedFolders = selectedTags.filter((t) => t.isFolder);

  return (
    <Styled.TagPickerContainer>
      <Styled.TagPickerHeader>
        {selectedFolders[selectedFolders.length - 1]?.name
          ? selectedFolders[selectedFolders.length - 1]?.name
          : "Root"}
      </Styled.TagPickerHeader>
      <Styled.TagPickerBody>
        <Button>
          <ArrowLeft size={5} />
          Back
        </Button>
        <Styled.TagPickerContent>
          {tags.map((tag) => (
            <Tag
              key={tag._id}
              tag={tag}
              selected={selectedTags.includes(tag)}
              onTagSelectionChange={onTagSelectionChange}
            />
          ))}
        </Styled.TagPickerContent>
      </Styled.TagPickerBody>
    </Styled.TagPickerContainer>
  );
};
