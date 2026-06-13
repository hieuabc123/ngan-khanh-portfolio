import { Box } from "@mui/material";

import type { MockupVariant } from "@/types/portfolio";

type MockupFrameProps = {
  src: string;
  alt: string;
  variant: MockupVariant;
  label?: string;
};

const imageWidths: Record<MockupVariant, number | string> = {
  phone: 300,
  laptop: 620,
  desktop: 620,
  browser: 620,
  portrait: "100%",
};

export function MockupFrame({ src, alt, variant }: MockupFrameProps) {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        display: "block",
        width: "100%",
        maxWidth: imageWidths[variant],
        height: "auto",
        mx: "auto",
        borderRadius: variant === "portrait" ? "28px" : "18px",
        objectFit: "contain",
        filter: "drop-shadow(0 22px 34px rgba(15, 23, 42, 0.16))",
      }}
    />
  );
}
