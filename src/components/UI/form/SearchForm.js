import { Button, OutlinedInput } from "@mui/material";
import React from "react";

const SearchForm = ({
  placeholder = "",
  term,
  onTermChange = () => {},
  showSearchButton = true,
}) => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form className="flex" onSubmit={formSubmitHandler}>
      <OutlinedInput
        fullWidth
        placeholder={placeholder}
        size="small"
        sx={{
          bgcolor: "common.white",
          ...(showSearchButton
            ? {
                borderTopLeftRadius: 100,
                borderBottomLeftRadius: 100,
              }
            : { borderRadius: 100 }),
        }}
        value={term}
        onChange={(event) => onTermChange(event.target.value)}
      />
      {showSearchButton && (
        <Button
          disableElevation
          type="submit"
          variant="contained"
          sx={{
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            fontSize: 13,
            minWidth: 70,
          }}
        >
          Search
        </Button>
      )}
    </form>
  );
};

export default SearchForm;
