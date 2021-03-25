import React from "react";
import './header.css';
import { ReactComponent as LogoBoko } from "../../Assets/logo_boko.svg";


export const Header = () => {

    return(
        <div className="header-box" id="nav">
            <ul>
                <div id="nav-left">
                    <li id="bokoTitle"><LogoBoko /></li>
                    <li><a href="#nav">BokŌ</a></li>
                    <li id="epicerieBio">Épicerie bio</li>
                </div>

                <div id="nav-right">
                <li id="photos"><a href="#photos">Photos</a></li>
                <li id="contact"><a href="#contact">Contact</a></li>
                </div>
            </ul>
        </div>
    );

}