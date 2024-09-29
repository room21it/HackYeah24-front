import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Allergens } from "../api/allergens/allergens";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function Select({ allergens }: { allergens: Allergens[] }) {
  const [value, setValue] = React.useState<null | Allergens[]>(null);

  React.useEffect(() => {
    const defaultValues = localStorage.getItem("allergens");
    if (defaultValues) {
      setValue(JSON.parse(defaultValues));
    }
  }, []);

  React.useEffect(() => {
    if (value !== null) {
      localStorage.setItem("allergens", JSON.stringify(value));
    }
  }, [value]);

  console.log("value", value);

  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      value={value || []}
      options={allergens}
      disableCloseOnSelect
      onChange={(event, value) => setValue(value)}
      getOptionLabel={(allergen) => allergen.name}
      renderOption={(props, option, { selected }) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
              sx={{
                "&.Mui-checked": {
                  color: "#FF7A00",
                },
              }}
            />
            {option.name}
          </li>
        );
      }}
      renderInput={(params) => {
        return (
          <TextField {...params} label="Alergeny" placeholder="Dodaj alergen" sx={{backgroundColor: "rgba(0, 0, 0, .06)"}} />
        );
      }}
    />
  );
}
