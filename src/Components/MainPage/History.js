import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Pdf from "../../Images/pdf.png";
import Shape from "../../Images/Shape.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    // maxWidth: 400,
  },
  image: {
    width: 100,
    height: 90,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  toolbar: {
    flexWrap: "wrap",
    display: "flex",
    color: "#3C5CA3",
    marginLeft: "4.2vw",
    marginTop: "7vh",
    fontWeight: "10",
  },
}));

function History() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item xs={11} className={classes.toolbar}>
          <Typography
            variant="h5"
            color="inherit"
            style={{ fontWeight: "bold" }}
          >
            Recommendation History
          </Typography>
        </Grid>
        <Grid item xs={11}>
          <Typography
            variant="body1"
            color="inherit"
            style={{
              marginLeft: "2.2vw",
              marginTop: "3vh",
              marginBottom: "2vh",
            }}
          >
            Download Report
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src={Shape} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="row" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      September Report
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      September, 19
                    </Typography>
                    <Typography
                      variant="body2"
                      gutterBottom
                      style={{ color: "#28388F" }}
                    >
                      September_analysis.
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <MoreVertIcon />
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src={Pdf} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="row" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      September Report
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      September, 19
                    </Typography>
                    <Typography
                      variant="body2"
                      gutterBottom
                      style={{ color: "#28388F" }}
                    >
                      September_analysis.
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <MoreVertIcon />
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src={Shape} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="row" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      October Report
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      October, 19
                    </Typography>
                    <Typography
                      variant="body2"
                      gutterBottom
                      style={{ color: "#28388F" }}
                    >
                      September_analysis.
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <MoreVertIcon />
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default History;
