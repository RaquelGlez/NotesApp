import React from "react";
import moment from 'moment';

export const NotesEntry = ( { id, date, title, body, url }) => {


  const noteDate = moment( date )

  return (
    <div className="notes__entry pointer">
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
