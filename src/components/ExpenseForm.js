import React from "react";
import moment from "moment";
import {SingleDatePicker} from "react-dates";

const now = moment();
console.log(now.format("MMM Do YYYY"));

export default class ExpenseForm extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            description : props.expense ? props.expense.description : "",
            note: props.expense ? props.expense.note : "",
            amount: props.expense ? (props.expense.amount / 100).toString() : "",
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ""
        };
    }

    onDescriptionChange = (event)=>{
        const description = event.target.value;
        this.setState(()=>({description}));
    };

    onNoteChange = (event)=>{
        const note = event.target.value;
        this.setState(()=>({note}));
    };

    onAmountChange = (event)=>{
        const amount = event.target.value;
        if(!amount||amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({amount}));
        }
    };

    onDateChange = (createdAt)=>{
        if(createdAt){
            this.setState(()=>({createdAt}));
        }
    };

    onFocusChange = ({focused})=>{
        this.setState(()=>({calendarFocused:focused}))
    };

    onSubmit = (event)=>{
        event.preventDefault();

        if(!this.state.description || !this.state.amount){
            this.setState(()=>({error: "Please provide desc and amount"}));
        }else{
            this.setState(()=>({error: ""}));
            console.log("submited");
            //calling onSubmit() from props so we can have different actions
            //add and edit for this form, abstracting logic from here to caller - component
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }

    render(){
    return (
            <form className="form" onSubmit = {this.onSubmit}>
            {this.state.error && ( <p className="form__error">{this.state.error}</p>)}
                <input
                    type = "text"
                    placeholder ="Description"
                    autoFocus
                    className = "text-input"
                    value = {this.state.description}
                    onChange ={this.onDescriptionChange}
                />
                <input 
                    type = "text"
                    placeholder = "Amount"
                    className = "text-input"
                    value = {this.state.amount}
                    onChange = {this.onAmountChange}
                />
                
                <SingleDatePicker 
                    date = {this.state.createdAt}
                    onDateChange = {this.onDateChange}
                    focused = {this.state.calendarFocused}
                    onFocusChange = {this.onFocusChange}
                    numberOfMonths = {1}
                    isOutsideRange = {() => false}
                    />
            
                <textarea
                    className = "textarea"
                    placeholder = "Add a note for your expense(optional)"
                    value = {this.state.note}
                    onChange = {this.onNoteChange}
                >
                </textarea>
                <div>
                    <button className="button">Save expense</button>
                </div>
            </form>
    )
}

}