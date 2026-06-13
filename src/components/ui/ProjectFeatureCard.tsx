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
        <Stack spacing={3} sx={{ alignItems: "flex-start" }}>
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
              fontSize: { xs: 30, sm: 38, md: 42 },
              lineHeight: 1.08,
              fontWeight: 850,
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
            }}
          >
            View Case Study
          </Button>
        </Stack>

        <Box sx={{ display: "grid", placeItems: "center" }}>
          <MockupFrame
            src={project.homepage.image}
            alt={`${project.title} mockup`}
            variant={project.homepage.mockupVariant}
            label={project.title}
          />
        </Box>
      </Box>
    </Box>
  );
}
