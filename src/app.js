//importing 3rd party libraries  -- intsall(yarn,npm) -- import -- use
import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import {addExpense} from "./actions/Expenses";
import {setTextFilter} from "./actions/Filters";
import getVisibleExpenses from "./selectors/expenses"
import "./styles/styles.scss";
import "normalize.css/normalize.css";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx ,document.getElementById("app"));