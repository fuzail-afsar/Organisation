import { Box } from "@mui/system";
import React, { useState } from "react";
import SearchForm from "../../../UI/form/SearchForm";

const UserSearch = ({ users, onSearch }) => {
  const [term, setTerm] = useState("");

  const termChangeHandler = (term) => {
    const lowerCasedTerm = term.toLowerCase();
    const filteredUsers = users.filter((user) =>
      Object.keys(user).some((key) =>
        key === "name" || key === "email"
          ? user[key].toLowerCase().includes(lowerCasedTerm)
          : null
      )
    );
    onSearch(filteredUsers);
    setTerm(term);
  };

  return (
    <Box sx={{ bgcolor: "background.alternate", p: 1.25 }}>
      <SearchForm
        placeholder="User Search"
        term={term}
        onTermChange={termChangeHandler}
        showSearchButton={false}
      />
    </Box>
  );
};

export default UserSearch;
