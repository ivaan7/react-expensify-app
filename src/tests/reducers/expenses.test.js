import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import moment from "moment";

test("should set default state", ()=>{
    const state = expensesReducer(undefined, {type:"@@INIT"});
    expect(state).toEqual([]);
});

test("should remove expense by id", ()=>{
    const action ={
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    };
    const state = expensesReducer(expenses,action);

    expect(state).toEqual([expenses[0],expenses[2]]);
});

test("should not remove expense if id not found", ()=>{
    const action ={
        type: "REMOVE_EXPENSE",
        id: "-1"
    };
    const state = expensesReducer(expenses,action);

    expect(state).toEqual(expenses);
});

test("should add expense", ()=>{
   const newExpense =  {
        id:"4",
        description:"Credit card 2",
        note:"",
        amount: 5500,
        createdAt: moment(0).add(4,"days").valueOf()
        };

    const action ={
        type: "ADD_EXPENSE",
        expense: newExpense
    };
    const state = expensesReducer(expenses,action);

    expect(state).toEqual([expenses[0],expenses[1], expenses[2],newExpense]);
});


test("should edit expense with valid id", ()=>{
 
    const newExpense =  {
        id:"4",
        description:"Credit card 2",
        note:"",
        amount: 5500,
        createdAt: moment(0).add(4,"days").valueOf()
        };

     const action ={
         type: "EDIT_EXPENSE",
         id: expenses[0].id,
         updates: newExpense
     };
     const state = expensesReducer(expenses,action);
 
     expect(state).toEqual([newExpense, expenses[1], expenses[2]]);
 });


test("should not edit expense with invalid id", ()=>{
 
    const newExpense =  {
        id:"4",
        description:"Credit card 2",
        note:"",
        amount: 5500,
        createdAt: moment(0).add(4,"days").valueOf()
        };

     const action ={
         type: "EDIT_EXPENSE",
         id: "-1",
         updates: newExpense
     };
     const state = expensesReducer(expenses,action);
 
     expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
 });