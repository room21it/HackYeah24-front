import Box from "@mui/material/Box";
import LogoCollection from "./components/LogoCollection";
import Features from "./components/Features";
import Divider from "@mui/material/Divider";
import Testimonials from "./components/Testimonials";
import Highlights from "./components/Highlights";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Hero from "~/components/Hero";

export default function LandingPage() {
  return (
    <main>
      <Hero
        title={<>Our latest&nbsp;<mark>products</mark></>}
        description="Explore our cutting-edge dashboard, delivering high-quality solutions tailored to your needs. Elevate your experience with top-tier features and services."
      />

      <Box sx={{ bgcolor: 'background.default' }}>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
      </Box>
    </main>
  )
}