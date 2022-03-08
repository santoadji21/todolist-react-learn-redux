import React from "react";

export default function Footer({ filter }) {

  return (
    <>
      <div className="button-filter">
        <button onClick={() => filter("ACTIVE")}>
          ALL
        </button>
        <button onClick={() => filter("ACTIVE")}>ACTIVE</button>
        <button onClick={() => filter("COMPLETED")}>COMPLETED</button>
      </div>
    </>
  );
}
