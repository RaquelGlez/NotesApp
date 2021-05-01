import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeNote, startDeleting } from "../../actions/notes";
import { useForm } from "../../hooks/useForm";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {

  const dispatch = useDispatch();

  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);
  const { body, title, id } = formValues;

  const activeId = useRef( note.id )

  useEffect(() => {
    if( note.id !== activeId.current ){
      reset( note )
      activeId.current = note.id
    }

  }, [reset, note])

  useEffect(() => {
    dispatch( activeNote(formValues.id, {...formValues}) )

  }, [formValues, dispatch]);


  const handleDelete = () => {
    console.log(id);
    dispatch( startDeleting(id) )
  }

  return (
    <div className="noteScreen_main-content">
      <NotesAppBar />

      <div className="noteScreen__content">
        <input
          type="text"
          name="title"
          placeholder="Some awesome title"
          className="noteScreen__title-input"
          autoComplete="off"
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          placeholder="What happened today"
          name="body"
          className="noteScreen__textarea"
          value={body}
          onChange={handleInputChange}
        ></textarea>
        {note.url && (
          <div className="noteScreen__image">
            <img
              src={ note.url }
              alt="note"
            />
          </div>
        )}
      </div>

      <button
        className="btn btn-danger"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};
