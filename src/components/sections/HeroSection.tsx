import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <Box component="section" id="top" sx={{ pt: { xs: 2, md: 3 } }}>
      <Container maxWidth="xl" sx={{ maxWidth: "1180px" }}>
        <Box
          sx={{
            minHeight: { xs: 510, sm: 560, md: 610 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: { xs: "36px", md: "74px" },
            px: { xs: 3, sm: 6, md: 10 },
            py: { xs: 8, md: 10 },
            background:
              "radial-gradient(circle at top left, rgba(115, 80, 255, 0.16), transparent 38%), radial-gradient(circle at bottom right, rgba(244, 173, 181, 0.22), transparent 34%), #FBF7FC",
            boxShadow: "0 28px 70px rgba(80, 63, 126, 0.08)",
          }}
        >
          <Stack
            spacing={{ xs: 3, md: 3.5 }}
            sx={{
              width: "100%",
              maxWidth: 890,
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
                px: 2,
                py: 1,
                borderRadius: 999,
                backgroundColor: "rgba(255,255,255,0.74)",
                border: "1px solid rgba(31, 22, 58, 0.08)",
                boxShadow: "0 12px 30px rgba(58, 42, 90, 0.08)",
              }}
            >
              <PersonRoundedIcon sx={{ color: "primary.main", fontSize: 18 }} />
              <Typography sx={{ fontWeight: 650, fontSize: { xs: 13, md: 15 } }}>
                Hi, I&apos;m {profile.name}
              </Typography>
            </Stack>

            <Typography
              component="h1"
              sx={{
                width: "100%",
                maxWidth: { xs: 300, sm: 760, md: 840 },
                fontSize: { xs: 30, sm: 52, md: 66 },
                lineHeight: { xs: 1.08, md: 1.02 },
                fontWeight: 900,
                overflowWrap: "break-word",
                textWrap: "balance",
              }}
            >
              {profile.intro}
            </Typography>

            <Typography
              sx={{
                width: "100%",
                maxWidth: { xs: 300, sm: 650 },
                color: "text.primary",
                fontSize: { xs: 15, md: 20 },
                lineHeight: 1.7,
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
                pt: 1,
              }}
            >
              <Button
                href="#work"
                variant="contained"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{ width: { xs: "100%", sm: "auto" }, px: 3, borderRadius: 999 }}
              >
                My work
              </Button>
              <Button
                href="#about"
                variant="outlined"
                sx={{ width: { xs: "100%", sm: "auto" }, px: 3, borderRadius: 999 }}
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
