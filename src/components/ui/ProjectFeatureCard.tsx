import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { Box, Button, Stack, Typography } from "@mui/material";

import { MockupFrame } from "@/components/ui/MockupFrame";
import type { CaseStudy } from "@/types/portfolio";

type ProjectFeatureCardProps = {
  project: CaseStudy;
};

export function ProjectFeatureCard({ project }: ProjectFeatureCardProps) {
  return (
    <Box
      component="article"
      sx={{
        borderRadius: { xs: "30px", md: "34px" },
        backgroundColor: project.homepage.background,
        boxShadow: "0 18px 44px rgba(56, 45, 95, 0.13)",
        border: "1px solid rgba(80, 65, 120, 0.08)",
        overflow: "hidden",
        transform: "translate3d(0, 0, 0)",
        transition:
          "transform 260ms ease, box-shadow 260ms ease, border-color 260ms ease",
        "@media (hover: hover)": {
          "&:hover": {
            transform: "translate3d(0, -4px, 0)",
            boxShadow: "0 24px 56px rgba(56, 45, 95, 0.18)",
            borderColor: "rgba(80, 65, 120, 0.14)",
          },
          "&:hover .project-mockup": {
            transform: "translate3d(0, -6px, 0) scale(1.012)",
          },
        },
        "@media (prefers-reduced-motion: reduce)": {
          transition: "none",
          "&:hover": {
            transform: "none",
          },
        },
      }}
    >
      <Box
        sx={{
          minHeight: { xs: 620, md: 520 },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "0.92fr 1.08fr" },
          alignItems: "center",
          gap: { xs: 5, md: 7 },
          px: { xs: 4, sm: 6, md: 8 },
          py: { xs: 6, md: 7.5 },
        }}
      >
        <Stack spacing={5} sx={{ alignItems: "flex-start" }}>
          <Typography
            component="p"
            sx={{
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "text.primary",
            }}
          >
            {project.category}
          </Typography>
          <Typography
            component="h3"
            sx={{
              maxWidth: 470,
              fontSize: { xs: 30, sm: 38, md: 38 },
              lineHeight: 1.2,
              fontWeight: 500,
            }}
          >
            {project.homepage.title}
          </Typography>
          <Button
            href={`/work/${project.slug}`}
            variant="contained"
            endIcon={<ArrowOutwardRoundedIcon />}
            sx={{
              px: 2.6,
              backgroundColor: "primary.main",
              color: "primary.contrastText",
              borderRadius: 32,
            }}
          >
            View Case Study
          </Button>
        </Stack>

        <Box
          className="project-mockup"
          sx={{
            display: "grid",
            placeItems: "center",
            transition: "transform 300ms ease",
            "@media (prefers-reduced-motion: reduce)": {
              transition: "none",
            },
          }}
        >
          <MockupFrame
            src={project.homepage.image}
            alt={`${project.title} mockup`}
            variant={project.homepage.mockupVariant}
            label={project.title}
            animated
          />
        </Box>
      </Box>
    </Box>
  );
}
