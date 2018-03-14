//expenses reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [
                ...state,
                action.expense
            ]
        case "REMOVE_EXPENSE":
            return state.filter(({ id }) => {
                return id !== action.id;
            });
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.id === action.id) {
                    //if id op expense exists we are taking that expense
                    //and usping spread operator overiding initial values with
                    //one provided with mathod call
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });
        case "SET_EXPENSES":
         return action.expenses;
        default:
            return state;
    }
};

export default expensesReducer;