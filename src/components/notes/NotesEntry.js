import React from "react";

export const NotesEntry = () => {
  return (
    <div className="notes__entry pointer">
      <div
        className="notes__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1614648718458-238bf1a0f432?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTB8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)",
        }}
      ></div>
      <div className="notes__entry-body">
        <div className="notes__entry-title">Miercoles 3 de marzo</div>
        <div className="notes__entry-content">
          Pariatur fugiat qui ut voluptate nulla.
        </div>
      </div>
      <div className="notes__entry-date-box">
        <span>Monday</span>
        <h4>02</h4>
      </div>
    </div>
  );
};
