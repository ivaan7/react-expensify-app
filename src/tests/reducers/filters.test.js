import filtersReducer from "../../reducers/filters";
import moment from "moment";


test("should setup default filter values", ()=>{
    const state = filtersReducer(undefined,{type:"@@INIT"});
    expect(state).toEqual({
        text:"",
        sortBy:"date",
        startDate:moment().startOf("month"),
        endDate: moment().endOf("month")
    });
});

test("should sset sort by to amount", ()=>{
    const state = filtersReducer(undefined,{type:"SORT_BY_AMOUNT"});
    expect(state.sortBy).toBe("amount");
});

test("should sset sort by to date", ()=>{

    const currentState = {
        text:"",
        startDate:undefined,
        endDate:undefined,
        sortBy:"amount"
    };

    const action ={type:"SORT_BY_DATE"};

    const state = filtersReducer(currentState,action);
    expect(state.sortBy).toBe("date");
});

test("should set text filter", ()=>{

    const action ={type:"TEXT_FILTER", text: "d"};

    const state = filtersReducer(undefined,action);
    expect(state.text).toBe("d");
});

test("should set start date filter", ()=>{

    const action ={type:"SET_START_DATE", startDate: 0};

    const state = filtersReducer(undefined,action);
    expect(state.startDate).toBe(0);
});


test("should set end date filter", ()=>{

    const action ={type:"SET_END_DATE", endDate: 0};

    const state = filtersReducer(undefined,action);
    expect(state.endDate).toBe(0);
});