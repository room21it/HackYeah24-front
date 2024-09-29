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
import Logo from "../Logo";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      Created by{" "}
      <Link href="https://github.com/room21it" target="_blank">
        {ORG_NAME}
      </Link>{" "}
      for <Link href="https://hackyeah.pl/pl/">HackYeah</Link> 2024
    </Typography>
  );
}

export const Footer = () => {
  return (
    <>
      <Divider
        sx={{
          py: { xs: 1, sm: 10 },
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
                <Logo />
              </Box>

              <Box>
                {/* <Link color="text.secondary" href="#">
                  Privacy Policy
                </Link>
                <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
                  &nbsp;•&nbsp;
                </Typography>
                <Link color="text.secondary" href="#">
                  Terms of Service
                </Link> */}
                <Copyright />
              </Box>

              {/* <Stack
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
              </Stack> */}
            </Stack>
          </Box>

          {/* <LinkList title="Product">
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
          </LinkList> */}

          {/* <LinkList title="Company">
            <Link color="text.secondary" href="#">
              About us
            </Link>
            <Link color="text.secondary" href="#">
              Careers
            </Link>
            <Link color="text.secondary" href="#">
              Press
            </Link>
          </LinkList> */}

          {/* <LinkList title="Legal">
            <Link color="text.secondary" href="#">
              Terms
            </Link>
            <Link color="text.secondary" href="#">
              Privacy
            </Link>
            <Link color="text.secondary" href="#">
              Contact
            </Link>
          </LinkList> */}
        </Box>
      </Container>
    </>
  );
};
