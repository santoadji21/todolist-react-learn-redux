import React from "react";

export default function Footer({ filter }) {
  const [allbuttonfilter, setAllButtonfilter] = React.useState("");
  const [activeButtonfilter, setActiveButtonfilter] = React.useState("");
  const [completedButtonfilter, setCompletedButtonfilter] = React.useState("");

  const buttonColor = (e) => {
    if (e.target.value === "ALL") {
      setAllButtonfilter("filter-all");
      setActiveButtonfilter("");
      setCompletedButtonfilter("");
    } else if (e.target.value === "ACTIVE") {
      setAllButtonfilter("");
      setActiveButtonfilter("filter-active");
      setCompletedButtonfilter("");
    } else if (e.target.value === "COMPLETED") {
      setAllButtonfilter("");
      setActiveButtonfilter("");
      setCompletedButtonfilter("filter-completed");
    }
    // console.log(allbuttonfilter);
  };

  const allFilterHandler = (e) => {
    buttonColor(e)
    filter("ALL")
  }
  const activeFilterHandler = (e) => {
    buttonColor(e)
    filter("ACTIVE")
  }
  const completedFilterHandler = (e) => {
    buttonColor(e)
    filter("COMPLETED")
  }

  return (
    <>
      <div className="button-filter">
        <button
          value="ALL"
          className={allbuttonfilter}
          onClick={allFilterHandler}
        >
          ALL
        </button>
        <button
          value="ACTIVE"
          className={activeButtonfilter}
          onClick={activeFilterHandler}
        >
          ACTIVE
        </button>
        <button
          value="COMPLETED"
          className={completedButtonfilter}
          onClick={completedFilterHandler}
        >
          COMPLETED
        </button>
      </div>
      {/* <div className="button-filter">
        <button value="ALL" className={buttoncolor} onClick={allFilters}>
          ALL
        </button>
        <button value="ACTIVE" onClick={() => filter("ACTIVE")}>ACTIVE</button>
        <button value="COMPLETED" onClick={() => filter("COMPLETED")}>COMPLETED</button>
      </div> */}
    </>
  );
}
