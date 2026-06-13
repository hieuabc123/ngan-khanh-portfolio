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
      <Container maxWidth="xl" sx={{ maxWidth: "1080px" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "350px 1fr" },
            gap: { xs: 5, md: 7 },
            alignItems: "start",
          }}
        >
          <Stack spacing={3}>
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

            <Box
              sx={{
                p: 3,
                borderLeft: "2px solid",
                borderColor: "primary.main",
                backgroundColor: "#FCE7EE",
              }}
            >
              <Typography sx={{ fontSize: 13, fontWeight: 850, mb: 1 }}>
                Featured project
              </Typography>
              <Typography sx={{ fontWeight: 850, mb: 0.8 }}>
                {aboutContent.featuredProject.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1.6 }}>
                {aboutContent.featuredProject.description}
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
          </Stack>

          <Stack spacing={{ xs: 4, md: 5 }}>
            <Stack spacing={2.2}>
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: 58, sm: 76, md: 86 },
                  lineHeight: 0.84,
                  fontWeight: 950,
                  maxWidth: 430,
                }}
              >
                about me
              </Typography>
              <Typography
                color="text.secondary"
                sx={{
                  maxWidth: 760,
                  fontSize: { xs: 15.5, md: 16.5 },
                  lineHeight: 1.78,
                }}
              >
                {profile.about}
              </Typography>
            </Stack>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: { xs: 4, md: 6 },
              }}
            >
              <TimelineBlock title="Experience" items={aboutContent.experience} />
              <TimelineBlock title="Education" items={aboutContent.education} />
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 0.75fr" },
                gap: { xs: 4, md: 6 },
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
                        backgroundColor: "#FFFFFF",
                        borderColor: "rgba(47, 12, 142, 0.18)",
                      }}
                    />
                  ))}
                </Stack>
              </InfoBlock>
              <InfoBlock title="Tools">
                <Stack spacing={1.1}>
                  {aboutContent.tools.map((tool, index) => (
                    <Stack
                      key={tool}
                      direction="row"
                      sx={{
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderBottom: "1px solid",
                        borderColor: "divider",
                        pb: 1,
                      }}
                    >
                      <Typography sx={{ fontWeight: 700 }}>{tool}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {String(index + 1).padStart(2, "0")}
                      </Typography>
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
    <Stack spacing={1.8}>
      <Typography
        component="h3"
        sx={{
          fontSize: 12,
          fontWeight: 850,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "text.secondary",
        }}
      >
        {title}
      </Typography>
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
      <Stack spacing={2.1}>
        {items.map((item) => (
          <Box key={`${item.period}-${item.title}`}>
            <Typography variant="caption" color="text.secondary">
              {item.period}
            </Typography>
            <Typography sx={{ fontWeight: 850, mt: 0.3 }}>{item.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {item.meta}
            </Typography>
          </Box>
        ))}
      </Stack>
    </InfoBlock>
  );
}
