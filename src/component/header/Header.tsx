import React from "react";
import {Link} from "react-router-dom";

import "./header.scss";

const getGPTime = () => {
    const hoursUTC: number = new Date().getUTCHours();
    const hourFormatted: string = String(hoursUTC).length === 1 ? `0${hoursUTC}` : String(hoursUTC);

    const minutesUTC: number = new Date().getUTCMinutes();
    const minuteFormatted: string = String(minutesUTC).length === 1 ? `0${minutesUTC}` : String(minutesUTC);

    return `GP Time: ${hourFormatted}:${minuteFormatted}`;
}

const Header = () => {
    return (
        <div className="header pt-3 pb-3">
            <div className="header__inner d-flex justify-content-between pl-3 pr-3 align-items-baseline">
                <Link to="/">
                    <h4 className="title">GP Utility</h4>
                </Link>
                <label>{getGPTime()}</label>
            </div>
        </div>
    );
};

export default Header;