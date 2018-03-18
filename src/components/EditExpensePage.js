import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "./../actions/Expenses";

export class EditExpensePage extends React.Component{

    onSubmit = (expense)=>{
        //dispatch action to edit and redirect
        this.props.startEditExpense(this.props.expense.id,expense);
        this.props.history.push("/");
    }
    onClick = ()=>{
        //console.log(getState());
        this.props.startRemoveExpense({id:this.props.expense.id});
        this.props.history.push("/");
    }

    render(){
        return(
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm 
                    expense={this.props.expense}
                    onSubmit = {this.onSubmit}/>
                    <button className="button button--secondary" onClick ={this.onClick}>Remove Expense</button>
                </div>
            </div>
        )
    }
} 

const mapDispatchToProps = (dispatch,props) => {
    return{
        startEditExpense: (id,expense)=>dispatch(startEditExpense(id,expense)),
        startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
    }
}

const mapStateToProps = (state, props) => {
    return{
        expense: state.expenses.find((expense)=>{
            return expense.id === props.match.params.id;
        })
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);