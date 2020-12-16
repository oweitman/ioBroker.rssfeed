import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "@iobroker/adapter-react/Theme";
import Utils from "@iobroker/adapter-react/Components/Utils"; // eslint-disable-line no-unused-vars
import App from "./app";

//let themeName = Utils.getThemeName();
let themeName = "light";

function build() {
    ReactDOM.render(
        <MuiThemeProvider theme={theme(themeName)}>
            <App
                adapterName="rssfeed"
                onThemeChange={(_theme) => {
                    themeName = _theme;
                    build();
                }}
            />
        </MuiThemeProvider>,
        document.getElementById("root"),
    );
}

build();