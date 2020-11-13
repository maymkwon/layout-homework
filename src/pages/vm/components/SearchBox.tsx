import React from "react";
import FilterListIcon from "@material-ui/icons/FilterList";
import {
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import { FlexItem } from "../../../common/layouts";

const SearchBox = () => {
  return (
    <FlexItem align="center" style={{ margin: "30px 0" }}>
      <TextField
        variant="outlined"
        margin="dense"
        fullWidth
        style={{ margin: "0 10px 0 0" }}
        placeholder="filter VM instance"
        InputProps={{
          startAdornment: <FilterListIcon />,
        }}
      />
      <FormControl variant="outlined" style={{ minWidth: 100 }}>
        <InputLabel margin="dense" htmlFor="outlined-age-native-simple">
          Age
        </InputLabel>
        <Select
          margin="dense"
          label="Age"
          inputProps={{
            name: "age",
            id: "outlined-age-native-simple",
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </FlexItem>
  );
};

export default SearchBox;
