import React, { useState } from "react";
import { Paper, TextField } from "@material-ui/core";

const SearchBar = ({ onFormSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  //   const [submit, setSubmit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onFormSubmit(searchTerm);
    }
  };

  return (
    <Paper elevation={0} style={{ padding: "25px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={onKeyPress}
        ></TextField>
      </form>
    </Paper>
  );
};
export default SearchBar;
