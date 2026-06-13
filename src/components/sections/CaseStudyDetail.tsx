import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import type { ReactNode } from "react";

import { MockupFrame } from "@/components/ui/MockupFrame";
import type {
  CaseSection,
  CaseStudy,
  ComponentShowcaseItem,
} from "@/types/portfolio";

const slaymeSoftSection = "#FBF5FF";
const slaymePanel = "#FFFFFF";
const slaymeText = "#2B2B2B";
const slaymeMuted = "#777277";
const slaymeRose = "#F5A9B8";
const slaymeLavender = "#E8D9F5";
const slaymeSuccess = "#79C9A6";

type CaseStudyDetailProps = {
  caseStudy: CaseStudy;
};

export function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
  return (
    <>
      <CaseHero caseStudy={caseStudy} />
      <Overview caseStudy={caseStudy} />
      {caseStudy.sections.map((section, index) =>
        caseStudy.slug === "slayme" ? (
          <SlaymeSection
            key={section.title}
            section={section}
            accent={caseStudy.accent}
          />
        ) : (
          <CaseGridSection
            key={section.title}
            section={section}
            background={index % 2 === 0 ? caseStudy.softBackground : "#FFFFFF"}
          />
        ),
      )}
      {caseStudy.flow ? (
        <FlowSection
          title="User Flow"
          items={caseStudy.flow}
          accent={caseStudy.accent}
        />
      ) : null}
      {caseStudy.architecture ? (
        <ArchitectureSection items={caseStudy.architecture} />
      ) : null}
      <DesignSystemSection caseStudy={caseStudy} />
      {caseStudy.wireframes ? <WireframeSection caseStudy={caseStudy} /> : null}
      <ScreensSection caseStudy={caseStudy} />
      {caseStudy.learned ? <LearningSection text={caseStudy.learned} /> : null}
      <Container
        maxWidth="xl"
        sx={{ maxWidth: "1060px", pt: { xs: 4, md: 6 } }}
      >
        <Button
          href="/#work"
          startIcon={<ArrowBackRoundedIcon />}
          variant="outlined"
        >
          Back to work
        </Button>
      </Container>
    </>
  );
}

function CaseHero({ caseStudy }: CaseStudyDetailProps) {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: caseStudy.softBackground,
        borderBottom: "1px solid rgba(15, 23, 42, 0.06)",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ maxWidth: "1160px", py: { xs: 7, md: 9 } }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" },
            gap: { xs: 5, md: 7 },
            alignItems: "center",
          }}
        >
          <Stack spacing={3.2} sx={{ alignItems: "flex-start" }}>
            <Typography
              component="p"
              sx={{
                fontSize: 12,
                fontWeight: 850,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              {caseStudy.category}
            </Typography>
            <Stack spacing={1.3}>
              <Typography
                component="h1"
                sx={{
                  fontFamily: "var(--font-serif)",
                  fontSize: { xs: 54, sm: 72, md: 86 },
                  lineHeight: 0.95,
                  fontWeight: 500,
                }}
              >
                {caseStudy.title}
              </Typography>
              <Typography
                sx={{ fontSize: { xs: 18, md: 21 }, color: "text.secondary" }}
              >
                {caseStudy.headline}
              </Typography>
            </Stack>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(120px, 1fr))",
                gap: 2,
                width: "100%",
                maxWidth: 480,
              }}
            >
              <MetaItem label="Role" value={caseStudy.role} />
              <MetaItem label="Timeline" value={caseStudy.timeline} />
              <MetaItem label="Platform" value={caseStudy.platform} />
              <MetaItem label="Tools" value={caseStudy.tools.join(", ")} />
            </Box>
          </Stack>

          <MockupFrame
            src={caseStudy.heroImage}
            alt={`${caseStudy.title} hero mockup`}
            variant={caseStudy.mockupVariant}
            label={caseStudy.title}
          />
        </Box>
      </Container>
    </Box>
  );
}

type MetaItemProps = {
  label: string;
  value: string;
};

function MetaItem({ label, value }: MetaItemProps) {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: 11,
          fontWeight: 850,
          color: "text.secondary",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          mb: 0.7,
        }}
      >
        {label}
      </Typography>
      <Typography sx={{ fontWeight: 750 }}>{value}</Typography>
    </Box>
  );
}

function Overview({ caseStudy }: CaseStudyDetailProps) {
  if (caseStudy.slug === "slayme") {
    return <SlaymeOverview caseStudy={caseStudy} />;
  }

  return (
    <ContentSection title="Project Overview">
      <Stack spacing={2} sx={{ maxWidth: 760, mx: "auto" }}>
        {caseStudy.overview.map((paragraph) => (
          <Typography
            key={paragraph}
            color="text.secondary"
            sx={{ fontSize: { md: 17 } }}
          >
            {paragraph}
          </Typography>
        ))}
      </Stack>
    </ContentSection>
  );
}

function SlaymeOverview({ caseStudy }: CaseStudyDetailProps) {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 9 }, backgroundColor: "#FFFFFF" }}>
      <Container maxWidth="xl" sx={{ maxWidth: "1220px" }}>
        <Stack spacing={{ xs: 4.5, md: 7 }} sx={{ alignItems: "center" }}>
          <Stack spacing={3} sx={{ alignItems: "center", textAlign: "center" }}>
            <SlaymeSectionTitle title="Project Overview" />
            <Typography
              sx={{
                maxWidth: 820,
                color: slaymeMuted,
                fontSize: { xs: 16, md: 19 },
                lineHeight: 1.55,
              }}
            >
              {caseStudy.overview[0]}
            </Typography>
          </Stack>

          {caseStudy.overviewFacts ? (
            <Box
              sx={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, minmax(0, 1fr))",
                  md: "repeat(4, minmax(0, 1fr))",
                },
                gap: { xs: 2, md: 3.2 },
              }}
            >
              {caseStudy.overviewFacts.map((fact) => (
                <Box
                  key={fact.label}
                  sx={{
                    minHeight: 138,
                    p: { xs: 3, md: 3.4 },
                    borderRadius: "22px",
                    backgroundColor: "#FBF6FF",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: slaymeMuted,
                      fontSize: 14,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      mb: 1,
                    }}
                  >
                    {fact.label}
                  </Typography>
                  <Typography sx={{ color: slaymeText, fontSize: 16.5 }}>
                    {fact.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          ) : null}
        </Stack>
      </Container>
    </Box>
  );
}

type SlaymeSectionProps = {
  section: CaseSection;
  accent: string;
};

function SlaymeSection({ section, accent }: SlaymeSectionProps) {
  if (section.title === "Problem") {
    return <SlaymeProblemSection section={section} accent={accent} />;
  }

  if (section.title === "Goal") {
    return <SlaymeGoalSection section={section} />;
  }

  if (section.title === "Target Users") {
    return <SlaymeTargetUsersSection section={section} />;
  }

  return <CaseGridSection section={section} background="#FFFFFF" />;
}

function SlaymeProblemSection({ section, accent }: SlaymeSectionProps) {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 8 }, backgroundColor: slaymeSoftSection }}>
      <Container maxWidth="xl" sx={{ maxWidth: "1360px" }}>
        <Stack spacing={{ xs: 4, md: 6 }}>
          <SlaymeSectionTitle title={section.title} />
          <Box
            sx={{
              mx: "auto",
              width: "100%",
              p: { xs: 3, sm: 4, md: 5.5 },
              borderRadius: { xs: "24px", md: "32px" },
              backgroundColor: slaymePanel,
              border: "1px solid rgba(43, 43, 43, 0.08)",
              boxShadow: "0 2px 0 rgba(43, 43, 43, 0.08)",
            }}
          >
            <Typography
              sx={{
                maxWidth: 720,
                mx: "auto",
                color: slaymeText,
                textAlign: "center",
                fontSize: { xs: 18, md: 23 },
                lineHeight: 1.45,
              }}
            >
              {section.description}
            </Typography>

            {section.cards ? (
              <Box
                sx={{
                  maxWidth: 1036,
                  mx: "auto",
                  mt: { xs: 4, md: 5.5 },
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
                  gap: { xs: 2, md: 2.4 },
                }}
              >
                {section.cards.map((card) => (
                  <SlaymeProblemCard key={card.title} card={card} accent={accent} />
                ))}
              </Box>
            ) : null}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

function SlaymeProblemCard({
  card,
  accent,
}: {
  card: NonNullable<CaseSection["cards"]>[number];
  accent: string;
}) {
  return (
    <Box
      sx={{
        p: { xs: 2.5, md: 3 },
        minHeight: 154,
        borderRadius: "14px",
        backgroundColor: "#FBF6FF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <SlaymeProblemIcon icon={card.icon} accent={accent} />
      <Typography sx={{ mt: 1.6, color: slaymeText, fontSize: 17 }}>
        {card.title}
      </Typography>
      <Typography sx={{ mt: 1, color: slaymeMuted, fontSize: 14.5 }}>
        {card.description}
      </Typography>
    </Box>
  );
}

function SlaymeProblemIcon({
  icon,
  accent,
}: {
  icon?: NonNullable<CaseSection["cards"]>[number]["icon"];
  accent: string;
}) {
  const iconSx = { fontSize: 20 };
  const color = icon === "clock" || icon === "arrow" ? slaymeLavender : slaymeRose;

  return (
    <Box
      sx={{
        width: 40,
        height: 40,
        borderRadius: "50%",
        display: "grid",
        placeItems: "center",
        backgroundColor: alpha(color, 0.25),
        color: icon === "clock" || icon === "arrow" ? "#D5B8EA" : accent,
      }}
    >
      {icon === "clock" ? (
        <AccessTimeRoundedIcon sx={iconSx} />
      ) : icon === "star" ? (
        <StarRoundedIcon sx={iconSx} />
      ) : icon === "arrow" ? (
        <KeyboardArrowRightRoundedIcon sx={iconSx} />
      ) : (
        <SearchRoundedIcon sx={iconSx} />
      )}
    </Box>
  );
}

function SlaymeGoalSection({ section }: { section: CaseSection }) {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 8 }, backgroundColor: "#FFFFFF" }}>
      <Container maxWidth="xl" sx={{ maxWidth: "1360px" }}>
        <Stack spacing={{ xs: 4, md: 6 }}>
          <SlaymeSectionTitle title={section.title} />
          <Box
            sx={{
              p: { xs: 3, md: 5.5 },
              borderRadius: { xs: "24px", md: "32px" },
              backgroundColor: "#FFF8FC",
            }}
          >
            <Typography
              sx={{
                maxWidth: 650,
                mx: "auto",
                color: slaymeText,
                textAlign: "center",
                fontSize: { xs: 18, md: 22 },
                lineHeight: 1.48,
              }}
            >
              {section.description}
            </Typography>
            <Box
              sx={{
                maxWidth: 1020,
                mx: "auto",
                mt: { xs: 4, md: 5 },
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
                columnGap: { md: 8 },
                rowGap: 1.8,
              }}
            >
              {section.items.map((item) => (
                <Stack
                  key={item}
                  direction="row"
                  spacing={1.5}
                  sx={{ alignItems: "center" }}
                >
                  <CheckCircleRoundedIcon
                    sx={{ color: slaymeSuccess, fontSize: 25, flexShrink: 0 }}
                  />
                  <Typography sx={{ color: slaymeText, fontSize: 16.5 }}>
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

function SlaymeTargetUsersSection({ section }: { section: CaseSection }) {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 8 }, backgroundColor: slaymeSoftSection }}>
      <Container maxWidth="xl" sx={{ maxWidth: "1160px" }}>
        <Stack spacing={{ xs: 4, md: 6 }}>
          <SlaymeSectionTitle title={section.title} />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 2.4, md: 5 },
              alignItems: "start",
            }}
          >
            <Box
              sx={{
                p: { xs: 3, md: 3.6 },
                borderRadius: "22px",
                backgroundColor: slaymePanel,
              }}
            >
              <Typography sx={{ color: slaymeText, fontSize: 21, fontWeight: 750, mb: 2 }}>
                Who are they?
              </Typography>
              <Stack component="ul" spacing={1.4} sx={{ m: 0, pl: 2.2 }}>
                {section.items.map((item) => (
                  <Typography
                    key={item}
                    component="li"
                    sx={{
                      color: slaymeMuted,
                      fontSize: { xs: 15.5, md: 16.5 },
                      lineHeight: 1.45,
                      pl: 0.7,
                      "&::marker": { color: slaymeRose },
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Stack>
            </Box>

            {section.persona ? <SlaymePersonaCard persona={section.persona} /> : null}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

function SlaymePersonaCard({
  persona,
}: {
  persona: NonNullable<CaseSection["persona"]>;
}) {
  return (
    <Box
      sx={{
        p: { xs: 3, md: 3.8 },
        borderRadius: "22px",
        backgroundColor: slaymePanel,
        border: "1px solid rgba(43, 43, 43, 0.08)",
        boxShadow: "0 2px 0 rgba(43, 43, 43, 0.08)",
      }}
    >
      <Stack direction="row" spacing={1.8} sx={{ alignItems: "center", mb: 3.5 }}>
        <Box
          sx={{
            width: 66,
            height: 66,
            borderRadius: "50%",
            display: "grid",
            placeItems: "center",
            backgroundColor: "#ECA5C4",
            color: "#FFFFFF",
          }}
        >
          <PersonOutlineRoundedIcon sx={{ fontSize: 36 }} />
        </Box>
        <Box>
          <Typography sx={{ color: slaymeText, fontSize: 25, fontWeight: 750, lineHeight: 1.1 }}>
            {persona.name}
          </Typography>
          <Typography sx={{ color: slaymeMuted, fontSize: 17 }}>{persona.meta}</Typography>
        </Box>
      </Stack>

      <SlaymePersonaList title="Needs" items={persona.needs} marker="arrow" />
      <Box sx={{ mt: 3 }}>
        <SlaymePersonaList title="Pain Points" items={persona.painPoints} marker="dot" />
      </Box>
    </Box>
  );
}

function SlaymePersonaList({
  title,
  items,
  marker,
}: {
  title: string;
  items: string[];
  marker: "arrow" | "dot";
}) {
  return (
    <Stack spacing={1.4}>
      <Typography
        sx={{
          color: slaymeMuted,
          fontSize: 14,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        {title}
      </Typography>
      <Stack spacing={1.15}>
        {items.map((item) => (
          <Stack key={item} direction="row" spacing={1.2} sx={{ alignItems: "center" }}>
            {marker === "arrow" ? (
              <KeyboardArrowRightRoundedIcon sx={{ color: slaymeRose, fontSize: 18 }} />
            ) : (
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: alpha(slaymeRose, 0.28),
                  flexShrink: 0,
                }}
              >
                <Box sx={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: slaymeRose }} />
              </Box>
            )}
            <Typography sx={{ color: slaymeText, fontSize: 14.5 }}>{item}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

function SlaymeSectionTitle({ title }: { title: string }) {
  return (
    <Typography
      component="h2"
      sx={{
        fontFamily: "var(--font-serif)",
        color: slaymeText,
        fontSize: { xs: 40, sm: 50, md: 54 },
        lineHeight: 1,
        fontWeight: 500,
        textAlign: "center",
      }}
    >
      {title}
    </Typography>
  );
}

type CaseGridSectionProps = {
  section: CaseSection;
  background: string;
};

function CaseGridSection({ section, background }: CaseGridSectionProps) {
  return (
    <Box
      component="section"
      sx={{ backgroundColor: background, py: { xs: 7, md: 9 } }}
    >
      <Container maxWidth="xl" sx={{ maxWidth: "1040px" }}>
        <SectionHeader
          title={section.title}
          description={section.description}
        />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 2,
            mt: 4,
          }}
        >
          {section.items.map((item, index) => (
            <Box
              key={item}
              sx={{
                p: 3,
                minHeight: 132,
                borderRadius: "16px",
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(15, 23, 42, 0.06)",
                boxShadow: "0 14px 36px rgba(48, 35, 79, 0.06)",
              }}
            >
              <Typography
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: "secondary.light",
                  color: "primary.main",
                  fontSize: 12,
                  fontWeight: 900,
                  mb: 1.8,
                }}
              >
                {index + 1}
              </Typography>
              <Typography color="text.secondary">{item}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

type FlowSectionProps = {
  title: string;
  items: string[];
  accent: string;
};

function FlowSection({ title, items, accent }: FlowSectionProps) {
  const desktopColumns =
    items.length > 5 ? Math.ceil(items.length / 2) : items.length;

  return (
    <ContentSection title={title}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, minmax(0, 1fr))",
            md: `repeat(${desktopColumns}, minmax(0, 1fr))`,
          },
          columnGap: { sm: 5, md: 5.5 },
          rowGap: { xs: 2.4, sm: 4.5, md: 5 },
          maxWidth: 920,
          mx: "auto",
        }}
      >
        {items.map((item, index) => {
          const isTabletRowEnd =
            (index + 1) % 2 === 0 || index === items.length - 1;
          const isDesktopRowEnd =
            (index + 1) % desktopColumns === 0 || index === items.length - 1;

          return (
            <Stack
              key={item}
              spacing={1.3}
              sx={{
                alignItems: "center",
                minHeight: 92,
                position: "relative",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  width: { xs: 50, md: 56 },
                  height: { xs: 50, md: 56 },
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  background: `linear-gradient(135deg, ${alpha(accent, 0.7)}, ${alpha(
                    accent,
                    0.95,
                  )})`,
                  boxShadow: `0 12px 22px ${alpha(accent, 0.24)}`,
                  color: "#FFFFFF",
                  fontSize: { xs: 16, md: 18 },
                  fontWeight: 700,
                }}
              >
                {index + 1}
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: "text.primary",
                  fontWeight: 500,
                  lineHeight: 1.35,
                }}
              >
                {item}
              </Typography>
              <KeyboardArrowRightRoundedIcon
                aria-hidden="true"
                sx={{
                  color: alpha(accent, 0.52),
                  display: {
                    xs: "none",
                    sm: isTabletRowEnd ? "none" : "block",
                    md: isDesktopRowEnd ? "none" : "block",
                  },
                  fontSize: 28,
                  position: "absolute",
                  right: { sm: -39, md: -42 },
                  top: { sm: 13, md: 15 },
                }}
              />
            </Stack>
          );
        })}
      </Box>
    </ContentSection>
  );
}

function ArchitectureSection({ items }: { items: string[] }) {
  return (
    <ContentSection title="Information Architecture" background="#F7F3FE">
      <Stack
        direction="row"
        sx={{ flexWrap: "wrap", justifyContent: "center", gap: 1.2 }}
      >
        {items.map((item) => (
          <Chip
            key={item}
            label={item}
            variant="outlined"
            sx={{ minWidth: 116, backgroundColor: "#FFFFFF" }}
          />
        ))}
      </Stack>
    </ContentSection>
  );
}

function DesignSystemSection({ caseStudy }: CaseStudyDetailProps) {
  const isSlayme = caseStudy.slug === "slayme";
  const paletteIntro = isSlayme
    ? "The palette was chosen to create a soft, elegant, and trustworthy beauty experience."
    : "A compact set of tokens keeps the interface consistent across key screens and reusable components.";

  return (
    <Box
      id="visual-design-system"
      component="section"
      sx={{
        py: { xs: 7, md: 9 },
        backgroundColor: isSlayme ? "#FFFFFF" : "#FBF7FF",
      }}
    >
      <Container maxWidth="xl" sx={{ maxWidth: "1360px" }}>
        <Stack spacing={{ xs: 5, md: 7 }}>
          <Stack
            spacing={{ xs: 4, md: 5 }}
            sx={{ alignItems: "center", textAlign: "center" }}
          >
            <Typography
              component="h2"
              sx={{
                fontFamily: "var(--font-serif)",
                fontSize: { xs: 40, sm: 54, md: 68 },
                lineHeight: 1,
                fontWeight: 500,
                color: isSlayme ? "#2B2B2B" : "text.primary",
              }}
            >
              Visual Design System
            </Typography>
          </Stack>

          <Stack spacing={{ xs: 2.8, md: 4 }}>
            <Stack spacing={1.6} sx={{ alignItems: "flex-start" }}>
              <Typography
                component="h3"
                sx={{
                  color: isSlayme ? "#2B2B2B" : "text.primary",
                  fontSize: { xs: 24, md: 30 },
                  lineHeight: 1.15,
                  fontWeight: 850,
                }}
              >
                Color Palette
              </Typography>
              <Typography
                color="text.secondary"
                sx={{ maxWidth: 680, fontSize: { xs: 15, md: 17 } }}
              >
                {paletteIntro}
              </Typography>
            </Stack>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(2, minmax(0, 1fr))",
                  sm: "repeat(3, minmax(0, 1fr))",
                  lg: "repeat(5, minmax(0, 1fr))",
                },
                gap: { xs: 2, md: 2.4 },
              }}
            >
              {caseStudy.designSystem.colors.map((swatch) => (
                <Box key={`${swatch.name}-${swatch.value}`}>
                  <Box
                    sx={{
                      height: { xs: 108, sm: 126, md: 140 },
                      borderRadius: "14px",
                      background: swatch.previewValue ?? swatch.value,
                      border:
                        swatch.value.toUpperCase() === "#FEFEFE"
                          ? "1px solid rgba(43, 43, 43, 0.22)"
                          : "1px solid rgba(43, 43, 43, 0.08)",
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      display: "block",
                      mt: 1.1,
                      color: isSlayme ? "#2B2B2B" : "text.primary",
                      fontSize: { xs: 12, md: 13 },
                      lineHeight: 1.25,
                      fontWeight: 600,
                    }}
                  >
                    {swatch.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ display: "block", fontSize: { xs: 12, md: 13 } }}
                  >
                    {swatch.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Stack>

          <SystemPanel
            title="Typography"
            items={caseStudy.designSystem.typography}
            accent={caseStudy.accent}
          />
          {caseStudy.designSystem.components ? (
            <ComponentShowcase
              items={caseStudy.designSystem.components}
              accent={caseStudy.accent}
            />
          ) : null}
        </Stack>
      </Container>
    </Box>
  );
}

type SystemPanelProps = {
  title: string;
  items: string[];
  accent: string;
};

function SystemPanel({ title, items, accent }: SystemPanelProps) {
  return (
    <Stack spacing={1.4}>
      <Typography sx={{ fontWeight: 850 }}>{title}</Typography>
      <Box
        sx={{
          p: { xs: 2.5, md: 3 },
          borderRadius: "14px",
          backgroundColor: "#FFFFFF",
          border: `1px solid ${alpha(accent, 0.16)}`,
        }}
      >
        <Stack spacing={1}>
          {items.map((item) => (
            <Stack
              key={item}
              direction="row"
              spacing={1.2}
              sx={{ alignItems: "flex-start" }}
            >
              <CheckCircleRoundedIcon
                sx={{ fontSize: 18, color: accent, mt: 0.25 }}
              />
              <Typography color="text.secondary">{item}</Typography>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}

type ComponentShowcaseProps = {
  items: ComponentShowcaseItem[];
  accent: string;
};

function ComponentShowcase({ items, accent }: ComponentShowcaseProps) {
  return (
    <Stack spacing={3}>
      <Typography
        sx={{
          color: "text.primary",
          fontSize: { xs: 28, md: 36 },
          lineHeight: 1.12,
          fontWeight: 850,
        }}
      >
        Main Components
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "0.94fr 1fr 1fr" },
          gridAutoRows: { md: "minmax(280px, auto)" },
          gap: { xs: 2, md: 2.4 },
        }}
      >
        {items.map((item) => (
          <ComponentCard key={item.title} item={item} accent={accent} />
        ))}
      </Box>
    </Stack>
  );
}

type ComponentCardProps = {
  item: ComponentShowcaseItem;
  accent: string;
};

function ComponentCard({ item, accent }: ComponentCardProps) {
  return (
    <Box
      sx={{
        minHeight: { xs: item.layout === "tall" ? 430 : 210, md: "auto" },
        p: { xs: 2.4, md: 3 },
        borderRadius: "28px",
        backgroundColor: "#FFFFFF",
        border: `1.5px solid ${alpha(accent, 0.62)}`,
        boxShadow: `0 14px 30px ${alpha(accent, 0.07)}`,
        gridColumn: { md: item.layout === "wide" ? "span 2" : "auto" },
        gridRow: { md: item.layout === "tall" ? "span 2" : "auto" },
        overflow: "visible",
      }}
    >
      <Typography
        sx={{
          color: "text.secondary",
          fontSize: { xs: 16, md: 18 },
          fontWeight: 500,
          mb: 2.2,
        }}
      >
        {item.title}
      </Typography>
      <ComponentPreview item={item} accent={accent} />
    </Box>
  );
}

type ComponentPreviewProps = {
  item: ComponentShowcaseItem;
  accent: string;
};

function ComponentPreview({ item, accent }: ComponentPreviewProps) {
  switch (item.title) {
    case "Service Card":
      return <ServiceCardPreview item={item} accent={accent} />;
    case "Review":
      return <ReviewPreview accent={accent} />;
    case "Category Chips":
      return <CategoryChipsPreview accent={accent} />;
    case "Buttons":
      return <ButtonsPreview accent={accent} />;
    case "Search Bar":
      return <SearchBarPreview />;
    default:
      return <GenericComponentPreview item={item} accent={accent} />;
  }
}

function ServiceCardPreview({ item, accent }: ComponentPreviewProps) {
  return (
    <Box
      sx={{
        borderRadius: "18px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0 10px 20px rgba(15, 23, 42, 0.12)",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          height: { xs: 190, md: 210 },
          position: "relative",
          backgroundImage: item.image
            ? `url("${item.image}")`
            : "radial-gradient(circle at 22% 24%, rgba(212, 123, 128, 0.5), transparent 24%), linear-gradient(135deg, #A66A45 0%, #D7B88A 42%, #F0D5B8 100%)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Stack
          direction="row"
          spacing={0.5}
          sx={{
            position: "absolute",
            top: 18,
            right: 18,
            alignItems: "center",
            px: 1.3,
            py: 0.7,
            borderRadius: 999,
            backgroundColor: "#FFFFFF",
            boxShadow: "0 8px 18px rgba(15, 23, 42, 0.12)",
          }}
        >
          <StarRoundedIcon sx={{ color: "#FFB000", fontSize: 22 }} />
          <Typography sx={{ color: "#252525", fontSize: 18, fontWeight: 700 }}>
            4.8
          </Typography>
        </Stack>
      </Box>
      <Box sx={{ px: 3, py: 2.6 }}>
        <Stack
          direction="row"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Box>
            <Typography
              sx={{ color: "#252525", fontSize: 22, fontWeight: 850 }}
            >
              Glow Nail Studio
            </Typography>
            <Typography sx={{ color: "#777277", fontSize: 18, mt: 0.6 }}>
              Nail Art
            </Typography>
          </Box>
          <Box
            sx={{
              width: 58,
              height: 58,
              borderRadius: "50%",
              display: "grid",
              placeItems: "center",
              backgroundColor: "#F4EFEC",
            }}
          >
            <FavoriteBorderRoundedIcon
              sx={{ color: "#252525", fontSize: 32 }}
            />
          </Box>
        </Stack>
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            mt: 2.5,
          }}
        >
          <Typography sx={{ color: "#777277", fontSize: 19 }}>800 m</Typography>
          <Typography sx={{ color: accent, fontSize: 19 }}>from $18</Typography>
        </Stack>
      </Box>
    </Box>
  );
}

function ReviewPreview({ accent }: { accent: string }) {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        alignItems: "flex-start",
        borderRadius: "18px",
        backgroundColor: "#F7F3F1",
        p: { xs: 2.2, md: 2.6 },
      }}
    >
      <Avatar
        alt="Sarah Chen"
        sx={{
          width: 44,
          height: 44,
          background: `linear-gradient(135deg, ${alpha(accent, 0.25)}, #E5D2C7)`,
          color: accent,
          fontWeight: 850,
        }}
      >
        S
      </Avatar>
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2 }}
          sx={{
            justifyContent: "space-between",
            alignItems: { sm: "flex-start" },
          }}
        >
          <Box>
            <Typography
              sx={{ color: "#252525", fontSize: 19, fontWeight: 700 }}
            >
              Sarah Chen
            </Typography>
            <Typography sx={{ color: "#777277", fontSize: 16 }}>
              2 days ago
            </Typography>
          </Box>
          <Stack direction="row" spacing={0.15} sx={{ pt: 0.4 }}>
            {Array.from({ length: 5 }).map((_, index) => (
              <StarRoundedIcon
                key={index}
                sx={{ color: "#FFB000", fontSize: 21 }}
              />
            ))}
          </Stack>
        </Stack>
        <Typography
          sx={{ color: "#777277", fontSize: 18, lineHeight: 1.35, mt: 1.5 }}
        >
          Amazing experience! The facial treatment was so relaxing and my skin
          feels incredible.
        </Typography>
      </Box>
    </Stack>
  );
}

function CategoryChipsPreview({ accent }: { accent: string }) {
  return (
    <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1.4 }}>
      {["Spa", "Nail", "Hair"].map((label) => {
        const isActive = label === "Nail";

        return (
          <Box
            key={label}
            sx={{
              minWidth: 86,
              px: 2.5,
              py: 1.25,
              borderRadius: 999,
              backgroundColor: isActive ? accent : "#F0EBE8",
              color: isActive ? "#FFFFFF" : "#252525",
              textAlign: "center",
              fontSize: 17,
              fontWeight: 700,
            }}
          >
            {label}
          </Box>
        );
      })}
    </Stack>
  );
}

function ButtonsPreview({ accent }: { accent: string }) {
  return (
    <Stack spacing={1.8}>
      <Box
        sx={{
          width: "100%",
          minHeight: 70,
          borderRadius: "18px",
          display: "grid",
          placeItems: "center",
          backgroundColor: accent,
          color: "#FFFFFF",
          fontSize: 20,
          fontWeight: 800,
        }}
      >
        Apply Filters
      </Box>
      <Box
        sx={{
          width: "100%",
          minHeight: 70,
          borderRadius: "18px",
          display: "grid",
          placeItems: "center",
          backgroundColor: "#FFFFFF",
          border: "1px solid #F0DED8",
          color: "#252525",
          fontSize: 20,
          fontWeight: 850,
        }}
      >
        Reset
      </Box>
    </Stack>
  );
}

function SearchBarPreview() {
  return (
    <Stack
      direction="row"
      spacing={1.5}
      sx={{
        width: { xs: "100%", md: "72%" },
        minHeight: 70,
        alignItems: "center",
        px: 2.4,
        borderRadius: "18px",
        backgroundColor: "#F0EBE8",
      }}
    >
      <SearchRoundedIcon sx={{ color: "#686565", fontSize: 31 }} />
      <Typography
        sx={{
          color: "#777277",
          fontSize: { xs: 17, md: 20 },
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        Search services or salons...
      </Typography>
    </Stack>
  );
}

function GenericComponentPreview({ item, accent }: ComponentPreviewProps) {
  return item.image ? (
    <Box
      component="img"
      src={item.image}
      alt={item.imageAlt ?? item.title}
      sx={{
        display: "block",
        width: "100%",
        height: "calc(100% - 42px)",
        minHeight: { xs: 120, md: 96 },
        objectFit: "contain",
      }}
    />
  ) : (
    <Box
      aria-hidden="true"
      sx={{
        width: "100%",
        height: "calc(100% - 42px)",
        minHeight: { xs: item.layout === "tall" ? 210 : 96, md: 96 },
        borderRadius: "16px",
        backgroundColor: alpha(accent, 0.04),
        border: `1px dashed ${alpha(accent, 0.24)}`,
      }}
    />
  );
}

function WireframeSection({ caseStudy }: CaseStudyDetailProps) {
  if (!caseStudy.wireframes) {
    return null;
  }

  if (caseStudy.wireframes.title === "Mobile Wireframe") {
    return <MobileWireframeSection caseStudy={caseStudy} />;
  }

  return (
    <ContentSection
      title={caseStudy.wireframes.title}
      description={caseStudy.wireframes.description}
      background="#FFFFFF"
    >
      <Box
        sx={{
          borderRadius: "20px",
          backgroundColor: "#F7F8FA",
          border: "1px solid rgba(15, 23, 42, 0.06)",
          p: { xs: 2.5, md: 4 },
        }}
      >
        <Box
          role="img"
          aria-label={`${caseStudy.title} wireframes`}
          sx={{
            minHeight: { xs: 320, md: 540 },
            borderRadius: "14px",
            backgroundImage: `url("${caseStudy.wireframes.image}"), linear-gradient(135deg, #FFFFFF, #EEE8FF)`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        />
        <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1, mt: 2 }}>
          {caseStudy.wireframes.labels.map((label) => (
            <Chip key={label} size="small" label={label} />
          ))}
        </Stack>
      </Box>
    </ContentSection>
  );
}

function MobileWireframeSection({ caseStudy }: CaseStudyDetailProps) {
  if (!caseStudy.wireframes) {
    return null;
  }

  return (
    <Box
      component="section"
      sx={{ py: { xs: 7, md: 9 }, backgroundColor: "#FFFFFF" }}
    >
      <Container maxWidth="xl" sx={{ maxWidth: "1180px" }}>
        <Stack spacing={2} sx={{ alignItems: "center", textAlign: "center" }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: "var(--font-serif)",
              fontSize: { xs: 42, md: 58 },
              lineHeight: 1,
              fontWeight: 500,
            }}
          >
            {caseStudy.wireframes.title}
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              maxWidth: 720,
              fontSize: { xs: 15, md: 17 },
              lineHeight: 1.65,
            }}
          >
            {caseStudy.wireframes.description}
          </Typography>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 3, md: 3.4 },
            mt: { xs: 6, md: 8 },
          }}
        >
          {caseStudy.wireframes.labels.map((label) => (
            <MobileWireframeCard
              key={label}
              title={label}
              accent={caseStudy.accent}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

type MobileWireframeCardProps = {
  title: string;
  accent: string;
};

function MobileWireframeCard({ title, accent }: MobileWireframeCardProps) {
  return (
    <Box
      sx={{
        p: { xs: 2.5, md: 3 },
        borderRadius: "24px",
        backgroundColor: "#FFFFFF",
        border: "1px solid rgba(15, 23, 42, 0.06)",
        boxShadow: "0 14px 34px rgba(15, 23, 42, 0.08)",
      }}
    >
      <WireframePhone title={title} accent={accent} />
      <Typography
        sx={{
          mt: 2.1,
          color: "text.secondary",
          fontSize: 14,
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}

type WireframePhoneProps = {
  title: string;
  accent: string;
};

function WireframePhone({ title, accent }: WireframePhoneProps) {
  return (
    <Box
      role="img"
      aria-label={`${title} wireframe`}
      sx={{
        width: "100%",
        aspectRatio: "9 / 16",
        borderRadius: "18px",
        border: "1.5px solid #DCE2EA",
        backgroundColor: "#FAFBFC",
        boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.7)",
        overflow: "hidden",
        p: 2,
      }}
    >
      <WireframeScreen title={title} accent={accent} />
    </Box>
  );
}

function WireframeScreen({ title, accent }: WireframePhoneProps) {
  switch (title) {
    case "Login":
      return <LoginWireframe accent={accent} />;
    case "Home Discovery":
      return <HomeDiscoveryWireframe accent={accent} />;
    case "Search & Filter":
      return <SearchFilterWireframe accent={accent} />;
    case "Service Detail":
      return <ServiceDetailWireframe accent={accent} />;
    case "Your Cart":
      return <CartWireframe accent={accent} />;
    case "Booking Schedule":
      return <ScheduleWireframe accent={accent} />;
    case "Booking in Progress":
      return <BookingProgressWireframe accent={accent} />;
    case "Booking Confirmed":
      return <BookingConfirmedWireframe accent={accent} />;
    case "My Packages":
      return <PackagesWireframe accent={accent} />;
    default:
      return <HomeDiscoveryWireframe accent={accent} />;
  }
}

function LoginWireframe({ accent }: { accent: string }) {
  return (
    <Stack
      sx={{ height: "100%", alignItems: "center", justifyContent: "center" }}
    >
      <WireBox width="28%" height={58} borderColor={accent} soft />
      <WireLine width="34%" height={14} sx={{ mt: 1.2 }} />
      <WireLine width="48%" sx={{ mt: 1.2 }} />
      <Stack spacing={1.4} sx={{ width: "92%", mt: 3 }}>
        <WireBox height={42} />
        <WireBox height={42} />
        <WireBox height={42} borderColor={accent} soft />
      </Stack>
      <Stack direction="row" spacing={1.2} sx={{ width: "92%", mt: 2 }}>
        <WireBox height={42} sx={{ flex: 1 }} />
        <WireBox height={42} sx={{ flex: 1 }} />
      </Stack>
      <Stack direction="row" spacing={1.4} sx={{ mt: "auto", mb: 1 }}>
        <WireLine width={56} />
        <WireLine width={56} />
      </Stack>
    </Stack>
  );
}

function HomeDiscoveryWireframe({ accent }: { accent: string }) {
  return (
    <Stack spacing={1.5} sx={{ height: "100%" }}>
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Box>
          <WireLine width={62} height={9} />
          <WireLine width={92} height={9} sx={{ mt: 0.7 }} />
        </Box>
        <Stack direction="row" spacing={1}>
          <WireIcon />
          <WireIcon size={14} />
        </Stack>
      </Stack>
      <WireSearch />
      <WireBox height={90} borderColor={accent} soft />
      <Stack direction="row" spacing={1} sx={{ overflow: "hidden" }}>
        {[0, 1, 2, 3].map((item) => (
          <WirePill key={item} active={item === 0} accent={accent} />
        ))}
      </Stack>
      <WireLine width={92} />
      <WireBox height={156} sx={{ p: 1.4 }}>
        <Box
          sx={{
            height: "72%",
            borderRadius: "12px",
            backgroundColor: "#F5F7FA",
          }}
        />
        <WireLine width="60%" height={9} sx={{ mt: 1.1 }} />
        <Stack direction="row" spacing={1} sx={{ mt: 0.8 }}>
          <WireLine width={52} />
          <WireLine width={60} />
        </Stack>
        <WireLine width={78} color={alpha(accent, 0.22)} sx={{ mt: 0.8 }} />
      </WireBox>
      <WireBox height={84} sx={{ mt: "auto" }} />
    </Stack>
  );
}

function SearchFilterWireframe({ accent }: { accent: string }) {
  return (
    <Stack spacing={1.6} sx={{ height: "100%" }}>
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", alignItems: "flex-start" }}
      >
        <Box>
          <WireLine width={96} height={14} />
          <WireLine width={64} sx={{ mt: 1 }} />
        </Box>
        <WireLine width={60} color={alpha(accent, 0.2)} />
      </Stack>
      <WireBox
        height={44}
        sx={{ px: 1.4, display: "flex", alignItems: "center", gap: 1 }}
      >
        <WireIcon size={13} />
        <WireLine width="48%" />
      </WireBox>
      <WireLine width={78} />
      <Stack direction="row" spacing={1}>
        {[0, 1, 2, 3].map((item) => (
          <WirePill key={item} active={item === 0} accent={accent} />
        ))}
      </Stack>
      <WireLine width={42} />
      <WireBox height={48} sx={{ p: 1.2 }}>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Box>
            <WireLine width={52} />
            <WireLine width={210} sx={{ mt: 0.8 }} />
          </Box>
          <WireLine width={48} />
        </Stack>
      </WireBox>
      <WireLine width={62} />
      <Stack direction="row" spacing={1}>
        {[0, 1, 2].map((item) => (
          <WireBox key={item} height={38} sx={{ flex: 1 }}>
            <Box
              sx={{
                width: 30,
                height: 7,
                mx: "auto",
                mt: 1.5,
                borderRadius: 999,
                backgroundColor: "#CFD5DE",
              }}
            />
          </WireBox>
        ))}
      </Stack>
      <WireBox height={44} borderColor={accent} soft sx={{ mt: "auto" }} />
    </Stack>
  );
}

function ServiceDetailWireframe({ accent }: { accent: string }) {
  return (
    <Stack sx={{ height: "100%" }}>
      <Box
        sx={{
          minHeight: 210,
          borderRadius: "14px",
          background: "linear-gradient(135deg, #FAFBFC, #F3F5F8)",
          border: "1px solid #E0E5EC",
          p: 1.2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <WireIcon size={28} />
        <Stack direction="row" spacing={0.8}>
          <WireIcon size={28} />
          <WireIcon size={28} />
        </Stack>
      </Box>
      <Box sx={{ mt: -8, px: 1.6 }}>
        <WireLine width="72%" height={14} />
        <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
          <WireIcon size={12} />
          <WireLine width="28%" />
          <WireLine width="34%" />
        </Stack>
        <Stack spacing={1.1} sx={{ mt: 1.6 }}>
          {[0, 1, 2].map((item) => (
            <WireBox key={item} height={42} sx={{ p: 1.2 }}>
              <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                <Box>
                  <WireLine width={92} />
                  <WireLine width={60} sx={{ mt: 0.6 }} />
                </Box>
                <WireLine width={46} color={alpha(accent, 0.24)} />
              </Stack>
            </WireBox>
          ))}
        </Stack>
      </Box>
      <Stack direction="row" spacing={1.2} sx={{ mt: "auto" }}>
        <WireBox height={42} sx={{ flex: 1 }} />
        <WireBox height={42} borderColor={accent} soft sx={{ flex: 1 }} />
      </Stack>
    </Stack>
  );
}

function CartWireframe({ accent }: { accent: string }) {
  return (
    <Stack spacing={1.5} sx={{ height: "100%" }}>
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <WireLine width={78} height={14} />
        <WireLine width={58} color="#DDE2EA" />
      </Stack>
      {[0, 1].map((item) => (
        <WireBox key={item} height={48} sx={{ p: 1.2 }}>
          <Stack direction="row" sx={{ justifyContent: "space-between" }}>
            <Box>
              <WireLine width={138} />
              <WireLine width={92} sx={{ mt: 0.7 }} />
            </Box>
            <WireLine width={44} color={alpha(accent, 0.24)} />
          </Stack>
        </WireBox>
      ))}
      <WireBox height={122} sx={{ p: 1.6 }}>
        <WireLine width={82} />
        <WireBox height={36} sx={{ mt: 1.2 }} />
        <WireBox height={36} sx={{ mt: 1 }} />
      </WireBox>
      <WireBox height={92} sx={{ p: 1.6, mt: "auto" }}>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Box>
            <WireLine width={92} />
            <WireLine width={60} sx={{ mt: 1 }} />
            <WireLine width={78} sx={{ mt: 1 }} />
          </Box>
          <Box>
            <WireLine width={46} />
            <WireLine width={58} color={alpha(accent, 0.28)} sx={{ mt: 1.3 }} />
          </Box>
        </Stack>
      </WireBox>
      <WireBox height={42} borderColor={accent} soft />
    </Stack>
  );
}

function ScheduleWireframe({ accent }: { accent: string }) {
  return (
    <Stack spacing={1.6} sx={{ height: "100%" }}>
      <Stack direction="row" sx={{ justifyContent: "space-between", px: 1 }}>
        <WireLine width={92} height={12} />
        <Stack direction="row" spacing={1}>
          <WireLine width={34} color={alpha(accent, 0.4)} />
          <WireLine width={34} />
        </Stack>
      </Stack>
      <Stack direction="row" spacing={1}>
        {[0, 1, 2, 3].map((item) => (
          <WirePill key={item} active={item === 1} accent={accent} />
        ))}
      </Stack>
      <WireLine width={128} height={10} />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1,
        }}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <WireBox
            key={index}
            height={36}
            borderColor={index === 2 ? accent : undefined}
            soft={index === 2}
          >
            <Box
              sx={{
                width: 30,
                height: 7,
                mx: "auto",
                mt: 1.4,
                borderRadius: 999,
                backgroundColor: "#CFD5DE",
              }}
            />
          </WireBox>
        ))}
      </Box>
      <WireLine width={108} height={10} />
      <Stack direction="row" spacing={1}>
        {[0, 1, 2].map((item) => (
          <WireBox key={item} height={76} sx={{ flex: 1, p: 1 }}>
            <Box
              sx={{
                width: 34,
                height: 34,
                mx: "auto",
                borderRadius: "50%",
                backgroundColor: "#F0F2F5",
              }}
            />
            <WireLine width={44} sx={{ mx: "auto", mt: 1 }} />
          </WireBox>
        ))}
      </Stack>
      <WireBox height={44} borderColor={accent} soft sx={{ mt: "auto" }} />
    </Stack>
  );
}

function BookingProgressWireframe({ accent }: { accent: string }) {
  return (
    <Stack
      sx={{ height: "100%", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          width: 74,
          height: 74,
          borderRadius: "50%",
          border: `4px solid ${alpha(accent, 0.26)}`,
        }}
      />
      <WireLine width={120} height={14} sx={{ mt: 2.5 }} />
      <WireLine width={136} sx={{ mt: 1 }} />
      <WireBox height={72} sx={{ width: "100%", mt: 3, p: 1.5 }}>
        <WireLine width="92%" />
        <WireLine width="84%" sx={{ mt: 1 }} />
        <WireLine width="72%" sx={{ mt: 1 }} />
      </WireBox>
    </Stack>
  );
}

function BookingConfirmedWireframe({ accent }: { accent: string }) {
  return (
    <Stack spacing={1.7} sx={{ height: "100%", alignItems: "center" }}>
      <Box
        sx={{
          width: 62,
          height: 62,
          borderRadius: "50%",
          display: "grid",
          placeItems: "center",
          border: "4px solid #A8DCCB",
          backgroundColor: "#EAF8F2",
          mt: 3,
        }}
      >
        <CheckCircleRoundedIcon sx={{ color: "#67C69E", fontSize: 30 }} />
      </Box>
      <WireLine width={120} height={14} />
      <WireLine width={92} />
      <WireBox height={118} sx={{ width: "100%", p: 1.6 }}>
        <WireLine width={122} height={14} sx={{ mx: "auto" }} />
        <WireLine width={92} sx={{ mx: "auto", mt: 1 }} />
        <Box
          sx={{
            height: 54,
            mt: 1.6,
            borderRadius: "12px",
            backgroundColor: "#F2F4F7",
            p: 1.5,
          }}
        >
          <WireLine width={92} sx={{ mx: "auto" }} />
          <WireLine width={72} sx={{ mx: "auto", mt: 0.8 }} />
        </Box>
      </WireBox>
      <WireBox height={84} sx={{ width: "100%", p: 1.6 }}>
        <Stack direction="row" spacing={1.2}>
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: "10px",
              backgroundColor: "#F0F2F5",
            }}
          />
          <Box sx={{ flex: 1 }}>
            <WireLine width="90%" height={12} />
            <WireLine width="62%" sx={{ mt: 0.9 }} />
          </Box>
        </Stack>
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", mt: 1.2 }}
        >
          <WireLine width={72} />
          <WireLine width={74} />
        </Stack>
      </WireBox>
      <Stack direction="row" spacing={1.2} sx={{ width: "100%", mt: "auto" }}>
        <WireBox height={42} sx={{ flex: 1 }} />
        <WireBox height={42} borderColor={accent} soft sx={{ flex: 1 }} />
      </Stack>
    </Stack>
  );
}

function PackagesWireframe({ accent }: { accent: string }) {
  return (
    <Stack spacing={1.6} sx={{ height: "100%" }}>
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <WireLine width={108} height={14} />
        <WireIcon size={28} />
      </Stack>
      <Stack direction="row" spacing={1}>
        {[0, 1, 2].map((item) => (
          <WirePill key={item} active={item === 0} accent={accent} />
        ))}
      </Stack>
      {[0, 1].map((item) => (
        <WireBox key={item} height={124} sx={{ p: 1.5 }}>
          <Stack
            sx={{
              mx: -1.5,
              mt: -1.5,
              px: 1.5,
              py: 1.2,
              borderRadius: "14px 14px 0 0",
              backgroundColor: alpha(accent, 0.06),
            }}
          >
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
              <Box>
                <WireLine width={118} height={11} />
                <WireLine width={92} sx={{ mt: 0.8 }} />
              </Box>
              <WireLine width={58} color="#9EDDC7" />
            </Stack>
          </Stack>
          <Stack spacing={0.7} sx={{ mt: 1.3 }}>
            {[0, 1, 2].map((line) => (
              <Stack
                key={line}
                direction="row"
                spacing={1}
                sx={{ alignItems: "center" }}
              >
                <WireIcon size={12} />
                <WireLine width={line === 2 ? 118 : 92} />
              </Stack>
            ))}
          </Stack>
        </WireBox>
      ))}
    </Stack>
  );
}

type WirePrimitiveProps = {
  width?: number | string;
  height?: number | string;
  color?: string;
  borderColor?: string;
  soft?: boolean;
  sx?: object;
  children?: ReactNode;
};

function WireLine({
  width = "100%",
  height = 7,
  color = "#CFD5DE",
  sx,
}: WirePrimitiveProps) {
  return (
    <Box
      sx={{
        width,
        height,
        borderRadius: 999,
        backgroundColor: color,
        ...sx,
      }}
    />
  );
}

function WireBox({
  width = "100%",
  height,
  borderColor = "#DDE3EA",
  soft = false,
  sx,
  children,
}: WirePrimitiveProps) {
  return (
    <Box
      sx={{
        width,
        height,
        borderRadius: "14px",
        border: `1.5px solid ${soft ? alpha(borderColor, 0.42) : borderColor}`,
        backgroundColor: soft ? alpha(borderColor, 0.08) : "#FFFFFF",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

function WireIcon({ size = 18 }: { size?: number }) {
  return (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: "50%",
        border: "1.3px solid #D6DCE5",
        backgroundColor: "#FFFFFF",
      }}
    />
  );
}

function WirePill({ active, accent }: { active?: boolean; accent: string }) {
  return (
    <Box
      sx={{
        minWidth: 58,
        height: 30,
        borderRadius: 999,
        border: `1.3px solid ${active ? alpha(accent, 0.45) : "#DDE3EA"}`,
        backgroundColor: active ? alpha(accent, 0.1) : "#FFFFFF",
        display: "grid",
        placeItems: "center",
      }}
    >
      <WireLine width={30} color="#CFD5DE" />
    </Box>
  );
}

function WireSearch() {
  return (
    <WireBox
      height={36}
      sx={{ px: 1.2, display: "flex", alignItems: "center", gap: 1 }}
    >
      <SearchRoundedIcon sx={{ color: "#CFD5DE", fontSize: 16 }} />
      <WireLine width="82%" color="#E5E9EF" />
    </WireBox>
  );
}

function ScreensSection({ caseStudy }: CaseStudyDetailProps) {
  const isPhoneMockup = caseStudy.mockupVariant === "phone";

  return (
    <Box
      component="section"
      sx={{ py: { xs: 7, md: 9 }, backgroundColor: "#F8F7FA" }}
    >
      <Container maxWidth="xl" sx={{ maxWidth: "1080px" }}>
        <SectionHeader title="Key Screens" />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              md: isPhoneMockup
                ? "repeat(3, minmax(0, 1fr))"
                : "repeat(2, minmax(0, 1fr))",
            },
            gap: { xs: 2.2, md: 3 },
            mt: 4,
          }}
        >
          {caseStudy.screens.map((screen) => (
            <Box
              key={screen.title}
              sx={{
                p: { xs: 2, md: 2.4 },
                borderRadius: "18px",
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(15, 23, 42, 0.07)",
                boxShadow: "0 16px 40px rgba(42, 28, 74, 0.08)",
              }}
            >
              <Box
                sx={{
                  aspectRatio: isPhoneMockup ? "301 / 610" : "16 / 11",
                  height: "auto",
                  borderRadius: "14px",
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: "#F8F7FA",
                  border: "1px solid rgba(15, 23, 42, 0.06)",
                  overflow: "hidden",
                  p: { xs: 1, md: 1.2 },
                }}
              >
                <Box
                  component="img"
                  src={screen.image}
                  alt={`${caseStudy.title} ${screen.title}`}
                  sx={{
                    display: "block",
                    width: isPhoneMockup ? "auto" : "100%",
                    height: "auto",
                    maxWidth: isPhoneMockup ? "96%" : "100%",
                    maxHeight: isPhoneMockup ? "96%" : "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
              <Typography sx={{ mt: 1.8, fontWeight: 850 }}>
                {screen.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {screen.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

function LearningSection({ text }: { text: CaseStudy["learned"] }) {
  const paragraphs = Array.isArray(text) ? text : text ? [text] : [];

  return (
    <ContentSection title="What I Learned">
      <Box
        sx={{
          maxWidth: 760,
          mx: "auto",
          p: { xs: 3, md: 4 },
          borderRadius: "18px",
          backgroundColor: "#FFF7FA",
          border: "1px solid rgba(15, 23, 42, 0.06)",
          textAlign: "center",
        }}
      >
        <Stack spacing={2.5}>
          {paragraphs.map((paragraph) => (
            <Typography
              key={paragraph}
              color="text.secondary"
              sx={{ fontSize: { md: 17 }, lineHeight: 1.7 }}
            >
              {paragraph}
            </Typography>
          ))}
        </Stack>
      </Box>
    </ContentSection>
  );
}

type ContentSectionProps = {
  title: string;
  description?: string;
  background?: string;
  children: ReactNode;
};

function ContentSection({
  title,
  description,
  background = "#FFFFFF",
  children,
}: ContentSectionProps) {
  return (
    <Box
      component="section"
      sx={{ py: { xs: 7, md: 9 }, backgroundColor: background }}
    >
      <Container maxWidth="xl" sx={{ maxWidth: "980px" }}>
        <SectionHeader title={title} description={description} />
        <Box sx={{ mt: 4 }}>{children}</Box>
      </Container>
    </Box>
  );
}

type SectionHeaderProps = {
  title: string;
  description?: string;
};

function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <Stack spacing={1.5} sx={{ alignItems: "center", textAlign: "center" }}>
      <Typography
        component="h2"
        sx={{
          fontFamily: "var(--font-serif)",
          fontSize: { xs: 34, md: 44 },
          lineHeight: 1,
          fontWeight: 500,
        }}
      >
        {title}
      </Typography>
      {description ? (
        <Typography color="text.secondary" sx={{ maxWidth: 720 }}>
          {description}
        </Typography>
      ) : null}
    </Stack>
  );
}
