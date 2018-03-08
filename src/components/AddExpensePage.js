import React from "react";
import ExpenseForm from "./ExpenseForm";
import {connect} from "react-redux";
import {addExpense} from "./../actions/Expenses";

export class AddExpensePage extends React.Component{
    onSubmit= (expense)=>{
        console.log(expense);
        //props.dispatch(addExpense(expense));
        this.props.addExpense(expense);
        //redirecting to root page
        this.props.history.push("/");
    }
    render(){
        return(
            <div>
                <h1>Add expense</h1>
                <ExpenseForm 
                onSubmit = {this.onSubmit}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        addExpense: (expense)=>dispatch(addExpense(expense))
    }
};

//args to connect added for testing, undefined for mapstatetoprops,
export default connect(undefined, mapDispatchToProps)(AddExpensePage);
