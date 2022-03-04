import React, { useState } from "react"
import { Link } from "react-router-dom";

export default ()=>{

    let [toggle, setToggle] = useState(false);

    let setToggleBar=()=>{
        let navCollapse = document.querySelector(".nav-collapse");

        if(toggle == false){
            setToggle(true);
            navCollapse.style.display ="flex";
        }
        else{
            setToggle(false);
            navCollapse.style.display ="none";
        }
    }

    return(
        <header>
            <div className="container">
                <Link to={"/"} className="brand">Food-Shop</Link>
                <i className="fas fa-bars" onClick={setToggleBar}></i>
                <nav className="nav-toggler">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/categories"}>Categories</Link>
                    <a href="#" className="login">Login</a>
                </nav>
            </div>
            <nav className="nav-collapse">
                <Link to={"/"}>Home</Link>
                <Link to={"/categories"}>Categories</Link>
                <a href="#" className="login">Login</a>
            </nav>
        </header>
    );
}