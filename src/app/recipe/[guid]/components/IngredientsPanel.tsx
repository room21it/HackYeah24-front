import { Button, Checkbox, FormControlLabel, List, ListItem, ListItemText } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useMemo, useState } from "react";
import useRecipe from "~/hooks/useRecipe";
import { useTabPanel } from "~/hooks/useTabPanel";

const SHORT_LIST_ELEMENT = 3;

type Props = {
  index: number;
  value: number;
  guid: string;
};

const IngredientsPanel = ({ index, value, guid }: Props) => {
  const { tabProps, isHidden } = useTabPanel({ index, value });
  const { data: recipe } = useRecipe(guid);

  const fullList = useMemo(() => recipe?.ingredients || [], [recipe?.ingredients]);
  const shortList = useMemo(() => fullList.slice(0, SHORT_LIST_ELEMENT) || [], [fullList]);
  const howMuchTooMany = fullList.length - SHORT_LIST_ELEMENT;
  const [isMoreElements, setIsMoreElements] = useState(howMuchTooMany > 0);
  const showMore = () => {
    setIsMoreElements(false);
  };

  useEffect(() => {
    setIsMoreElements(howMuchTooMany > 0);
  }, [howMuchTooMany]);

  if (isHidden) {
    return null;
  }

  return (
    <Box {...tabProps}>
      <List>
        {(isMoreElements ? shortList : fullList).map((ingredients) => (
          <ListItem key={ingredients.id}>
            <ListItemText
              primary={<FormControlLabel control={<Checkbox />} label={`${ingredients.amount} ${ingredients.unit} ${ingredients.name}`} />}
            />
          </ListItem>
        ))}
      </List>
      {isMoreElements && (
        <Button size="small" onClick={showMore}>
          Pokaz więcej ({howMuchTooMany})
        </Button>
      )}
    </Box>
  );
};

export default IngredientsPanel;
