import {createStore} from "redux";


//payload is argument provided when method calls,its good to have default
const incrementCount = ({incrementBy = 1} = {})=>({
    type: "INCREMENT",
    incrementBy: incrementBy
});

const decrementCount = ({decrementBy = 1} = {})=>({
    type: "DECREMENT",
    decrementBy
});

const resetCount = ()=>({
    type: "RESET"
});

const setCount = ({count}={})=>({
    type: "SET",
    count
});

//Reducer
//1.Reducers are pure functions -->output is defined by input
//Reducers are not depending on anything outside of function, ande they are 
//not changing anything outside of function
//2.Never change state or action

const countReducer = (state = {count:0}, action)=>{
    
    switch(action.type){
        case "INCREMENT":
            return{
               count: state.count + action.incrementBy
           };
        case "DECREMENT":
           return{
            count: state.count - action.decrementBy
        };
        case "SET":
            return{
                count: action.count
            }
        case "RESET":
            return{
            count:0
        };
        default:
           return state;
        }
};



//argument is current state, added default count as an object
const store = createStore(countReducer);
console.log("hi");

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});

//Action - an object that gets sent to the store

//increment, decrement, reset-->actions

//increment object

//store.dispatch({
//    type:"INCREMENT",
//    incrementBy:5
//});

store.dispatch(incrementCount({incrementBy:5}));

//store.dispatch({
//    type:"RESET"
//});

store.dispatch(resetCount());

store.dispatch(incrementCount());
store.dispatch(decrementCount({decrementBy:32}));
store.dispatch({
    type:"INCREMENT",
    incrementBy: 5
});

//store.dispatch({
//    type:"DECREMENT",
//    decrementBy:10
//});


//store.dispatch({
//    type:"SET",
//    count:404
//});

store.dispatch(setCount({count:404}));

store.dispatch(resetCount());


unsubscribe();


//watching for redux store changes -->store.subscribe
//called every time when data changes
//return value is unsubscribe object which you can call to stop subscription




