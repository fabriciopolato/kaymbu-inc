import { useState } from "react";

import { TagPicker } from "./components";

import { allTags } from "./seed";
import { sortAlphaNum } from "./utils/sortAlphaNum";

const App = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const sortedTags = allTags.sort(sortAlphaNum);

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

export default App;
