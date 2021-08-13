import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import Google from "../Images/google.png";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://khushi.codes/images/login.png)",
    backgroundSize: "contain",
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
    padding: theme.spacing(1),
    // maxWidth: 400,
  },
  paper0: {
    padding: theme.spacing(1),
    maxWidth: 400,
    marginTop: theme.spacing(30),
    marginLeft: theme.spacing(20),
  },
  paper2: {
    padding: theme.spacing(1),
    maxWidth: 400,
    marginTop: theme.spacing(30),
    marginLeft: theme.spacing(20),
  },
  image1: {
    width: 100,
    height: 90,
  },
  img1: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    marginBottom: "5vh",
  },
}));

export default function SignInSide(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
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
  const classes = useStyles();
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
        <div className={classes.paper1}>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Grid item xs={10}>
              <Typography component="h1" variant="h4">
                Login to your Account
              </Typography>
            </Grid>
            <form
              className={classes.form}
              style={{ marginTop: "3vh" }}
              onSubmit={handleLogin}
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
                    onChange={handleChange("password")}
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
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                  style={{ textTransform: "none", marginTop: "5%" }}
                  onClick={handleLogin}
                >
                  Login
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
                    Login with Google
                  </Grid>
                </Button>
              </Grid>
              <Grid style={{ marginTop: "45%" }}>
                Don't have an account?
                <Link href="#" variant="body2" style={{ color: "#4AAD9B" }}>
                  {"  Sign Up here."}
                </Link>
              </Grid>
            </form>
          </Grid>
        </div>
      </Grid>
      <Grid item sm={4} md={7} className={classes.image} />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </Grid>
  );
}
