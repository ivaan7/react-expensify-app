import getExpensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("should correctly add multiple expenses",()=>{
    const res = getExpensesTotal(expenses);
    expect(res).toBe( 105645);
});


test("should correctly add single expense",()=>{
    const total = getExpensesTotal([expenses[0]]);
    expect(total).toBe(195);
});


test("should return if no expenses", ()=>{
    const res = getExpensesTotal([]);
    expect(res).toBe(0);
});