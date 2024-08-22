import Button from "@mui/material/Button";

const accountBtns = [
  <Button
    key="sign-in"
    color="primary"
    variant="text"
    size="small"
    component="a"
    href="/material-ui/getting-started/templates/sign-in/"
    target="_blank"
    sx={{
      width: { 
        xs: "100%",
        md: "initial",
      }
    }}
  >
    Sign in
  </Button>,
  <Button
    key="sign-up"
    color="primary"
    variant="contained"
    size="small"
    component="a"
    href="/material-ui/getting-started/templates/sign-up/"
    target="_blank"
    sx={{
      width: { 
        xs: "100%",
        md: "initial",
      }
    }}
  >
    Sign up
  </Button>
];

export default accountBtns;