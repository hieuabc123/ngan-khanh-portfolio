import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";

const navItems = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  {
    label: "Résumé",
    href: "https://drive.google.com/drive/folders/1LApUGCL3mj45qpwRHTZkpf6vHTr9DHnD",
    target: "_blank",
  },
];

export function Header() {
  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 30,
        backgroundColor: "rgba(255, 255, 255, 0.86)",
        backdropFilter: "blur(18px)",
        overflowX: "clip",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ maxWidth: "1440px !important", position: "relative" }}
      >
        <Stack
          direction="row"
          sx={{
            width: "100%",
            minWidth: 0,
            minHeight: { xs: 62, md: 68 },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            aria-label="Go to homepage"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              color: "text.primary",
              textDecoration: "none",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 14, md: 16 },
                fontWeight: 700,
                letterSpacing: 0,
              }}
            >
              NGÂN KHÁNH
            </Typography>
          </Link>

          <Stack
            component="nav"
            direction="row"
            spacing={{ xs: 1.2, md: 3.2 }}
            aria-label="Primary navigation"
            sx={{ alignItems: "center", display: { xs: "none", sm: "flex" } }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.target}
                sx={{
                  px: 0.3,
                  py: 0.75,
                  color: "text.primary",
                  fontSize: 16,
                  fontWeight: 700,
                  textDecoration: "none",
                  "&:hover": { color: "primary.main" },
                  "&:focus-visible": {
                    borderRadius: 1,
                    outline: "3px solid rgba(47, 12, 142, 0.18)",
                  },
                }}
              >
                {item.label}
              </Link>
            ))}
          </Stack>

          <Button
            href="/#contact"
            aria-label="Contact"
            variant="contained"
            size="small"
            endIcon={<ArrowOutwardRoundedIcon />}
            sx={{
              position: { xs: "fixed", sm: "static" },
              right: { xs: 16, sm: "auto" },
              top: { xs: 12, sm: "auto" },
              transform: "none",
              minHeight: 38,
              minWidth: { xs: 104, sm: 64 },
              width: "auto",
              flexShrink: 0,
              px: { xs: 1.7, sm: 1.8, md: 2.4 },
              borderRadius: 999,
              "&:hover": {
                transform: { xs: "none", sm: "translateY(-1px)" },
              },
            }}
          >
            Contact
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
