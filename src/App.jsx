import { useState } from "react";

import { TagPicker } from "./components";

import { allTags } from "./seed";

const App = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const onTagSelectionChange = (tagId) => {
    const tag = allTags.filter((t) => t._id === tagId)[0];

    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t._id !== tag._id));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <TagPicker
      tags={allTags}
      selectedTags={selectedTags}
      onTagSelectionChange={onTagSelectionChange}
    />
  );
};

export default App;
