import MailRoundedIcon from "@mui/icons-material/MailRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { Box, Container, Link, Stack, Typography } from "@mui/material";

import { caseStudies } from "@/data/caseStudies";
import { profile } from "@/data/profile";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About me", href: "/#about" },
  { label: "Work", href: "/#work" },
];

export function Footer() {
  return (
    <Box
      component="footer"
      id="contact"
      sx={{
        mt: { xs: 7, md: 10 },
        borderRadius: { xs: "28px 28px 0 0", md: "40px 40px 0 0" },
        borderTop: "1px solid rgba(15, 23, 42, 0.08)",
        backgroundColor: "#FFFFFF",
        boxShadow: "0 -10px 36px rgba(35, 22, 66, 0.06)",
      }}
    >
      <Container maxWidth="xl" sx={{ maxWidth: "1180px", py: { xs: 5, md: 7 } }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 5, md: 8 }}
          sx={{
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <Stack spacing={2.2} sx={{ maxWidth: 450 }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: 30, md: 34 },
                  lineHeight: 1.1,
                  fontWeight: 500,
                  fontFamily: "var(--font-serif)",
                }}
              >
                let&apos;s connect!
              </Typography>
              <SendRoundedIcon sx={{ fontSize: 26 }} />
            </Stack>
            <Typography color="text.secondary" sx={{ maxWidth: 410 }}>
              {profile.contactIntro}
            </Typography>
            <Stack spacing={1.1}>
              <Link
                href={`mailto:${profile.email}`}
                sx={{ display: "inline-flex", alignItems: "center", gap: 1.2 }}
              >
                <MailRoundedIcon sx={{ fontSize: 20 }} />
                {profile.email}
              </Link>
              <Link
                href={`tel:${profile.phone.replace(/[^0-9+]/g, "")}`}
                sx={{ display: "inline-flex", alignItems: "center", gap: 1.2 }}
              >
                <PhoneRoundedIcon sx={{ fontSize: 20 }} />
                {profile.phone}
              </Link>
            </Stack>
          </Stack>

          <Stack
            direction="row"
            spacing={{ xs: 2, sm: 8, md: 12 }}
            sx={{
              width: { xs: "100%", md: "auto" },
              pt: { xs: 0, md: 0.5 },
              alignItems: "flex-start",
            }}
          >
            <FooterColumn title="Navigation" items={navigation} />
            <FooterColumn
              title="Case studies"
              items={caseStudies.map((item) => ({
                label: item.shortTitle,
                href: `/work/${item.slug}`,
              }))}
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

type FooterColumnProps = {
  title: string;
  items: Array<{ label: string; href: string }>;
};

function FooterColumn({ title, items }: FooterColumnProps) {
  return (
    <Stack spacing={1.4} sx={{ flex: 1, minWidth: { xs: 0, sm: 150 } }}>
      <Typography sx={{ fontSize: 14, fontWeight: 850 }}>{title}</Typography>
      <Stack spacing={1}>
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            sx={{
              color: "text.secondary",
              fontSize: 13,
              textDecoration: "none",
              "&:hover": { color: "primary.main" },
            }}
          >
            {item.label}
          </Link>
        ))}
      </Stack>
    </Stack>
  );
}
