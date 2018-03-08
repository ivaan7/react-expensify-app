import React from "react";
import {shallow} from "enzyme";
import {ExpenseListFilters} from "../../components/ExpenseListFilters";
import expenses from "../fixtures/expenses";
import {filters, altFilters} from "../fixtures/filters";
import moment from "moment";

let setTextFilter, sortByDate, sortByAmount,setStartDate,setEndDate,wrapper;

beforeEach(()=>{
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setEndDate = jest.fn();
    setStartDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters 
            filters = {filters}
            setTextFilter = {setTextFilter}
            sortByAmount ={sortByAmount}
            sortByDate ={sortByDate}
            setStartDate = {setStartDate}
            setEndDate = {setEndDate}
        />);
});

test("should render expenselist filter", ()=>{
    expect(wrapper).toMatchSnapshot();
});

test("should render expenselist filter with alt data", ()=>{
    
    //adding different props to this wrappper
    wrapper.setProps({
        filters:altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test("should handle text change", ()=>{
    const value = "rent";
    wrapper.find("input").simulate("change",{
        target:{value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("should sort by date", ()=>{

     //adding different props to this wrappper
     wrapper.setProps({
        filters:altFilters
    });
    const value = "date";
    wrapper.find("select").simulate("change",{
        target:{value }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test("should sort by amount", ()=>{

   const value = "amount";
   wrapper.find("select").simulate("change",{
       target:{value }
   });
   expect(sortByAmount).toHaveBeenCalled();
});

test("should handle date changes", ()=>{

   const startDate = moment(0).add(4, "years");
   const endDate = moment(0).add(8, "years");

   wrapper.find("DateRangePicker").prop("onDatesChange")({
      startDate, endDate
   });
   expect(setStartDate).toHaveBeenLastCalledWith(startDate);
   expect(setEndDate).toHaveBeenLastCalledWith(endDate);

});



test("should handle date focused change", ()=>{

    const calendarFocused = "endDate";
    
    wrapper.find("DateRangePicker").prop("onFocusChange")(calendarFocused);
    expect(wrapper.state("calendarFocused")).toBe(calendarFocused);
 
 });