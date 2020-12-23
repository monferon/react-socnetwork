import React from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          {/* <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} /> */}

          <Route
            path="/dialogs"
            render={() => {
              return <Dialogs data={props.state.dialogsPage} />;
            }}
          />
          <Route
            path="/profile"
            render={() => {
              return (
                <Profile
                  data={props.state.profilePage}
                  dispatch={props.dispatch}
                />
              );
            }}
          />
          <Route
            path="/news"
            render={(props) => {
              return <News />;
            }}
          />
          <Route
            path="/Music"
            render={(props) => {
              return <Music />;
            }}
          />
          <Route
            path="/settings"
            render={(props) => {
              return <Settings />;
            }}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
