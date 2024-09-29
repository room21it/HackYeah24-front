import { CheckBox } from "@mui/icons-material";
import { Checkbox, FormControlLabel, List, ListItem, ListItemText } from "@mui/material";
import Box from "@mui/material/Box";
import useRecipe from "~/hooks/useRecipe";
import { useTabPanel } from "~/hooks/useTabPanel";

type Props = {
  index: number;
  value: number;
  guid: string;
};

const IngredientsPanel = ({ index, value, guid }: Props) => {
  const { tabProps, isHidden } = useTabPanel({ index, value });
  const { data: recipe } = useRecipe(guid);

  console.log(recipe);

  if (isHidden) {
    return null;
  }

  return (
    <Box {...tabProps}>
      <List>
        {recipe?.ingredients?.map((ingredients) => (
          <ListItem key={ingredients.id}>
            <ListItemText
              primary={<FormControlLabel control={<Checkbox />} label={`${ingredients.amount} ${ingredients.unit} ${ingredients.name}`} />}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default IngredientsPanel;
