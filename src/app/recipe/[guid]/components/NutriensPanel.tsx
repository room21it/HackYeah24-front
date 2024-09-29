import { useTabPanel } from "~/hooks/useTabPanel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useRecipe from "~/hooks/useRecipe";

type Props = {
  index: number;
  value: number;
  guid: string;
};

const NutriensPanel = ({ index, value, guid }: Props) => {
  const { tabProps, isHidden } = useTabPanel({ index, value });
  const { data: recipe } = useRecipe(guid);

  if (isHidden) {
    return null;
  }

  const calories = recipe?.nutriens?.calories;
  const macroElements = recipe?.nutriens?.macroElements;

  return (
    <div {...tabProps}>
      <TableContainer component={Paper}>
        <Table aria-label="wartości odżywcze">
          <TableHead>
            <TableRow>
              <TableCell>Informacja</TableCell>
              <TableCell>Wartość w przepisie</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                Wartość energetyczna
              </TableCell>
              <TableCell>{calories} kcal</TableCell>
            </TableRow>

            <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                Tłuszcz
              </TableCell>
              <TableCell>{macroElements?.fat?.gramms} g</TableCell>
            </TableRow>

            <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                Węglowodany
              </TableCell>
              <TableCell>{macroElements?.carbohydrate?.gramms} g</TableCell>
            </TableRow>

            <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                Białko
              </TableCell>
              <TableCell>{macroElements?.protein?.gramms} g</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default NutriensPanel;
