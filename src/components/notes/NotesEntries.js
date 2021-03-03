import React from "react";
import { NotesEntry } from "./NotesEntry";

export const NotesEntries = () => {
  const entries = [1, 2, 3, 4, 5];

  return (
    <div className="notes__entries">
      {entries.map((value) => (
        <NotesEntry key={value} />
      ))}
    </div>
  );
};
