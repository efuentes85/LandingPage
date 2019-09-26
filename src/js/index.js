//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Nav } from "./component/nav.js";
import { Jumbo } from "./component/jumbo.js";
import { Cards } from "./component/cards.js";

//render your react application
ReactDOM.render(<Nav />, document.querySelector("#nav"));
ReactDOM.render(<Jumbo />, document.querySelector("#jumbo"));
ReactDOM.render(<Cards />, document.querySelector("#cardholder"));
ReactDOM.render(<Cards />, document.querySelector("#cardholder"));
