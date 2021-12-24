import { useState } from "react";

import { TagPicker } from "./components/tagpicker/TagPicker";
import { allTags } from "./seed";

const App = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedFolders, setSelectedFolders] = useState([]);

  const onTagSelectionChange = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <TagPicker
      tags={allTags}
      selectedTags={selectedTags}
      selectedFolders={selectedFolders}
      onTagSelectionChange={onTagSelectionChange}
    />
  );
};

export default App;
