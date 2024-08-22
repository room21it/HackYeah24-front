import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const LinkList = ({ children, title }) => {
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
