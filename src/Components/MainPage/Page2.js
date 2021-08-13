import InputAdornment from "@material-ui/core/InputAdornment";
import React from "react";
import { Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import img3 from "../../Images/img3.png";
import img2 from "../../Images/img2.png";
import img4 from "../../Images/img4.png";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    flexWrap: "wrap",
    display: "flex",
    color: "#3C5CA3",
    marginLeft: "6.2vw",
    fontWeight: "10",
  },
  rootpaper: {
    borderRadius: 30,
  },
}));
function Page2() {
  const classes = useStyles();
  return (
    <Paper square={false} className={classes.rootpaper}>
      <Grid item xs={12} className={classes.toolbar}>
        <Typography
          variant="h5"
          color="inherit"
          style={{ fontWeight: "bold", marginTop: "3vh" }}
        >
          According to Your Choice
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item xs={4}>
          <Paper style={{ padding: "20px", height: "37.5vh", width: "26vw" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="row" spacing={2}>
                  <Grid item xs={12}>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      style={{ fontWeight: "bold" }}
                    >
                      Upgrade to a healthy option
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="body2">
                      Let us build your Healthvisor profile and give you
                      personal recommendations
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <ButtonBase>
                      <img alt="complex" src={img4} style={{ width: "140%" }} />
                    </ButtonBase>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper style={{ padding: "20px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="row" spacing={2}>
                  <Grid item xs={12}>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      style={{ fontWeight: "bold" }}
                    >
                      Personalized Reports
                    </Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography
                      variant="body2"
                      style={{ marginBottom: "16vh" }}
                    >
                      Let us build your Healthvisor profile and give you
                      personal recommendations
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <InputAdornment position="end">
                    <ButtonBase>
                      <img
                        alt="complex"
                        src={img3}
                        style={{
                          height: "80%",
                          width: "80%",
                          marginLeft: "300px",
                        }}
                      />
                    </ButtonBase>
                  </InputAdornment>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3} className={classes.buttons}>
          <img src={img2} style={{ marginBottom: "40vh" }} />
        </Grid>
      </Grid>
    </Paper>
  );
}
export default Page2;
