import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
function Toolbar() {
    return (
        <div className='toolbar d-flex jus-around'>
            <div><h1>Create product</h1></div>
            <div className="d-flex jus-btw">
                <div className="link" >
                    <Link className="text" to="/home">Home</Link>
                </div>
                <div className="link">
                    <Link className="text" to="/getitem">Product</Link>
                </div>


            </div>
        </div>
    );
}

export default Toolbar;