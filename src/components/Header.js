import React from "react";
import '../css/header.css'

function Header(props) {
    return (
        <header>
            <h1>Ali Celikay</h1>
            {props.children}
        </header>
    );
}

export default Header;
