import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startAddExpense } from "./../actions/Expenses";

export class AddExpensePage extends React.Component{
    onSubmit= (expense)=>{
        console.log(expense);
        //props.dispatch(addExpense(expense));
        this.props.startAddExpense(expense);
        //redirecting to root page
        this.props.history.push("/");
    }
    render(){
        return(
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add expense</h1>
                    </div>
                </div>
                <div className="content-container" >
                    <ExpenseForm 
                    onSubmit = {this.onSubmit}
                    />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        startAddExpense: (expense)=>dispatch(startAddExpense(expense))
    }
};

//args to connect added for testing, undefined for mapstatetoprops,
export default connect(undefined, mapDispatchToProps)(AddExpensePage);
