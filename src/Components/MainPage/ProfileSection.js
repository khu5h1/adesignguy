import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import InputBase from "@material-ui/core/InputBase";
import { alpha } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import Google from "../../Images/google.png";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Profile from "../../Images/profile.png";

import TuneIcon from "@material-ui/icons/Tune";
const useStyles = makeStyles((theme) => ({
  toolbar: {
    flexWrap: "wrap",
    display: "flex",
    color: "#3C5CA3",
  },
  toolbarTitle: {
    marginTop: "8vh",
    marginLeft: "6vw",
  },
  toolbarmain: {
    background: "#EBF2FC",
    display: "inline-block",
  },
  root: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  profile: {
    // marginLeft: "2vw",
  },
  badge: {},
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    // maxWidth: 950,
  },
  google: {
    margin: theme.spacing(1, 0, 2),
    width: "30%",
    height: "7vh",
    borderRadius: 40,
    backgroundColor: "#fff",
    color: "#00000",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#00000",
    },
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
    width: "100%",
    height: "7vh",
    backgroundColor: "#4AAD9B",
    color: "#fff",
    borderRadius: 40,
    "&:hover": {
      backgroundColor: "#4AAD9B",
      color: "#fff",
    },
  },
}));

function ProfileSection() {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        className={classes.toolbarTitle}
      >
        <Grid item xs={6}>
          <Typography
            variant="h5"
            color="inherit"
            style={{ marginLeft: "7vw" }}
          >
            <div className={classes.toolbar}>
              <div style={{ fontWeight: "bold", marginRight: "1vw" }}>
                Abhinav’s
              </div>
              <div className={classes.toolbarmain}> Profile</div>
            </div>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.root}>
            <Toolbar>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </Toolbar>
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item xs={2}>
          <img src={Profile} className={classes.profile} />
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item xs={12} container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Hi Abhinav Mahajan
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <div style={{ display: "flex" }}>
                        <div>You have been recommended over </div>
                        <div
                          style={{
                            fontWeight: "bold",
                            marginRight: "0.2vw",
                            marginLeft: "0.2vw",
                            color: "#3C5CA3",
                          }}
                        >
                          322
                        </div>
                        <div>products this month.</div>
                      </div>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      type="submit"
                      fullWidth
                      variant="outlined"
                      className={classes.google}
                    >
                      <Grid item xs={3}>
                        <Badge color="secondary" badgeContent={0}>
                          <img src={Google} />
                        </Badge>
                      </Grid>
                      <Grid item xs={10}>
                        Connected
                      </Grid>
                    </Button>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                    style={{ marginTop: "5%" }}
                  >
                    Switch Profile
                  </Button>
                </Grid>
                <Grid
                  item
                  container
                  xs={1}
                  direction="column"
                  style={{ marginLeft: "2vw" }}
                >
                  <DashboardIcon />
                  <TuneIcon />
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProfileSection;
