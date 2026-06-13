import { Box, Container, Stack } from "@mui/material";

import { ProjectFeatureCard } from "@/components/ui/ProjectFeatureCard";
import { caseStudies } from "@/data/caseStudies";

export function ProjectsSection() {
  return (
    <Box component="section" id="work" sx={{ py: { xs: 7, md: 10 } }}>
      <Container maxWidth="xl" sx={{ maxWidth: "1050px" }}>
        <Stack spacing={{ xs: 7, md: 9 }}>
          {caseStudies.map((project) => (
            <ProjectFeatureCard key={project.slug} project={project} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
