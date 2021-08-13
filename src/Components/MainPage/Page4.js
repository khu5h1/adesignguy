import React from "react";
import { Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import product3 from "../../Images/product3.png";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import product1 from "../../Images/product1.png";
import product2 from "../../Images/product2.png";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    flexWrap: "wrap",
    display: "flex",
    color: "#000000",
    marginLeft: "6.2vw",
    marginTop: "3.2vw",
    fontWeight: "10",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 950,
  },
  image: {
    width: 100,
    height: 90,
  },
  rootpaper: {
    borderRadius: 30,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  button: {
    margin: theme.spacing(1, 0, 2),
    width: 200,
    backgroundColor: "#ECF7F3",
    color: "#00AE1C",
    "&:hover": {
      backgroundColor: "#ECF7F3",
      color: "#00AE1C",
    },
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
    backgroundColor: "#ECF7F3",
    color: "#00AE1C",
    "&:hover": {
      backgroundColor: "#ECF7F3",
      color: "#00AE1C",
    },
  },
  submit1: {
    margin: theme.spacing(1, 0, 2),
    backgroundColor: "#ffefc7",
    color: "#FFB800",
    "&:hover": {
      backgroundColor: "#ffefc7",
      color: "#FFB800",
    },
  },
  submit2: {
    margin: theme.spacing(1, 0, 2),
    width: "40%",
    marginRight: theme.spacing(12),
    backgroundColor: "#FFFFFF",
    color: "#3C5CA3",
    "&:hover": {
      backgroundColor: "#FFFFFF",
      color: "#3C5CA3",
    },
  },
}));
function Page4() {
  const classes = useStyles();
  return (
    <Paper square={false} className={classes.rootpaper}>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item xs={4} className={classes.toolbar}>
          <Typography
            variant="h5"
            color="inherit"
            style={{ fontWeight: "bold" }}
          >
            Your Orders
          </Typography>
        </Grid>
        <Grid
          item
          container
          xs={3}
          className={classes.toolbar}
          style={{ justifyContent: "flex-end" }}
        >
          <Button
            type="submit"
            className={classes.submit2}
            fullWidth
            variant="outlined"
            style={{ marginTop: "5%" }}
          >
            Newest
          </Button>
        </Grid>
        <Grid item xs={9}>
          <Typography
            variant="body1"
            color="inherit"
            style={{
              marginLeft: "3.2vw",
              marginTop: "3vh",
              marginBottom: "2vh",
              color: "#969BA0",
            }}
          >
            See your Orders
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={3}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src={product3} />
                </ButtonBase>
              </Grid>
              <Grid item xs={10} sm container>
                <Grid item xs container>
                  <Grid item xs={9}>
                    <Typography
                      gutterBottom
                      variant="subtitle2"
                      style={{ fontWeight: "bold" }}
                    >
                      Gold Standard Whey
                    </Typography>

                    <Typography
                      variant="body2"
                      gutterBottom
                      style={{ color: "#57A794" }}
                    >
                      #0010235
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    gutterBottom
                    variant="button"
                    style={{ fontWeight: "bold" }}
                  >
                    AM
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    Patiala Punjab
                  </Typography>
                </Grid>
                <Grid item xs style={{ marginTop: "5vh" }}>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    style={{ fontWeight: "bold" }}
                  >
                    $4.2 &nbsp;&nbsp;&nbsp;X2
                  </Typography>
                </Grid>
                <Grid item xs></Grid>
                <Grid item xs>
                  <Button
                    type="submit"
                    className={classes.submit}
                    fullWidth
                    variant="outlined"
                    style={{ marginTop: "5vh" }}
                  >
                    Delivered
                  </Button>
                </Grid>
                <Grid item style={{ marginTop: "6vh" }}>
                  <MoreVertIcon />
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} style={{ marginTop: "4vh" }}>
          <Paper className={classes.paper} elevation={3}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src={product2} />
                </ButtonBase>
              </Grid>
              <Grid item xs={10} sm container>
                <Grid item xs container>
                  <Grid item xs={9}>
                    <Typography
                      gutterBottom
                      variant="subtitle2"
                      style={{ fontWeight: "bold" }}
                    >
                      Protein Peanut Butter
                    </Typography>

                    <Typography
                      variant="body2"
                      gutterBottom
                      style={{ color: "#57A794" }}
                    >
                      #0010235
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    gutterBottom
                    variant="button"
                    style={{ fontWeight: "bold" }}
                  >
                    Jimmy Kueai
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    South Corner St. 41256 London
                  </Typography>
                </Grid>
                <Grid item xs style={{ marginTop: "5vh" }}>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    style={{ fontWeight: "bold" }}
                  >
                    $7.4 &nbsp;&nbsp;&nbsp;X3
                  </Typography>
                </Grid>
                <Grid item xs></Grid>
                <Grid item xs>
                  <Button
                    type="submit"
                    fullWidth
                    variant="outlined"
                    className={classes.submit1}
                    style={{ marginTop: "5vh" }}
                  >
                    Pending
                  </Button>
                </Grid>
                <Grid item style={{ marginTop: "6vh" }}>
                  <MoreVertIcon />
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} style={{ marginTop: "4vh", marginBottom: "4vh" }}>
          <Paper className={classes.paper} elevation={3}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src={product1} />
                </ButtonBase>
              </Grid>
              <Grid item xs={10} sm container>
                <Grid item xs container>
                  <Grid item xs={9}>
                    <Typography
                      gutterBottom
                      variant="subtitle2"
                      style={{ fontWeight: "bold" }}
                    >
                      Alpino Peanut Butter
                    </Typography>

                    <Typography
                      variant="body2"
                      gutterBottom
                      style={{ color: "#57A794" }}
                    >
                      #0010299
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    gutterBottom
                    variant="button"
                    style={{ fontWeight: "bold" }}
                  >
                    Cindy Alexa
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    Blue Ocean St. 415511 London
                  </Typography>
                </Grid>
                <Grid item xs style={{ marginTop: "5vh" }}>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    style={{ fontWeight: "bold" }}
                  >
                    $8.2 &nbsp;&nbsp;&nbsp;X1
                  </Typography>
                </Grid>
                <Grid item xs></Grid>
                <Grid item xs>
                  <Button
                    type="submit"
                    fullWidth
                    variant="outlined"
                    style={{ marginTop: "5vh" }}
                    className={classes.submit}
                  >
                    Delivered
                  </Button>
                </Grid>
                <Grid item style={{ marginTop: "6vh" }}>
                  <MoreVertIcon />
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={3}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src={product3} />
                </ButtonBase>
              </Grid>
              <Grid item xs={10} sm container>
                <Grid item xs container>
                  <Grid item xs={9}>
                    <Typography
                      gutterBottom
                      variant="subtitle2"
                      style={{ fontWeight: "bold" }}
                    >
                      Gold Standard Whey
                    </Typography>

                    <Typography
                      variant="body2"
                      gutterBottom
                      style={{ color: "#57A794" }}
                    >
                      #0010235
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    gutterBottom
                    variant="button"
                    style={{ fontWeight: "bold" }}
                  >
                    AM
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    Patiala Punjab
                  </Typography>
                </Grid>
                <Grid item xs style={{ marginTop: "5vh" }}>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    style={{ fontWeight: "bold" }}
                  >
                    $4.2 &nbsp;&nbsp;&nbsp;X2
                  </Typography>
                </Grid>
                <Grid item xs></Grid>
                <Grid item xs>
                  <Button
                    type="submit"
                    className={classes.submit}
                    fullWidth
                    variant="outlined"
                    style={{ marginTop: "5vh" }}
                  >
                    Delivered
                  </Button>
                </Grid>
                <Grid item style={{ marginTop: "6vh" }}>
                  <MoreVertIcon />
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} style={{ marginTop: "4vh" }}>
          <Paper className={classes.paper} elevation={3}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src={product2} />
                </ButtonBase>
              </Grid>
              <Grid item xs={10} sm container>
                <Grid item xs container>
                  <Grid item xs={9}>
                    <Typography
                      gutterBottom
                      variant="subtitle2"
                      style={{ fontWeight: "bold" }}
                    >
                      Protein Peanut Butter
                    </Typography>

                    <Typography
                      variant="body2"
                      gutterBottom
                      style={{ color: "#57A794" }}
                    >
                      #0010235
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    gutterBottom
                    variant="button"
                    style={{ fontWeight: "bold" }}
                  >
                    Jimmy Kueai
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    South Corner St. 41256 London
                  </Typography>
                </Grid>
                <Grid item xs style={{ marginTop: "5vh" }}>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    style={{ fontWeight: "bold" }}
                  >
                    $7.4 &nbsp;&nbsp;&nbsp;X3
                  </Typography>
                </Grid>
                <Grid item xs></Grid>
                <Grid item xs>
                  <Button
                    type="submit"
                    fullWidth
                    variant="outlined"
                    className={classes.submit1}
                    style={{ marginTop: "5vh" }}
                  >
                    Pending
                  </Button>
                </Grid>
                <Grid item style={{ marginTop: "6vh" }}>
                  <MoreVertIcon />
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} style={{ marginTop: "4vh", marginBottom: "4vh" }}>
          <Paper className={classes.paper} elevation={3}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src={product1} />
                </ButtonBase>
              </Grid>
              <Grid item xs={10} sm container>
                <Grid item xs container>
                  <Grid item xs={9}>
                    <Typography
                      gutterBottom
                      variant="subtitle2"
                      style={{ fontWeight: "bold" }}
                    >
                      Alpino Peanut Butter
                    </Typography>

                    <Typography
                      variant="body2"
                      gutterBottom
                      style={{ color: "#57A794" }}
                    >
                      #0010299
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    gutterBottom
                    variant="button"
                    style={{ fontWeight: "bold" }}
                  >
                    Cindy Alexa
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    Blue Ocean St. 415511 London
                  </Typography>
                </Grid>
                <Grid item xs style={{ marginTop: "5vh" }}>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    style={{ fontWeight: "bold" }}
                  >
                    $8.2 &nbsp;&nbsp;&nbsp;X1
                  </Typography>
                </Grid>
                <Grid item xs></Grid>
                <Grid item xs>
                  <Button
                    type="submit"
                    fullWidth
                    variant="outlined"
                    style={{ marginTop: "5vh" }}
                    className={classes.submit}
                  >
                    Delivered
                  </Button>
                </Grid>
                <Grid item style={{ marginTop: "6vh" }}>
                  <MoreVertIcon />
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default Page4;
