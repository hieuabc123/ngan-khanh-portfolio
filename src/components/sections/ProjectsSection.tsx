import { Box, Container, Stack } from "@mui/material";

import { ProjectFeatureCard } from "@/components/ui/ProjectFeatureCard";
import { Reveal } from "@/components/ui/Reveal";
import { caseStudies } from "@/data/caseStudies";

export function ProjectsSection() {
  return (
    <Box component="section" id="work" sx={{ py: { xs: 7, md: 10 } }}>
      <Container sx={{ maxWidth: "1440px" }}>
        <Stack spacing={{ xs: 7, md: 9 }}>
          {caseStudies.map((project, index) => (
            <Reveal key={project.slug} delay={Math.min(index * 100, 240)}>
              <ProjectFeatureCard project={project} />
            </Reveal>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
