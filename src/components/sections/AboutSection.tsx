import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { Box, Chip, Container, Link, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";

import { MockupFrame } from "@/components/ui/MockupFrame";
import { aboutContent, profile } from "@/data/profile";

const contactIcons = [EmailRoundedIcon, PhoneRoundedIcon, LocationOnRoundedIcon];

export function AboutSection() {
  return (
    <Box component="section" id="about" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="xl" sx={{ maxWidth: "1280px" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "420px 1fr" },
            gap: { xs: 5, md: 6, lg: 7 },
            alignItems: "start",
          }}
        >
          <Stack
            spacing={{ xs: 3.5, md: 4 }}
            sx={{
              pr: { md: 5, lg: 6 },
              borderRight: { md: "1px solid" },
              borderColor: { md: "divider" },
            }}
          >
            <MockupFrame
              src={profile.portraitImage}
              alt={`${profile.name} portrait`}
              variant="portrait"
            />

            <InfoBlock title="Contact">
              {aboutContent.contact.map((item, index) => {
                const Icon = contactIcons[index] ?? EmailRoundedIcon;

                return (
                  <Stack
                    key={item}
                    direction="row"
                    spacing={1.2}
                    sx={{ alignItems: "center", color: "text.secondary" }}
                  >
                    <Icon sx={{ fontSize: 18, color: "primary.main" }} />
                    <Typography variant="body2">{item}</Typography>
                  </Stack>
                );
              })}
            </InfoBlock>

            <InfoBlock title="Personal project">
              <Box
                sx={{
                  p: { xs: 2.5, md: 3 },
                  borderLeft: "2px solid",
                  borderColor: "text.primary",
                  backgroundColor: "rgba(244, 215, 224, 0.58)",
                }}
              >
                <Typography sx={{ fontWeight: 850, mb: 0.6 }}>
                  {aboutContent.featuredProject.title}
                </Typography>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: 12,
                    fontWeight: 750,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    mb: 1.5,
                  }}
                >
                  Beauty e-commerce platform
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {aboutContent.featuredProject.description}
                </Typography>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    mb: 2,
                  }}
                >
                  UX/UI Designer - Project Lead
                </Typography>
                <Link
                  href={aboutContent.featuredProject.href}
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.6,
                    fontSize: 13,
                    fontWeight: 850,
                  }}
                >
                  View case study
                  <ArrowOutwardRoundedIcon sx={{ fontSize: 16 }} />
                </Link>
              </Box>
            </InfoBlock>
          </Stack>

          <Stack spacing={{ xs: 4.5, md: 5 }}>
            <Stack spacing={{ xs: 2, md: 2.5 }}>
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: 58, sm: 76, md: 92, lg: 104 },
                  lineHeight: 0.92,
                  fontWeight: 950,
                  maxWidth: 360,
                }}
              >
                about
                <Box component="span" sx={{ display: "block" }}>
                  me.
                </Box>
              </Typography>
              <Typography
                color="text.secondary"
                sx={{
                  maxWidth: 780,
                  fontSize: { xs: 16, md: 17 },
                  lineHeight: 1.86,
                }}
              >
                {profile.about}
              </Typography>
            </Stack>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                columnGap: { md: 6, lg: 7 },
                rowGap: 4,
              }}
            >
              <TimelineBlock title="Experience" items={aboutContent.experience} />
              <TimelineBlock title="Education" items={aboutContent.education} />
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 0.9fr" },
                columnGap: { md: 6, lg: 7 },
                rowGap: 4,
              }}
            >
              <InfoBlock title="Abilities">
                <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
                  {aboutContent.abilities.map((ability) => (
                    <Chip
                      key={ability}
                      label={ability}
                      variant="outlined"
                      sx={{
                        height: 36,
                        px: 0.6,
                        backgroundColor: "background.paper",
                        borderColor: "rgba(13, 11, 18, 0.18)",
                        color: "text.primary",
                        fontSize: 14,
                      }}
                    />
                  ))}
                </Stack>
              </InfoBlock>
              <InfoBlock title="Tools">
                <Stack spacing={0}>
                  {aboutContent.tools.map((tool, index) => (
                    <Stack
                      key={tool}
                      direction="row"
                      spacing={3}
                      sx={{
                        alignItems: "center",
                        borderBottom: "1px solid",
                        borderColor: "divider",
                        py: 1.45,
                      }}
                    >
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ width: 22 }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </Typography>
                      <Typography sx={{ fontWeight: 750 }}>{tool}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </InfoBlock>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

type InfoBlockProps = {
  title: string;
  children: ReactNode;
};

function InfoBlock({ title, children }: InfoBlockProps) {
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
        <Typography
          component="h3"
          sx={{
            flexShrink: 0,
            fontSize: 12,
            fontWeight: 850,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "text.secondary",
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            height: "1px",
            flex: 1,
            minWidth: 48,
            backgroundColor: "divider",
          }}
        />
      </Stack>
      {children}
    </Stack>
  );
}

type TimelineBlockProps = {
  title: string;
  items: typeof aboutContent.experience;
};

function TimelineBlock({ title, items }: TimelineBlockProps) {
  return (
    <InfoBlock title={title}>
      <Stack spacing={2.7}>
        {items.map((item) => (
          <Box key={`${item.period}-${item.title}`}>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{
                display: "block",
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                mb: 0.6,
              }}
            >
              {item.period}
            </Typography>
            <Typography sx={{ fontWeight: 850, lineHeight: 1.35 }}>
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.meta}
            </Typography>
          </Box>
        ))}
      </Stack>
    </InfoBlock>
  );
}
