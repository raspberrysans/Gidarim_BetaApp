import { createTheme } from "@material-ui/core";
export const theme = createTheme({
    palette: {
        primary: {
            main: "#e8543b"
        },
        secondary: {
            main: "#448e62",
            light: "#cfcfcf"
        }
    },
    components: {
        MuiIcon: {
          defaultProps: {
            // Replace the `material-icons` default value.
            baseClassName: 'fas',
          },
        },
      },
});