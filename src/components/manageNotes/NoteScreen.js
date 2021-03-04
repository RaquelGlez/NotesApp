import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  return (
    <div className="noteScreen_main-content">
      <NotesAppBar />

      <div className="noteScreen__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="noteScreen__title-input"
          autoComplete="off"
        />
        <textarea
          placeholder="What happened today"
          className="noteScreen__textarea"
        ></textarea>
        <div className="noteScreen__image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiUb9Ll4WlzVGtN9VOglv0H6KtZV9dEaUsuA&usqp=CAU"
            alt="note"
          />
        </div>
      </div>
    </div>
  );
};
