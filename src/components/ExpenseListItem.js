import React from "react";
import {Link} from "react-router-dom";

const ExpenseListItem = ({ id, description, amount, createdAt})=>(
    <div>
    <Link to={`/edit/${id}`}>{description}</Link>
    {amount} {createdAt}
    </div>
);


export default ExpenseListItem;