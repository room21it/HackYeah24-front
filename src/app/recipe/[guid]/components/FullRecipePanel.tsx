import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useRecipe from "~/hooks/useRecipe";
import { useTabPanel } from "~/hooks/useTabPanel";

type Props = {
  index: number;
  value: number;
  guid: string;
};

const FullRecipePanel = ({ index, value, guid }: Props) => {
  const { tabProps, isHidden } = useTabPanel({ index, value });
  const { data: recipe } = useRecipe(guid);

  if (isHidden) {
    return null;
  }

  return (
    <Box {...tabProps}>
      <List>
        {recipe?.steps?.map((step) => (
          <ListItem key={step.id}>
            <ListItemText primary={step.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default FullRecipePanel;
