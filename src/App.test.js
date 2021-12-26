import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

import { allTags } from "./mocks/mocks";
import { sortAlphaNum } from "./utils/sortAlphaNum";

const sortedTags = allTags.sort(sortAlphaNum);

describe("TagPicker Folders", () => {
  it("should render all folders and tags inside a folder", () => {
    const firstFolder = sortedTags.filter((t) => t.isFolder)[0];

    render(<App />);

    const folderElement = screen.getByText(firstFolder.name);
    userEvent.click(folderElement);

    const tagElements = screen.getAllByTestId("tag-item");
    tagElements.map((tag) => expect(tag.parent).toBe(folderElement._id));
  });
});

describe("TagPicker Back Button", () => {
  it("should not have back button initially", () => {
    render(<App />);

    const backButton = screen.queryByText(/back/i);
    expect(backButton).toBeNull();
  });

  it("should have back button when inside a folder", () => {
    const firstFolder = sortedTags.filter((t) => t.isFolder)[0];

    render(<App />);

    const folderElement = screen.getByText(firstFolder.name);
    userEvent.click(folderElement);

    const backButton = screen.queryByText(/back/i);
    expect(backButton).toBeVisible();
  });

  it("should return one folder when back button is clicked", () => {
    const firstFolder = sortedTags.filter((t) => t.isFolder)[0];

    render(<App />);

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
    render(<App />);

    const firstTag = sortedTags.filter((t) => !t.isFolder)[0];
    const firstTagElement = screen.getAllByRole("checkbox")[0];

    userEvent.click(firstTagElement);

    const tagElements = screen.getAllByText(firstTag.name);
    expect(tagElements.length).toBe(2);
  });

  it("should display a badge when a tag is selected", () => {
    const firstTag = sortedTags.filter((tag) => !tag.isFolder)[0];

    render(<App />);

    const tagElement = screen.getByText(firstTag.name);
    userEvent.click(tagElement);

    const tagElements = screen.getAllByText(firstTag.name);
    expect(tagElements.length).toBe(2);
  });
});
