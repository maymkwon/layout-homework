import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { FlexItem } from "../../../common/layouts";
import styled from "styled-components";

const Wrap = styled(FlexItem)`
  margin: 15px 0;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
  .MuiFormControl-root + .MuiFormControl-root {
    margin-left: 10px;
  }
`;

const FilterBox = () => {
  const [state, setState] = useState<{ value1: string; value2: string }>({
    value1: "",
    value2: "",
  });

  const handleChange = (key: string) => (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setState((prev) => ({
      ...prev,
      [key]: event.target.value,
    }));
  };
  return (
    <Wrap align="center">
      <FlexItem>
        <FormControl variant="outlined" style={{ minWidth: 200 }}>
          <InputLabel margin="dense" htmlFor="outlined-age-native-simple">
            Age
          </InputLabel>
          <Select
            value={state.value1}
            onChange={handleChange("value1")}
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
        <FormControl variant="outlined" style={{ minWidth: 200 }}>
          <InputLabel margin="dense" htmlFor="outlined-age-native-simple">
            Age
          </InputLabel>
          <Select
            // native
            value={state.value2}
            onChange={handleChange("value2")}
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
      <FlexItem>
        <Button size="large">RESET</Button>
        <Button size="large">SAVE</Button>
      </FlexItem>
    </Wrap>
  );
};

export default FilterBox;
