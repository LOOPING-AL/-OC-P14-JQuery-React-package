import React from "react";
import { MainTableBodyHeaderProps, SortType } from "..";
import "../assets/style/Table.css";

const MainTableBodyHeader = ({
  allColumns,
  sortType,
  handleClick,
  column,
}: MainTableBodyHeaderProps) => (
  <th
    style={{ width: `${100 / allColumns.length}%` }}
    onClick={() => handleClick(column.keyObject)}
  >
    <div className="columnHeader">
      <p>{column.columnName}</p>
      {sortType !== SortType.None && (
        <img
          src="../assets/icons/caret-up-solid.svg"
          alt="caret up"
          className={`caret ${sortType === SortType.Down && "caretDown"}`}
        />
      )}
    </div>
  </th>
);

export default MainTableBodyHeader;
