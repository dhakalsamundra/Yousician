import React from "react";
import { useDispatch } from "react-redux";

import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

import { searchTerm } from "../reducers/searchReducer";

export default function Search() {
    const dispatch = useDispatch()
  const handleNewSearchChange = (e) => {
    const value = e.target.value;
    dispatch(searchTerm(value));
  };
  return (
    <div>
      <IconButton aria-label="search">
        <SearchIcon />
        <InputBase
          autoComplete="off"
          placeholder="Search for song by artist or title"
          onChange={handleNewSearchChange}
          inputProps={{ "aria-label": "search" }}
        />
      </IconButton>
    </div>
  );
}
