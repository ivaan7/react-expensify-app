import React from "react";
import {shallow} from "enzyme";
import {ExpensesSummary} from "../../components/ExpensesSummary";


test("should correctly render Expenses Summary with 1 expense", ()=>{
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test("should correctly render Expenses Summary with multiple expense", ()=>{
    const wrapper = shallow(<ExpensesSummary expensesCount={2} expensesTotal={239} />);
    expect(wrapper).toMatchSnapshot();
});
