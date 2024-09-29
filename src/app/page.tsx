import Alert from "@mui/material/Alert";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NextLink from "next/link";
import { RecipesContainer } from "~/components/DisplayCustomRecipes/RecipesContainer";
import { SearchRecipe } from "~/components/DisplayCustomRecipes/SearchRecipe";
import FormRecipesScraps from "~/components/FormRecipesScraps";
import FullPageLoader from "~/components/FullPageLoader";

export default function Home() {
  return (
    <FullPageLoader>
      <Container component="main">
        <Stack spacing={2}>
          <Alert severity="info">
            Możesz uzupełnić w{" "}
            <Link href="/settings" component={NextLink}>
              ustawieniach
            </Link>{" "}
            swoje alergeny
          </Alert>
          <FormRecipesScraps />
          <SearchRecipe />
          <Divider />
        </Stack>
      </Container>
    </FullPageLoader>
  );
}
