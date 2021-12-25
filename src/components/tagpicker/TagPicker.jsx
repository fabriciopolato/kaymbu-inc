import { useEffect, useState } from "react";

import { Tag } from "../tag/Tag";
import { Button } from "../button/Button";
import { ArrowLeft } from "../arrowleft/StyledArrowLeft";

import * as Styled from "./StyledTagPicker";

export const TagPicker = ({ tags, selectedTags, onTagSelectionChange }) => {
  const [selectedFolders, setSelectedFolders] = useState([]);

  useEffect(() => {
    setSelectedFolders(
      selectedTags.filter((tag) => tags.includes(tag) && tag.isFolder)
    );
  }, [selectedTags, tags]);

  const hasAnyFolderSelected = selectedFolders.length > 0;
  const lastSelectedFolder = selectedFolders[selectedFolders.length - 1];

  const displayedTags = tags.filter((tag) => {
    if (!lastSelectedFolder) {
      return tag.parent === null;
    }
    return tag.parent === lastSelectedFolder._id;
  });

  return (
    <Styled.TagPickerContainer>
      <Styled.TagPickerHeader>
        {hasAnyFolderSelected ? lastSelectedFolder?.name : "Root"}
      </Styled.TagPickerHeader>
      <Styled.TagPickerBody>
        {hasAnyFolderSelected && (
          <Button onClick={() => onTagSelectionChange(lastSelectedFolder._id)}>
            <ArrowLeft size={5} />
            Back
          </Button>
        )}
        <Styled.TagPickerContent>
          {displayedTags.map((tag) => (
            <Tag
              key={tag._id}
              tag={tag}
              selected={selectedTags.includes(tag)}
              onTagSelectionChange={onTagSelectionChange}
            />
          ))}
        </Styled.TagPickerContent>
        <Styled.BadgeContainer>
          {selectedTags
            .filter((tag) => !tag.isFolder)
            .map((t) => (
              <Styled.Badge key={t._id}>{t.name}</Styled.Badge>
            ))}
        </Styled.BadgeContainer>
      </Styled.TagPickerBody>
    </Styled.TagPickerContainer>
  );
};
