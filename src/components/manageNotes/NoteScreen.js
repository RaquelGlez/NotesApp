import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  const { active: note } = useSelector((state) => state.notes);
  
  const [formValues, handleInputChange, reset] = useForm(note);

  const { body, title } = formValues;

  const activeId = useRef( note.id )

  useEffect(() => {
    
    if( note.id !== activeId.current ){
      reset( note )
      activeId.current = note.id
    }

  }, [reset, note])

  return (
    <div className="noteScreen_main-content">
      <NotesAppBar />

      <div className="noteScreen__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="noteScreen__title-input"
          autoComplete="off"
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          placeholder="What happened today"
          className="noteScreen__textarea"
          value={body}
          onChange={handleInputChange}
        ></textarea>
        {note.url && (
          <div className="noteScreen__image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiUb9Ll4WlzVGtN9VOglv0H6KtZV9dEaUsuA&usqp=CAU"
              alt="note"
            />
          </div>
        )}
      </div>
    </div>
  );
};
