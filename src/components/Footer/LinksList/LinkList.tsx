import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import type { LinkListProps } from './types'

export const LinkList = ({ children, title }: LinkListProps) => {
  return (
    <Box
      sx={{
        display: { xs: "none", sm: "flex" },
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Typography variant="body2" fontWeight={600}>
        {title}
      </Typography>
      {children}
    </Box>
  );
};
