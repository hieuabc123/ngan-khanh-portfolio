import { Box, Button, Container, Stack, Typography } from "@mui/material";

import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <Box component="section" id="top" sx={{ pt: { xs: 2, md: 3 } }}>
      <Container maxWidth="xl" sx={{ maxWidth: "1440px !important" }}>
        <Box
          sx={{
            minHeight: { xs: 560, sm: 620, md: 720 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: { xs: "34px", sm: "52px", md: "86px" },
            px: { xs: 2.5, sm: 6, md: 10, lg: 10 },
            py: { xs: 7, sm: 9, md: 12 },
            background:
              "radial-gradient(circle at 24% 8%, rgba(121, 86, 255, 0.24), transparent 20%), radial-gradient(circle at 74% 76%, rgba(239, 128, 149, 0.24), transparent 20%), linear-gradient(180deg, #F7F3FF 0%, #FFF0F4 100%)",
            backgroundSize: "125% 125%, 125% 125%, 100% 100%",
            animation: "heroAura 12s ease-in-out infinite alternate",
            boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.74)",
            "@media (prefers-reduced-motion: reduce)": {
              animation: "none",
            },
          }}
        >
          <Stack
            spacing={{ xs: 3, md: 4 }}
            sx={{
              width: "100%",
              maxWidth: 1440,
              minWidth: 0,
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Reveal delay={60} direction="down">
              <Stack
                direction="row"
                spacing={0.9}
                sx={{
                  alignItems: "center",
                  px: { xs: 1.8, md: 2 },
                  py: { xs: 0.9, md: 1.15 },
                  borderRadius: 999,
                  backgroundColor: "rgba(255, 255, 255, 0.64)",
                  border: "1px solid rgba(255, 255, 255, 0.92)",
                  boxShadow:
                    "inset 0 0 0 1px rgba(47, 12, 142, 0.06), 0 12px 30px rgba(47, 12, 142, 0.06)",
                }}
              >
                <Typography
                  sx={{
                    color: "text.primary",
                    fontWeight: 400,
                    fontSize: { xs: 18, sm: 22, md: 24 },
                    lineHeight: 1.1,
                  }}
                >
                  Hi, I&apos;m {profile.name} 👋
                </Typography>
              </Stack>
            </Reveal>

            <Reveal
              delay={150}
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Typography
                component="h1"
                sx={{
                  width: "100%",
                  maxWidth: { xs: 330, sm: 760, md: 1000 },
                  fontSize: { xs: 36, sm: 56, md: 56, lg: 56 },
                  lineHeight: { xs: 1.08, md: 1.3 },
                  fontWeight: 500,
                  overflowWrap: "break-word",
                }}
              >
                {profile.intro}
              </Typography>
            </Reveal>

            <Reveal
              delay={240}
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Typography
                sx={{
                  width: "100%",
                  maxWidth: { xs: 320, sm: 760 },
                  color: "text.primary",
                  fontSize: { xs: 17, sm: 22, md: 24 },
                  lineHeight: 1.45,
                }}
              >
                Backed by strategy. Driven by empathy. Built with intention.
              </Typography>
            </Reveal>

            <Reveal
              delay={330}
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.4}
                sx={{
                  width: "100%",
                  maxWidth: { xs: 310, sm: "none" },
                  justifyContent: "center",
                  pt: { xs: 0.5, md: 2 },
                }}
              >
                <Button
                  href="#work"
                  variant="contained"
                  sx={{
                    width: { xs: "100%", sm: "auto" },
                    minWidth: { sm: 136 },
                    minHeight: { xs: 48, md: 58 },
                    px: { xs: 3, md: 4 },
                    borderRadius: 999,
                    fontSize: { xs: 15, md: 17 },
                  }}
                >
                  My work
                </Button>
                <Button
                  href="#about"
                  variant="outlined"
                  sx={{
                    width: { xs: "100%", sm: "auto" },
                    minWidth: { sm: 150 },
                    minHeight: { xs: 48, md: 58 },
                    px: { xs: 3, md: 4 },
                    borderRadius: 999,
                    borderWidth: 2,
                    color: "primary.main",
                    fontSize: { xs: 15, md: 17 },
                    "&:hover": {
                      borderWidth: 2,
                    },
                  }}
                >
                  About me
                </Button>
              </Stack>
            </Reveal>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
