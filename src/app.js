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
store.dispatch(addExpense({description:"Water bill",amount:200,createdAt:4000}));
store.dispatch(addExpense({description:"Gas bill",amount:100,createdAt:200000}));
//store.dispatch(setTextFilter("gas"));
store.dispatch(addExpense({description:"Rent",amount:300,createdAt:1000000000}));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
console.log(visibleExpenses);
console.log(store.getState());

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx ,document.getElementById("app"));

