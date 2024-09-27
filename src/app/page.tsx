import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Hero from "~/components/Hero";
import WeatherForecast from "~/components/WeatherForecast";

const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Home() {
  return (
    <main>
      <Hero
        title={
          <>
            Hi! Welcome to our <mark>HackYeah&nbsp;&apos;24</mark> site!
          </>
        }
        description="The site is set up for the HakYeah event, 2024 edition. keep your fingers crossed for Us!"
      />

      <Container>
        <Stack spacing={4}>
          <Grid container spacing={2}>
            {elements.map((orderNumber) => (
              <Grid key={orderNumber} item xs={12} sm={4}>
                Grid element no. {orderNumber}
              </Grid>
            ))}
          </Grid>

          <WeatherForecast />
        </Stack>
      </Container>
    </main>
  );
}
