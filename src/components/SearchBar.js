import React, { useState } from "react";
import { Paper, TextField, SearchIcon, IconButton } from "@material-ui/core";
import Category from "./Category";

const SearchBar = ({ onFormSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  //   const [submit, setSubmit] = useState("");

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onFormSubmit(searchTerm);
    }
    e.preventDefault();
  };

  return (
    <Paper elevation={0} style={{ padding: "5px" }}>
      <TextField
        // size="medium"
        // variant="outlined"
        label="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={onKeyPress}
      ></TextField>
    </Paper>
  );
};
export default SearchBar;
