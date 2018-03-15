import React from "react";
import {shallow} from "enzyme";
import {EditExpensePage} from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let editExpense,startRemoveExpense,history,wrapper;

beforeEach(()=>{
    editExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = {push:jest.fn()};
    wrapper = shallow(<EditExpensePage editExpense = {editExpense} 
        startRemoveExpense = {startRemoveExpense} history ={history} expense={expenses[2]}/>)
});

test("should render EditExpensePage", ()=>{
    expect(wrapper).toMatchSnapshot();
});

test("should handle edit expense", ()=>{
    wrapper.find("ExpenseForm").prop("onSubmit")(expenses[2]);
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id,expenses[2]);

});

test("should handle remove expense", ()=>{
    wrapper.find("button").simulate("click");
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id:expenses[2].id});

});
