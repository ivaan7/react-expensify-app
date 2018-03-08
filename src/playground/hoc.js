//hogher order componen -- a component that renders another component
//reuse code
//render hijacking
//prop manipulation
//abstract state

import React from "react";
import ReactDom from "react-dom";

const Info = (props)=>(
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>

);

const withAdminWarning = (WrappedComponent)=>{
    return(props)=>(
        <div>
       {props.isAdmin && <p>Private info</p>}
        <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent)=>{
    return(props)=>(
        <div>
        {props.isAuthenticated ? (<WrappedComponent {...props} />) : (<p>User not Authenticated</p>)}
        </div>
    );
};

const AuthInfo = requireAuthentication(Info);

const AdminInfo = withAdminWarning(Info);

ReactDom.render(<AuthInfo isAuthenticated={false} info="Details" />, document.getElementById("app"));
