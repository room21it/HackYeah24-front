import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { allergensMap } from "~/app/api/allergens/allergens";
import useRecipe from "~/hooks/useRecipe";
import { useTabPanel } from "~/hooks/useTabPanel";

type Props = {
  index: number;
  value: number;
  guid: string;
};

const AllergensPanel = ({ index, value, guid }: Props) => {
  const { tabProps, isHidden } = useTabPanel({ index, value });
  const { data: recipe } = useRecipe(guid);

  if (isHidden) {
    return null;
  }

  return (
    <Box {...tabProps}>
      <List>
        {recipe?.allergens?.map((alergen) => (
          <ListItem key={alergen.id}>
            <ListItemText primary={allergensMap.get(alergen.allergenType as string) || alergen.allergenType} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AllergensPanel;
