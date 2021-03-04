import React from "react";

export const WithoutSelection = () => {
  return (
    <div className="without__main-content">
      <p>
        No notes
        <br />
        Please select a note!
      </p>
      <i className="far fa-star fa-4x mt-5"></i>
    </div>
  );
};
