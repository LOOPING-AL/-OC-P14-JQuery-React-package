import React from "react";
import { ChangePageProps, Direction } from "..";
import { SelectInput } from "inputs";

const ChangePage = ({
  page,
  tableUpdateLength,
  numberOfElementToShow,
  handleClickPage,
  handleSelectPage,
}: ChangePageProps) => (
  <div className="tableHeaderPart tableHeaderLittlePart}">
    <button
      type="button"
      className="tableButton"
      onClick={() => handleClickPage(Direction.Left)}
      disabled={page === 1 || tableUpdateLength === 0}
    >
      <span className="tableButtonText">Previous</span>
    </button>

    <SelectInput
      id="page"
      options={Array.from(
        { length: Math.ceil(tableUpdateLength / numberOfElementToShow) },
        (_, i) => String(i + 1)
      )}
      width="60px"
      handleChange={handleSelectPage}
      value={String(page)}
    />

    <button
      type="button"
      className="tableButton"
      onClick={() => handleClickPage(Direction.Right)}
      disabled={
        page === Math.ceil(tableUpdateLength / numberOfElementToShow) ||
        tableUpdateLength === 0
      }
    >
      <span className="tableButtonText">Next</span>
    </button>
  </div>
);

export default ChangePage;
