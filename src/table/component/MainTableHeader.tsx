import React from "react";
import { MainTableHeaderProps } from "..";
import ChangePage from "./ChangePage";
import { SelectInput, TextInput } from "lib";

const MainTableHeader = ({
  page,
  search,
  entries,
  tableTotalLength,
  haveASearchInput,
  tableUpdateLength,
  numberOfElementToShow,
  handleClickPage,
  handleSelectPage,
  handleChangeSearch,
  handleChangeElementToShow,
}: MainTableHeaderProps) => (
  <div className="tableHeader">
    <div className="tableHeaderPart tableHeaderLittlePart">
      <p>Show</p>
      <SelectInput
        id="elementShow"
        options={entries}
        value={String(numberOfElementToShow)}
        width="60px"
        handleChange={handleChangeElementToShow}
      />
      <p>entries</p>
    </div>

    <div className="tableHeaderPart">
      {tableUpdateLength === 0 ? (
        <p>No items</p>
      ) : (
        <>
          <p>Showing to </p>
          <p>{(page - 1) * numberOfElementToShow + 1}</p>
          <p>to</p>
          <p>
            {page * numberOfElementToShow + 1 > tableUpdateLength
              ? tableUpdateLength
              : page * numberOfElementToShow + 1}
          </p>

          {tableUpdateLength !== tableTotalLength && (
            <>
              <p>of </p>
              <p>{tableUpdateLength}</p>
              <p>update</p>
            </>
          )}

          <p>of </p>
          <p>{tableTotalLength}</p>
          <p>total</p>
        </>
      )}
    </div>

    <ChangePage
      page={page}
      tableUpdateLength={tableUpdateLength}
      numberOfElementToShow={numberOfElementToShow}
      handleClickPage={handleClickPage}
      handleSelectPage={handleSelectPage}
    />

    {haveASearchInput && (
      <div className="tableHeaderPart">
        <p>Search</p>
        <TextInput
          id="search"
          handleChange={handleChangeSearch}
          value={search}
        />
      </div>
    )}
  </div>
);

export default MainTableHeader;
