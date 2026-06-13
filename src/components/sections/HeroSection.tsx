import { Box, Button, Container, Stack, Typography } from "@mui/material";

import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <Box component="section" id="top" sx={{ pt: { xs: 2, md: 3 } }}>
      <Container maxWidth={false} sx={{ maxWidth: "1500px" }}>
        <Box
          sx={{
            minHeight: { xs: 560, sm: 620, md: 720 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: { xs: "34px", sm: "52px", md: "86px" },
            px: { xs: 2.5, sm: 6, md: 10, lg: 14 },
            py: { xs: 7, sm: 9, md: 12 },
            background:
              "radial-gradient(circle at 24% 8%, rgba(141, 112, 255, 0.15), transparent 30%), radial-gradient(circle at 74% 76%, rgba(244, 173, 181, 0.18), transparent 35%), linear-gradient(180deg, #FCFAFF 0%, #FFF7FA 100%)",
            boxShadow: "0 30px 80px rgba(47, 12, 142, 0.08)",
          }}
        >
          <Stack
            spacing={{ xs: 3, md: 4 }}
            sx={{
              width: "100%",
              maxWidth: 1060,
              minWidth: 0,
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Stack
              direction="row"
              spacing={0.9}
              sx={{
                alignItems: "center",
                px: { xs: 1.8, md: 2.4 },
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
                  fontWeight: 650,
                  fontSize: { xs: 18, sm: 22, md: 28 },
                  lineHeight: 1.1,
                }}
              >
                Hi, I&apos;m {profile.name} 👋
              </Typography>
            </Stack>

            <Typography
              component="h1"
              sx={{
                width: "100%",
                maxWidth: { xs: 330, sm: 760, md: 1040 },
                fontSize: { xs: 36, sm: 58, md: 78, lg: 88 },
                lineHeight: { xs: 1.08, md: 1.12 },
                fontWeight: 950,
                overflowWrap: "break-word",
                textWrap: "balance",
              }}
            >
              {profile.intro}
            </Typography>

            <Typography
              sx={{
                width: "100%",
                maxWidth: { xs: 320, sm: 760 },
                color: "text.primary",
                fontSize: { xs: 17, sm: 22, md: 29 },
                lineHeight: 1.45,
              }}
            >
              Backed by strategy. Driven by empathy. Built with intention.
            </Typography>

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
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
