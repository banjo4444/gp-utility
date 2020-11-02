import React from 'react';
import {Link} from 'react-router-dom';

import Card from '../common/Card';

import "./menu.scss";

const menuItems: any[] = [
    {id: 1, name: "Lab hit calculator", route: "/calculator/negative/attack"},
    {id: 2, name: "Steal Calculator", route: "calculator/negative/steal"},
    {id: 3, name: "Train calculator", route: "/calculator/negative/train"},
    {id: 4, name: "Role XP calculator", route: "/calculator/roles"}
];

const Menu = () => {
    return (
        <Card title="What do you want to do?">
            <div className="text-center p-4">
                {menuItems.map((item) =>
                    <Link to={item.route} key={item.id} className="button">
                        <label>{item.name}</label>
                    </Link>)
                }
            </div>
        </Card>
    );
};

export default Menu;
