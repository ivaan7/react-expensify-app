import {setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter} from "../../actions/Filters";
import moment from "moment";

test("should generate start date action object", ()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    });
});

test("should generate end date action object", ()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0)
    })
});

test("should generate text filter action object with properties", ()=>{
    const action = setTextFilter("gas");
    expect(action).toEqual({
        type: "TEXT_FILTER",
        text: "gas"
    });
});


test("should generate text filter action object without properties", ()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type: "TEXT_FILTER",
        text: ""
    });
});


test("should generate amount sort action object with properties", ()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT",
    });
});

test("should generate date sort action object with properties", ()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY_DATE",
    });
});