import React from "react";
import Header from "./MainPage/Header";
import ProfileSection from "./MainPage/ProfileSection";
import Page1 from "./MainPage/Page1";
import Page2 from "./MainPage/Page2";
import Page3 from "./MainPage/Page3";
import Page4 from "./MainPage/Page4";
import History from "./MainPage/History";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function MainPage() {
  return (
    <div>
      <Header />
      <ProfileSection />
      {/* <Tabs /> */}
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item xs={10}>
          <Route path="/page2">
            <Page2 />
          </Route>
          <Route path="/page3">
            <Page3 />
          </Route>
          <Route path="/page4">
            <Page4 />
          </Route>
          <Route path="/page1">
            <Page1 />
          </Route>
        </Grid>
        {/* <Grid item xs={11}>
          <Page2 />
        </Grid> */}
      </Grid>
      {/* <Grid item xs={11}>
        <Page3 />
      </Grid>
      <Grid item xs={11}>
        <Page4 />
      </Grid> */}
      <History />
    </div>
  );
}

export default MainPage;
