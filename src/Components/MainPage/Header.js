import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Badge from "@material-ui/core/Badge";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Grid from "@material-ui/core/Grid";
import Logo from "../../Images/logo.png";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  signin: {
    margin: theme.spacing(1, 0, 2),
    borderRadius: 50,
    backgroundColor: "#000000",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#000000",
      color: "#fff",
    },
  },
}));

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            <img src={Logo} />
          </Typography>
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              style={{ textTransform: "none" }}
              className={classes.link}
            >
              HV Shop
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              style={{ textTransform: "none" }}
              className={classes.link}
            >
              HV Prime
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              style={{ textTransform: "none" }}
              className={classes.link}
            >
              HV Active
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              style={{ textTransform: "none" }}
              className={classes.link}
            >
              Explore
            </Link>
            <Button
              type="submit"
              variant="contained"
              className={classes.signin}
              style={{ textTransform: "none" }}
            >
              <Grid item xs={10}>
                Sign in
              </Grid>
              <Grid item xs={1}>
                <Badge color="secondary" badgeContent={0}>
                  <ArrowForwardIosIcon />
                </Badge>
              </Grid>
            </Button>
          </nav>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
