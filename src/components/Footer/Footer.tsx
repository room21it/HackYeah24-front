"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import GitHub from "@mui/icons-material/GitHub";
import Divider from "@mui/material/Divider";
import { LinkList } from "./LinksList/LinkList";
import { ORG_NAME } from "~/config/organization";

const logoStyle = {
  width: "140px",
  height: "auto",
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {"Copyright © "}
      <Link href="/">{ORG_NAME}&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export const Footer = () => {
  return (
    <>
      <Divider
        sx={{
          py: { xs: 8, sm: 10 },
        }}
      />

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 4, sm: 8 },
          py: { xs: 4, sm: 5 },
          textAlign: { sm: "center", md: "left" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              minWidth: { xs: "100%", sm: "60%" },
            }}
          >
            <Stack direction="column" useFlexGap spacing={1} sx={{ width: { xs: "100%", sm: "60%" } }}>
              <Box>
                <img
                  src={"https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg"}
                  style={logoStyle}
                  alt="logo of sitemark"
                />
              </Box>

              <Box>
                <Link color="text.secondary" href="#">
                  Privacy Policy
                </Link>
                <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
                  &nbsp;•&nbsp;
                </Typography>
                <Link color="text.secondary" href="#">
                  Terms of Service
                </Link>
                <Copyright />
              </Box>

              <Stack
                direction="row"
                justifyContent="left"
                spacing={1}
                useFlexGap
                sx={{
                  color: "text.secondary",
                }}
              >
                <Stack direction="row" spacing={2}>
                  <GitHub />
                  <Link target="_blank" href="https://github.com/room21it/HackYeah24-front">
                    Frontend
                  </Link>
                  <Link target="_blank" href="https://github.com/room21it/HackYeah24-back">
                    Backend
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </Box>

          <LinkList title="Product">
            <Link color="text.secondary" href="#">
              Features
            </Link>
            <Link color="text.secondary" href="#">
              Testimonials
            </Link>
            <Link color="text.secondary" href="#">
              Highlights
            </Link>
            <Link color="text.secondary" href="#">
              Pricing
            </Link>
            <Link color="text.secondary" href="#">
              FAQs
            </Link>
          </LinkList>

          <LinkList title="Company">
            <Link color="text.secondary" href="#">
              About us
            </Link>
            <Link color="text.secondary" href="#">
              Careers
            </Link>
            <Link color="text.secondary" href="#">
              Press
            </Link>
          </LinkList>

          <LinkList title="Legal">
            <Link color="text.secondary" href="#">
              Terms
            </Link>
            <Link color="text.secondary" href="#">
              Privacy
            </Link>
            <Link color="text.secondary" href="#">
              Contact
            </Link>
          </LinkList>
        </Box>
      </Container>
    </>
  );
};
