import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import clsx from "clsx";
import InputLabel from "@material-ui/core/InputLabel";
import Badge from "@material-ui/core/Badge";
import Google from "../Images/google.png";
import product3 from "../Images/product3.png";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://khushi.codes/images/register.png)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 7),

    alignItems: "center",
  },

  form: {
    width: "80%",
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
    width: "70%",
    height: "7vh",
    backgroundColor: "#4AAD9B",
    color: "#fff",
    borderRadius: 40,
    "&:hover": {
      backgroundColor: "#4AAD9B",
      color: "#fff",
    },
  },
  google: {
    margin: theme.spacing(1, 0, 2),
    width: "70%",
    height: "7vh",
    borderRadius: 40,
    backgroundColor: "#fff",
    color: "#00000",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#00000",
    },
  },

  paper1: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image1: {
    width: 128,
    height: 128,
  },
  img1: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  button1: {
    margin: theme.spacing(1, 0, 2),
    width: 200,
    backgroundColor: "#ECF7F3",
    color: "#4AAD9B",
    "&:hover": {
      backgroundColor: "#ECF7F3",
      color: "#4AAD9B",
    },
  },
  button2: {
    margin: theme.spacing(1, 0, 2),
    width: 150,
    backgroundColor: "#3C5CA3",
    color: "#FFFFFF",
    borderRadius: 30,
    "&:hover": {
      backgroundColor: "#3C5CA3",
      color: "#FFFFFF",
    },
  },
}));

export default function RegisterInSide(props) {
  const classes = useStyles();
  const {
    email,
    password,
    setEmail,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
      >
        <div className={classes.paper}>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Grid item xs={10}>
              <Typography component="h1" variant="h4">
                Register an account
              </Typography>
            </Grid>
            <form
              className={classes.form}
              style={{ marginTop: "3vh" }}
              noValidate
              onSubmit={handleSignup}
            >
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  error={emailError || false}
                  helperText={emailError || false}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  className={clsx(classes.margin, classes.textField)}
                  variant="filled"
                  fullWidth
                >
                  <InputLabel htmlFor="filled-adornment-password">
                    Password
                  </InputLabel>
                  <FilledInput
                    id="filled-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    error={passwordError || false}
                    helperText={passwordError || false}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                  style={{ textTransform: "none", marginTop: "10%" }}
                  onClick={handleSignup}
                >
                  Sign Up
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.google}
                  style={{ textTransform: "none" }}
                >
                  <Grid item xs={1}>
                    <Badge color="secondary" badgeContent={0}>
                      <img src={Google} />
                    </Badge>
                  </Grid>
                  <Grid item xs={10}>
                    Sign up with Google
                  </Grid>
                </Button>
              </Grid>
              <Grid style={{ marginTop: "45%" }}>
                Already have an account? Login
                <Link href="#" variant="body2" style={{ color: "#4AAD9B" }}>
                  {" here"}.
                </Link>
              </Grid>
            </form>
          </Grid>
        </div>
      </Grid>
      <Grid item sm={4} md={7} className={classes.image} />
    </Grid>
  );
}
