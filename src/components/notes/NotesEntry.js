import React from "react";
import moment from 'moment';
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";

export const NotesEntry = ( { id, date, title, body, url }) => {

  const dispatch = useDispatch();
  const noteDate = moment( date );

  const handleEntryClick = () => {
    /* const note = {
        title: title,
        body: body,
        date: date,
        url:url,
    } */
    dispatch( activeNote( id, {date, title, body, url}));
  }

  return (
    <div 
    className="notes__entry pointer"
    onClick={handleEntryClick}
    >
      {
        url&&
        <div
        className="notes__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url(${url})`,
        }}
      ></div>}
      <div className="notes__entry-body">
        <div className="notes__entry-title">{ title }</div>
        <div className="notes__entry-content">
          { body }
        </div>
      </div>
      <div className="notes__entry-date-box">
        <span> { noteDate.format('dddd') } </span>
        <h4> { noteDate.format('Do') } </h4>
      </div>
    </div>
  );
};
