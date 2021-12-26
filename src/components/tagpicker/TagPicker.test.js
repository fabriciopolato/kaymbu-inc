import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TagPicker } from "./TagPicker";

import { allTags } from "../../mocks/mocks";
import { sortAlphaNum } from "../../utils/sortAlphaNum";

const sortedTags = allTags.sort(sortAlphaNum);
const mockedOnTagSelectionChange = jest.fn();

describe("TagPicker Header", () => {
  it("should render header with text 'Root' first", () => {
    render(
      <TagPicker
        tags={sortedTags}
        selectedTags={[]}
        onTagSelectionChange={mockedOnTagSelectionChange}
      />
    );

    const headingElement = screen.getByText(/root/i);
    expect(headingElement).toBeVisible();
  });

  it("should render header with folder name after opening a folder", () => {
    render(
      <TagPicker
        tags={sortedTags}
        selectedTags={[]}
        onTagSelectionChange={mockedOnTagSelectionChange}
      />
    );

    const firstFolder = sortedTags.filter((t) => t.isFolder)[0];
    const folderElement = screen.getByText(firstFolder.name);

    userEvent.click(folderElement);

    const headingElement = screen.getByText(folderElement.textContent);
    expect(headingElement).toBeVisible();
  });
});

describe("Tag List", () => {
  it("should sort folders and tags alphanumericaly", () => {
    const mockedTags = [
      {
        _id: "t4",
        name: "Tag 4",
        isFolder: false,
        parent: null,
        ancestors: ["f1"],
      },
      {
        _id: "t1",
        name: "Tag 1",
        isFolder: false,
        parent: null,
        ancestors: ["f1"],
      },
      {
        _id: "t13",
        name: "Tag 13",
        isFolder: false,
        parent: null,
        ancestors: ["f1"],
      },
      {
        _id: "f2",
        name: "Folder 2",
        isFolder: true,
        parent: null,
        ancestors: [],
      },
    ];

    const mockedSortedTags = [...mockedTags].sort(sortAlphaNum);

    render(
      <TagPicker
        tags={mockedSortedTags}
        selectedTags={[]}
        onTagSelectionChange={mockedOnTagSelectionChange}
      />
    );

    const firstElement = screen.getAllByTestId(/tag-item/i)[0];
    const secondElement = screen.getAllByTestId(/tag-item/i)[1];

    expect(firstElement.id).toBe(mockedTags[3]._id);
    expect(secondElement.id).toBe(mockedTags[1]._id);
  });
});
