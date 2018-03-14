import {startAddExpense,addExpense,editExpense,removeExpense, setExpenses, startSetExpenses} from "../../actions/Expenses";
import expenses from "../fixtures/expenses";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/firebase";
import expensesReducer from "../../reducers/expenses";

const createMockStore = configureMockStore([thunk]);

beforeEach(()=>{
    const expenseData ={};
    expenses.forEach(({id,description,note,amount,createdAt})=>{
        expenseData[id] = {description,note,amount,createdAt};
    });
    database.ref("expenses").set(expenseData).then(()=>done());
});


test("should setup remove expense action object", ()=>{
    const action = removeExpense({id: "123abc"});
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    });
});

test("should setup edit expense action object", ()=>{
    const action = editExpense("123abc",
        {description : "desc",
        note:"note",
        amount:24,
        createdAt:"1555"});
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123abc",
        updates:{
        description : "desc",
        note:"note",
        amount:24,
        createdAt:"1555"
        }
    });
});



test("should setup add expense action object with provided values", ()=>{

    const action = addExpense(expenses[2]);

    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense: expenses[2]
    })

});
test("should add expense to db and store",(done)=>{

    const store = createMockStore({});
    const expenseData ={
        description:"Mouse",
        amount:3000,
        note:"the note",
        createdAt: 1000
    };

    store.dispatch(startAddExpense(expenseData)).then(()=>{

        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:"ADD_EXPENSE",
            expense:{
                id:expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });;


});

test("should add expense with defaults to db and store",(done)=>{

    const store = createMockStore({});
    const expenseDataDefault ={
        description:"",
        amount:0,
        note:"",
        createdAt: 0
    };

    store.dispatch(startAddExpense({})).then(()=>{

        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:"ADD_EXPENSE",
            expense:{
                id:expect.any(String),
                ...expenseDataDefault
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseDataDefault);
        done();
    });;

});

test("should setup set expense action object with data", ()=>{
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type:"SET_EXPENSES",
        expenses
    });
});

test("should set expense",()=>{
    const action = {
        type:"SET_EXPENSES",
        expenses: [expenses[1]]
    };

    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[1]]);
});


test("should fetch expenses from firebase", ()=>{
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:"SET_EXPENSES",
            expenses
        });
        done();
    });
});
