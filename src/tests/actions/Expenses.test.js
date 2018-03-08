import {addExpense,editExpense,removeExpense} from "../../actions/Expenses";

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
    const expenseData = {
        description: "Rent",
        amount: 100600,
        createdAt: 1000,
        note: "rent money"
    };

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense:{
            ...expenseData,
            id: expect.any(String)
        }
    })

});

test("should setup add expense action object without provided values", ()=>{
    const action = addExpense();
    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense:{
            description : "",
            note :"",
            amount :0,
            createdAt : 0, 
            id: expect.any(String)
        }
    })
});

