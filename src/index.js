import React from "react";
import ReactDOM from "react-dom";

import StarRating from "./StarRating.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <StarRating />
    </React.StrictMode>,
    rootElement
);