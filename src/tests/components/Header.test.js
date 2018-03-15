import React from "react";
import { shallow } from "enzyme";
import { Header } from "../../components/Header";
//react test renderer


test("should render Header correctly", ()=>{

    const wrapper = shallow(<Header startLogout = {()=>{}}/>);
    
    expect(wrapper).toMatchSnapshot();
    
    //expect(wrapper.find("h1").length).toBe(1);

    //const renderer = new ReactShallowRenderer();
    //renderer.render(<Header />);
    //expect(renderer.getRenderOutput()).toMatchSnapshot();

});

test("should call startLogout on buttoin click",()=>{
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout = {startLogout}/>);
    wrapper.find("button").simulate("click");
    expect(startLogout).toHaveBeenCalled();

});

