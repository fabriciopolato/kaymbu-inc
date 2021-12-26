import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";

import { TagPicker } from "./TagPicker";

import { allTags } from "../../mocks/mocks";
import { sortAlphaNum } from "../../utils/sortAlphaNum";

const sortedTags = allTags.sort(sortAlphaNum);
const mockedOnTagSelectionChange = jest.fn();

const MockTagPicker = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const onTagSelectionChange = (tagId) => {
    const tag = sortedTags.filter((t) => t._id === tagId)[0];

    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t._id !== tag._id));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <TagPicker
      tags={sortedTags}
      selectedTags={selectedTags}
      onTagSelectionChange={onTagSelectionChange}
    />
  );
};

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

describe("TagPicker Folders", () => {
  it("should render all folders and tags inside a folder", () => {
    const firstFolder = sortedTags.filter((t) => t.isFolder)[0];

    render(<MockTagPicker />);

    const folderElement = screen.getByText(firstFolder.name);
    userEvent.click(folderElement);

    const tagElements = screen.getAllByTestId("tag-item");
    tagElements.map((tag) => expect(tag.parent).toBe(folderElement._id));
  });
});

describe("TagPicker Back Button", () => {
  it("should not have back button initially", () => {
    render(<MockTagPicker />);

    const backButton = screen.queryByText(/back/i);
    expect(backButton).toBeNull();
  });

  it("should have back button when inside a folder", () => {
    const firstFolder = sortedTags.filter((t) => t.isFolder)[0];

    render(<MockTagPicker />);

    const folderElement = screen.getByText(firstFolder.name);
    userEvent.click(folderElement);

    const backButton = screen.queryByText(/back/i);
    expect(backButton).toBeVisible();
  });

  it("should return one folder when back button is clicked", () => {
    const firstFolder = sortedTags.filter((t) => t.isFolder)[0];

    render(<MockTagPicker />);

    const folderElement = screen.getByText(firstFolder.name);
    userEvent.click(folderElement);

    const backButton = screen.getByText(/back/i);
    userEvent.click(backButton);

    const headingElement = screen.getByText(/root/i);
    expect(headingElement).toBeVisible();
  });
});

describe("TagPicker Tags", () => {
  it("should select the tag when a tag is clicked", () => {
    render(<MockTagPicker />);

    const firstTag = sortedTags.filter((t) => !t.isFolder)[0];
    const firstTagElement = screen.getAllByRole("checkbox")[0];

    userEvent.click(firstTagElement);

    const tagElements = screen.getAllByText(firstTag.name);
    expect(tagElements.length).toBe(2);
  });

  it("should display a badge when a tag is selected", () => {
    const firstTag = sortedTags.filter((tag) => !tag.isFolder)[0];

    render(<MockTagPicker />);

    const tagElement = screen.getByText(firstTag.name);
    userEvent.click(tagElement);

    const tagElements = screen.getAllByText(firstTag.name);
    expect(tagElements.length).toBe(2);
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

    const MockTagPicker2 = () => {
      return (
        <TagPicker
          tags={mockedSortedTags}
          selectedTags={[]}
          onTagSelectionChange={mockedOnTagSelectionChange}
        />
      );
    };

    render(<MockTagPicker2 />);

    const firstElement = screen.getAllByTestId(/tag-item/i)[0];
    const secondElement = screen.getAllByTestId(/tag-item/i)[1];

    console.log(mockedTags);

    expect(firstElement.id).toBe(mockedTags[3]._id);
    expect(secondElement.id).toBe(mockedTags[1]._id);
  });
});
