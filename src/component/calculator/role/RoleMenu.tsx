import React from 'react';
import {Link} from 'react-router-dom';

import Card from '../../common/Card';

import "./role-menu.scss";

const roles: any[] = [
    {id: 1, name: "Driver", route: "/calculator/roles/driver"},
    {id: 2, name: "Guard", route: "/calculator/roles/guard"},
    {id: 3, name: "Loadout Specialist", route: "/calculator/roles/loadout-specialist"},
    {id: 4, name: "Quartermaster", route: "/calculator/roles/quartermaster"},
    {id: 5, name: "Veteran", route: "/calculator/roles/veteran"}
];

const RoleMenu = () => {
    return (
        <Card title="Select A role">
            <div className="text-center p-4">
                {roles.map((item) =>
                    <Link to={item.route} key={item.id} className="button">
                        <label>{item.name}</label>
                    </Link>)
                }
            </div>
        </Card>
    );
};

export default RoleMenu;
