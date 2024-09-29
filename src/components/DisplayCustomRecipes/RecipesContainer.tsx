import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { convertSecondsToHours } from "./utils";
import { Link } from "@mui/material";
import useRecipeSearch from "~/hooks/useRecipeSearch";
import { Filters } from "./constants";

export const RecipesContainer = ({ allergens }: { allergens: Filters[] | null }) => {
  const { data: recipes } = useRecipeSearch({
    allergens: allergens?.map((allergen) => allergen.id),
  });

  if (!recipes) {
    return null;
  }

  return (
    <Box>
      {recipes?.map((recipe) => {
        return (
          <Card
            key={recipe.id}
            sx={{
              display: "flex",
              height: "120px",
              borderRadius: 0,
              boxShadow: "0 10px 6px -6px rgb(0, 0, 0, .05)",
              marginBottom: "2px",
            }}
          >
            {recipe?.thumbnailUrl ? (
              <CardMedia component="img" sx={{ width: "30%", objectFit: "contain" }} image={recipe?.thumbnailUrl} alt="meal-image" />
            ) : (
              <Box sx={{ width: "30%" }} />
            )}
            <Box sx={{ display: "flex", flexDirection: "column", width: "70%" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Link href={`/recipe/${recipe?.id}`} underline="none">
                  <Typography
                    component="div"
                    sx={{
                      fontWeight: 500,
                      color: "#9C4B00",
                      fontSize: "20px",
                      lineHeight: "22px",
                      marginBottom: "4px",
                    }}
                  >
                    {recipe?.name}
                  </Typography>
                </Link>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#999999",
                  }}
                >
                  <Typography component="div" sx={{ fontSize: "14px" }}>
                    {recipe?.cuisine}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{
                      color: "#474747",
                      display: "flex",
                      alignItems: "center",
                      fontSize: "14px",
                      gap: "4px",
                    }}
                  >
                    <AccessTimeIcon sx={{ height: 16, width: 16 }} />
                    {recipe?.duration && convertSecondsToHours(recipe.duration)}
                  </Typography>
                </Box>
              </CardContent>
            </Box>
          </Card>
        );
      })}
    </Box>
  );
};
