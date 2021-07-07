import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEnrty(emojilist) {
  return (
    <Entry
      key={emojilist.id}
      emoji={emojilist.emoji}
      name={emojilist.name}
      meaning={emojilist.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(createEnrty)}
    </div>
  );
}

export default App;
