import React from "react";
import { Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Phone from "../../Images/phone.png";
import img1 from "../../Images/img1.png";
import product1 from "../../Images/product1.png";
import product3 from "../../Images/product3.png";
import Icon from "../../Images/Icon.png";
import price from "../../Images/price.png";
import weight from "../../Images/weight.png";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
const theme = createTheme({
  // typography: {
  //   fontSize: 10,
  // },
});
const useStyles = makeStyles((theme) => ({
  toolbar: {
    color: "#3C5CA3",
  },
  root: {
    flexGrow: 1,
    maxWidth: 250,
    color: "white",
    backgroundColor: "#4AAD9B",
    borderRadius: 20,
  },
  title: {
    fontSize: 14,
  },
  paper: {
    padding: theme.spacing(2),
    maxWidth: 300,
    borderRadius: 20,
  },
  image: {
    width: 128,
    height: 128,
  },
  renbutton: {
    margin: theme.spacing(1, 0, 2),
    height: "5vh",
    width: "7vw",
    backgroundColor: "#F0F2F6",
    color: "#77838F",
    borderRadius: 40,
    "&:hover": {
      backgroundColor: "#F0F2F6",
      color: "#77838F",
    },
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  submit: {
    backgroundColor: "#ECF7F3",
    color: "#4AAD9B",
    "&:hover": {
      backgroundColor: "#ECF7F3",
      color: "#4AAD9B",
    },
    borderRadius: 10,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#ECF7F3",
    color: "#4AAD9B",
    borderRadius: 40,
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#ECF7F3",
      color: "#4AAD9B",
    },
  },
  button1: {
    backgroundColor: "#D4D4D4",
    color: "#A5A5A5",
    borderRadius: 40,
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#D4D4D4",
      color: "#A5A5A5",
    },
  },
  button2: {
    backgroundColor: "#FFCB3E2B",
    color: "#FFCB3E",
    borderRadius: 40,
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#FFCB3E2B",
      color: "#FFCB3E",
    },
  },
  rootpaper: {
    borderRadius: 30,
    padding: 40,
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

function Page1() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.rootpaper}>
        <Grid container justify="space-evenly">
          <Grid item>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                    style={{ fontWeight: "bold" }}
                  >
                    Gold Standard Whey ( 500gm)
                  </Typography>

                  <Button type="submit" className={classes.button} fullWidth>
                    Suggested for You
                  </Button>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="body2" gutterBottom>
                    <img src={price} /> &nbsp;&nbsp;₹ 1500 &nbsp;&nbsp;&nbsp;
                    <img src={weight} />
                    &nbsp;&nbsp; 500 gm
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    100% Grass-Fed Whey Protein: Helps Repair and Build Muscle &
                    Supports weight-loss
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <InputAdornment>
                    <ButtonBase>
                      <img alt="complex" src={product3} />
                    </ButtonBase>
                  </InputAdornment>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                    style={{ fontWeight: "bold" }}
                  >
                    Protein Peanut Butter (250 gm)
                  </Typography>

                  <Button type="submit" className={classes.button1} fullWidth>
                    Can’t Recommended
                  </Button>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="body2" gutterBottom>
                    <img src={price} /> &nbsp;&nbsp;₹ 900 &nbsp;&nbsp;&nbsp;
                    <img src={weight} />
                    &nbsp;&nbsp; 250 gm
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    100% Grass-Fed Whey Protein: Helps Repair and Build Muscle &
                    Supports weight-loss
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <InputAdornment>
                    <ButtonBase>
                      <img alt="complex" src={product1} />
                    </ButtonBase>
                  </InputAdornment>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                    style={{ fontWeight: "bold" }}
                  >
                    Protein Peanut Butter (250 gm)
                  </Typography>

                  <Button type="submit" className={classes.button2} fullWidth>
                    Mildly Suggested
                  </Button>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="body2" gutterBottom>
                    <img src={price} /> &nbsp;&nbsp;₹ 1500 &nbsp;&nbsp;&nbsp;
                    <img src={weight} />
                    &nbsp;&nbsp; 500 gm
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    100% Grass-Fed Whey Protein: Helps Repair and Build Muscle &
                    Supports weight-loss
                  </Typography>
                </Grid>

                <Grid item xs={2}>
                  <InputAdornment>
                    <ButtonBase>
                      <img alt="complex" src={product1} />
                    </ButtonBase>
                  </InputAdornment>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={11}>
            <div style={{ marginTop: "2vh" }}>
              <Typography
                variant="h5"
                color="inherit"
                className={classes.toolbar}
              >
                Consultation Calls &nbsp;
                <img src={Phone} />
              </Typography>
            </div>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Grid item xs={3}>
              <Card className={classes.root}>
                <Grid
                  container
                  direction="row"
                  justify="space-evenly"
                  alignItems="center"
                >
                  <Grid item xs={5}>
                    <img src={Icon} />
                  </Grid>
                  <Grid item xs={5}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      className={classes.renbutton}
                      style={{ textTransform: "none", marginTop: "5%" }}
                    >
                      11.30 am
                    </Button>
                  </Grid>
                </Grid>

                <CardContent>
                  <Grid container justifyContent="flex-end">
                    <Typography variant="h5" component="h2">
                      Dr Renuka Shanker
                    </Typography>
                  </Grid>
                  <Grid container justifyContent="flex-end">
                    <Typography className={classes.pos}>
                      24th February 2021
                    </Typography>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={8} className={classes.buttons}>
              <img src={img1} />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default Page1;
