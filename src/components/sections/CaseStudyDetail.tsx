import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import DesktopMacRoundedIcon from "@mui/icons-material/DesktopMacRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import TrackChangesRoundedIcon from "@mui/icons-material/TrackChangesRounded";
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

const centerUpPage = "#F7F8FA";
const centerUpLavender = "#FBF5FF";
const centerUpText = "#26303A";
const centerUpMuted = "#58708B";
const centerUpAccent = "#9C6BFF";
const centerUpGold = "#D4AD54";

type CaseStudyDetailProps = {
  caseStudy: CaseStudy;
};

export function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
  if (caseStudy.slug === "centerup-landing") {
    return <CenterUpLandingCaseStudy caseStudy={caseStudy} />;
  }

  if (caseStudy.slug === "centerup-management") {
    return <CenterUpManagementCaseStudy caseStudy={caseStudy} />;
  }

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
      <BackToWorkLink />
    </>
  );
}

function CenterUpManagementCaseStudy({ caseStudy }: CaseStudyDetailProps) {
  return (
    <>
      <CenterUpManagementHero caseStudy={caseStudy} />
      <CenterUpManagementOverview caseStudy={caseStudy} />
      {caseStudy.sections.map((section) => (
        <CenterUpManagementSection
          key={section.title}
          section={section}
          accent={caseStudy.accent}
        />
      ))}
      <CenterUpManagementCaseFocusSection />
      {caseStudy.flow ? (
        <CenterUpManagementFlowSection
          items={caseStudy.flow}
          accent={caseStudy.accent}
        />
      ) : null}
      {caseStudy.architecture ? (
        <CenterUpManagementArchitectureSection items={caseStudy.architecture} />
      ) : null}
      <DesignSystemSection caseStudy={caseStudy} />
      <ScreensSection caseStudy={caseStudy} />
      {caseStudy.learned ? <LearningSection text={caseStudy.learned} /> : null}
      <BackToWorkLink />
    </>
  );
}

type CenterUpManagementSectionProps = {
  section: CaseSection;
  accent: string;
};

function CenterUpManagementSection({
  section,
  accent,
}: CenterUpManagementSectionProps) {
  if (section.title === "Problem") {
    return <CenterUpManagementProblemSection section={section} />;
  }

  if (section.title === "Goals") {
    return <CenterUpManagementGoalsSection section={section} accent={accent} />;
  }

  if (section.title === "Target Users") {
    return <CenterUpManagementTargetUsersSection section={section} />;
  }

  return <CaseGridSection section={section} background="#FFFFFF" />;
}

function CenterUpManagementProblemSection({
  section,
}: {
  section: CaseSection;
}) {
  const cards = section.cards ?? section.items.map((item) => ({
    title: item,
    description: item,
  }));

  return (
    <Box
      component="section"
      sx={{ backgroundColor: centerUpLavender, py: { xs: 6.8, md: 8.2 } }}
    >
      <Container maxWidth="xl" sx={{ maxWidth: "1080px" }}>
        <Stack spacing={{ xs: 4, md: 5 }}>
          <CenterUpSectionTitle title={section.title} />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, minmax(0, 1fr))",
                md: "repeat(3, minmax(0, 1fr))",
              },
              gap: { xs: 2.2, md: 2.5 },
            }}
          >
            {cards.map((card, index) => (
              <CenterUpManagementInfoCard
                key={card.title}
                title={card.title}
                description={card.description}
                icon={<CenterUpManagementProblemIcon index={index} />}
              />
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

function CenterUpManagementGoalsSection({
  section,
  accent,
}: CenterUpManagementSectionProps) {
  return (
    <Box component="section" sx={{ backgroundColor: "#FFFFFF", py: { xs: 6.8, md: 8.2 } }}>
      <Container maxWidth="xl" sx={{ maxWidth: "1060px" }}>
        <Stack spacing={{ xs: 4, md: 5.2 }}>
          <CenterUpSectionTitle title={section.title} />
          <Box
            sx={{
              borderRadius: { xs: "24px", md: "30px" },
              backgroundColor: "#FBF7FF",
              p: { xs: 3, sm: 4.5, md: 5.6 },
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
              columnGap: { md: 5.4 },
              rowGap: { xs: 2.4, md: 2.8 },
            }}
          >
            {section.items.map((item) => (
              <Stack
                key={item}
                direction="row"
                spacing={1.6}
                sx={{ alignItems: "flex-start", minWidth: 0 }}
              >
                <Box
                  sx={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    flexShrink: 0,
                    mt: 0.1,
                    backgroundColor: accent,
                    color: "#FFFFFF",
                  }}
                >
                  <CheckRoundedIcon sx={{ fontSize: 16, strokeWidth: 2.5 }} />
                </Box>
                <Typography
                  sx={{
                    color: centerUpText,
                    fontSize: { xs: 15.5, md: 16 },
                    lineHeight: 1.45,
                    maxWidth: "100%",
                    overflowWrap: "break-word",
                    whiteSpace: "normal",
                  }}
                >
                  {item}
                </Typography>
              </Stack>
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

function CenterUpManagementTargetUsersSection({
  section,
}: {
  section: CaseSection;
}) {
  const cards = section.cards ?? section.items.map((item) => ({
    title: item,
    description: item,
  }));

  return (
    <Box
      component="section"
      sx={{ backgroundColor: centerUpLavender, py: { xs: 6.8, md: 8.2 } }}
    >
      <Container maxWidth="xl" sx={{ maxWidth: "1060px" }}>
        <Stack spacing={{ xs: 4, md: 5.4 }}>
          <CenterUpSectionTitle title={section.title} />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
              gap: { xs: 2.2, md: 2.5 },
            }}
          >
            {cards.map((card, index) => (
              <CenterUpManagementInfoCard
                key={card.title}
                title={card.title}
                description={card.description}
                icon={<CenterUpManagementTargetIcon index={index} />}
                large
              />
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

type CenterUpManagementInfoCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  large?: boolean;
};

function CenterUpManagementInfoCard({
  title,
  description,
  icon,
  large,
}: CenterUpManagementInfoCardProps) {
  return (
    <Box
      sx={{
        minHeight: large ? { xs: 218, md: 210 } : { xs: 190, md: 184 },
        p: large ? { xs: 3, md: 3.6 } : { xs: 2.8, md: 3 },
        borderRadius: { xs: "20px", md: "22px" },
        backgroundColor: "#FFFFFF",
        border: "1px solid rgba(80, 70, 112, 0.07)",
        boxShadow: "0 2px 0 rgba(55, 45, 84, 0.08)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minWidth: 0,
      }}
    >
      {icon}
      <Typography
        sx={{
          mt: large ? 2.2 : 2,
          color: centerUpText,
          fontSize: large ? { xs: 19, md: 20 } : { xs: 18, md: 18.5 },
          lineHeight: 1.25,
          fontWeight: 750,
          overflowWrap: "break-word",
          whiteSpace: "normal",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          mt: 1.4,
          color: centerUpMuted,
          fontSize: large ? { xs: 15.5, md: 16 } : { xs: 14.5, md: 15 },
          lineHeight: large ? 1.55 : 1.48,
          overflowWrap: "break-word",
          whiteSpace: "normal",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

function CenterUpManagementProblemIcon({ index }: { index: number }) {
  const icons = [
    <ArticleOutlinedIcon key="doc" />,
    <BarChartRoundedIcon key="chart" />,
    <ArticleOutlinedIcon key="workflow" />,
    <TrackChangesRoundedIcon key="target" />,
    <PersonOutlineRoundedIcon key="users" />,
    <BarChartRoundedIcon key="growth" />,
  ];

  return <CenterUpManagementIconShell>{icons[index % icons.length]}</CenterUpManagementIconShell>;
}

function CenterUpManagementTargetIcon({ index }: { index: number }) {
  const icons = [
    <TrackChangesRoundedIcon key="owner" />,
    <PersonOutlineRoundedIcon key="academic" />,
    <ChatBubbleOutlineRoundedIcon key="sales" />,
    <CalendarTodayRoundedIcon key="teacher" />,
    <SettingsOutlinedIcon key="admin" />,
  ];

  return <CenterUpManagementIconShell>{icons[index % icons.length]}</CenterUpManagementIconShell>;
}

function CenterUpManagementIconShell({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        width: 38,
        height: 38,
        borderRadius: "12px",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#F1E7FF",
        color: centerUpAccent,
        flexShrink: 0,
        "& svg": { fontSize: 21 },
      }}
    >
      {children}
    </Box>
  );
}

function CenterUpManagementCaseFocusSection() {
  return (
    <Box component="section" sx={{ backgroundColor: "#FFFFFF", py: { xs: 6.8, md: 8.2 } }}>
      <Container maxWidth="xl" sx={{ maxWidth: "960px" }}>
        <Box
          sx={{
            mx: "auto",
            borderRadius: { xs: "24px", md: "28px" },
            background: "linear-gradient(135deg, #875AF4 0%, #A47CFA 100%)",
            color: "#FFFFFF",
            textAlign: "center",
            px: { xs: 3, sm: 6, md: 8.5 },
            py: { xs: 5, md: 6.6 },
          }}
        >
          <Box
            sx={{
              width: { xs: 54, md: 58 },
              height: { xs: 54, md: 58 },
              mx: "auto",
              mb: { xs: 2.6, md: 3 },
              borderRadius: "16px",
              display: "grid",
              placeItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.16)",
              color: "#FFFFFF",
            }}
          >
            <ChatBubbleOutlineRoundedIcon sx={{ fontSize: { xs: 27, md: 30 } }} />
          </Box>
          <Typography
            component="h2"
            sx={{
              fontFamily: "var(--font-serif)",
              fontSize: { xs: 30, sm: 34, md: 36 },
              lineHeight: 1.15,
              fontWeight: 500,
            }}
          >
            Case Focus: CRM Module
          </Typography>
          <Typography
            sx={{
              mt: { xs: 2.1, md: 2.4 },
              mx: "auto",
              maxWidth: 690,
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: { xs: 16, md: 17 },
              lineHeight: 1.55,
              overflowWrap: "break-word",
              whiteSpace: "normal",
            }}
          >
            While CenterUp supports many operational workflows for education
            centers, this case study focuses on the CRM module - a key part of
            the platform that helps centers manage potential students, customer
            information, consultation history, follow-up tasks, and admission
            progress.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

function CenterUpManagementFlowSection({
  items,
  accent,
}: {
  items: string[];
  accent: string;
}) {
  return (
    <Box
      component="section"
      sx={{ backgroundColor: centerUpPage, py: { xs: 6.8, md: 8.2 } }}
    >
      <Container maxWidth="xl" sx={{ maxWidth: "1180px" }}>
        <Stack spacing={{ xs: 3.2, md: 4.2 }} sx={{ alignItems: "center" }}>
          <CenterUpSectionTitle title="CRM Module User Flow" />
          <Typography
            sx={{
              maxWidth: 760,
              color: centerUpMuted,
              textAlign: "center",
              fontSize: { xs: 15.5, md: 16.5 },
              lineHeight: 1.55,
            }}
          >
            This flow reflects how education centers usually handle admission,
            from receiving a new lead to following up, converting the lead into
            a student, and continuing care after enrollment.
          </Typography>

          <Box
            sx={{
              width: "100%",
              borderRadius: { xs: "18px", md: "20px" },
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(80, 70, 112, 0.07)",
              boxShadow: "0 2px 0 rgba(55, 45, 84, 0.08)",
              px: { xs: 2.2, sm: 3.5, md: 5.2 },
              py: { xs: 3.2, md: 4.1 },
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(2, minmax(0, 1fr))",
                  sm: "repeat(4, minmax(0, 1fr))",
                  lg: "repeat(8, minmax(0, 1fr))",
                },
                columnGap: { xs: 2, sm: 2.4, lg: 2.2 },
                rowGap: { xs: 3, md: 3.2 },
                alignItems: "start",
              }}
            >
              {items.map((item, index) => {
                const isLgRowEnd = index === items.length - 1;
                const isSmRowEnd = (index + 1) % 4 === 0 || index === items.length - 1;

                return (
                  <Stack
                    key={item}
                    spacing={1}
                    sx={{
                      alignItems: "center",
                      textAlign: "center",
                      position: "relative",
                      minWidth: 0,
                    }}
                  >
                    <Box
                      sx={{
                        width: 38,
                        height: 38,
                        borderRadius: "50%",
                        display: "grid",
                        placeItems: "center",
                        backgroundColor: accent,
                        color: "#FFFFFF",
                        fontSize: 14,
                        fontWeight: 650,
                        boxShadow: `0 10px 20px ${alpha(accent, 0.18)}`,
                      }}
                    >
                      {index + 1}
                    </Box>
                    <Typography
                      sx={{
                        color: centerUpText,
                        fontSize: { xs: 12.5, md: 13 },
                        lineHeight: 1.28,
                        whiteSpace: "normal",
                        overflowWrap: "break-word",
                      }}
                    >
                      {item}
                    </Typography>
                    <KeyboardArrowRightRoundedIcon
                      aria-hidden="true"
                      sx={{
                        color: accent,
                        fontSize: 22,
                        display: {
                          xs: "none",
                          sm: isSmRowEnd ? "none" : "block",
                          lg: isLgRowEnd ? "none" : "block",
                        },
                        position: "absolute",
                        top: 8,
                        right: { sm: -22, lg: -19 },
                      }}
                    />
                  </Stack>
                );
              })}
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

function CenterUpManagementArchitectureSection({ items }: { items: string[] }) {
  return (
    <Box component="section" sx={{ backgroundColor: "#FFFFFF", py: { xs: 7, md: 9 } }}>
      <Container maxWidth="xl" sx={{ maxWidth: "1360px" }}>
        <Stack spacing={{ xs: 4.5, md: 6.2 }} sx={{ alignItems: "center" }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: "var(--font-serif)",
              color: centerUpText,
              fontSize: { xs: 42, sm: 52, md: 64 },
              lineHeight: 1,
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            Information Architecture
          </Typography>
          <Box
            sx={{
              width: "100%",
              maxWidth: 1180,
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, minmax(0, 1fr))",
                md: "repeat(4, minmax(0, 1fr))",
              },
              gap: { xs: 1.8, md: 2.1 },
            }}
          >
            {items.map((item) => (
              <Box
                key={item}
                sx={{
                  minHeight: { xs: 62, md: 70 },
                  borderRadius: "16px",
                  display: "grid",
                  placeItems: "center",
                  px: 2,
                  textAlign: "center",
                  backgroundColor: "#FAFBFC",
                  border: "1px solid #DDE3EA",
                  boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.65)",
                }}
              >
                <Typography
                  sx={{
                    color: centerUpText,
                    fontSize: { xs: 16, md: 18 },
                    lineHeight: 1.25,
                    fontWeight: 500,
                    overflowWrap: "break-word",
                    whiteSpace: "normal",
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

function CenterUpLandingCaseStudy({ caseStudy }: CaseStudyDetailProps) {
  return (
    <>
      <CenterUpLandingHero caseStudy={caseStudy} />
      <CenterUpLandingOverview caseStudy={caseStudy} />
      {caseStudy.sections.map((section) => (
        <CenterUpLandingSection
          key={section.title}
          section={section}
          accent={caseStudy.accent}
        />
      ))}
      <DesignSystemSection caseStudy={caseStudy} />
      {caseStudy.wireframes ? (
        <CenterUpWireframeSection caseStudy={caseStudy} />
      ) : null}
      <ScreensSection caseStudy={caseStudy} />
      {caseStudy.learned ? <LearningSection text={caseStudy.learned} /> : null}
      <BackToWorkLink />
    </>
  );
}

function CenterUpManagementHero({ caseStudy }: CaseStudyDetailProps) {
  const facts = caseStudy.overviewFacts ?? [
    { label: "Type", value: caseStudy.category },
    { label: "Platform", value: caseStudy.platform },
    { label: "Role", value: caseStudy.role },
    { label: "Timeline", value: caseStudy.timeline },
  ];

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: centerUpPage,
        borderBottom: "1px solid rgba(15, 23, 42, 0.03)",
      }}
    >
      <Container maxWidth="xl" sx={{ maxWidth: "1220px", py: { xs: 6, md: 7.8 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.88fr 1.12fr" },
            gap: { xs: 5, md: 6.5 },
            alignItems: "center",
            minWidth: 0,
          }}
        >
          <Stack
            spacing={{ xs: 3, md: 3.7 }}
            sx={{ alignItems: "flex-start", minWidth: 0 }}
          >
            <Stack spacing={1.25} sx={{ width: "100%", minWidth: 0 }}>
              <Typography
                component="h1"
                sx={{
                  fontFamily: "var(--font-serif)",
                  color: centerUpText,
                  fontSize: { xs: 58, sm: 72, md: 82 },
                  lineHeight: 0.95,
                  fontWeight: 500,
                  maxWidth: "100%",
                }}
              >
                {caseStudy.shortTitle}
              </Typography>
              <Typography
                sx={{
                  color: "#74706F",
                  fontSize: { xs: 19, md: 22 },
                  lineHeight: 1.35,
                  maxWidth: 600,
                  overflowWrap: "break-word",
                  whiteSpace: "normal",
                }}
              >
                {caseStudy.headline}
              </Typography>
              {caseStudy.tagline ? (
                <Typography
                  sx={{
                    color: centerUpGold,
                    fontSize: { xs: 16.5, md: 18 },
                    fontStyle: "italic",
                    lineHeight: 1.45,
                    maxWidth: 600,
                    overflowWrap: "break-word",
                    whiteSpace: "normal",
                  }}
                >
                  {caseStudy.tagline}
                </Typography>
              ) : null}
            </Stack>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
                gap: { xs: 2.4, sm: 4, md: 4.6 },
                width: "100%",
                maxWidth: 500,
                pt: { xs: 0.8, md: 2.4 },
              }}
            >
              {facts.map((fact) => (
                <MetaItem key={fact.label} label={fact.label} value={fact.value} />
              ))}
            </Box>

            <Typography
              sx={{
                maxWidth: 520,
                width: "100%",
                color: centerUpMuted,
                fontSize: { xs: 16, md: 17 },
                lineHeight: 1.58,
                overflowWrap: "break-word",
                whiteSpace: "normal",
                pt: { xs: 0.5, md: 1.2 },
              }}
            >
              {caseStudy.summary}
            </Typography>
          </Stack>

          <Box
            sx={{
              display: "grid",
              placeItems: "center",
              minWidth: 0,
              width: "100%",
            }}
          >
            <Box
              component="img"
              src={caseStudy.heroImage}
              alt={`${caseStudy.title} dashboard preview`}
              sx={{
                display: "block",
                width: "100%",
                maxWidth: { xs: "100%", sm: 650, md: 675 },
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

function CenterUpManagementOverview({ caseStudy }: CaseStudyDetailProps) {
  return (
    <Box component="section" sx={{ backgroundColor: "#FFFFFF", py: { xs: 6.8, md: 7.8 } }}>
      <Container maxWidth="xl" sx={{ maxWidth: "790px" }}>
        <Stack
          spacing={{ xs: 3.2, md: 4.4 }}
          sx={{ alignItems: "center", width: "100%", minWidth: 0 }}
        >
          <CenterUpSectionTitle title="Project Overview" />
          <Stack spacing={2.6} sx={{ width: "100%" }}>
            {caseStudy.overview.map((paragraph) => (
              <Typography
                key={paragraph}
                sx={{
                  color: centerUpMuted,
                  fontSize: { xs: 16, md: 18 },
                  lineHeight: 1.6,
                  maxWidth: "100%",
                  overflowWrap: "break-word",
                  whiteSpace: "normal",
                }}
              >
                {paragraph}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

function CenterUpLandingHero({ caseStudy }: CaseStudyDetailProps) {
  const heroTitle = caseStudy.title.replace(" Landing Page", "");
  const facts = caseStudy.overviewFacts ?? [
    { label: "Type", value: caseStudy.platform },
    { label: "Role", value: caseStudy.role },
  ];

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: centerUpPage,
        borderBottom: "1px solid rgba(15, 23, 42, 0.03)",
      }}
    >
      <Container maxWidth="xl" sx={{ maxWidth: "1120px", py: { xs: 6, md: 8.5 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.92fr 1.08fr" },
            gap: { xs: 5, md: 6 },
            alignItems: "center",
            minWidth: 0,
          }}
        >
          <Stack
            spacing={{ xs: 3, md: 3.6 }}
            sx={{ alignItems: "flex-start", minWidth: 0 }}
          >
            <Stack spacing={1.25} sx={{ width: "100%", minWidth: 0 }}>
              <Typography
                component="h1"
                sx={{
                  fontFamily: "var(--font-serif)",
                  color: centerUpText,
                  fontSize: { xs: 54, sm: 66, md: 72 },
                  lineHeight: 0.96,
                  fontWeight: 500,
                  maxWidth: "100%",
                }}
              >
                {heroTitle}
              </Typography>
              <Typography
                sx={{
                  color: "#74706F",
                  fontSize: { xs: 18, md: 21 },
                  lineHeight: 1.35,
                  maxWidth: "100%",
                  overflowWrap: "break-word",
                  whiteSpace: "normal",
                }}
              >
                {caseStudy.headline}
              </Typography>
              {caseStudy.tagline ? (
                <Typography
                  sx={{
                    color: centerUpGold,
                    fontSize: { xs: 16, md: 17 },
                    fontStyle: "italic",
                    lineHeight: 1.5,
                    maxWidth: "100%",
                    overflowWrap: "break-word",
                    whiteSpace: "normal",
                  }}
                >
                  {caseStudy.tagline}
                </Typography>
              ) : null}
            </Stack>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
                gap: { xs: 2.4, sm: 4, md: 5 },
                width: "100%",
                maxWidth: 470,
                pt: { xs: 0.8, md: 1.2 },
              }}
            >
              {facts.map((fact) => (
                <MetaItem key={fact.label} label={fact.label} value={fact.value} />
              ))}
            </Box>

            <Typography
              sx={{
                maxWidth: 470,
                width: "100%",
                color: centerUpMuted,
                fontSize: { xs: 15, md: 16 },
                lineHeight: 1.65,
                overflowWrap: "break-word",
                whiteSpace: "normal",
                pt: { xs: 0.4, md: 1 },
              }}
            >
              {caseStudy.summary}
            </Typography>
          </Stack>

          <Box
            sx={{
              display: "grid",
              placeItems: "center",
              minWidth: 0,
              width: "100%",
              pt: { md: 2.2 },
            }}
          >
            <Box
              component="img"
              src={caseStudy.heroImage}
              alt={`${caseStudy.title} laptop mockup`}
              sx={{
                display: "block",
                width: "100%",
                maxWidth: { xs: "100%", sm: 620, md: 610 },
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

function CenterUpLandingOverview({ caseStudy }: CaseStudyDetailProps) {
  return (
    <Box component="section" sx={{ backgroundColor: "#FFFFFF", py: { xs: 6.8, md: 7.8 } }}>
      <Container maxWidth="xl" sx={{ maxWidth: "760px" }}>
        <Stack
          spacing={{ xs: 3.2, md: 4.2 }}
          sx={{ alignItems: "center", width: "100%", minWidth: 0 }}
        >
          <CenterUpSectionTitle title="Project Overview" />
          <Stack spacing={2.4} sx={{ width: "100%" }}>
            {caseStudy.overview.map((paragraph) => (
              <Typography
                key={paragraph}
                sx={{
                  color: centerUpMuted,
                  fontSize: { xs: 15, md: 16 },
                  lineHeight: 1.75,
                  maxWidth: "100%",
                  overflowWrap: "break-word",
                  whiteSpace: "normal",
                }}
              >
                {paragraph}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

type CenterUpLandingSectionProps = {
  section: CaseSection;
  accent: string;
};

function CenterUpLandingSection({ section, accent }: CenterUpLandingSectionProps) {
  if (section.title === "Goals") {
    return <CenterUpGoalsSection section={section} />;
  }

  if (section.title === "Design Challenge") {
    return <CenterUpChallengeSection section={section} />;
  }

  return <CenterUpPageStructureSection section={section} accent={accent} />;
}

function CenterUpGoalsSection({ section }: { section: CaseSection }) {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: centerUpLavender,
        py: { xs: 6.8, md: 7.8 },
      }}
    >
      <Container maxWidth="xl" sx={{ maxWidth: "980px" }}>
        <Stack spacing={{ xs: 4, md: 5 }}>
          <CenterUpSectionTitle title={section.title} />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, minmax(0, 1fr))",
                md: "repeat(3, minmax(0, 1fr))",
              },
              gap: { xs: 2, md: 2.4 },
              minWidth: 0,
            }}
          >
            {section.items.map((item, index) => (
              <Box
                key={item}
                sx={{
                  minHeight: { xs: 132, md: 148 },
                  p: { xs: 2.6, md: 3 },
                  borderRadius: "18px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(80, 70, 112, 0.08)",
                  boxShadow: "0 2px 0 rgba(55, 45, 84, 0.08)",
                  minWidth: 0,
                  width: "100%",
                }}
              >
                <CenterUpGoalIcon index={index} />
                <Typography
                  sx={{
                    mt: 2,
                    color: centerUpText,
                    fontSize: { xs: 14, md: 14.5 },
                    lineHeight: 1.58,
                    maxWidth: "100%",
                    overflowWrap: "break-word",
                    whiteSpace: "normal",
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

function CenterUpGoalIcon({ index }: { index: number }) {
  const icons = [
    <TrackChangesRoundedIcon key="target" />,
    <BarChartRoundedIcon key="chart" />,
    <ArticleOutlinedIcon key="article" />,
    <ShieldOutlinedIcon key="shield" />,
    <BoltRoundedIcon key="bolt" />,
    <DesktopMacRoundedIcon key="desktop" />,
  ];

  return (
    <Box
      sx={{
        width: 38,
        height: 38,
        borderRadius: "12px",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#F1E7FF",
        color: centerUpAccent,
        "& svg": { fontSize: 20 },
      }}
    >
      {icons[index % icons.length]}
    </Box>
  );
}

function CenterUpChallengeSection({ section }: { section: CaseSection }) {
  return (
    <Box component="section" sx={{ backgroundColor: centerUpPage, py: { xs: 6.8, md: 7.8 } }}>
      <Container maxWidth="xl" sx={{ maxWidth: "980px" }}>
        <Stack spacing={{ xs: 4, md: 5 }}>
          <CenterUpSectionTitle title={section.title} />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
              gap: { xs: 2, md: 2.4 },
              minWidth: 0,
            }}
          >
            {section.items.map((item) => (
              <Stack
                key={item}
                direction="row"
                spacing={2}
                sx={{
                  minHeight: { xs: 88, md: 96 },
                  alignItems: "center",
                  p: { xs: 2.5, md: 3 },
                  borderRadius: "18px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(80, 70, 112, 0.07)",
                  boxShadow: "0 2px 0 rgba(55, 45, 84, 0.06)",
                  minWidth: 0,
                  width: "100%",
                }}
              >
                <Box
                  aria-hidden="true"
                  sx={{
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: "#E9DDFF",
                    flexShrink: 0,
                  }}
                >
                  <Box
                    sx={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      backgroundColor: centerUpAccent,
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    color: centerUpText,
                    fontSize: { xs: 14, md: 14.5 },
                    lineHeight: 1.58,
                    maxWidth: "100%",
                    overflowWrap: "break-word",
                    whiteSpace: "normal",
                  }}
                >
                  {item}
                </Typography>
              </Stack>
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

function CenterUpPageStructureSection({
  section,
  accent,
}: CenterUpLandingSectionProps) {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: centerUpLavender,
        py: { xs: 6.8, md: 8.2 },
      }}
    >
      <Container maxWidth="xl" sx={{ maxWidth: "1180px" }}>
        <Stack spacing={{ xs: 3.2, md: 4.8 }} sx={{ alignItems: "center" }}>
          <CenterUpSectionTitle title={section.title} />
          {section.description ? (
            <Typography
              sx={{
                maxWidth: 660,
                color: centerUpMuted,
                textAlign: "center",
                fontSize: { xs: 15.5, md: 17 },
                lineHeight: 1.55,
              }}
            >
              {section.description}
            </Typography>
          ) : null}
          <Box
            sx={{
              width: "100%",
              borderRadius: { xs: "24px", md: "32px" },
              backgroundColor: "#FFFFFF",
              border: `1px solid ${alpha(accent, 0.06)}`,
              p: { xs: 3, sm: 4.5, md: 6.4 },
              boxShadow: "0 1px 0 rgba(55, 45, 84, 0.04)",
            }}
          >
            <Box
              sx={{
                maxWidth: 900,
                mx: "auto",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                columnGap: { xs: 1.1, sm: 1.6, md: 1.8 },
                rowGap: { xs: 1.3, sm: 1.8 },
              }}
            >
              {section.items.map((item, index) => (
                <Stack
                  key={item}
                  direction="row"
                  spacing={{ xs: 0.8, sm: 1.2 }}
                  sx={{ alignItems: "center", minWidth: 0 }}
                >
                  <Box
                    sx={{
                      minHeight: 50,
                      px: { xs: 2.1, sm: 2.8, md: 3.4 },
                      borderRadius: "16px",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#FFFFFF",
                      border: "1px solid rgba(38, 48, 58, 0.1)",
                      boxShadow:
                        "0 3px 0 rgba(38, 48, 58, 0.08), 0 10px 22px rgba(38, 48, 58, 0.04)",
                    }}
                  >
                    <Typography
                      sx={{
                        color: centerUpText,
                        fontSize: { xs: 13.5, sm: 15 },
                        lineHeight: 1.25,
                        textAlign: "center",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                  {index < section.items.length - 1 ? (
                    <KeyboardArrowRightRoundedIcon
                      aria-hidden="true"
                      sx={{
                        color: centerUpAccent,
                        fontSize: { xs: 22, md: 25 },
                        flexShrink: 0,
                      }}
                    />
                  ) : null}
                </Stack>
              ))}
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

function CenterUpSectionTitle({ title }: { title: string }) {
  return (
    <Typography
      component="h2"
      sx={{
        fontFamily: "var(--font-serif)",
        color: centerUpText,
        fontSize: { xs: 38, sm: 44, md: 48 },
        lineHeight: 1,
        fontWeight: 500,
        textAlign: "center",
      }}
    >
      {title}
    </Typography>
  );
}

function BackToWorkLink() {
  return (
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
                  xs: "repeat(2, minmax(0, 1fr))",
                  sm: "repeat(2, minmax(0, 1fr))",
                  md: "repeat(4, minmax(0, 1fr))",
                },
                gap: { xs: 1.4, sm: 2, md: 3.2 },
              }}
            >
              {caseStudy.overviewFacts.map((fact) => (
                <Box
                  key={fact.label}
                  sx={{
                    minHeight: { xs: 116, md: 138 },
                    p: { xs: 2.2, sm: 3, md: 3.4 },
                    borderRadius: { xs: "18px", md: "22px" },
                    backgroundColor: "#FBF6FF",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: slaymeMuted,
                      fontSize: { xs: 11.5, sm: 14 },
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      mb: 1,
                    }}
                  >
                    {fact.label}
                  </Typography>
                  <Typography
                    sx={{
                      color: slaymeText,
                      fontSize: { xs: 14, sm: 16.5 },
                      lineHeight: 1.35,
                    }}
                  >
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
      <Stack direction="row" spacing={1.4} sx={{ alignItems: "center" }}>
        <SlaymeProblemIcon icon={card.icon} accent={accent} />
        <Typography sx={{ color: slaymeText, fontSize: 17, lineHeight: 1.3 }}>
          {card.title}
        </Typography>
      </Stack>
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
            xs: "repeat(2, minmax(0, 1fr))",
            sm: "repeat(2, minmax(0, 1fr))",
            md: `repeat(${desktopColumns}, minmax(0, 1fr))`,
          },
          columnGap: { xs: 2, sm: 5, md: 5.5 },
          rowGap: { xs: 2.2, sm: 4.5, md: 5 },
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
                minHeight: { xs: 82, md: 92 },
                position: "relative",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  width: { xs: 44, md: 56 },
                  height: { xs: 44, md: 56 },
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  background: `linear-gradient(135deg, ${alpha(accent, 0.7)}, ${alpha(
                    accent,
                    0.95,
                  )})`,
                  boxShadow: `0 12px 22px ${alpha(accent, 0.24)}`,
                  color: "#FFFFFF",
                  fontSize: { xs: 14, md: 18 },
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
                  fontSize: { xs: 12.5, sm: 14 },
                  lineHeight: 1.3,
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
  if (caseStudy.slug === "centerup-management") {
    return <CenterUpManagementVisualDesignSystemSection caseStudy={caseStudy} />;
  }

  if (caseStudy.slug === "centerup-landing") {
    return <CenterUpVisualDesignSystemSection caseStudy={caseStudy} />;
  }

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

          {isSlayme ? (
            <SlaymeTypographySection />
          ) : (
            <SystemPanel
              title="Typography"
              items={caseStudy.designSystem.typography}
              accent={caseStudy.accent}
            />
          )}
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

function CenterUpManagementVisualDesignSystemSection({
  caseStudy,
}: CaseStudyDetailProps) {
  const primarySwatches = caseStudy.designSystem.colors.slice(0, 4);
  const supportingSwatches = caseStudy.designSystem.colors.slice(4);

  return (
    <Box
      id="visual-design-system"
      component="section"
      sx={{ backgroundColor: centerUpLavender, py: { xs: 6.8, md: 8.8 } }}
    >
      <Container maxWidth="xl" sx={{ maxWidth: "1040px" }}>
        <Stack spacing={{ xs: 5.5, md: 7.4 }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: "var(--font-serif)",
              color: centerUpText,
              fontSize: { xs: 38, sm: 46, md: 48 },
              lineHeight: 1,
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            Visual Design System
          </Typography>

          <CenterUpManagementPalette
            primarySwatches={primarySwatches}
            supportingSwatches={supportingSwatches}
          />

          <CenterUpManagementTypography items={caseStudy.designSystem.typography} />

          <CenterUpManagementMainComponents />

          <CenterUpManagementProductComponents />
        </Stack>
      </Container>
    </Box>
  );
}

type CenterUpManagementPaletteProps = {
  primarySwatches: CaseStudy["designSystem"]["colors"];
  supportingSwatches: CaseStudy["designSystem"]["colors"];
};

function CenterUpManagementPalette({
  primarySwatches,
  supportingSwatches,
}: CenterUpManagementPaletteProps) {
  return (
    <Stack spacing={{ xs: 3, md: 3.6 }}>
      <CenterUpManagementSubheading title="Color Palette" />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, minmax(0, 1fr))",
            md: "repeat(4, minmax(0, 1fr))",
          },
          gap: { xs: 2.1, md: 2.3 },
        }}
      >
        {primarySwatches.map((swatch) => (
          <CenterUpSwatchCard
            key={`${swatch.name}-${swatch.value}`}
            name={swatch.name}
            value={swatch.value}
            preview={swatch.previewValue ?? swatch.value}
            size="large"
          />
        ))}
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, minmax(0, 1fr))",
            sm: "repeat(3, minmax(0, 1fr))",
            md: "repeat(6, minmax(0, 1fr))",
          },
          gap: { xs: 1.8, md: 2.1 },
        }}
      >
        {supportingSwatches.map((swatch) => (
          <CenterUpSwatchCard
            key={`${swatch.name}-${swatch.value}`}
            name={swatch.name}
            value={swatch.value}
            preview={swatch.previewValue ?? swatch.value}
            size="small"
          />
        ))}
      </Box>
    </Stack>
  );
}

function CenterUpManagementTypography({ items }: { items: string[] }) {
  return (
    <Stack spacing={{ xs: 3, md: 3.6 }}>
      <CenterUpManagementSubheading title="Typography" />
      <Box
        sx={{
          borderRadius: { xs: "18px", md: "20px" },
          backgroundColor: "#FFFFFF",
          p: { xs: 2.6, md: 3.2 },
        }}
      >
        <Box
          sx={{
            height: "1px",
            backgroundColor: "rgba(38, 48, 58, 0.08)",
            mb: { xs: 2.2, md: 2.6 },
          }}
        />
        <Stack spacing={{ xs: 1.35, md: 1.5 }}>
          {items.map((item, index) => {
            const [label, meta] = item.split("|");

            return (
              <Box key={item}>
                <Typography
                  sx={{
                    color: centerUpText,
                    fontSize:
                      index === 0
                        ? { xs: 20, md: 22 }
                        : index === 1
                          ? { xs: 18, md: 20 }
                          : index === 2
                            ? { xs: 15.5, md: 16 }
                            : index === 3
                              ? { xs: 14.5, md: 15 }
                              : { xs: 12.5, md: 13 },
                    lineHeight: 1.15,
                    fontWeight: index < 2 ? 650 : index === 2 ? 600 : 400,
                  }}
                >
                  {label}
                </Typography>
                <Typography
                  sx={{
                    mt: 0.35,
                    color: "#817A84",
                    fontSize: { xs: 11.5, md: 12 },
                    lineHeight: 1.2,
                  }}
                >
                  {meta}
                </Typography>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Stack>
  );
}

function CenterUpManagementMainComponents() {
  return (
    <Stack spacing={{ xs: 3, md: 3.6 }}>
      <CenterUpManagementSubheading title="Main components" />
      <Box
        sx={{
          borderRadius: { xs: "18px", md: "20px" },
          backgroundColor: "#FFFFFF",
          p: { xs: 2.5, sm: 3, md: 3.2 },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1.12fr" },
          gap: { xs: 3, md: 5.5 },
        }}
      >
        <Stack spacing={3.4}>
          <Stack spacing={1.35}>
            <CenterUpManagementMiniLabel>Buttons</CenterUpManagementMiniLabel>
            <Stack direction="row" spacing={1.2} sx={{ flexWrap: "wrap", rowGap: 1 }}>
              <CenterUpDemoButton variantType="primary">Tao hoc vien</CenterUpDemoButton>
              <CenterUpDemoButton variantType="outline">Moi tai khoan</CenterUpDemoButton>
              <CenterUpDemoButton variantType="soft">Xuat du lieu</CenterUpDemoButton>
            </Stack>
          </Stack>

          <Stack spacing={1.35}>
            <CenterUpManagementMiniLabel>Status Chips</CenterUpManagementMiniLabel>
            <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", rowGap: 1 }}>
              <CenterUpDemoChip label="Dang hoc" color="#22C55E" background="#DCFCE7" />
              <CenterUpDemoChip label="Cho thanh toan" color="#B76B00" background="#FEF3C7" />
              <CenterUpDemoChip label="Qua han" color="#FF5630" background="#FFE3E0" />
              <CenterUpDemoChip label="Tiem nang" color="#246BFE" background="#DBEAFE" />
            </Stack>
          </Stack>
        </Stack>

        <Stack spacing={3.3}>
          <Stack spacing={1.35}>
            <CenterUpManagementMiniLabel>Input Fields</CenterUpManagementMiniLabel>
            <Box
              sx={{
                height: 42,
                borderRadius: "10px",
                border: "1px solid #DDE3EA",
                backgroundColor: "#FAFBFC",
                display: "flex",
                alignItems: "center",
                px: 1.6,
                color: "#A7B0BD",
                fontSize: 13,
              }}
            >
              Tim hoc vien, lop hoc, hoa don...
            </Box>
          </Stack>

          <Stack spacing={1.35}>
            <CenterUpManagementMiniLabel>Card Style</CenterUpManagementMiniLabel>
            <Box
              sx={{
                maxWidth: 360,
                minHeight: 74,
                borderRadius: "14px",
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(15, 23, 42, 0.06)",
                boxShadow: "0 8px 22px rgba(38, 48, 58, 0.07)",
                p: 2,
              }}
            >
              <Typography sx={{ color: centerUpText, fontSize: 14, fontWeight: 700 }}>
                Sample Card Component
              </Typography>
              <Typography sx={{ mt: 0.8, color: "#8D98A6", fontSize: 12.5 }}>
                16px radius, subtle shadow, white surface
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}

function CenterUpManagementProductComponents() {
  return (
    <Stack spacing={{ xs: 3, md: 3.6 }}>
      <CenterUpManagementSubheading title="Product Components" />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, minmax(0, 1fr))",
            md: "repeat(3, minmax(0, 1fr))",
          },
          gap: { xs: 2.2, md: 2.4 },
        }}
      >
        <CenterUpStudentCard />
        <CenterUpLeadCard />
        <CenterUpClassCard />
        <CenterUpSystemCard />
        <CenterUpInvoiceCard />
        <CenterUpTaskCard />
        <CenterUpTodoCard />
        <CenterUpScheduleCard />
        <CenterUpLeaveCard />
      </Box>
    </Stack>
  );
}

function CenterUpManagementSubheading({ title }: { title: string }) {
  return (
    <Typography
      component="h3"
      sx={{
        color: centerUpText,
        fontSize: { xs: 25, md: 28 },
        lineHeight: 1.12,
        fontWeight: 850,
      }}
    >
      {title}
    </Typography>
  );
}

function CenterUpManagementMiniLabel({ children }: { children: ReactNode }) {
  return (
    <Typography sx={{ color: centerUpText, fontSize: 12.5, fontWeight: 750 }}>
      {children}
    </Typography>
  );
}

function CenterUpDemoButton({
  children,
  variantType,
}: {
  children: ReactNode;
  variantType: "primary" | "outline" | "soft";
}) {
  return (
    <Box
      sx={{
        minWidth: { xs: 96, md: 106 },
        height: 38,
        borderRadius: "7px",
        display: "grid",
        placeItems: "center",
        px: 1.3,
        fontSize: 12.5,
        color: variantType === "primary" ? "#FFFFFF" : variantType === "outline" ? "#696CFF" : "#7B8490",
        backgroundColor: variantType === "primary" ? "#696CFF" : variantType === "outline" ? "#FFFFFF" : "#F3F5F8",
        border: variantType === "outline" ? "1px solid #696CFF" : "1px solid transparent",
      }}
    >
      {children}
    </Box>
  );
}

function CenterUpDemoChip({
  label,
  color,
  background,
}: {
  label: string;
  color: string;
  background: string;
}) {
  return (
    <Box
      sx={{
        borderRadius: 999,
        px: 1.6,
        py: 0.7,
        color,
        backgroundColor: background,
        fontSize: 12,
        fontWeight: 700,
        lineHeight: 1,
      }}
    >
      {label}
    </Box>
  );
}

function CenterUpProductCard({
  children,
  minHeight = 160,
}: {
  children: ReactNode;
  minHeight?: number;
}) {
  return (
    <Box
      sx={{
        minHeight,
        borderRadius: "14px",
        backgroundColor: "#FFFFFF",
        border: "1px solid rgba(15, 23, 42, 0.06)",
        boxShadow: "0 14px 28px rgba(38, 48, 58, 0.08)",
        p: { xs: 2, md: 2.2 },
        minWidth: 0,
      }}
    >
      {children}
    </Box>
  );
}

function CenterUpStudentCard() {
  return (
    <CenterUpProductCard>
      <Stack direction="row" spacing={1.4} sx={{ alignItems: "center" }}>
        <Avatar sx={{ width: 42, height: 42, bgcolor: "#D83BCB", fontSize: 14 }}>MA</Avatar>
        <Box sx={{ minWidth: 0 }}>
          <Typography sx={{ color: centerUpText, fontSize: 14, fontWeight: 800 }}>
            Nguyen Minh Anh
          </Typography>
          <Typography sx={{ color: "#6B7A88", fontSize: 12 }}>HV-0248</Typography>
        </Box>
      </Stack>
      <Stack spacing={0.8} sx={{ mt: 2.2 }}>
        <Typography sx={{ color: "#6B7A88", fontSize: 12 }}>minhanh@email.com</Typography>
        <Typography sx={{ color: "#6B7A88", fontSize: 12 }}>IELTS Foundation A2</Typography>
      </Stack>
      <Stack direction="row" spacing={1} sx={{ mt: 1.6 }}>
        <CenterUpDemoChip label="Dang hoc" color="#16A34A" background="#DCFCE7" />
        <CenterUpDemoChip label="Cho xep lop" color="#246BFE" background="#DBEAFE" />
      </Stack>
    </CenterUpProductCard>
  );
}

function CenterUpLeadCard() {
  return (
    <CenterUpProductCard>
      <Stack direction="row" spacing={1.4} sx={{ alignItems: "center" }}>
        <Avatar sx={{ width: 42, height: 42, bgcolor: "#E1E1FF", color: "#696CFF", fontSize: 14 }}>
          TH
        </Avatar>
        <Box sx={{ minWidth: 0 }}>
          <Typography sx={{ color: centerUpText, fontSize: 14, fontWeight: 800 }}>
            Phu huynh Tran Thu Ha
          </Typography>
          <Typography sx={{ color: "#6B7A88", fontSize: 12 }}>0902 456 789</Typography>
        </Box>
      </Stack>
      <Stack spacing={0.9} sx={{ mt: 2.2 }}>
        <CenterUpInfoRow label="Nguon" value="Zalo" />
        <CenterUpInfoRow label="Quan tam" value="TOEIC 650" />
      </Stack>
      <Stack direction="row" spacing={1} sx={{ mt: 1.6 }}>
        <CenterUpDemoChip label="Tiem nang" color="#B76B00" background="#FEF3C7" />
        <CenterUpDemoChip label="Da lien ket hoc vien" color="#16A34A" background="#DCFCE7" />
      </Stack>
    </CenterUpProductCard>
  );
}

function CenterUpClassCard() {
  return (
    <CenterUpProductCard>
      <Typography sx={{ color: centerUpText, fontSize: 14, fontWeight: 850 }}>
        IELTS Foundation A2
      </Typography>
      <Typography sx={{ mt: 0.7, color: "#6B7A88", fontSize: 12 }}>
        Buoi 12: Speaking Practice
      </Typography>
      <Stack spacing={1} sx={{ mt: 1.8 }}>
        <CenterUpIconText icon={<CalendarTodayRoundedIcon />} text="Thu Ba, 18:00 - 19:30" />
        <CenterUpIconText icon={<LocationOnOutlinedIcon />} text="P.203" />
        <CenterUpIconText icon={<PersonOutlineRoundedIcon />} text="Ms. Linh - 18/20 hoc vien" />
      </Stack>
      <Stack direction="row" spacing={1} sx={{ mt: 1.7 }}>
        <CenterUpDemoChip label="Dang dien ra" color="#16A34A" background="#DCFCE7" />
        <CenterUpDemoChip label="Da diem danh" color="#246BFE" background="#DBEAFE" />
      </Stack>
    </CenterUpProductCard>
  );
}

function CenterUpSystemCard() {
  return (
    <CenterUpProductCard minHeight={180}>
      <Typography sx={{ color: centerUpText, fontSize: 14, fontWeight: 850 }}>
        Tong quan he thong
      </Typography>
      <Stack spacing={1.6} sx={{ mt: 1.9 }}>
        <CenterUpMetricLine color="#696CFF" value="1,248" label="Hoc vien hoat dong" />
        <CenterUpMetricLine color="#22C55E" value="86" label="Lop hoc dang dien ra" />
        <CenterUpMetricLine color="#FF5630" value="32" label="Hoc vien no hoc phi" />
      </Stack>
    </CenterUpProductCard>
  );
}

function CenterUpInvoiceCard() {
  return (
    <CenterUpProductCard minHeight={180}>
      <Typography sx={{ color: centerUpText, fontSize: 14, fontWeight: 850 }}>
        HD-2026-0482
      </Typography>
      <Typography sx={{ mt: 0.7, color: "#6B7A88", fontSize: 12 }}>
        Nguyen Minh Anh
      </Typography>
      <Stack spacing={1.15} sx={{ mt: 2 }}>
        <CenterUpInfoRow label="Tong tien" value="8.500.000d" strong />
        <CenterUpInfoRow label="Da thanh toan" value="6.000.000d" color="#22C55E" />
        <CenterUpInfoRow label="Con no" value="2.500.000d" color="#FF5630" />
      </Stack>
      <Stack direction="row" spacing={1} sx={{ mt: 1.6 }}>
        <CenterUpDemoChip label="Thanh toan thieu" color="#FF5630" background="#FFE3E0" />
        <CenterUpDemoChip label="Giao dich cho" color="#B76B00" background="#FEF3C7" />
      </Stack>
    </CenterUpProductCard>
  );
}

function CenterUpTaskCard() {
  return (
    <CenterUpProductCard minHeight={180}>
      <Stack direction="row" spacing={1.2} sx={{ alignItems: "flex-start" }}>
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: "10px",
            display: "grid",
            placeItems: "center",
            backgroundColor: "#FFE3E0",
            color: "#FF5630",
          }}
        >
          <ArticleOutlinedIcon sx={{ fontSize: 18 }} />
        </Box>
        <Box>
          <Typography sx={{ color: centerUpText, fontSize: 14, fontWeight: 850 }}>
            Goi tu van lich hoc thu
          </Typography>
          <Typography sx={{ mt: 0.6, color: "#6B7A88", fontSize: 12 }}>
            Nhom: Tuyen sinh
          </Typography>
        </Box>
      </Stack>
      <Stack spacing={1} sx={{ mt: 1.9 }}>
        <CenterUpIconText icon={<CalendarTodayRoundedIcon />} text="Han: 04/06/2026" />
        <CenterUpIconText icon={<BoltRoundedIcon />} text="Uu tien cao" color="#FF5630" />
      </Stack>
      <Stack direction="row" sx={{ mt: 1.7, justifyContent: "space-between", alignItems: "center" }}>
        <Stack direction="row" spacing={-0.5}>
          <Avatar sx={{ width: 24, height: 24, bgcolor: "#FF5630", fontSize: 10 }}>NA</Avatar>
          <Avatar sx={{ width: 24, height: 24, bgcolor: "#696CFF", fontSize: 10 }}>LM</Avatar>
        </Stack>
        <CenterUpDemoChip label="Dang thuc hien" color="#246BFE" background="#DBEAFE" />
      </Stack>
    </CenterUpProductCard>
  );
}

function CenterUpTodoCard() {
  return (
    <CenterUpProductCard minHeight={190}>
      <Typography sx={{ color: centerUpText, fontSize: 14, fontWeight: 850 }}>
        Cong viec chua hoan thanh
      </Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, mt: 1.4 }}>
        <Box sx={{ borderRadius: "8px", py: 1, textAlign: "center", backgroundColor: "#696CFF", color: "#FFFFFF", fontSize: 12 }}>
          Den han (8)
        </Box>
        <Box sx={{ borderRadius: "8px", py: 1, textAlign: "center", backgroundColor: "#F5F7FA", color: "#6B7A88", fontSize: 12 }}>
          Qua han (4)
        </Box>
      </Box>
      <Stack spacing={1.5} sx={{ mt: 1.6 }}>
        {["Goi tu van lich hoc thu", "Chuan bi tai lieu buoi 15", "Xu ly don xin nghi"].map((item) => (
          <Stack key={item} direction="row" spacing={1.1} sx={{ alignItems: "center" }}>
            <Box sx={{ width: 14, height: 14, borderRadius: "3px", border: "1px solid #DDE3EA" }} />
            <Typography sx={{ color: centerUpText, fontSize: 12.5 }}>{item}</Typography>
          </Stack>
        ))}
      </Stack>
    </CenterUpProductCard>
  );
}

function CenterUpScheduleCard() {
  return (
    <CenterUpProductCard minHeight={190}>
      <Typography sx={{ color: centerUpText, fontSize: 14, fontWeight: 850 }}>
        Lich day tuan nay
      </Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 0.6, mt: 1.5 }}>
        {["T2", "T3", "T4", "T5", "T6", "T7", "CN"].map((day, index) => (
          <Stack key={day} spacing={0.5} sx={{ alignItems: "center" }}>
            <Typography sx={{ color: "#9AA4B2", fontSize: 9 }}>{day}</Typography>
            <Box
              sx={{
                width: "100%",
                borderRadius: "8px",
                py: 0.9,
                textAlign: "center",
                color: index === 1 ? "#FFFFFF" : centerUpText,
                backgroundColor: index === 1 ? "#696CFF" : "#F5F7FA",
                fontSize: 12,
              }}
            >
              {index + 3}
            </Box>
          </Stack>
        ))}
      </Box>
      <Box sx={{ mt: 1.7, borderRadius: "10px", backgroundColor: "#E1E1FF", color: "#696CFF", p: 1.4, fontSize: 12 }}>
        18:00 - 19:30 - P.203<br />
        IELTS A2 - Speaking
      </Box>
    </CenterUpProductCard>
  );
}

function CenterUpLeaveCard() {
  return (
    <CenterUpProductCard minHeight={190}>
      <Typography sx={{ color: centerUpText, fontSize: 14, fontWeight: 850 }}>
        Don xin nghi cho duyet
      </Typography>
      <Stack spacing={1.2} sx={{ mt: 1.5 }}>
        {["Nguyen Minh Anh", "Tran Van Binh"].map((name, index) => (
          <Box
            key={name}
            sx={{
              borderRadius: "10px",
              border: "1px solid rgba(15, 23, 42, 0.06)",
              p: 1.2,
            }}
          >
            <Typography sx={{ color: centerUpText, fontSize: 12.5, fontWeight: 700 }}>
              {name}
            </Typography>
            <Typography sx={{ mt: 0.5, color: "#6B7A88", fontSize: 11.5 }}>
              {index === 0 ? "IELTS A2" : "TOEIC 650"}
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
              <Box sx={{ borderRadius: "5px", px: 1.3, py: 0.55, backgroundColor: "#22C55E", color: "#FFFFFF", fontSize: 11 }}>
                Duyet
              </Box>
              <Box sx={{ borderRadius: "5px", px: 1.3, py: 0.55, color: "#6B7A88", fontSize: 11 }}>
                Tu choi
              </Box>
            </Stack>
          </Box>
        ))}
      </Stack>
    </CenterUpProductCard>
  );
}

function CenterUpInfoRow({
  label,
  value,
  color = centerUpText,
  strong,
}: {
  label: string;
  value: string;
  color?: string;
  strong?: boolean;
}) {
  return (
    <Stack direction="row" sx={{ justifyContent: "space-between", gap: 2 }}>
      <Typography sx={{ color: "#8D98A6", fontSize: 12 }}>{label}</Typography>
      <Typography sx={{ color, fontSize: 12, fontWeight: strong ? 800 : 700 }}>
        {value}
      </Typography>
    </Stack>
  );
}

function CenterUpIconText({
  icon,
  text,
  color = "#6B7A88",
}: {
  icon: ReactNode;
  text: string;
  color?: string;
}) {
  return (
    <Stack direction="row" spacing={0.9} sx={{ alignItems: "center", color, minWidth: 0 }}>
      <Box sx={{ display: "grid", placeItems: "center", "& svg": { fontSize: 15 } }}>
        {icon}
      </Box>
      <Typography sx={{ color, fontSize: 12, lineHeight: 1.25, overflowWrap: "break-word" }}>
        {text}
      </Typography>
    </Stack>
  );
}

function CenterUpMetricLine({
  color,
  value,
  label,
}: {
  color: string;
  value: string;
  label: string;
}) {
  return (
    <Stack direction="row" spacing={1.3} sx={{ alignItems: "center" }}>
      <Box
        sx={{
          width: 34,
          height: 34,
          borderRadius: "10px",
          display: "grid",
          placeItems: "center",
          backgroundColor: alpha(color, 0.12),
          color,
        }}
      >
        <PersonOutlineRoundedIcon sx={{ fontSize: 17 }} />
      </Box>
      <Box>
        <Typography sx={{ color: centerUpText, fontSize: 20, fontWeight: 850, lineHeight: 1 }}>
          {value}
        </Typography>
        <Typography sx={{ mt: 0.4, color: "#8D98A6", fontSize: 11.5 }}>
          {label}
        </Typography>
      </Box>
    </Stack>
  );
}

function CenterUpVisualDesignSystemSection({
  caseStudy,
}: CaseStudyDetailProps) {
  const primarySwatches = caseStudy.designSystem.colors.slice(0, 4);
  const supportingSwatches = caseStudy.designSystem.colors.slice(4);

  return (
    <Box
      id="visual-design-system"
      component="section"
      sx={{ backgroundColor: "#FFFFFF", py: { xs: 6.8, md: 8.8 } }}
    >
      <Container maxWidth="xl" sx={{ maxWidth: "1280px" }}>
        <Stack spacing={{ xs: 5.5, md: 7.5 }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: "var(--font-serif)",
              color: centerUpText,
              fontSize: { xs: 40, sm: 54, md: 64 },
              lineHeight: 1,
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            Visual Design System
          </Typography>

          <Stack spacing={{ xs: 3.2, md: 4 }}>
            <Typography
              component="h3"
              sx={{
                color: centerUpText,
                fontSize: { xs: 28, md: 34 },
                lineHeight: 1.12,
                fontWeight: 850,
              }}
            >
              Color Palette
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, minmax(0, 1fr))",
                  md: "repeat(4, minmax(0, 1fr))",
                },
                gap: { xs: 2.4, md: 2.6 },
              }}
            >
              {primarySwatches.map((swatch) => (
                <CenterUpSwatchCard
                  key={`${swatch.name}-${swatch.value}`}
                  name={swatch.name}
                  value={swatch.value}
                  preview={swatch.previewValue ?? swatch.value}
                  size="large"
                />
              ))}
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(2, minmax(0, 1fr))",
                  sm: "repeat(3, minmax(0, 1fr))",
                  md: "repeat(6, minmax(0, 1fr))",
                },
                gap: { xs: 2.2, md: 2.4 },
              }}
            >
              {supportingSwatches.map((swatch) => (
                <CenterUpSwatchCard
                  key={`${swatch.name}-${swatch.value}`}
                  name={swatch.name}
                  value={swatch.value}
                  preview={swatch.previewValue ?? swatch.value}
                  size="small"
                />
              ))}
            </Box>
          </Stack>

          <Stack spacing={{ xs: 3.2, md: 4 }}>
            <Typography
              component="h3"
              sx={{
                color: centerUpText,
                fontSize: { xs: 28, md: 34 },
                lineHeight: 1.12,
                fontWeight: 850,
              }}
            >
              Typography
            </Typography>

            <Box
              sx={{
                borderRadius: { xs: "22px", md: "28px" },
                backgroundColor: centerUpLavender,
                p: { xs: 3, sm: 4, md: 4.8 },
              }}
            >
              <Box
                sx={{
                  height: "1px",
                  backgroundColor: "rgba(38, 48, 58, 0.08)",
                  mb: { xs: 2.4, md: 2.8 },
                }}
              />
              <Stack spacing={{ xs: 1.65, md: 1.8 }}>
                {caseStudy.designSystem.typography.map((item, index) => {
                  const [label, meta] = item.split("|");

                  return (
                    <Box key={item}>
                      <Typography
                        sx={{
                          color: centerUpText,
                          fontSize:
                            index === 0
                              ? { xs: 22, md: 24 }
                              : index === 1
                                ? { xs: 19, md: 21 }
                                : index === 2
                                  ? { xs: 16, md: 17 }
                                  : index === 3
                                    ? { xs: 15, md: 16 }
                                    : { xs: 13, md: 14 },
                          lineHeight: 1.18,
                          fontWeight: index < 2 ? 700 : index === 2 ? 650 : 400,
                        }}
                      >
                        {label}
                      </Typography>
                      <Typography
                        sx={{
                          mt: 0.45,
                          color: "#817A84",
                          fontSize: { xs: 12.5, md: 13.5 },
                          lineHeight: 1.25,
                        }}
                      >
                        {meta}
                      </Typography>
                    </Box>
                  );
                })}
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

type CenterUpSwatchCardProps = {
  name: string;
  value: string;
  preview: string;
  size: "large" | "small";
};

function CenterUpSwatchCard({
  name,
  value,
  preview,
  size,
}: CenterUpSwatchCardProps) {
  return (
    <Box>
      <Box
        sx={{
          height: size === "large" ? { xs: 92, md: 96 } : { xs: 66, md: 64 },
          borderRadius: size === "large" ? "14px" : "13px",
          background: preview,
          border:
            name === "Surface"
              ? "1px solid rgba(107, 122, 136, 0.22)"
              : "1px solid rgba(38, 48, 58, 0.04)",
        }}
      />
      <Typography
        sx={{
          mt: 1.25,
          color: centerUpText,
          fontSize: { xs: 14, md: 15 },
          lineHeight: 1.25,
          fontWeight: 500,
        }}
      >
        {name}
      </Typography>
      {size === "large" ? (
        <Typography
          sx={{
            mt: 0.9,
            color: "#94A0AD",
            fontSize: { xs: 12.5, md: 13 },
            lineHeight: 1.25,
          }}
        >
          {value}
        </Typography>
      ) : null}
    </Box>
  );
}

function CenterUpWireframeSection({ caseStudy }: CaseStudyDetailProps) {
  if (!caseStudy.wireframes) {
    return null;
  }

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: centerUpPage,
        py: { xs: 6.8, md: 8.8 },
      }}
    >
      <Container maxWidth="xl" sx={{ maxWidth: "1040px" }}>
        <Stack spacing={{ xs: 3.4, md: 4.8 }} sx={{ alignItems: "center" }}>
          <Stack spacing={1.8} sx={{ alignItems: "center", textAlign: "center" }}>
            <CenterUpSectionTitle title={caseStudy.wireframes.title} />
            <Typography
              sx={{
                maxWidth: 690,
                color: "#76747A",
                fontSize: { xs: 14.5, md: 15.5 },
                lineHeight: 1.55,
              }}
            >
              {caseStudy.wireframes.description}
            </Typography>
          </Stack>

          <Box
            role="img"
            aria-label={`${caseStudy.title} low fidelity wireframes`}
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, minmax(0, 1fr))",
                md: "1fr 1fr",
              },
              gap: { xs: 1.2, sm: 1.6, md: 2 },
              position: "relative",
            }}
          >
            <Typography
              aria-hidden="true"
              sx={{
                position: "absolute",
                left: { xs: 2, md: -10 },
                top: { xs: -16, md: -22 },
                color: centerUpAccent,
                fontSize: 8,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                transform: { md: "rotate(-90deg)" },
                transformOrigin: "left center",
              }}
            >
              Header
            </Typography>

            <Stack spacing={{ xs: 1.2, sm: 1.6, md: 1.8 }} sx={{ minWidth: 0 }}>
              <CenterUpWireHeader />
              <CenterUpWireHeroCard />
              <CenterUpWireIconStrip />
              <CenterUpWireSplitCard />
              <CenterUpWireFeatureCard />
            </Stack>

            <Stack spacing={{ xs: 1.2, sm: 1.6, md: 1.8 }} sx={{ minWidth: 0 }}>
              <CenterUpWirePricingCard />
              <CenterUpWireFaqCard />
              <CenterUpWireTestimonialsCard />
              <CenterUpWireFooterCard />
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

function CenterUpWireHeader() {
  return (
    <CenterUpWireCard height={28} sx={{ px: { xs: 0.7, sm: 1.1 }, py: 0.7 }}>
      <Stack direction="row" sx={{ alignItems: "center", height: "100%" }}>
        <CenterUpWireDot size={10} />
        <CenterUpWireLine width={28} sx={{ ml: 0.7 }} />
        <Stack
          direction="row"
          spacing={1.2}
          sx={{
            mx: "auto",
            alignItems: "center",
            display: { xs: "none", sm: "flex" },
          }}
        >
          {[42, 48, 44, 42].map((width, index) => (
            <CenterUpWireLine
              key={`header-nav-line-${index}`}
              width={width}
              height={5}
            />
          ))}
        </Stack>
        <CenterUpWirePill width={24} />
        <CenterUpWirePill
          width={34}
          active
          sx={{ ml: 0.5, display: { xs: "none", sm: "block" } }}
        />
      </Stack>
    </CenterUpWireCard>
  );
}

function CenterUpWireHeroCard() {
  return (
    <CenterUpWireCard height={{ xs: 218, sm: 250, md: 280 }} sx={{ p: { xs: 1.4, sm: 2.4, md: 3 } }}>
      <Stack sx={{ alignItems: "center", height: "100%" }}>
        <CenterUpWirePill width={62} active />
        <CenterUpWireLine width="68%" height={18} sx={{ mt: 2.1 }} />
        <CenterUpWireLine width="64%" height={15} sx={{ mt: 1 }} />
        <CenterUpWireLine width="58%" height={7} sx={{ mt: 1.4 }} />
        <CenterUpWireLine width="52%" height={7} sx={{ mt: 0.9 }} />
        <Stack direction="row" spacing={0.8} sx={{ width: "82%", mt: 2.2 }}>
          <CenterUpWirePill width="50%" active height={22} />
          <CenterUpWirePill width="50%" height={22} />
        </Stack>
        <Box
          sx={{
            width: "84%",
            mt: "auto",
            height: { xs: 70, sm: 88, md: 108 },
            borderRadius: "8px",
            backgroundColor: "#F4F5F7",
            border: "1px solid #DDE2E8",
          }}
        />
      </Stack>
    </CenterUpWireCard>
  );
}

function CenterUpWireIconStrip() {
  return (
    <CenterUpWireCard height={{ xs: 118, sm: 96 }} sx={{ p: { xs: 1.3, sm: 2, md: 2.4 } }}>
      <Stack sx={{ alignItems: "center" }}>
        <CenterUpWireLine width={118} height={14} />
        <CenterUpWireLine width="72%" height={6} sx={{ mt: 1.1 }} />
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(4, minmax(0, 1fr))",
              sm: "repeat(8, minmax(0, 1fr))",
            },
            gap: { xs: 0.6, sm: 1.1 },
            mt: 2,
          }}
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <Box
              key={index}
              sx={{
                width: "100%",
                height: { xs: 24, sm: 44 },
                borderRadius: "7px",
                display: "grid",
                placeItems: "center",
                backgroundColor: "#F8F9FB",
                border: "1px solid #DDE2E8",
              }}
            >
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "3px",
                  backgroundColor: "#E2E6EB",
                }}
              />
            </Box>
          ))}
        </Box>
      </Stack>
    </CenterUpWireCard>
  );
}

function CenterUpWireSplitCard() {
  return (
    <CenterUpWireCard height={{ xs: 300, sm: 180, md: 166 }} sx={{ p: 1.6 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "0.84fr 1.16fr" },
          gap: 2,
          height: "100%",
        }}
      >
        <Box
          sx={{
            borderRadius: "8px",
            backgroundColor: "#E9DEFF",
            p: 1.4,
          }}
        >
          <Stack direction="row" sx={{ justifyContent: "space-between" }}>
            <CenterUpWireLine width={52} />
            <Stack direction="row" spacing={0.5}>
              <CenterUpWireDot size={10} pale />
              <CenterUpWireDot size={10} pale />
            </Stack>
          </Stack>
          <Stack spacing={0.9} sx={{ mt: 1.4 }}>
            {Array.from({ length: 4 }).map((_, index) => (
              <Box
                key={index}
                sx={{
                  height: 20,
                  borderRadius: "5px",
                  backgroundColor: "#FFFFFF",
                }}
              />
            ))}
          </Stack>
        </Box>
        <Stack sx={{ justifyContent: "center" }}>
          <CenterUpWirePill width={62} active />
          <CenterUpWireLine width="76%" height={12} sx={{ mt: 1.8 }} />
          <CenterUpWireLine width="92%" sx={{ mt: 1 }} />
          <CenterUpWireLine width="86%" sx={{ mt: 0.8 }} />
          <Stack spacing={0.8} sx={{ mt: 1.4 }}>
            {Array.from({ length: 4 }).map((_, index) => (
              <Stack
                key={index}
                direction="row"
                spacing={0.8}
                sx={{ alignItems: "center" }}
              >
                <Typography sx={{ color: centerUpAccent, fontSize: 10 }}>
                  ✓
                </Typography>
                <CenterUpWireLine width={`${82 - index * 6}%`} />
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Box>
    </CenterUpWireCard>
  );
}

function CenterUpWireFeatureCard() {
  return (
    <CenterUpWireCard height={{ xs: 292, sm: 172, md: 166 }} sx={{ p: 1.6 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 0.98fr" },
          gap: 2,
          height: "100%",
        }}
      >
        <Stack sx={{ justifyContent: "center" }}>
          <CenterUpWirePill width={70} active />
          <CenterUpWireLine width="78%" height={11} sx={{ mt: 1.6 }} />
          <CenterUpWireLine width="92%" sx={{ mt: 1 }} />
          <Stack
            direction="row"
            sx={{ flexWrap: "wrap", gap: 0.8, mt: 1.8 }}
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <CenterUpWirePill key={index} width={86} height={22} />
            ))}
          </Stack>
        </Stack>
        <Box
          sx={{
            borderRadius: "8px",
            backgroundColor: "#DED1FF",
            border: "1px solid #D5C6FF",
          }}
        />
      </Box>
    </CenterUpWireCard>
  );
}

function CenterUpWirePricingCard() {
  return (
    <CenterUpWireCard height={{ xs: 220, md: 240 }} sx={{ p: { xs: 1.4, md: 1.7 } }}>
      <Stack sx={{ alignItems: "center" }}>
        <CenterUpWireLine width={86} height={10} />
        <CenterUpWireLine width={118} height={5} sx={{ mt: 0.8 }} />
      </Stack>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 1,
          mt: 1.8,
          height: "calc(100% - 28px)",
        }}
      >
        {[0, 1, 2].map((item) => (
          <Box
            key={item}
            sx={{
              p: 1.1,
              borderRadius: "8px",
              backgroundColor: item === 1 ? "#F4F0FF" : "#FFFFFF",
              border: `1px solid ${item === 1 ? "#C9B5FF" : "#DDE2E8"}`,
              boxShadow: item === 1 ? "0 6px 14px rgba(85, 70, 125, 0.14)" : "none",
            }}
          >
            <CenterUpWirePill width={item === 1 ? 42 : 36} active={item === 1} />
            <CenterUpWireLine width={item === 1 ? 42 : 36} height={12} sx={{ mt: 1.4 }} />
            <CenterUpWireLine width={item === 1 ? 30 : 44} sx={{ mt: 0.8 }} />
            <CenterUpWireLine width="92%" sx={{ mt: 1.4 }} />
            <Stack spacing={0.7} sx={{ mt: 1.1 }}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Stack
                  key={index}
                  direction="row"
                  spacing={0.45}
                  sx={{ alignItems: "center" }}
                >
                  <Typography sx={{ color: centerUpAccent, fontSize: 8 }}>
                    ✓
                  </Typography>
                  <CenterUpWireLine width={`${84 - index * 7}%`} height={4} />
                </Stack>
              ))}
            </Stack>
            <CenterUpWirePill
              width="100%"
              height={20}
              active={item === 1}
              sx={{ mt: 1.2 }}
            />
          </Box>
        ))}
      </Box>
    </CenterUpWireCard>
  );
}

function CenterUpWireFaqCard() {
  return (
    <CenterUpWireCard height={{ xs: 238, sm: 182, md: 188 }} sx={{ p: { xs: 1.2, sm: 1.6 } }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "0.92fr 1.08fr" },
          gap: 2,
        }}
      >
        <Box>
          <CenterUpWireLine width={92} height={9} />
          <CenterUpWireLine width="84%" sx={{ mt: 0.9 }} />
          <CenterUpWirePill width={62} active height={20} sx={{ mt: 1.2 }} />
        </Box>
        <Stack spacing={0.8}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Box
              key={index}
              sx={{
                height: 25,
                borderRadius: "7px",
                border: `1px solid ${index === 0 ? "#CBB9FF" : "#DDE2E8"}`,
                backgroundColor: index === 0 ? "#F6F1FF" : "#FFFFFF",
                px: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <CenterUpWireLine width={`${72 - index * 4}%`} />
              <Typography sx={{ color: "#B7BEC8", fontSize: 10 }}>›</Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </CenterUpWireCard>
  );
}

function CenterUpWireTestimonialsCard() {
  return (
    <CenterUpWireCard
      height={{ xs: 168, md: 138 }}
      sx={{
        p: { xs: 2, md: 2.2 },
        background: "linear-gradient(135deg, #EEE6FF, #DDD0FF)",
      }}
    >
      <Stack sx={{ alignItems: "center" }}>
        <CenterUpWireLine width={82} height={10} color="#C9C1D6" />
        <CenterUpWireLine width={112} height={5} color="#F4EEFF" sx={{ mt: 0.8 }} />
      </Stack>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 1.2,
          mt: 2,
        }}
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <Box
            key={index}
            sx={{
              minHeight: 72,
              borderRadius: "8px",
              backgroundColor: "#FFFFFF",
              p: 1,
            }}
          >
            <Stack direction="row" spacing={0.8} sx={{ alignItems: "center" }}>
              <CenterUpWireDot size={20} color="#DDE2E8" />
              <Box sx={{ flex: 1 }}>
                <CenterUpWireLine width="62%" />
                <CenterUpWireLine width="48%" sx={{ mt: 0.6 }} />
              </Box>
            </Stack>
            <CenterUpWireLine width="78%" sx={{ mt: 1.1 }} />
            <CenterUpWireLine width="62%" sx={{ mt: 0.6 }} />
            <CenterUpWireLine width="44%" height={4} color="#D6DDE6" sx={{ mt: 0.9 }} />
          </Box>
        ))}
      </Box>
    </CenterUpWireCard>
  );
}

function CenterUpWireFooterCard() {
  return (
    <CenterUpWireCard height={{ xs: 186, sm: 112, md: 106 }} sx={{ p: { xs: 1.2, sm: 1.6 } }}>
      <Stack direction="row" spacing={0.8} sx={{ alignItems: "center" }}>
        <CenterUpWireDot size={15} />
        <CenterUpWireLine width={48} />
        <Stack
          direction="row"
          spacing={{ xs: 2.2, md: 3.6 }}
          sx={{ ml: "auto", display: { xs: "none", sm: "flex" } }}
        >
          {[42, 48, 44].map((width, index) => (
            <CenterUpWireLine
              key={`footer-nav-line-${index}`}
              width={width}
            />
          ))}
        </Stack>
      </Stack>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1.3fr repeat(3, 0.75fr)" },
          gap: 1.8,
          mt: 1.2,
        }}
      >
        <Box>
          <CenterUpWireLine width="90%" />
          <Stack direction="row" spacing={0.7} sx={{ mt: 1 }}>
            {Array.from({ length: 4 }).map((_, index) => (
              <CenterUpWirePill key={index} width={14} height={14} />
            ))}
          </Stack>
        </Box>
        {[0, 1, 2].map((item) => (
          <Stack key={item} spacing={0.55}>
            <CenterUpWireLine width={42} height={5} />
            <CenterUpWireLine width={34} />
            <CenterUpWireLine width={38} />
            <CenterUpWireLine width={30} />
          </Stack>
        ))}
      </Box>
      <Stack direction="row" spacing={1.2} sx={{ justifyContent: "flex-end", mt: 1 }}>
        <CenterUpWireLine width={34} />
        <CenterUpWireLine width={34} />
        <CenterUpWireLine width={34} />
      </Stack>
    </CenterUpWireCard>
  );
}

type CenterUpWireCardProps = {
  height: number | string | object;
  sx?: object;
  children: ReactNode;
};

function CenterUpWireCard({ height, sx, children }: CenterUpWireCardProps) {
  return (
    <Box
      sx={{
        height,
        borderRadius: "8px",
        backgroundColor: "#FFFFFF",
        border: "1px solid #DDE2E8",
        overflow: "hidden",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

type CenterUpWireLineProps = {
  width: number | string;
  height?: number;
  color?: string;
  sx?: object;
};

function CenterUpWireLine({
  width,
  height = 6,
  color = "#D4DAE2",
  sx,
}: CenterUpWireLineProps) {
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

type CenterUpWirePillProps = {
  width: number | string;
  height?: number;
  active?: boolean;
  sx?: object;
};

function CenterUpWirePill({
  width,
  height = 14,
  active = false,
  sx,
}: CenterUpWirePillProps) {
  return (
    <Box
      sx={{
        width,
        height,
        borderRadius: "6px",
        backgroundColor: active ? "#E6D9FF" : "#FFFFFF",
        border: `1px solid ${active ? "#CBB9FF" : "#DDE2E8"}`,
        ...sx,
      }}
    />
  );
}

type CenterUpWireDotProps = {
  size: number;
  color?: string;
  pale?: boolean;
};

function CenterUpWireDot({
  size,
  color,
  pale = false,
}: CenterUpWireDotProps) {
  return (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: size > 12 ? "50%" : "4px",
        backgroundColor: color ?? (pale ? "#F5EFFF" : "#E7D9FF"),
        border: "1px solid #D7C6FF",
        flexShrink: 0,
      }}
    />
  );
}

const slaymeTypeScale = [
  { name: "Display Large", meta: "H1 / 32px / Medium" },
  { name: "Headline Medium", meta: "H2 / 24px / Medium" },
  { name: "Title Medium", meta: "H3 / 18px / Medium" },
  { name: "Body Large", meta: "P1 / 16px / Regular" },
  { name: "Body Medium", meta: "P2 / 14px / Regular" },
  { name: "Label Medium", meta: "P3 / 12px / Medium" },
];

function SlaymeTypographySection() {
  const icons = [
    <SearchRoundedIcon key="search" />,
    <CalendarTodayRoundedIcon key="calendar" />,
    <FavoriteBorderRoundedIcon key="heart-outline" />,
    <StarBorderRoundedIcon key="star-outline" />,
    <PersonOutlineRoundedIcon key="person" />,
    <LocationOnOutlinedIcon key="location" />,
    <AccessTimeRoundedIcon key="time" />,
    <FavoriteBorderRoundedIcon key="heart-filled" sx={{ fill: "currentColor" }} />,
    <CheckRoundedIcon key="check" />,
    <KeyboardArrowRightRoundedIcon key="arrow" />,
  ];

  return (
    <Stack spacing={{ xs: 2.6, md: 4 }}>
      <Stack spacing={1.6}>
        <Typography
          component="h3"
          sx={{
            color: slaymeText,
            fontSize: { xs: 28, md: 34 },
            lineHeight: 1.15,
            fontWeight: 850,
          }}
        >
          Typography
        </Typography>
        <Typography
          sx={{
            color: slaymeMuted,
            fontSize: { xs: 16, md: 22 },
            lineHeight: 1.55,
          }}
        >
          Elegant headings create a premium feeling, while clean body text keeps
          the mobile experience readable and user-friendly.
        </Typography>
      </Stack>

      <Box
        sx={{
          p: { xs: 2.4, md: 4.4 },
          borderRadius: { xs: "20px", md: "28px" },
          backgroundColor: "#FBF6FF",
        }}
      >
        <Typography sx={{ color: slaymeMuted, fontSize: { xs: 14, md: 18 } }}>
          Heading Font: Playfair Display
        </Typography>
        <Typography
          sx={{
            mt: 1.6,
            color: slaymeText,
            fontFamily: "var(--font-serif)",
            fontSize: { xs: 36, sm: 44, md: 54 },
            lineHeight: 1,
            fontWeight: 500,
          }}
        >
          Book your beauty moment.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 0.4fr" },
          gap: { xs: 2, md: 4 },
        }}
      >
        <Box
          sx={{
            p: { xs: 2.4, md: 4.4 },
            borderRadius: { xs: "20px", md: "28px" },
            backgroundColor: "#FBF6FF",
          }}
        >
          <Box
            sx={{
              height: "1px",
              backgroundColor: "rgba(43, 43, 43, 0.06)",
              mb: 1.8,
            }}
          />
          <Stack spacing={{ xs: 1.8, md: 2.1 }}>
            {slaymeTypeScale.map((item) => (
              <Box key={item.name}>
                <Typography
                  sx={{
                    color: slaymeText,
                    fontSize:
                      item.name === "Display Large"
                        ? { xs: 23, md: 28 }
                        : item.name === "Headline Medium"
                          ? { xs: 20, md: 24 }
                          : item.name === "Title Medium"
                            ? { xs: 18, md: 21 }
                            : { xs: 16, md: 18 },
                    lineHeight: 1.2,
                    fontWeight: 500,
                  }}
                >
                  {item.name}
                </Typography>
                <Typography sx={{ color: slaymeMuted, fontSize: { xs: 13, md: 16 } }}>
                  {item.meta}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        <Box
          sx={{
            p: { xs: 2.4, md: 4.2 },
            borderRadius: { xs: "20px", md: "28px" },
            backgroundColor: "#FBF6FF",
          }}
        >
          <Typography
            sx={{
              color: slaymeMuted,
              fontSize: { xs: 13, md: 16 },
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            Icon Style
          </Typography>
          <Box
            sx={{
              mt: { xs: 3, md: 3.8 },
              display: "grid",
              gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
              rowGap: { xs: 2.2, md: 3 },
              columnGap: { xs: 1.2, md: 2.4 },
              color: slaymeText,
              "& svg": {
                mx: "auto",
                fontSize: { xs: 24, md: 28 },
                strokeWidth: 1.7,
              },
            }}
          >
            {icons}
          </Box>
        </Box>
      </Box>
    </Stack>
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
          gridTemplateColumns: {
            xs: "repeat(2, minmax(0, 1fr))",
            md: "0.94fr 1fr 1fr",
          },
          gridAutoRows: { md: "minmax(280px, auto)" },
          gap: { xs: 1.4, sm: 2, md: 2.4 },
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
        minHeight: { xs: 178, sm: 220, md: "auto" },
        p: { xs: 1.2, sm: 1.8, md: 3 },
        borderRadius: { xs: "16px", md: "28px" },
        backgroundColor: "#FFFFFF",
        border: `1.5px solid ${alpha(accent, 0.62)}`,
        boxShadow: {
          xs: `0 10px 22px ${alpha(accent, 0.06)}`,
          md: `0 14px 30px ${alpha(accent, 0.07)}`,
        },
        gridColumn: { md: item.layout === "wide" ? "span 2" : "auto" },
        gridRow: { md: item.layout === "tall" ? "span 2" : "auto" },
        overflow: "hidden",
      }}
    >
      <Typography
        sx={{
          color: "text.secondary",
          fontSize: { xs: 12, sm: 14, md: 18 },
          fontWeight: 500,
          mb: { xs: 1, md: 2.2 },
          lineHeight: 1.25,
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {item.title}
      </Typography>
      <Box
        sx={{
          height: { xs: 128, sm: 158, md: "auto" },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: { xs: "190%", sm: "142%", md: "100%" },
            transform: {
              xs: "scale(0.526)",
              sm: "scale(0.704)",
              md: "none",
            },
            transformOrigin: "top left",
          }}
        >
          <ComponentPreview item={item} accent={accent} />
        </Box>
      </Box>
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
              fontSize: { xs: 38, sm: 46, md: 58 },
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
              xs: "repeat(2, minmax(0, 1fr))",
              sm: "repeat(3, minmax(0, 1fr))",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 1.4, sm: 2.2, md: 3.4 },
            mt: { xs: 4, md: 8 },
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
        p: { xs: 1.1, sm: 1.8, md: 3 },
        borderRadius: { xs: "16px", md: "24px" },
        backgroundColor: "#FFFFFF",
        border: "1px solid rgba(15, 23, 42, 0.06)",
        boxShadow: {
          xs: "0 10px 24px rgba(15, 23, 42, 0.07)",
          md: "0 14px 34px rgba(15, 23, 42, 0.08)",
        },
      }}
    >
      <WireframePhone title={title} accent={accent} />
      <Typography
        sx={{
          mt: { xs: 1, md: 2.1 },
          color: "text.secondary",
          fontSize: { xs: 11.5, sm: 13, md: 14 },
          fontWeight: 500,
          lineHeight: 1.25,
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
        position: "relative",
        borderRadius: { xs: "12px", md: "18px" },
        border: "1.5px solid #DCE2EA",
        backgroundColor: "#FAFBFC",
        boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.7)",
        overflow: "hidden",
        p: 0,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: { xs: 7, sm: 10, md: 16 },
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: { xs: "190%", sm: "142%", md: "100%" },
            height: { xs: "190%", sm: "142%", md: "100%" },
            transform: {
              xs: "scale(0.526)",
              sm: "scale(0.704)",
              md: "none",
            },
            transformOrigin: "top left",
          }}
        >
          <WireframeScreen title={title} accent={accent} />
        </Box>
      </Box>
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
  if (caseStudy.slug === "centerup-management") {
    return <CenterUpManagementKeyScreensSection caseStudy={caseStudy} />;
  }

  if (caseStudy.slug === "centerup-landing") {
    return <CenterUpKeyScreensSection caseStudy={caseStudy} />;
  }

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
              xs: isPhoneMockup
                ? "repeat(2, minmax(0, 1fr))"
                : "1fr",
              sm: isPhoneMockup
                ? "repeat(3, minmax(0, 1fr))"
                : "repeat(2, minmax(0, 1fr))",
              md: isPhoneMockup
                ? "repeat(3, minmax(0, 1fr))"
                : "repeat(2, minmax(0, 1fr))",
            },
            gap: { xs: isPhoneMockup ? 1.4 : 2.2, sm: 2.2, md: 3 },
            mt: { xs: 3, md: 4 },
          }}
        >
          {caseStudy.screens.map((screen) => (
            <Box
              key={screen.title}
              sx={{
                p: { xs: isPhoneMockup ? 1.1 : 2, sm: 1.8, md: 2.4 },
                borderRadius: { xs: isPhoneMockup ? "16px" : "18px", md: "18px" },
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(15, 23, 42, 0.07)",
                boxShadow: {
                  xs: "0 10px 24px rgba(42, 28, 74, 0.07)",
                  md: "0 16px 40px rgba(42, 28, 74, 0.08)",
                },
              }}
            >
              <Box
                sx={{
                  aspectRatio: isPhoneMockup ? "301 / 610" : "16 / 11",
                  height: "auto",
                  borderRadius: { xs: isPhoneMockup ? "12px" : "14px", md: "14px" },
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: "#F8F7FA",
                  border: "1px solid rgba(15, 23, 42, 0.06)",
                  overflow: "hidden",
                  p: { xs: isPhoneMockup ? 0.55 : 1, sm: 0.85, md: 1.2 },
                }}
              >
                {screen.image ? (
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
                ) : (
                  <ScreenImagePlaceholder
                    accent={caseStudy.accent}
                    isPhoneMockup={isPhoneMockup}
                  />
                )}
              </Box>
              <Typography
                sx={{
                  mt: { xs: isPhoneMockup ? 1 : 1.8, md: 1.8 },
                  fontSize: { xs: isPhoneMockup ? 12 : 16, sm: 14, md: 16 },
                  lineHeight: 1.25,
                  fontWeight: 850,
                  textAlign: { xs: isPhoneMockup ? "center" : "left", sm: "left" },
                }}
              >
                {screen.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  display: { xs: isPhoneMockup ? "none" : "block", sm: "block" },
                  fontSize: { sm: 13, md: 14 },
                }}
              >
                {screen.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

type ScreenImagePlaceholderProps = {
  accent: string;
  isPhoneMockup: boolean;
};

function ScreenImagePlaceholder({
  accent,
  isPhoneMockup,
}: ScreenImagePlaceholderProps) {
  return (
    <Box
      aria-hidden="true"
      sx={{
        width: "100%",
        height: "100%",
        minHeight: isPhoneMockup ? { xs: 220, md: 310 } : { xs: 180, md: 240 },
        borderRadius: isPhoneMockup ? "10px" : "12px",
        backgroundColor: "#FFFFFF",
        border: "1px dashed rgba(15, 23, 42, 0.12)",
        p: isPhoneMockup ? { xs: 1.2, md: 1.8 } : { xs: 1.7, md: 2.2 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Stack spacing={1.1}>
        <WireLine width="42%" height={10} color="#D4DAE2" />
        <WireLine width="68%" color="#E2E6EC" />
      </Stack>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: isPhoneMockup
            ? "1fr"
            : "repeat(2, minmax(0, 1fr))",
          gap: 1,
        }}
      >
        {Array.from({ length: isPhoneMockup ? 4 : 6 }).map((_, index) => (
          <Box
            key={index}
            sx={{
              minHeight: isPhoneMockup ? 34 : 46,
              borderRadius: "8px",
              border: "1px solid rgba(15, 23, 42, 0.08)",
              backgroundColor: index === 0 ? alpha(accent, 0.08) : "#FAFBFC",
              p: 1,
            }}
          >
            <WireLine width={`${72 - index * 4}%`} color="#D8DEE6" />
            <WireLine width="58%" color="#E4E8EE" sx={{ mt: 0.7 }} />
          </Box>
        ))}
      </Box>

      <WireLine width="54%" height={8} color={alpha(accent, 0.22)} />
    </Box>
  );
}

function CenterUpManagementKeyScreensSection({
  caseStudy,
}: CaseStudyDetailProps) {
  return (
    <Box
      component="section"
      sx={{ py: { xs: 6.8, md: 8.8 }, backgroundColor: centerUpPage }}
    >
      <Container maxWidth="xl" sx={{ maxWidth: "1320px" }}>
        <Stack spacing={{ xs: 4.2, md: 5.2 }} sx={{ alignItems: "center" }}>
          <CenterUpSectionTitle title="Key Screens" />

          <Box
            sx={{
              width: "100%",
              backgroundColor: "#FCF6FF",
              px: { xs: 2.4, sm: 4, md: 5.4 },
              py: { xs: 3.2, sm: 4.6, md: 6.2 },
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
                columnGap: { md: 5.2 },
                rowGap: { xs: 4.2, md: 5.4 },
                alignItems: "start",
              }}
            >
              {caseStudy.screens.map((screen) => (
                <CenterUpManagementScreenCard
                  key={screen.title}
                  screen={screen}
                />
              ))}
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

function CenterUpManagementScreenCard({
  screen,
}: {
  screen: CaseStudy["screens"][number];
}) {
  return (
    <Stack spacing={{ xs: 2.2, md: 2.5 }}>
      {screen.image ? (
        <Box
          component="img"
          src={screen.image}
          alt={`${caseStudyTitleForAlt(screen.title)} screen`}
          sx={{
            display: "block",
            width: "100%",
            height: "auto",
          }}
        />
      ) : (
        <CenterUpManagementBrowserFrame screen={screen} />
      )}

      <Stack
        spacing={0.85}
        sx={{ px: screen.image ? "4.5%" : 0 }}
      >
        <Typography
          component="h3"
          sx={{
            color: centerUpText,
            fontSize: { xs: 19, md: 21 },
            lineHeight: 1.25,
            fontWeight: 700,
          }}
        >
          {screen.title}
        </Typography>
        <Typography
          sx={{
            color: centerUpMuted,
            fontSize: { xs: 15, md: 16 },
            lineHeight: 1.55,
            maxWidth: 540,
          }}
        >
          {screen.description}
        </Typography>
      </Stack>
    </Stack>
  );
}

function CenterUpManagementBrowserFrame({
  screen,
}: {
  screen: CaseStudy["screens"][number];
}) {
  return (
    <Box
      sx={{
        borderRadius: { xs: "16px", md: "20px" },
        overflow: "hidden",
        backgroundColor: "#F8FAFC",
        border: "1px solid rgba(88, 112, 139, 0.14)",
        boxShadow: {
          xs: "0 16px 32px rgba(38, 48, 58, 0.12)",
          md: "0 24px 48px rgba(38, 48, 58, 0.14)",
        },
      }}
    >
      <Stack
        direction="row"
        spacing={{ xs: 0.8, md: 1 }}
        sx={{
          minHeight: { xs: 34, md: 42 },
          alignItems: "center",
          px: { xs: 1.5, md: 2 },
          backgroundColor: "#F8FAFC",
          borderBottom: "1px solid rgba(88, 112, 139, 0.1)",
        }}
      >
        {["#FF5F57", "#FFBD2E", "#28C840"].map((color) => (
          <Box
            key={color}
            sx={{
              width: { xs: 8, md: 11 },
              height: { xs: 8, md: 11 },
              borderRadius: "50%",
              backgroundColor: color,
              flexShrink: 0,
            }}
          />
        ))}
        <Box
          sx={{
            ml: { xs: 1, md: 1.8 },
            height: { xs: 22, md: 25 },
            flex: 1,
            maxWidth: { xs: "none", md: 420 },
            borderRadius: 999,
            backgroundColor: "#FFFFFF",
            color: "#6F849D",
            fontSize: { xs: 10.5, md: 12 },
            lineHeight: { xs: "22px", md: "25px" },
            px: { xs: 1.3, md: 1.7 },
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          centerup.app/dashboard
        </Box>
      </Stack>

      <Box
        sx={{
          aspectRatio: { xs: "16 / 10.4", sm: "16 / 9.2", md: "16 / 8.7" },
          backgroundColor: "#FFFFFF",
          overflow: "hidden",
        }}
      >
        <CenterUpManagementScreenPlaceholder title={screen.title} />
      </Box>
    </Box>
  );
}

function CenterUpManagementScreenPlaceholder({ title }: { title: string }) {
  const normalizedTitle = title.toLowerCase();
  const isDetail = normalizedTitle.includes("detail");
  const isDashboard = normalizedTitle.includes("dashboard");
  const isPipeline = normalizedTitle.includes("pipeline");
  const isCallLog = normalizedTitle.includes("call");

  return (
    <Box
      sx={{
        height: "100%",
        display: "grid",
        gridTemplateColumns: { xs: "64px 1fr", sm: "82px 1fr", md: "94px 1fr" },
        backgroundColor: "#FFFFFF",
      }}
    >
      <Stack
        spacing={1}
        sx={{
          minWidth: 0,
          backgroundColor: "#F7F8FC",
          borderRight: "1px solid #E5EAF1",
          p: { xs: 1, md: 1.25 },
        }}
      >
        <CenterUpWireDot size={18} color="#EEE7FF" />
        {Array.from({ length: 6 }).map((_, index) => (
          <CenterUpWirePill
            key={index}
            width={index === 2 ? "88%" : "72%"}
            height={index === 2 ? 12 : 8}
            active={index === 2}
          />
        ))}
      </Stack>

      <Box sx={{ minWidth: 0, p: { xs: 1.2, sm: 1.5, md: 1.8 } }}>
        <Stack spacing={{ xs: 1.1, md: 1.35 }} sx={{ height: "100%" }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <CenterUpWireLine width="24%" height={8} color="#C7D0DB" />
            <CenterUpWireLine width="18%" height={8} color="#E0E5EC" />
            <CenterUpWirePill width={64} height={15} active sx={{ ml: "auto" }} />
          </Stack>

          {isDashboard ? (
            <CenterUpDashboardPlaceholder />
          ) : isPipeline ? (
            <CenterUpPipelinePlaceholder />
          ) : isDetail ? (
            <CenterUpDetailPlaceholder />
          ) : (
            <CenterUpTablePlaceholder compact={isCallLog} />
          )}
        </Stack>
      </Box>
    </Box>
  );
}

function CenterUpTablePlaceholder({ compact }: { compact: boolean }) {
  return (
    <>
      <Stack direction="row" spacing={0.9} sx={{ alignItems: "center" }}>
        <CenterUpWirePill width="20%" height={18} />
        <CenterUpWirePill width="22%" height={18} />
        <CenterUpWirePill width="36%" height={18} />
      </Stack>

      <Box
        sx={{
          border: "1px solid #E2E7EE",
          borderRadius: "8px",
          overflow: "hidden",
          backgroundColor: "#FFFFFF",
        }}
      >
        {Array.from({ length: compact ? 5 : 6 }).map((_, rowIndex) => (
          <Box
            key={rowIndex}
            sx={{
              display: "grid",
              gridTemplateColumns: "0.45fr 1.2fr 1fr 0.9fr 0.55fr",
              gap: { xs: 0.65, md: 1 },
              alignItems: "center",
              px: { xs: 0.8, md: 1.1 },
              py: { xs: 0.65, md: 0.85 },
              backgroundColor: rowIndex === 0 ? "#F8FAFC" : "#FFFFFF",
              borderTop: rowIndex === 0 ? "none" : "1px solid #EEF2F6",
            }}
          >
            {Array.from({ length: 5 }).map((_, colIndex) => (
              <CenterUpWireLine
                key={colIndex}
                width={colIndex === 1 ? "88%" : "70%"}
                height={rowIndex === 0 ? 5 : 6}
                color={rowIndex === 0 ? "#D5DCE6" : "#E1E7EE"}
              />
            ))}
          </Box>
        ))}
      </Box>
    </>
  );
}

function CenterUpDetailPlaceholder() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 132px" },
        gap: 1,
        minHeight: 0,
        flex: 1,
      }}
    >
      <Box
        sx={{
          border: "1px solid #E2E7EE",
          borderRadius: "8px",
          backgroundColor: "#FFFFFF",
          p: { xs: 1, md: 1.25 },
        }}
      >
        <Stack spacing={1}>
          <CenterUpWireLine width="36%" height={8} color="#C7D0DB" />
          <CenterUpWireCard
            height={{ xs: 54, md: 70 }}
            sx={{ display: "grid", placeItems: "center", backgroundColor: "#F8FAFC" }}
          >
            <CenterUpWireDot size={24} color="#DDE5EF" pale />
          </CenterUpWireCard>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 0.8,
            }}
          >
            {Array.from({ length: 6 }).map((_, index) => (
              <CenterUpWirePill key={index} width="100%" height={18} />
            ))}
          </Box>
        </Stack>
      </Box>

      <Stack
        spacing={0.8}
        sx={{
          display: { xs: "none", sm: "flex" },
          border: "1px solid #E2E7EE",
          borderRadius: "8px",
          backgroundColor: "#FFFFFF",
          p: 1,
        }}
      >
        <CenterUpWireLine width="56%" height={8} color="#C7D0DB" />
        {Array.from({ length: 4 }).map((_, index) => (
          <CenterUpWireCard key={index} height={34} sx={{ p: 0.75 }}>
            <CenterUpWireLine width="72%" height={5} />
            <CenterUpWireLine width="48%" height={5} sx={{ mt: 0.55 }} />
          </CenterUpWireCard>
        ))}
      </Stack>
    </Box>
  );
}

function CenterUpDashboardPlaceholder() {
  return (
    <Box
      sx={{
        border: "1px solid #E2E7EE",
        borderRadius: "8px",
        backgroundColor: "#FFFFFF",
        p: { xs: 1, md: 1.25 },
        flex: 1,
      }}
    >
      <Stack spacing={0.9}>
        {[
          { width: "26%", color: "#9CA8B6" },
          { width: "58%", color: "#19B8C9" },
          { width: "42%", color: "#22C55E" },
          { width: "78%", color: "#12B6CB" },
          { width: "50%", color: "#22C55E" },
        ].map((bar, index) => (
          <Stack
            key={`${bar.width}-${index}`}
            direction="row"
            spacing={1}
            sx={{ alignItems: "center" }}
          >
            <CenterUpWireLine width="19%" height={5} color="#D5DCE6" />
            <Box
              sx={{
                width: bar.width,
                height: { xs: 8, md: 10 },
                borderRadius: 999,
                backgroundColor: bar.color,
              }}
            />
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}

function CenterUpPipelinePlaceholder() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(3, minmax(78px, 1fr))",
          sm: "repeat(5, minmax(0, 1fr))",
        },
        gap: 0.9,
        overflow: "hidden",
      }}
    >
      {["#111827", "#FFAB00", "#12B6CB", "#22C55E", "#696CFF"].map(
        (color, index) => (
          <Stack
            key={color}
            spacing={0.75}
            sx={{
              minHeight: { xs: 112, md: 138 },
              borderRadius: "8px",
              border: "1px solid #E2E7EE",
              backgroundColor: "#FFFFFF",
              p: 0.8,
              borderTop: `3px solid ${color}`,
            }}
          >
            <CenterUpWirePill width="64%" height={12} active={index === 2} />
            {Array.from({ length: index === 2 ? 3 : 2 }).map((_, cardIndex) => (
              <CenterUpWireCard key={cardIndex} height={28} sx={{ p: 0.6 }}>
                <CenterUpWireLine width="76%" height={5} />
                <CenterUpWireLine width="52%" height={5} sx={{ mt: 0.45 }} />
              </CenterUpWireCard>
            ))}
          </Stack>
        ),
      )}
    </Box>
  );
}

function CenterUpKeyScreensSection({ caseStudy }: CaseStudyDetailProps) {
  const [primary, secondary, compactOne, compactTwo] = caseStudy.screens;

  return (
    <Box
      component="section"
      sx={{ py: { xs: 6.8, md: 8.8 }, backgroundColor: centerUpPage }}
    >
      <Container maxWidth="xl" sx={{ maxWidth: "980px" }}>
        <CenterUpSectionTitle title="Key Screens" />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 4, md: 5 },
            mt: { xs: 4, md: 5 },
            alignItems: "start",
          }}
        >
          {primary ? (
            <CenterUpScreenBrowserFrame screen={primary} variant="tall" />
          ) : null}

          <Stack spacing={{ xs: 4, md: 5 }}>
            {secondary ? (
              <CenterUpScreenBrowserFrame screen={secondary} variant="tall" />
            ) : null}
            {compactOne ? (
              <CenterUpScreenBrowserFrame screen={compactOne} variant="compact" />
            ) : null}
            {compactTwo ? (
              <CenterUpScreenBrowserFrame screen={compactTwo} variant="compact" />
            ) : null}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

type CenterUpScreenBrowserFrameProps = {
  screen: CaseStudy["screens"][number];
  variant: "tall" | "compact";
};

function CenterUpScreenBrowserFrame({
  screen,
  variant,
}: CenterUpScreenBrowserFrameProps) {
  return (
    <Box
      sx={{
        borderRadius: "8px",
        backgroundColor: "#FFFFFF",
        border: "1px solid rgba(107, 122, 136, 0.12)",
        boxShadow: "0 18px 36px rgba(38, 48, 58, 0.12)",
        overflow: "hidden",
      }}
    >
      <Stack
        direction="row"
        spacing={0.6}
        sx={{
          minHeight: 26,
          alignItems: "center",
          px: 1.2,
          borderBottom: "1px solid rgba(107, 122, 136, 0.08)",
          backgroundColor: "#FFFFFF",
        }}
      >
        {["#FF5F57", "#FFBD2E", "#28C840"].map((color) => (
          <Box
            key={color}
            sx={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: color }}
          />
        ))}
        <Box
          sx={{
            ml: 1,
            px: 1.2,
            py: 0.25,
            borderRadius: 999,
            backgroundColor: "#F4F6F8",
            color: "#8A95A3",
            fontSize: 8.5,
            lineHeight: 1.4,
            minWidth: 116,
          }}
        >
          {screen.description}
        </Box>
      </Stack>

      <Box
        sx={{
          minHeight:
            variant === "tall"
              ? { xs: 560, sm: 720, md: 850 }
              : { xs: 220, sm: 250, md: 250 },
          backgroundColor: "#FFFFFF",
          overflow: "hidden",
        }}
      >
        {screen.image ? (
          <Box
            component="img"
            src={screen.image}
            alt={`${caseStudyTitleForAlt(screen.title)} screen`}
            sx={{
              display: "block",
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        ) : (
          <CenterUpScreenPlaceholder variant={variant} />
        )}
      </Box>
    </Box>
  );
}

function caseStudyTitleForAlt(title: string) {
  return `CenterUp ${title}`;
}

function CenterUpScreenPlaceholder({ variant }: { variant: "tall" | "compact" }) {
  if (variant === "compact") {
    return (
      <Box sx={{ p: { xs: 2.2, md: 2.6 } }}>
        <Stack spacing={1.2}>
          <CenterUpWireLine width="32%" height={10} color="#D7DDE5" />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
              gap: 1.2,
            }}
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <Box
                key={index}
                sx={{
                  minHeight: 64,
                  p: 1.4,
                  borderRadius: "7px",
                  border: "1px solid #E0E5EB",
                  backgroundColor: "#FAFBFC",
                }}
              >
                <CenterUpWireLine width={`${72 - index * 5}%`} />
                <CenterUpWireLine width="88%" sx={{ mt: 0.9 }} />
                <CenterUpWireLine width="62%" sx={{ mt: 0.7 }} />
              </Box>
            ))}
          </Box>
          <CenterUpWirePill width={92} height={18} active sx={{ ml: "auto" }} />
        </Stack>
      </Box>
    );
  }

  return (
    <Box sx={{ p: { xs: 2.2, md: 2.8 } }}>
      <Stack spacing={{ xs: 3.2, md: 4.2 }}>
        <Stack sx={{ alignItems: "center" }}>
          <CenterUpWireLine width="48%" height={16} color="#D2D8E0" />
          <CenterUpWireLine width="62%" sx={{ mt: 1.2 }} />
          <CenterUpWirePill width={92} height={20} active sx={{ mt: 1.6 }} />
        </Stack>

        <Box
          sx={{
            minHeight: 152,
            borderRadius: "8px",
            background:
              "linear-gradient(135deg, rgba(156,107,255,0.18), rgba(75,195,247,0.12))",
            border: "1px solid #E0E5EB",
          }}
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 1.4,
          }}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <Box
              key={index}
              sx={{
                minHeight: 120,
                borderRadius: "8px",
                border: "1px solid #E0E5EB",
                p: 1.4,
              }}
            >
              <CenterUpWirePill width={42} active={index === 1} />
              <CenterUpWireLine width="72%" height={10} sx={{ mt: 1.4 }} />
              <CenterUpWireLine width="92%" sx={{ mt: 1.2 }} />
              <CenterUpWireLine width="82%" sx={{ mt: 0.8 }} />
              <CenterUpWirePill width="100%" height={18} sx={{ mt: 1.4 }} />
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 1.5,
          }}
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <Box
              key={index}
              sx={{
                minHeight: 86,
                p: 1.5,
                borderRadius: "8px",
                border: "1px solid #E0E5EB",
                backgroundColor: index === 0 ? "#F6F1FF" : "#FFFFFF",
              }}
            >
              <CenterUpWireLine width={`${70 - index * 3}%`} height={9} />
              <CenterUpWireLine width="92%" sx={{ mt: 1.2 }} />
              <CenterUpWireLine width="78%" sx={{ mt: 0.8 }} />
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            minHeight: 160,
            borderRadius: "8px",
            backgroundColor: "#FAFBFC",
            border: "1px solid #E0E5EB",
            p: 1.8,
          }}
        >
          <CenterUpWireLine width="30%" height={10} />
          <CenterUpWireLine width="62%" sx={{ mt: 1.1 }} />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1.2,
              mt: 2,
            }}
          >
            {Array.from({ length: 3 }).map((_, index) => (
              <CenterUpWireCard key={index} height={82} sx={{ p: 1.2 }}>
                <CenterUpWireDot size={18} color="#DDE2E8" />
                <CenterUpWireLine width="68%" sx={{ mt: 1 }} />
                <CenterUpWireLine width="52%" sx={{ mt: 0.7 }} />
              </CenterUpWireCard>
            ))}
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

function LearningSection({ text }: { text: CaseStudy["learned"] }) {
  const paragraphs = Array.isArray(text) ? text : text ? [text] : [];

  return (
    <Box component="section" sx={{ py: { xs: 6.8, md: 8.8 }, backgroundColor: "#FFFFFF" }}>
      <Container maxWidth="xl" sx={{ maxWidth: "1180px" }}>
        <Stack spacing={{ xs: 4.2, md: 6.5 }} sx={{ alignItems: "center" }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: "var(--font-serif)",
              color: "#2B2B2B",
              fontSize: { xs: 42, sm: 54, md: 66 },
              lineHeight: 1,
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            What I Learned
          </Typography>

          <Box
            sx={{
              width: "100%",
              borderRadius: { xs: "28px", md: "40px" },
              background:
                "radial-gradient(circle at 10% 8%, rgba(255, 225, 236, 0.7), transparent 30%), linear-gradient(135deg, #FFF8FB 0%, #FBF4FF 100%)",
              p: { xs: 3.2, sm: 5, md: 7.5 },
              textAlign: "center",
            }}
          >
            <Stack spacing={{ xs: 2.8, md: 3.6 }} sx={{ maxWidth: 900, mx: "auto" }}>
              {paragraphs.map((paragraph) => (
                <Typography
                  key={paragraph}
                  sx={{
                    color: "#2F2B31",
                    fontSize: { xs: 17, sm: 19, md: 23 },
                    lineHeight: { xs: 1.62, md: 1.55 },
                    fontWeight: 400,
                  }}
                >
                  {paragraph}
                </Typography>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
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
