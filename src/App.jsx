import { useState } from "react";

import { TagPicker } from "./components/tagpicker/TagPicker";
import { allTags } from "./seed";
import { sortAlphaNum } from "./utils/sortAlphaNum";

const App = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const onTagSelectionChange = (input) => {
    const tag = allTags.filter((t) => t._id === input.target.id)[0];

    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t._id !== tag._id));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  console.log(selectedTags);
  const sortedTags = allTags.sort(sortAlphaNum);

  return (
    <TagPicker
      tags={sortedTags}
      selectedTags={selectedTags}
      onTagSelectionChange={onTagSelectionChange}
    />
  );
};

export default App;
